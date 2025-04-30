
const BASEURL = 'https://sircode.somee.com/';

function toQueryString(params) 
{
return params.map(({ clave, valor }) => 
  { const valorStr = Array.isArray(valor) ? valor.join(',') : valor; 
    return encodeURIComponent(clave) + '=' + encodeURIComponent(valorStr);
  }).join('&');
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
  headers: 
  { 
  'Content-Type': 'application/json',  Authorization: 'Bearer ' + Token   
  },
  credentials: 'include',
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
  headers: 
  {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
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
export const FillAnonimousFromParameter = async (Url, lParam) =>
{
let response;
let data = [];
let Parameters;
try 
{
Parameters = toQueryString(lParam);
response = await fetch(BASEURL + Url + '?' + Parameters );
data = await response.json().catch(err => console.log(err));
}
catch(ex)
{
  console.error('Error en get QuestionLevel',ex);
}
return data;
}


   
