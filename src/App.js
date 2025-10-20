import TestExam from './Components/TestExam';
import SettingABM from './Components/SettingABM';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Prueba from "./Components/Prueba";
import NoPage from "./Components/NoPage";
import { useEffect } from "react";
import { getToken } from './Api/UserHelper';
import { createDate } from './Api/BaseHelper';


function App() {



  const CreateToken = () => {
    const DateNow = new Date();
    let ExpirationDate;

    console.log(localStorage.getItem('ExpirationDate'));

    if (localStorage.length === 0) {
        debugger;

        getToken('admin', '1234').then(async data => {
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Luego de la espera dentro del then");

        //JSON.parse(
        //JSON.stringify(

        ExpirationDate = createDate(data.expirationYear, data.expirationMonth, data.expirationDay, data.expirationHour, data.expirationMinute);
        localStorage.setItem('ExpirationDate',ExpirationDate);
        localStorage.setItem('token', data.token);
      });
    }
        
    if(localStorage.length > 0){
      ExpirationDate = localStorage.getItem('ExpirationDate');
    }

    if ( (localStorage.length !== 0) && (new Date(ExpirationDate).getTime() < new Date(DateNow).getTime() )  ) {

      getToken('admin', '1234').then(async data => {
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        ExpirationDate = createDate(data.expirationYear, data.expirationMonth, data.expirationDay, data.expirationHour, data.expirationMinute);
        localStorage.setItem('ExpirationDate',ExpirationDate);
        localStorage.setItem('token', data.token);
      });
      console.log("Actualizo");
    }
  }

  //Previene el f5
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'F5' || event.keyCode === 116) {
        event.preventDefault(); // Previene la recarga
        alert("No esta permitido recargar la pagina");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Limpieza al desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  useEffect(() => {

    const observer = new MutationObserver((mutations) => {
      //CreateToken();
      //Aquí podes manejar los cambios en el DOM
      //console.log('El DOM ha cambiado:', mutations);
    });

    observer.observe(document.body, { childList: true, subtree: true, });
    // Limpieza del observer al desmontar el componente
    return () => {
      observer.disconnect();
    };



  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar

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
                  <Route path="Prueba" element={<Prueba />} />
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

