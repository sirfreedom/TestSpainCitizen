
//const BASEURL = 'https://sirfreedom.somee.com/';
const BASEURL = 'https://localhost:54044/';


function toQueryString(params) {
  if (!Array.isArray(params) || params.length === 0) return '';
  const obj = params[0];
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}


export const FillWithLoginFromBody = async (Url, DataRequest, Method, Token) => {
  let data = [];
  let response;
  try {
    response = await fetch(BASEURL + Url,
      {
        method: Method,
        credentials: 'include',
        headers:
        {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + Token
        },
        body: JSON.stringify(DataRequest)
      });

    if (response.ok) {
      data = await response.json();
    }

  }
  catch (ex) {
    console.error('Error en FillWithLoginFromBody', ex);
  }
  return data;
}



export const FillAnonimousFromBody = async (Url, DataRequest, Method) => {
  let data = [];
  let response;
  try {
    response = await fetch(BASEURL + Url, {
      method: Method,
      credentials: 'include',
      headers:
      {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DataRequest)
    });

    if (response.ok) {
      data = await response.json();
    }

  } catch (ex) {
    console.error('Error en FillAnonimousFromBody', ex);
  }
  return data;
}


/*
  const param = [ { clave: "IdDependency", valor: 1 } ];
*/
export const FillAnonimousFromParameter = async (Url, lParam, Method) => {
  let response;
  let data = [];
  let Parameters;
  try {
    Parameters = toQueryString(lParam);
    response = await fetch(BASEURL + Url + '?' + Parameters,
      {
        method: Method,
        credentials: 'include',
        headers:
          { 'Content-Type': 'application/json', }
      });

    if (response.ok) {
      data = await response.json();
    }


  }
  catch (ex) {
    console.error('Error Fill Anonimous From Parameter', ex);
  }
  return data;
};


export const FillWithLoginFromParameter = async (Url, lParam, Method, Token) => {
  let response;
  let data = [];
  let Parameters;
  try {
    Parameters = toQueryString(lParam);
    response = await fetch(BASEURL + Url + '?' + Parameters,
      {
        method: Method,
        credentials: 'include',
        headers:
        {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + Token
        }
      });

     if (response.ok) {
      data = await response.json();
    }

  }
  catch (ex) {
    console.error('Error Fill With Login From Parameter', ex);
  }
  return data;
};


export const EmptyAllProperties = (obj) => {
  const objVaciado = {};

  for (const key in obj) {
    
    if (obj.hasOwnProperty(key)) 
    {
        objVaciado[key] = null;
    }
  }
  return objVaciado;
}

export const ChangePropertyValue = (obj, propiedad, nuevoValor) => {
   
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('El primer argumento debe ser un objeto válido.');
  }
  if (typeof propiedad !== 'string') {
    throw new Error('La propiedad debe ser una cadena.');
  }
  return {
    ...obj,
    [propiedad]: nuevoValor
  };
};


export const createDate = (year, month, day, hour, minute) => {
  var fecha;
  try {

    if (
      typeof year !== 'number' ||
      typeof month !== 'number' ||
      typeof day !== 'number' ||
      typeof hour !== 'number' ||
      typeof minute !== 'number'
    ) {
      throw new Error('Todos los parámetros deben ser números');
    }
    // Ajustamos el mes (JavaScript usa 0-11)
    const monthIndex = month - 1;

    // Creamos el objeto Date
    fecha = new Date(year, monthIndex, day, hour, minute);

    // Verificamos si la fecha es válida
    if (isNaN(fecha.getTime())) {
      throw new Error('Fecha inválida');
    }

    // Verificamos que los valores ingresados coincidan con los de la fecha creada
    // (por si JavaScript ajustó automáticamente valores fuera de rango)
    if (
      fecha.getFullYear() !== year ||
      fecha.getMonth() !== monthIndex ||
      fecha.getDate() !== day ||
      fecha.getHours() !== hour ||
      fecha.getMinutes() !== minute
    ) {
      throw new Error('Los valores proporcionados no corresponden a una fecha válida');
    }

  }
  catch (e) {
    throw e;
  }
  return fecha;
}