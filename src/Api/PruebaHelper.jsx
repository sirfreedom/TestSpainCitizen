import { FillAnonimousFromBody } from './BaseHelper';
import { FillAnonimousFromParameter } from './BaseHelper';
import { FillWithLoginFromBody } from './BaseHelper';


export const getToken = async () => 
{
    let data;
    try 
    {
        data = await FillAnonimousFromBody('Account/login',{ user: 'admin', pass: '1234' },'POST');
    } 
    catch (ex) 
    {
    console.error('Error en get token',ex);
    }
    return data.jwtToken;
}


export const GetTestMethod = async () =>
{
let data;
let tempdata = [];
let UrlGet = 'api/Setting';
let param = [ { IdDependency: 1 } ];
try 
{
    data = await FillAnonimousFromParameter(UrlGet,param,'GET');
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const PutTestMethod = async (token) =>
{
let data;
let UrlPut = 'api/Setting';
const param = { "tittle": "manzanaPut" } ;
let sLogin;
try 
{
    data = await FillWithLoginFromBody(UrlPut,param,'PUT',token);
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const PostTestMethod = async () =>
{
let data;
let tempdata = [];
let UrlPost = 'api/Setting';
const param = { "tittle": "manzanaPost" } ;
try 
{
    tempdata = await FillAnonimousFromBody(UrlPost,param,'POST');
    data = tempdata;
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const DeleteTestMethod = async () =>
{
let data;
let UrlDelete = 'api/Setting';
const param = [ { "Id" : 234 } ];
try 
{
    data = await FillAnonimousFromParameter(UrlDelete,param,'DELETE');
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const PatchTestMethod = async () =>
{
let data;
let tempdata = [];
let UrlPatch = 'api/Values/PatchTest';
const param = [ { id: 1, descripcion: 'manzana' } ];
try 
{
    tempdata = await FillAnonimousFromBody(UrlPatch,param,'PATCH');
    data = tempdata;
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}
