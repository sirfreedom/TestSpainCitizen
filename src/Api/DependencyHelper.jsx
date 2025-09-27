import { Fill } from './BaseHelper';


export const ListDependency = async () =>
{
let data;
let tempdata;
let url = 'api/Dependency/List';
const param = [];
try 
{
    debugger;
    tempdata = await Fill(url,param,'GET');
    data = await tempdata.dependencies;
}
catch(ex)
{
    console.error('Error en list dependency',ex);
}
return data;
}


