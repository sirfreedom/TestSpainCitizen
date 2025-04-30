import { FillAnonimousFromParameter } from './BaseHelper';



export const getSetting = async () =>
{
let data;
let tempdata;
let url = "https://sircode.somee.com/api/Setting";
const param = [ { clave: "IdDependency", valor: 1 } ];
try 
{
    tempdata = FillAnonimousFromParameter(url,param);
    data = tempdata;
}
catch(ex)
{
    console.error('Error en get Setting',ex);
}
return data;
}
