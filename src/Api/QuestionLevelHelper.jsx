import { FillAnonimousFromParameter } from './BaseHelper';



export const ListQuestionLevels = async () =>
{
let data;
let tempdata;
let url = "https://sircode.somee.com/api/QuestionLevel";
const param = [ { clave: "IdDependency", valor: 1 } ];
try 
{
    tempdata = FillAnonimousFromParameter(url,param);
    data = tempdata;
}
catch(ex)
{
    console.error('Error en Question levels ',ex);
}
return data;
}
