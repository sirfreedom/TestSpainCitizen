import { FillAnonimousFromParameter } from './BaseHelper';
import { FillWithLoginFromBody } from './BaseHelper'

export const getByDependency = async (id) =>
{
let data;
let tempdata;
let url = 'api/Setting/GetByDependency';
let param = [ { "IdDependency": id } ];
try 
{
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.setting
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
    tempdata = await FillAnonimousFromParameter(url,param);
    data = tempdata.listsetting
}
catch(ex)
{
    console.error('Error en get Setting',ex);
}
return data;
}

export const UpdateSetting = async (Token,id,cod,iddependency,tittle,questionperpage,correctanswers,subtittle,instruction,downloadtittle,downloadlink,preinstructiontittle,preinstruction) => {
    let data;
    let url = 'api/Setting/Update';
    const method = 'PUT';
    let param =   
    {  
    "id": id 
    ,"iddependency": iddependency
    ,"cod" : cod
    ,"tittle": tittle  
    ,"questionperpage": questionperpage  
    ,"correctanswers": correctanswers 
    ,"subtittle": subtittle
    ,"instruction": instruction
    ,"downloadtittle": downloadtittle
    ,"downloadlink": downloadlink
    ,"preinstructiontittle": preinstructiontittle
    ,"preinstruction": preinstruction
    };
try 
{
    data = await FillWithLoginFromBody(url,param,method,Token);
}
catch(ex)
{
    console.error('Error en Update Setting',ex);
}
return data;
}

export const InsertSetting = async (Token,tittle,questionperpage,correctanswers,subtittle,instruction,downloadtittle,downloadlink,preinstructiontittle,preinstruction) => {
    let data;
    let url = 'api/Setting/Insert';
    const method = 'POST';
    let param = 
    [ { 
    "tittle": tittle,
    "questionperpage": questionperpage,
    "correctanswers": correctanswers,
    "subtittle": subtittle,
    "instruction": instruction,
    "downloadtittle": downloadtittle,
    "downloadlink": downloadlink,
    "preinstructiontittle": preinstructiontittle,
    "preinstruction": preinstruction
    } ];
try 
{
    data = await FillWithLoginFromBody(url,param,method,Token);
}
catch(ex)
{
    console.error('Error en Insert Setting',ex);
}
return data;
}