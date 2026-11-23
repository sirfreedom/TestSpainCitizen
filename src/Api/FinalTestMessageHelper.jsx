import { Fill } from './BaseHelper';
import { IDAPP } from './BaseHelper';


export const ListFinalTestMessage = async () =>
{
let data;
let tempdata = [];
let url = 'api/FinalTestMessage';
const param = [ { "IdDependency": IDAPP } ];
try 
{
    tempdata = await Fill(url,param,'GET','','P');
    data = await tempdata;
}
catch(ex)
{
    console.error('Error en get QuestionLevel',ex);
}
    return data;
}

