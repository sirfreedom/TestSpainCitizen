# Etapa 1: Construcción (Build)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor de Producción
FROM nginx:stable-alpine
# Copiamos los archivos compilados desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html
# Exponemos el puerto 8081
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]