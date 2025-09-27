import { Fill } from './BaseHelper';


export const getToken = async () => 
{
    let data;
    try 
    {
        data = await Fill('Account/login',{ user: 'admin', pass: '1234' },'POST');
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
let UrlGet = 'api/File';
let param = [ { IdDependency: 1 } ];
try 
{
    debugger;
    data = await Fill(UrlGet,param,'GET');
}
catch(ex)
{
    console.error('Error',ex);
}
    return data.imageList;
}

export const PutTestMethod = async (token) =>
{
let data;
let UrlPut = 'api/Setting';
const param = { "tittle": "manzanaPut" } ;
try 
{
    data = await Fill(UrlPut,param,'PUT',token);
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const PostTestMethod = async (token) =>
{
let data;
let UrlPost = 'api/Setting';
const param = { "tittle": "manzanaPost" } ;
try 
{
    data = await Fill(UrlPost,param,'POST',token);
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const DeleteTestMethod = async (token) =>
{
let data;
let UrlDelete = 'api/Setting';
const param = [ { "Id" : 234 } ];
try 
{
    data = await Fill(UrlDelete,param,'DELETE',token);
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
    tempdata = await Fill(UrlPatch,param,'PATCH');
    data = tempdata;
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}
