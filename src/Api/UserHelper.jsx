
import { FillAnonimousFromBody, FillWithLoginFromBody } from './BaseHelper';


export const getToken = async (User, Pass) => 
{
    let data;
    try 
    {
        data = FillAnonimousFromBody('Account/login',{ user: User, pass: Pass },'POST');
    } 
    catch (ex) 
    {
    console.error('Error en get token',ex);
    }
    return data.jwtToken;
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
    console.error('Error en getQuestion',ex);
    }
    return data;
}