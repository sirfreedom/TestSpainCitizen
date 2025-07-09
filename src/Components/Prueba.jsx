import '../Css/App.css';
import '../Css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { GetTestMethod } from '../Api/PruebaHelper';
import { PutTestMethod } from '../Api/PruebaHelper';
import { PostTestMethod } from '../Api/PruebaHelper';
import { DeleteTestMethod } from '../Api/PruebaHelper';
import { PatchTestMethod } from '../Api/PruebaHelper';
import { getToken } from '../Api/PruebaHelper';


export const Prueba = () => {

        const [Token, setToken] = useState([]);

        const TestInput = () => 
        {

        }

        const TestMethodLogin = () => 
        {
            getToken().then(data => {
                setToken(data);
            });
        }

        const TestMethodGet = () => 
        {
            let lGetReturn;

            lGetReturn = GetTestMethod();

            console.log('Get')
            console.log(lGetReturn);
        }

        const TestMethodPut = () => 
        {
            let lPutReturn;

            lPutReturn = PutTestMethod(Token).then(data => {
                console.log('Put');
                console.log(data);
            } );
            
        }

        const TestMethodPost = () => 
        {
            let lPostReturn;

            lPostReturn = PostTestMethod(Token).then(data => {
                console.log('Post');
                console.log(data);
            });
        }

        const TestMethodDelete = () => 
        {
            let lDeleteReturn;
            lDeleteReturn = DeleteTestMethod(Token).then(data => {
                console.log('Delete');
                console.log(data);
            });
        }


        const TestMethodPatch = () => 
        {

            let lPatchReturn;
            lPatchReturn = PatchTestMethod();

            console.log('Patch')
            console.log(lPatchReturn);
        }


        return (
        <>

        <input id='txtkey' type='texbox' value={Token} onChange={e => TestInput(e.value)} ></input>

        <Button key="modalfinish_btnTest" variant="secondary" >
         Test
        </Button>


        <Button key="modalfinish_btnLogin" variant="secondary" onClick={TestMethodLogin}>
         Login
        </Button>

        <Button key="modalfinish_btnGet" variant="secondary" onClick={TestMethodGet}>
         Prueba Test Get
        </Button>
        
        <Button key="modalfinish_btnPut" variant="secondary" onClick={TestMethodPut}>
         Prueba Test Put
        </Button>

        
        <Button key="modalfinish_btnpost" variant="secondary" onClick={TestMethodPost}>
         Prueba Test Post
        </Button>

                
        <Button key="modalfinish_btnDelete" variant="secondary" onClick={TestMethodDelete}>
         Prueba Test Delete
        </Button>

                
        <Button key="modalfinish_btnPatch" variant="secondary" onClick={TestMethodPatch}>
         Prueba Test Patch
        </Button>



















        </>
            
        )}
        
export default Prueba