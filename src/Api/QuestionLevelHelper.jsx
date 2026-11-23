import { Fill } from './BaseHelper';
import { IDAPP } from './BaseHelper';


export const ListQuestionLevels = async () =>
{
let data;
let tempdata;
let url = 'api/QuestionLevel';
const param = [ { "IdDependency": IDAPP } ];
try 
{
    tempdata = await Fill(url,param,'GET','','P');
    data = await tempdata;
}
catch(ex)
{
    console.error('Error en Question levels ',ex);
}
return data;
}
