import { FillAnonimousFromParameter } from './BaseHelper';




export const ListFinalTestMessage = async () =>
{
let data;
let tempdata = [];
let url = "https://sircode.somee.com/api/FinalTestMessage";
const param = [ { clave: "IdDependency", valor: 1 } ];
try 
{
    tempdata = FillAnonimousFromParameter(url,param);
    data = tempdata.finaltestmessage;
}
catch(ex){
console.error('Error en get QuestionLevel',ex);
}
return data;
}

