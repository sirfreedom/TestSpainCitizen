import { Fill } from './BaseHelper';


export const getByDependency = async (id) =>
{
let data;
let tempdata;
let url = 'api/Setting/GetByDependency';
let param = [ { "IdDependency": id } ];
try 
{
    tempdata = await Fill(url,param,'GET');
    data = await tempdata.setting
}
catch(ex)
{ 
    console.error('Error en get Setting',ex);
}
return data;
}


export const FindSetting = async () =>
{
let data;
let tempdata;
let url = 'api/Setting/Find';
const param = [];
try 
{
    tempdata = await Fill(url,param,'GET');
    data = await tempdata.listsetting
}
catch(ex)
{
    console.error('Error en get Setting',ex);
}
return data;
}

export const UpdateSetting = async (Token,id,iddependency,title,questionperpage,correctanswers,subtitle,instruction,downloadtitle,downloadlink,preinstructiontitle,preinstruction) => {
    let data;
    let url = 'api/Setting/Update';
    const method = 'PUT';
    let param =   
    {  
    "id": id 
    ,"iddependency": iddependency
    ,"title": title  
    ,"questionperpage": questionperpage  
    ,"correctanswers": correctanswers 
    ,"subtitle": subtitle
    ,"instruction": instruction
    ,"downloadtitle": downloadtitle
    ,"downloadlink": downloadlink
    ,"preinstructiontitle": preinstructiontitle
    ,"preinstruction": preinstruction
    };
try 
{
    data = await Fill(url,param,method,Token);
}
catch(ex)
{
    console.error('Error en Update Setting',ex);
}
return data;
}

export const InsertSetting = async (Token,iddependency,title,questionperpage,correctanswers,subtitle,instruction,downloadtitle,downloadlink,preinstructiontitle,preinstruction) => {
    let data;
    let url = 'api/Setting/Insert';
    const method = 'POST';
    let param = 
     { 
    "iddependency": iddependency
    ,"title": title  
    ,"questionperpage": questionperpage  
    ,"correctanswers": correctanswers 
    ,"subtitle": subtitle
    ,"instruction": instruction
    ,"downloadtitle": downloadtitle
    ,"downloadlink": downloadlink
    ,"preinstructiontitle": preinstructiontitle
    ,"preinstruction": preinstruction
    };
try 
{
    data = await Fill(url,param,method,Token);
}
catch(ex)
{
    console.error('Error en Insert Setting',ex);
}
return data;
}