import { FillAnonimousFromParameter } from './BaseHelper';


export const ListQuestion = async (codLevel) =>
{
let data;
let tempdata;
let url = "https://sircode.somee.com/api/Question";
const param = [ { clave: "IdDependency", valor: 1 }, { clave: "CodLevel", valor: codLevel } ];
try 
{
    tempdata = FillAnonimousFromParameter(url,param);
    data = tempdata;
}
catch(ex)
{
    console.error('Error en Question ',ex);
}
return data;
}
