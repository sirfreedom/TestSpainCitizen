import { FillAnonimousFromBody } from './BaseHelper';
import { FillAnonimousFromParameter } from './BaseHelper';

export const GetTestMethod = async () =>
{
let data;
let tempdata = [];
let param = '';
let UrlGet = 'api/Values';
try 
{
    tempdata = await FillAnonimousFromParameter(UrlGet,param,'GET');
    data = tempdata;
}
catch(ex)
{
    console.error('Error',ex);
}
    return data;
}

export const PutTestMethod = async () =>
{
let data;
let tempdata = [];
let UrlPut = 'api/Values';
const param = [ { id: 1, descripcion: 'manzana' } ];
try 
{
    tempdata = await FillAnonimousFromBody(UrlPut,param,'PUT');
    data = tempdata;
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
let UrlPost = 'api/Values/PostTest1';
const param = [ { id: 1, descripcion: 'manzana' } ];
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
let tempdata = [];
let UrlDelete = 'api/Values/DeleteTest1';
const param = [ { id: 1 } ];
try 
{
    tempdata = await FillAnonimousFromParameter(UrlDelete,param,'DELETE');
    data = tempdata;
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
let UrlPatch = 'api/Values/PatchTest1';
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
