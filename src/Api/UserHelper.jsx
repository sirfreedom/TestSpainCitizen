import { Fill } from './BaseHelper';


//Token, ExpirationYear, ExpirationMonth, ExpirationDay,ExpirationHour, ExpirationMinutes
export const getToken = async (User, Pass) => 
{
    let data;
    try 
    {
        data = await Fill('Account/login',{ user: User, pass: Pass },'POST');
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
        data = Fill('api/Values/jwt',[],'POST',Token);
    } 
    catch (ex) 
    {
        console.error('Error en getTest',ex);
    }
    return data;
}
