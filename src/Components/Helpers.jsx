export const getQuestionLevels = async () =>
{
  let url = 'https://sirfreedom.somee.com/api/QuestionLevel?IdDependency=1';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.questionlevels;
  }
  catch(ex){
    console.error('Error en get QuestionLevel',ex);
  }
  return data;
}


export const getMessagesFinalTest = async () =>
{
  let url = 'https://sirfreedom.somee.com/api/FinalTestMessage?IdDependency=1';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.finaltestmessage;
  }
  catch(ex){
    console.error('Error en getMessageFinal',ex);
  }
  return data;
}

export const getSetting = async () =>
{
  let url = 'https://sirfreedom.somee.com/api/Setting?IdDependency=1';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.setting;
    debugger
  }
  catch(ex){
    console.error('Error en getSetting',ex);
  }
  return data;
}


export const getQuestions = async (codlevel) => 
{
  let url = 'https://sirfreedom.somee.com/api/Question?IdDependency=1&CodLevel='+ codlevel;
  let res;
  let data = [];
  let tempdata = [];
  try {

  
  res = await fetch(url);
  tempdata = await res.json().catch(err => console.log(err));
  data = tempdata.questions; 

  }
  catch(ex){
    console.error('Error en getQuestion',ex);
  }
  return data;
}





