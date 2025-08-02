import { FillAnonimousFromBody, FillWithLoginFromBody } from './BaseHelper';



//Token, ExpirationYear, ExpirationMonth, ExpirationDay,ExpirationHour, ExpirationMinutes
export const getToken = async (User, Pass) => 
{
    let data;
    try 
    {
        data = await FillAnonimousFromBody('Account/login',{ user: User, pass: Pass },'POST');
        
  //const fechaConOffset = ahora.toISOString(); // Convertir a cadena ISO

  //npm localStorage.setItem('fechaConOffset', fechaConOffset);


    } 
    catch (ex) 
    {
        console.error('Error en gettoken',ex);
    }
    return data;
}


        
export const getTest = async (Token) => 
{
    let data;
    try 
    {
        data = FillWithLoginFromBody('api/Values/jwt',[],'POST',Token);
    } 
    catch (ex) 
    {
        console.error('Error en getTest',ex);
    }
    return data;
}
