import { FillAnonimousFromParameter } from './BaseHelper';


export const ListDependency = async () =>
{
let data;
let tempdata;
let url = 'api/Dependency/List';
const param = [];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.dependencies;
}
catch(ex)
{
    console.error('Error en list dependency',ex);
}
return data;
}


