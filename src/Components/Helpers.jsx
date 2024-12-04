

export const getQuestionLevels = async () =>
{
  let url = 'http://sirfreedom.somee.com/api/QuestionLevel?IdDependency=1';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.questionLevels;
  }
  catch(ex){
    console.log(ex);
  }
  return data;
}


export const getMessagesFinalTest = async () =>
{
  let url = 'http://sirfreedom.somee.com/api/FinalTestMessage?IdDependency=1';
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
    console.log(ex);
  }
  return data;
}




export const getSetting = async () => {
  const url = 'http://sirfreedom.somee.com/api/Setting?IdDependency=1';
  let data = [];

  try {
    const res = await fetch(url);

    // Verifica si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(`Error en la red: ${res.status} ${res.statusText}`);
    }

    const tempdata = await res.json();
    
    // Asegúrate de que 'setting' exista en la respuesta
    if (tempdata && tempdata.setting) {
      data = tempdata.setting;
    } else {
      console.warn('La propiedad "setting" no se encontró en la respuesta');
    }
  } catch (ex) {
    console.error('Error al obtener la configuración:', ex);
  }

  return data;
};


export const getSetting1 = async () =>
{
  let url = 'http://sirfreedom.somee.com/api/Setting?IdDependency=1';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.setting;
  }
  catch(ex){
    console.log(ex);
  }
  return data;
}





export const getQuestions = async (codlevel) => 
{
  let url = 'http://sirfreedom.somee.com/api/Question?IdDependency=1&CodLevel='+ codlevel;
  let res;
  let data = [];
  let tempdata = [];
  try {

  debugger;
  res = await fetch(url);
  tempdata = await res.json().catch(err => console.log(err));
  data = tempdata.questions; 

  }
  catch(ex){
    console.log(ex);
  }
  return data;
}





