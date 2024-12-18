import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState,useEffect } from "react";
import TestExam from './Components/TestExam';
import AuthLogin from './Components/AuthLogin';
import LogOut from './Components/LogOut';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [ShowWelcome, setShowWelcome] = useState(true);
  const [IsAutenticated,setIsAutenticated] = useState(false);
  
  const handleWelcomeClose = () =>
  { 
    setShowWelcome(!IsAutenticated);
  }


  useEffect(() => 
  {
    let token = '';
    token = localStorage.getItem('token');
    setShowWelcome((token === null)); 
    setIsAutenticated((token !== null))

  }, [localStorage.getItem('token')]);


 return (
    <>
      <div className='container' >
          
          <div className='row'> 
              <div className='col-12'>

              <Modal key="modalwelcome" show={ShowWelcome} onHide={handleWelcomeClose} width="800px" >
              <Modal.Header key="modalwelcome_header" closeButton>
                <Modal.Title key="modalwelcome_tittle">
              <p>
                Login
              </p>
              </Modal.Title>
              </Modal.Header>
              <Modal.Body key="modalwelcome_body"> 
                <AuthLogin></AuthLogin>
              </Modal.Body>
              <Modal.Footer key="modalwelcome_footer">
              </Modal.Footer>
              </Modal>

              </div>
          </div>
          <div className='row'>
              <div className='col-12'>

              {
              (IsAutenticated)
              &&
              <TestExam></TestExam>
              }

              </div>
              <div className='row'> 
                  <div className='col-12'>
                    {
                    (IsAutenticated)
                    &&
                     <LogOut></LogOut>
                    }
                  </div>
              </div>
          </div>

      </div>        



    </>
  );
}

export default App;
