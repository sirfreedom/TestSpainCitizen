import { Fill } from './BaseHelper';


export const ListQuestion = async (codLevel) =>
{
let data;
let tempdata;
let url = 'api/Question';
const param = [ { "IdDependency": 1 }, { "CodLevel": 1 } ];
try 
{
    tempdata = await Fill(url,param,'GET');
    data = await tempdata.questions;
}
catch(ex)
{
    console.error('Error en Question ',ex);
}
return data;
}
