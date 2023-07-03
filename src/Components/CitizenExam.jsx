import '../Css/App.css';
import '../Css/bootstrap.min.css';
import React, { useState,useEffect } from "react";
import {CitizenTest} from './Helpers';
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
                    iCorrectAnwers++;
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

    const NewForm = (iLevel) => {
  
        CitizenTest(iLevel).then(lTest => {
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

<div className='container-fluid mt-5 mb-5' > 

  <div className='row justify-content-center' >
      <div className='col-12 m-2'> 
          <h2> Bienvenido al examen CCSE 2023 NACIONALIDAD ESPAÑOLA </h2>
      </div>
  </div>

<Accordion defaultActiveKey="0">
      
      {Test.map((rowQuestion, indexQuestion) => 
       {
        return (
        
        <Accordion.Item eventKey={indexQuestion}>
        <Accordion.Header>

        <div className="row justify-content-center" >
          <div className='col-1'>
            <div className='row justify-content-start' >
                {rowQuestion.level === 3 && (
                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-lg-1 cuadradoNivelAlto"></div>
                )}
            
                {rowQuestion.level === 2 && (
                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelMedio"></div>
                )}
            
                {rowQuestion.level === 1 && (
                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelBajo"></div>
                )}

            </div>
          </div>

          <div className='col-11' >
            <strong>
              #{indexQuestion+1}
                {'. '}  &nbsp;
              {rowQuestion.question} 
            </strong>
          </div>
        </div>

        </Accordion.Header>

        <Accordion.Body className='align-items-center' >

        {rowQuestion.answers.map((rowAnswer, idAnswer) => 
        {
        return (

        <div className="row justify-content-center" >
          <div className='col-12 align-items-center'>
            <p className="respuesta"> 
              <input className='radio' type="radio"  key={'op' + idAnswer} id={'op' + idAnswer} name={indexQuestion} radioGroup={indexQuestion} disabled={DisableAnwers} data-respuesta={rowAnswer.valid} ></input>
                  &nbsp;
                  <label className='answer' key={'lbl' + idAnswer} htmlFor={idAnswer} > {rowAnswer.text} </label>
                  &nbsp;
                  {ShowValid && rowAnswer.valid &&(
                    <img key={'imgA'+ idAnswer} className="imgA" title="Valida" alt="imagen correcta" border="0" width="18px" height="18px" ></img>
                  )}
                  {ShowValid && !rowAnswer.valid &&(
                    <img key={'imgX' + idAnswer}  className="imgX" title="Invalida" alt="imagen incorrecta" border="0" width="18px" height="18px"  ></img>
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

    {IsSelectQuestion && !ShowValid &&(
    <Button variant="success" onClick={ValidQuestion} > Completar el Examen </Button>
    )}

    { !IsSelectQuestion  &&  (
    <Button variant="primary" onClick={ () => setShowWelcome(true)} > Iniciar un nuevo Examen </Button>
    )}

      <Modal key="mWelcome" show={ShowWelcome} onHide={handleWelcomeClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido al examen CCSE 2023 </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          
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

                <a key="download" target='_blank' rel="noreferrer" href="https://examenes.cervantes.es/sites/default/files/MANUAL%20NIPO%20ENTERO_CCSE_023.pdf" >
                    Baja el doumento de Preparacion Examen Ciudadania 
                </a>
                
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
         <Modal.Footer>

           <div className='row justify-content-center'>
              <div className='col-8' >
                <p className='align-items-center'>
                    <strong>
                      Nivel de preguntas
                    </strong>
                </p>
              </div>
            </div>

            <div className='row justify-content-center'>
              
                   <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
                      <Button variant="secondary" onClick={() => NewForm(0)} > Random </Button>{' '}
                    </div>
                 
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
                      <Button variant="success" onClick={() => NewForm(1)} >Nivel Facil</Button>{' '}
                    </div>
                 
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
                      <Button variant="warning" onClick={() => NewForm(2)} >Nivel Medio </Button>{' '}
                    </div>
                 
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
                      <Button variant="danger" onClick={() => NewForm(3)} >Nivel Avanzado</Button>{' '}
                    </div>

            </div>
            

        </Modal.Footer>
      </Modal>

      <Modal key="mFinishAnswer" show={ShowFinishAnswer} onHide={handleFinishAnswerClose}>
        <Modal.Header closeButton>
            <Modal.Title> Finalizacion del examen </Modal.Title>
        </Modal.Header>
        <Modal.Body> 

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
            ) }

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
            ) }

            { (CorrectAnwers < 10 && CorrectAnwers > 5 ) && (  
            <div className='row'>
            <div className='col-12' >
              <p className='align-items-center' > 
                  No has aprobado el examen.. necesitas estudiar un poquito mas.. 
                  una vez mas.. y estas...
              </p>
            </div>
          </div>
            ) }

        </Modal.Body>
        <Modal.Footer>

          <div className='row' >
              <div className='col-12' >
                <Button variant="secondary" onClick={handleFinishAnswerClose}>
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