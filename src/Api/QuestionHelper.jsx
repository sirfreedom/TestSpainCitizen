import { FillAnonimousFromParameter } from './BaseHelper';


export const ListQuestion = async (codLevel) =>
{
let data;
let tempdata;
let url = 'api/Question';
const param = [ { "IdDependency": 1 }, { "CodLevel": 1 } ];
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
