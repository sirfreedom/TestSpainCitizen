import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import TestExam from './Components/TestExam';
import Prueba from './Components/Prueba';

//import { getJasoWebToken} from './Components/Helpers';

function App() {

  const handleLogin = async () => {
    //let sResult = '';
    //let token = '';

    //token = localStorage.getItem('token');

    //if(token !== ''){
    //  sResult = await getJasoWebToken("admin","1234");
    //  localStorage.setItem('token', JSON.stringify(sResult));
    //  console.log('get token');
    //  console.log(sResult);
    // }
    
  }

  useEffect(() => 
  {
    handleLogin();
  }, []);


 return (
    <>
      <div className='container' >

          <div className='row'>
              <div className='col-12'>
            
              <Prueba></Prueba>


              </div>
          </div>

      </div>        



    </>
  );
}

export default App;
