
//const BASEURL = 'https://sirfreedom.somee.com/';
const BASEURL = 'https://localhost:54044/';


function toQueryString(params) 
{
  if (!Array.isArray(params) || params.length === 0) return '';
  const obj = params[0];
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

function Manzana(params) {
  let sReturn = '';
  try {
    if (Array.isArray(params)) 
      {
      sReturn = params.map(obj => 
        Object.entries(obj)
          .map(([key, value]) => 
            encodeURIComponent(key) + '=' + encodeURIComponent(Array.isArray(value) ? value.join(',') : value)
          ).join('&')
      ).join('&');
    } else {
      sReturn = '';
    }
  } catch (ex) {
    console.error('Error en toQueryString', ex);
  }
  console.log(sReturn);
  return sReturn;
}


export const FillWithLoginFromBody = async (Url,DataRequest,Method,Token ) => 
{
  let data = [];
  let response;
  try 
  {
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

    if (response.status === 200)
    {
      data = await response.json();
    }
  } 
  catch (ex) 
  {
    console.error('Error en FillWithLoginFromBody',ex);
  }
  return data;
}
    


export const FillAnonimousFromBody = async (Url,DataRequest,Method ) => 
{
  let data = [];
  let response;
  try 
  {
  response = await fetch(BASEURL + Url, {
  method: Method,
  credentials: 'include',
  headers: 
  {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(DataRequest)
  });
    
  if (response.status === 200)
  {
    data = await response.json();
  }
    
  } catch (ex) 
  {
    console.error('Error en FillAnonimousFromBody',ex);
  }
  return data;
}


/*
  const param = [ { clave: "IdDependency", valor: 1 } ];
*/
export const FillAnonimousFromParameter = async (Url,lParam,Method) =>
{
let response;
let data = [];
let Parameters;
try 
{
 Parameters = toQueryString(lParam);
 response = await fetch(BASEURL + Url + '?' + Parameters, 
{
  method: Method,
  credentials: 'include',
  headers: 
  { 'Content-Type': 'application/json',  }
});
data = await response.json().catch(err => console.log(err));
}
catch(ex)
{
  console.error('Error Fill Anonimous From Parameter',ex);
}
return data;
};



export const FillWithLoginFromParameter = async (Url,lParam,Method,Token) =>
{
let response;
let data = [];
let Parameters;
try 
{
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
data = await response.json().catch(err => console.log(err));
}
catch(ex)
{
  console.error('Error Fill With Login From Parameter',ex);
}
return data;
};
   
