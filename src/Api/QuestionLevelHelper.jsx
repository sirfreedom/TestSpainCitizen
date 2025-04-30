import { FillAnonimousFromParameter } from './BaseHelper';


export const ListQuestionLevels = async () =>
{
let data;
let tempdata;
let url = 'api/QuestionLevel';
const param = [ { clave: 'IdDependency', valor: 1 } ];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.questionlevels;
}
catch(ex)
{
    console.error('Error en Question levels ',ex);
}
return data;
}
