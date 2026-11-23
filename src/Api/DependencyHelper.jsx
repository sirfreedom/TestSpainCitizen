import { Fill } from './BaseHelper';
import { IDAPP } from './BaseHelper';


export const ListDependency = async () =>
{
let data;
let tempdata;
let url = 'api/Dependency/List';
const param = [];
try 
{
    tempdata = await Fill(url,param,'GET','','P');
    data = await tempdata;
}
catch(ex)
{
    console.error('Error en list dependency',ex);
}
return data;
}


