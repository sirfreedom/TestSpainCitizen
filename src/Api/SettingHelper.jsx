import { FillAnonimousFromParameter } from './BaseHelper';


export const getSetting = async () =>
{
let data;
let tempdata;
let url = 'api/Setting/Get';
const param = [ { "IdDependency": 1 } ];
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