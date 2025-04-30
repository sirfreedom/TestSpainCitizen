

function toQueryString(params) 
{
return params.map(({ clave, valor }) => 
  { const valorStr = Array.isArray(valor) ? valor.join(",") : valor; 
    return encodeURIComponent(clave) + "=" + encodeURIComponent(valorStr);
  }).join("&");
}


export const FillWithLoginFromBody = async (Url,DataRequest,Method,Token ) => 
{
  let data = [];
  let response;
  try 
  {
  response = await fetch(Url, {
  method: Method,
  headers: 
  { 
  'Content-Type': 'application/json',
   Authorization: 'Bearer ' + Token 
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
    console.error('Error en getQuestion',ex);
  }
  return data;
}
    

export const FillAnonimousFromBody = async (Url,DataRequest,Method ) => 
{
  let data = [];
  let response;
  try 
  {
  response = await fetch(Url, {
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
    console.error('Error en getQuestion',ex);
  }
  return data;
}


export const getToken = async (user, pass) => 
{
let data = [];
let token = '';
let response;
try 
{
response = await fetch('https://sircode.somee.com/Account/login', {
method: 'POST',
headers: 
{
'Content-Type': 'application/json',
},
credentials: 'include',
body: JSON.stringify({ user: user, pass: pass, }),
});
    
if (response.status === 200)
{
data = await response.json();
token = data.jwtToken;
}
    
} catch (ex) 
{
console.error('Error en getQuestion',ex);
}
return token;
}
    
    
export const getCredencials = async (Token) => 
{
let data;
try 
{
data = await fetch('https://sircode.somee.com/api/Values/jwt', 
{
headers: { Authorization: 'Bearer ' + Token } }).then(response => 
{
if (response.status !== 200) 
{
throw new Error('Network response was not ok');
}
return response.json();
});
    
} 
catch (ex) 
{
console.error('Error en getQuestion',ex);
}
return data;
}
      


export const FillAnonimousFromParameter = async (Url, lParam) =>
{
let response;
let data = [];
let Parameters;
try 
{
Parameters = toQueryString(lParam);
response = await fetch(Url + '?' + Parameters );
data = await response.json().catch(err => console.log(err));
}
catch(ex)
{
  console.error('Error en get QuestionLevel',ex);
}
return data;
}


   
