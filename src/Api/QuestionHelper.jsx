import { Fill } from './BaseHelper';
import { IDAPP } from './BaseHelper';


export const ListQuestion = async (codlevel) =>
{
let data;
let tempdata;
let url = 'api/Question/List';
const lparam =  [{ "iddependency": IDAPP, "codlevel": codlevel }] ;
try 
{
    tempdata = await Fill(url,lparam,'GET','','P');
    data = await tempdata;
}
catch(ex)
{
    console.error('Error en Question ',ex);
}
return data;
}
