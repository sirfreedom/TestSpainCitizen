import { FillAnonimousFromParameter } from './BaseHelper';

export const getSetting = async () =>
{
let data;
let tempdata;
let url = 'api/Setting';
const param = [ { clave: 'IdDependency', valor: 1 } ];
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
