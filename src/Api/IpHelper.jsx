


export async function getIP() 
{
  let url = 'https://api.ipify.org?format=json';
  let ip;
  try 
  {
    const response = await fetch(url);
    if (!response.ok) 
    {
      throw new Error('Error en la respuesta de la API');
    }
    const data = await response.json();
    ip = data.ip;
  } 
  catch (ex) 
  {
    console.error('Error obteniendo IP:', ex);
  }
  return ip;
}

