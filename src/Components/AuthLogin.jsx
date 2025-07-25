import React, { useState } from "react";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput  } from 'mdb-react-ui-kit';
import { getToken } from './UserHelper';

const AuthLogin = () => {

  const [User,setUser] = useState('');
  const [Pass,setPass] = useState('');

  const handleLogin = async () => {
    let sResult = '';
    try 
    {

      sResult = await getToken(User,Pass);
      
      if (sResult == '')
      {
        document.getElementById('txtPass').value = '';
        alert("el nombre o contrasena no son correctos ");
      }

      if (sResult != '')
      {
        localStorage.setItem('token', JSON.stringify(sResult));
        //document.getElementById('txtUser').value = '';
        //document.getElementById('txtPass').value = '';
        //window.location.reload();
      }
      
    } catch (ex) 
    {
      console.error(ex);
    }
  };
 
  const handleAnonimo = async () => {
    let sResult = '';
    try 
    {
      sResult = await getToken('admin','1234');
      
      if (sResult != '')
      {
        localStorage.setItem('token', JSON.stringify(sResult));
        document.getElementById('txtUser').value = '';
        document.getElementById('txtPass').value = '';
      }

      window.location.reload();
      
    } catch (ex) 
    {
      console.error(ex);
    }
  };
  
  return (
      <>
 
     <MDBContainer fluid className="p-1 my-2 h-custom">
        <MDBRow>
          <MDBCol col='12' md='12'>
            <MDBInput id='txtUser' key='txtUser' wrapperClass='mb-8' label='Email address' type='email' value={e => setUser(e) }  size="lg"/>
            <MDBInput id='txtPass' key='txtPass' wrapperClass='mb-8' label='Password' type='password' value={e => setPass(e)}  size="lg"/>
              <div className='text-end text-md-end mt-4 pt-1'>
              <MDBBtn id='btnLogin' key='btnLogin' className="mb-0 px-5" size='lg' onClick={handleLogin} >Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" onClick={handleAnonimo} className="link-danger">Login Anonimo </a></p>
            </div>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </>
 )}

export default AuthLogin;