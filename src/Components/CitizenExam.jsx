import '../Css/App.css';
import '../Css/bootstrap.min.css';
import React, { useState,useEffect } from "react";
import {getQuestions} from './Helpers';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CitizenExam = () => {
    
    const [Test, setTest] = useState([]);
    const [ShowValid,setShowValid] = useState(false);
    const [CorrectAnwers,setCorrectAnwers] = useState(0);
    const [DisableAnwers, setDisableAnwers] = useState(false);
    const [IsSelectQuestion,setIsSelectQuestion] = useState(false);
  
    const [ShowWelcome, setShowWelcome] = useState(false);
    const handleWelcomeClose = () => setShowWelcome(false);

    const [ShowFinishAnswer, setShowFinishAnswer] = useState(false);
    const handleFinishAnswerClose = () => setShowFinishAnswer(false);

    useEffect(() => {
        setShowWelcome(true);
    }, []);

    const ValidQuestion = () => 
    {
        var ls;
        var iCorrectAnwers = 0;
        try
        {
            ls = document.getElementsByClassName('radio');

            for (let i = 0; i < ls.length; i++)
            {

                if (ls[i].checked.toString() === "true" &&  ls[i].dataset.respuesta === "true" )
                {
                  document.getElementById('imgAproboA' + ls[i].dataset.cod).className = "imgAA enabled";
                  iCorrectAnwers++;
                }

                
                if (document.getElementById('imgAproboA' + ls[i].dataset.cod).className !== "imgAA enabled" )
                {
                  document.getElementById('imgAproboA' + ls[i].dataset.cod).className = "imgXX enabled";
                }

            }
            setCorrectAnwers(iCorrectAnwers);
            setShowValid(true);
            setShowFinishAnswer(true);
            setDisableAnwers(true);
            setIsSelectQuestion(false);
        }
        catch (e) {
            alert(e.message);
        }
    }

    const NewForm = (iLevel) => 
    {
        getQuestions(iLevel).then(lTest => {
            setTest(lTest);
        });
        setCorrectAnwers(0);
        setShowValid(false);
        setDisableAnwers(false);
        setShowWelcome(false);
        setIsSelectQuestion(true);
    }


return (
<>

<div className='container-fluid mt-2 mb-3' > 

  <div className='row justify-content-center' >
      <div className='col-12 m-2'> 
          <h2> Bienvenido al examen CCSE 2023 NACIONALIDAD ESPAÑOLA </h2>
      </div>
  </div>

<Accordion key="accordion" defaultActiveKey="0">
      
      {Test.map((rowQuestion, indexQuestion) => 
       {
        return (
        
        <Accordion.Item key={'accordionitem_' + rowQuestion.cod + indexQuestion } eventKey={indexQuestion}>

        <Accordion.Header key={'accordionheader_' + rowQuestion.cod + indexQuestion }  >

        <div key={'rowCuadrado_' + rowQuestion.cod + indexQuestion } className="row justify-content-center" >
          <div key={'colCuadrado' + rowQuestion.cod + indexQuestion } className='col-1'>

            <div  key={'rowNivelCuadrado_' + rowQuestion.cod + indexQuestion } className='row justify-content-start' >
                {rowQuestion.level === 3 && (
                  <div key={'colNivelAlto_'+ rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-lg-1 cuadradoNivelAlto"></div>
                )}
                {rowQuestion.level === 2 && (
                  <div key={'colNivelMedio_' + rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelMedio"></div>
                )}
                {rowQuestion.level === 1 && (
                  <div key={'colNivelBajo' + rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelBajo"></div>
                )}
            </div>

            <div className='row'>
              <div className='col-1' >
                  <img key={'imgAproboA' + rowQuestion.cod } id={'imgAproboA' + rowQuestion.cod } className="imgAA disabled" title="Correcta" alt="Correcta" border="0" ></img>
                  <img key={'imgAproboX' + rowQuestion.cod } id={'imgAproboX' + rowQuestion.cod } className="imgXX disabled" title="Incorrecta" alt="Incorrecta" border="0" ></img>
              </div>
            </div>
                
          </div>

          <div className='col-11' >
            <p>
              <strong>
                #{indexQuestion+1}
                  {'. '}  &nbsp;
                {rowQuestion.question} 
              </strong>
            </p>
          </div>
        </div>
        </Accordion.Header>

        <Accordion.Body className='align-items-center' >

          {rowQuestion.answers.map((rowAnswer, idAnswer) => 
          {
          return (
            <div key={'rowRespuesta_' + rowQuestion.cod + indexQuestion + idAnswer } className="row justify-content-center" >
              <div key={'colRespuesta_' +  rowQuestion.cod + indexQuestion + idAnswer } className='col-12 align-items-center'>
                  <p key={'p' + rowQuestion.cod + indexQuestion + idAnswer} id={'p' + rowQuestion.cod + indexQuestion + idAnswer} className="respuesta"> 
                      <input className='radio' type="radio" data-cod={rowQuestion.cod} key={'op' + rowQuestion.cod + indexQuestion + idAnswer } id={'op' + idAnswer} name={indexQuestion} radioGroup={indexQuestion} disabled={DisableAnwers} data-respuesta={rowAnswer.valid} ></input>
                      &nbsp;
                      <label className='answer' id={'lbl' + rowQuestion.cod + indexQuestion + idAnswer} key={'lbl' + rowQuestion.cod + indexQuestion + idAnswer} htmlFor={idAnswer} > {rowAnswer.text} </label>
                      &nbsp;
                      {ShowValid && rowAnswer.valid &&(
                        <img key={'imgA'+ rowQuestion.cod + indexQuestion + idAnswer} id={'imgA'+ rowQuestion.cod + indexQuestion + idAnswer} className="imgA" title="Valida" alt="imagen correcta" border="0" width="10px" height="10px" ></img>
                      )}
                      {ShowValid && !rowAnswer.valid &&(
                        <img key={'imgX' + rowQuestion.cod + indexQuestion + idAnswer} id={'imgX' + rowQuestion.cod + indexQuestion + idAnswer} className="imgX" title="Invalida" alt="imagen incorrecta" border="0" width="10px" height="10px"  ></img>
                      )}
                  </p>
              </div>
            </div>
        );
        })}

        </Accordion.Body>

      </Accordion.Item>
      );
     })}

</Accordion>

<div className='row justify-content-center mt-2 mb-3' >
  <div className='col-12'>
      {IsSelectQuestion && !ShowValid &&(
      <Button key="btnValidQuestion" variant="success" onClick={ValidQuestion} > Completar el Examen </Button>
      )}
  </div>
</div>

  { !IsSelectQuestion  &&  
  (
    <Button variant="primary" onClick={ () => setShowWelcome(true)} > Iniciar un nuevo Examen </Button>
  )}

<Modal key="modalwelcome" show={ShowWelcome} onHide={handleWelcomeClose}>
    <Modal.Header key="modalwelcome_header" closeButton>
      <Modal.Title key="modalwelcome_tittle">
        <p>
          Bienvenido al examen CCSE 2023   
        </p>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body key="modalwelcome_body"> 
      <div className='row justify-content-center' >
        <div className='col-12'>
          <p className='align-items-start' >
            El examen consta de 25 preguntas totalmente aleatorias, obtenidas de unas 300 
            que son tomadas en el examen real, para poder aprobar el examen debe tener 15 preguntas 
            respondidas de forma correcta.
            de esta forma se le tomara el examen para la nacionalidad Española.
            puede elegir preguntas : Random, Nivel bajo, Medio, Alto.
            &nbsp;
            Al final podras verificar tus respuestas.
            &nbsp;
          </p>

          <a key="download" rel="noopener" href="https://examenes.cervantes.es/sites/default/files/MANUAL%20NIPO%20ENTERO_CCSE_023.pdf" >
            Baja el documento de Preparacion Examen Ciudadania 
          </a>
          <p>
            Revisa las instrucciones antes del inicio del examen.  
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12' >
          <p className='align-items-start'>
            Este examen es a modo de prueba para saber sus conocimientos y poder practicar para estar mas preprado.
            Suerte...
          </p>
        </div>
      </div>

    </Modal.Body>

    <Modal.Footer key="modalwelcome_footer">
      <div className='row justify-content-center'>
        <div className='col-8' >
          <p className='align-items-center'>
            <strong>
              Nivel de preguntas
            </strong>
          </p>
        </div>
      </div>

    <div className='content' >
      <div className='row justify-content-center'>
              
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
          <Button key="btnRandom" variant="secondary" onClick={() => NewForm(0)} > Random </Button>{' '}
        </div>
                 
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
          <Button key="btnFacil" variant="success" onClick={() => NewForm(1)} > Facil</Button>{' '}
        </div>
                 
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
          <Button key="btnMedio" variant="warning" onClick={() => NewForm(2)} > Medio </Button>{' '}
        </div>
                 
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
          <Button key="btnAvanzado" variant="danger" onClick={() => NewForm(3)} > Avanzado</Button>{' '}
        </div>

      </div>
    </div>
    </Modal.Footer>
</Modal>

<Modal key="modalFinish" show={ShowFinishAnswer} onHide={handleFinishAnswerClose}>

  <Modal.Header key="modalfinish_head"  closeButton>

    <Modal.Title> 
      <p>
        Finalizacion del examen 
      </p>
    </Modal.Title>

  </Modal.Header>

  <Modal.Body key="modalfinish_body" > 

    <div className='row mb-3'>
      <div className='col-12'>
        <p className='align-items-center'> 
          El puntaje obtenido por Ud. fue &nbsp;
            {CorrectAnwers} {' /25 '}  &nbsp; Respuestas correctas.
        </p>
      </div>
    </div>
    <div className='row mb-3'>
      <div className='col-12'> 
        <p className='align-items-center'>
          Podes ver las respuestas correctas en cada pregunta.
        </p>
      </div>
    </div>

    { (CorrectAnwers >= 22 ) && (  
    <div className='row'>
      <div className='col-12' >
        <p className='align-items-center' > 
          Oye tio.!!.. tu eres mas español que el JAMON !! que haces tu aqui ?.. 
          tienes muy buen resultado...
        </p>
      </div>
    </div>
    )}

    {(CorrectAnwers >= 15 && CorrectAnwers < 22 ) && (  
    <div className='row'>
        <div className='col-12' >
          <p className='align-items-center'> 
            Felicitaciones!!! has aprobado el examen con exito.
            Aun asi te aconsejo que pruebes unas veces mas para tener todo mucho mas claro.
          </p>
        </div>
    </div>
    )}

    { (CorrectAnwers < 5) && (  
    <div className='row'>
      <div className='col-12' >
        <p className='align-items-center' > 
          No has aprobado el examen.. :-/ necesitas estudiar mucho. pero ANIMO.. con tiempo y estudio
          no dudo que mejoraras.!
        </p>
      </div>
    </div>
    )}

    {(CorrectAnwers < 10 && CorrectAnwers > 5 ) && (  
    <div className='row'>
      <div className='col-12' >
        <p className='align-items-center' > 
          No has aprobado el examen.. necesitas estudiar un poquito mas.. 
          una vez mas.. y estas...
        </p>
      </div>
    </div>
    )}

  </Modal.Body>

  <Modal.Footer key="modalfinish_footer" >

    <div className='row mt-3' >
      <div className='col-12' >
        <Button key="modalfinish_btnCerrar" variant="secondary" onClick={handleFinishAnswerClose}>
          Cerrar
        </Button>
      </div>
    </div>

  </Modal.Footer>
</Modal>

</div>
</>
    
)}

export default CitizenExam