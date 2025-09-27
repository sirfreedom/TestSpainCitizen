import { Fill } from './BaseHelper';


export const ListFinalTestMessage = async () =>
{
let data;
let tempdata = [];
let url = 'api/FinalTestMessage';
const param = [ { "IdDependency": 1 } ];
try 
{
    tempdata = await Fill(url,param,'GET');
    data = await tempdata.finaltestmessage;
}
catch(ex)
{
    console.error('Error en get QuestionLevel',ex);
}
    return data;
}

