



export const FillWithLogin = async (Url,DataRequest,Method,Token ) => 
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
        
            if (response.status == 200)
            {
              data = await response.json();
            }
        
        } catch (ex) 
        {
          console.error('Error en getQuestion',ex);
        }
        return data;
    }
    

export const FillAnonimous = async (Url,DataRequest,Method,token ) => 
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
    
        if (response.status == 200)
        {
          data = await response.json();
        }
    
    } catch (ex) 
    {
      console.error('Error en getQuestion',ex);
    }
    return data;
}


export const getJasoWebToken = async (user, pass) => 
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
          body: JSON.stringify({
            user: user,
            pass: pass,
          }),
        });
    
        if (response.status == 200)
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
    
    
    export const getCredencials = async (token) => 
      {
        let data;
        try 
        {
          data = await fetch('https://sircode.somee.com/api/Values/jwt', 
          {
            headers: { Authorization: 'Bearer ' + token }
          }).then(response => 
          {
            if (response.status != 200) 
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