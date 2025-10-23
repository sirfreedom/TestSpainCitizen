import { Fill } from './BaseHelper';



export const InsertExamenResult = async (iddependency,idquestionlevel,idusuario,iphost,respuestas,total) => {
    let url = 'api/ExamResult/Insert';
    const method = 'POST';
    let param = 
     { 
    "idDependency": iddependency
    ,"idQuestionLevel": idquestionlevel
    ,"idUsuario": idusuario
    ,"ipHost": iphost
    ,"respuestas": respuestas
    ,"total": total
    };
try 
{
    await Fill(url,param,method);
}
catch(ex) 
{
    console.error('Error en Insert ExamenResult',ex);
}
return;
}