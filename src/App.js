import TestExam from './Components/TestExam';
import SettingABM from './Components/SettingABM';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import { useEffect } from "react";
import { getToken } from './Api/UserHelper';
import { createDate } from './Api/BaseHelper';

function App() {

  const CreateToken = () => {
    const DateNow = new Date();
    let ExpirationDate;
    var token;

    if (localStorage.getItem('token') === 'undefined') {
      getToken('admin', '1234').then(oToken => {
        localStorage.setItem('token', JSON.stringify(oToken));
      });
    }

    token = JSON.parse(localStorage.getItem('token'));
    ExpirationDate = createDate(token?.expirationYear, token?.expirationMonth, token?.expirationDay, token?.expirationHour, token?.expirationMinute);
    
    if ((ExpirationDate < DateNow) ) 
    {
      getToken('admin', '1234').then(oToken => {
        localStorage.setItem('token', JSON.stringify(oToken));
      });
      console.log("Actualizo");
    }

    console.log(token);
  }


  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      CreateToken();
      //Aquí podes manejar los cambios en el DOM
      //console.log('El DOM ha cambiado:', mutations);
    });


    observer.observe(document.body, { childList: true, subtree: true, });
    // Limpieza del observer al desmontar el componente
    return () => {
      observer.disconnect();
    };
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar




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

  return (
    <>
      <div className='container' >
        <div className='row'>
          <div className='col-12'>

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="Examenes" element={<TestExam />} />
                  <Route path="Setting" element={<SettingABM />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </BrowserRouter>

          </div>
        </div>

      </div>



    </>
  );
}

export default App;

