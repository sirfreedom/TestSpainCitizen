import { FillAnonimousFromParameter } from './BaseHelper';


export const getByDependency = async (id) =>
{
let data;
let tempdata;
let url = 'api/Setting/GetByDependency';
const param = [ { "IdDependency": id } ];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.setting
}
catch(ex)
{
    console.error('Error en get Setting',ex);
}
return data;
}


export const get = async (id) =>
{
let data;
let tempdata;
let url = 'api/Setting/Get';
const param = [ { "Id": id } ];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.setting
}
catch(ex)
{
    console.error('Error en get Setting',ex);
}
return data;
}


export const FindSetting = async () =>
{
let data;
let tempdata;
let url = 'api/Setting/Find';
const param = [];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.listsetting
}
catch(ex)
{
    console.error('Error en get Setting',ex);
}
return data;
}