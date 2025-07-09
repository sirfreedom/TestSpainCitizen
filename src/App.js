import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TestExam from './Components/TestExam';
import SettingABM from './Components/SettingABM';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";

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
