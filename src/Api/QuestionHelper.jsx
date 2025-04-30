import { FillAnonimousFromParameter } from './BaseHelper';


export const ListQuestion = async (codLevel) =>
{
let data;
let tempdata;
let url = 'api/Question';
const param = [ { clave: 'IdDependency', valor: 1 }, { clave: 'CodLevel', valor: codLevel } ];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.questions;
}
catch(ex)
{
    console.error('Error en Question ',ex);
}
return data;
}
