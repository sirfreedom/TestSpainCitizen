# Etapa 1: Construcción
FROM node:18-alpine AS build
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- PASO CLAVE: Verificamos qué carpeta se creó ---
# Este comando lista las carpetas para que si falla, veas en el log qué pasó
RUN ls -la /home/app

# Etapa 2: Producción
FROM nginx:stable-alpine

# 1. Borramos todo lo que haya en nginx
RUN rm -rf /usr/share/nginx/html/*

# 2. TRUCO DEFINITIVO: 
# Copiamos TODO lo que esté en /home/app. 
# Luego, dentro del contenedor, moveremos lo que sirva.
COPY --from=build /home/app /usr/share/nginx/html/temp_folders

# 3. Movemos el contenido de 'dist' O 'build' a la raíz de Nginx
# Esto evita que el comando COPY falle si el nombre es distinto
RUN if [ -d "/usr/share/nginx/html/temp_folders/dist" ]; then \
        mv /usr/share/nginx/html/temp_folders/dist/* /usr/share/nginx/html/; \
    elif [ -d "/usr/share/nginx/html/temp_folders/build" ]; then \
        mv /usr/share/nginx/html/temp_folders/build/* /usr/share/nginx/html/; \
    fi && rm -rf /usr/share/nginx/html/temp_folders

# 4. Ajustamos el puerto 8081 que tú quieres
RUN sed -i 's/listen       80;/listen       8081;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]