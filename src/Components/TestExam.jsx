import '../Css/TestExam.css';
import '../Css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ListFinalTestMessage } from '../Api/FinalTestMessageHelper';
import { getByDependency } from '../Api/SettingHelper';
import { ListQuestionLevels } from '../Api/QuestionLevelHelper';
import { ListQuestion } from '../Api/QuestionHelper';

export const TestExam = () => {
    
    const [Test, setTest] = useState([]);
    const [ShowValid,setShowValid] = useState(false);
    const [CorrectAnwers,setCorrectAnwers] = useState(0);
    const [DisableAnwers, setDisableAnwers] = useState(false);
    const [IsSelectQuestion,setIsSelectQuestion] = useState(false);
    const [Level, setLevel] = useState(0);
    const [Setting, setSetting] = useState([]);
    const [FinalTestMessage,setFinalTestMessage] = useState([]);
    const [QuestionLevels,setQuestionLevels] = useState([]);
  
    const [ShowWelcome, setShowWelcome] = useState(false);
    const handleWelcomeClose = () => setShowWelcome(false);

    const [ShowFinishAnswer, setShowFinishAnswer] = useState(false);
    const handleFinishAnswerClose = () => setShowFinishAnswer(false);

    useEffect(() => 
    {
        getByDependency(1).then(data => {
          setSetting(data);
        });

        ListQuestionLevels().then(data => {
          setQuestionLevels(data);
        });

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

            ListFinalTestMessage().then(data => {
              setFinalTestMessage(data);
            });
    
        }
        catch (e) {
            alert(e.message);
        }
    }

    const NewForm = (iLevel) => 
    {
      setCorrectAnwers(0);
      setShowValid(false);
      setDisableAnwers(false);
      setShowWelcome(false);
      setIsSelectQuestion(true);
      setLevel(iLevel);
      ListQuestion(iLevel).then(lTest => {
        setTest(lTest);
      });
    }

return (
<>

<div className='container-fluid mt-2 mb-3' > 

  <div className='row justify-content-center' >
      <div className='col-12 m-2'> 
          <h2> { Setting.tittle } </h2>
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

                {Number(rowQuestion.codLevel) === 3 && (
                  <div key={'colNivelAlto_'+ rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelAlto"></div>
                )}
                {Number(rowQuestion.codLevel) === 2 && (
                  <div key={'colNivelMedio_' + rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelMedio"></div>
                )}
                {Number(rowQuestion.codLevel) === 1 && (
                  <div key={'colNivelBajo_' + rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelBajo"></div>
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
                {'- '}  &nbsp;
                {rowQuestion.cod}
                {'. '}
                {rowQuestion.questionDescription} 
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
                      <label className='answer' id={'lbl' + rowQuestion.cod + indexQuestion + idAnswer} key={'lbl' + rowQuestion.cod + indexQuestion + idAnswer} htmlFor={idAnswer} > {rowAnswer.answerDescription} </label>
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
      {IsSelectQuestion && !ShowValid && (
      <Button key="btnValidQuestion" variant="success" onClick={ValidQuestion} > Completar el Examen </Button>
      )}
  </div>
</div>

  { !IsSelectQuestion  &&  
  (
    <Button id='btnInit' key='btnInit' variant="primary" onClick={ () => setShowWelcome(true)} > Iniciar un nuevo Examen </Button>
  )}

<Modal key="modalwelcome" show={ShowWelcome} onHide={handleWelcomeClose}>
    <Modal.Header key="modalwelcome_header" closeButton>
      <Modal.Title key="modalwelcome_tittle">
        <p>
          {Setting.subtittle}
        </p>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body key="modalwelcome_body"> 
      <div className='row justify-content-center' >
        <div className='col-12'>
          <p className='align-items-start' >
              {Setting.instruction}
          </p>

          <a key="download" rel="noopener" href={Setting.downloadlink} >
              {Setting.downloadtittle}
          </a>
          <p>
              {Setting.preinstructiontittle}
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12' >
          <p className='align-items-start'>
              {Setting.preinstruction}
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

      {QuestionLevels.map((item, idx ) => 
      {

       return (
              <div key={'divquestionlevel' + idx } className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
                <Button key={'btn' + item.questionLevelDescription} variant={item.class} onClick={() => NewForm(item.cod)} > {item.questionLevelDescription} </Button>{' '}
              </div>
            );
      })}

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
          El puntaje obtenido por Ud. es &nbsp;
            {CorrectAnwers} {' / Total Preguntas ' + Setting.questionperpage + ' / Necesarias para aprobar : ' + Setting.correctanswers }  
            &nbsp; 
            Respuestas correctas.
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

    {FinalTestMessage.map((item, idx ) => 
    {
     return (
              ( item.levels.filter(x => x.cod === Level).length > 0 ) 
              && (CorrectAnwers > item.answersRangeMin)  
              && (CorrectAnwers <= item.answersRangeMax ) && (  
              <div key={'divrow' + idx} className='row'>
                  <div key={'divcol' + idx} className='col-12' >
                    <p key={'p' + idx} className='align-items-center' > 
                    { item.finalTestMessageDescription }
                   </p>
                  </div>
              </div>
             ));
    })}

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

export default TestExam