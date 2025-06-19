import '../Css/App.css';
import '../Css/bootstrap.min.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import { GetTestMethod } from '../Api/PruebaHelper';
import { PutTestMethod } from '../Api/PruebaHelper';
import { PostTestMethod } from '../Api/PruebaHelper';
import { DeleteTestMethod } from '../Api/PruebaHelper';
import { PatchTestMethod } from '../Api/PruebaHelper';

export const Prueba = () => {

        const TestMethod1 = () => 
        {
            let lGetReturn;

            lGetReturn = GetTestMethod();

            console.log('Get')
            console.log(lGetReturn);
        }

        const TestMethod2 = () => 
        {
            let lPutReturn;

            //console.log("Prueba put");
            lPutReturn = PutTestMethod();
            console.log('Put')
            console.log(lPutReturn);
        }

        const TestMethod3 = () => 
        {
            let lPostReturn;

            lPostReturn = PostTestMethod();

            console.log('Post')
            console.log(lPostReturn);
        }

        const TestMethod4 = () => 
        {
            let lDeleteReturn;
            lDeleteReturn = DeleteTestMethod();

            console.log('Delete')
            console.log(lDeleteReturn);
        }


        const TestMethod5 = () => 
        {

            let lPatchReturn;
            lPatchReturn = PatchTestMethod();

            console.log('Patch')
            console.log(lPatchReturn);
        }


        return (
        <>

        <Button key="modalfinish_btnGet" variant="secondary" onClick={TestMethod1}>
         Prueba Test Get
        </Button>
        
        <Button key="modalfinish_btnPut" variant="secondary" onClick={TestMethod2}>
         Prueba Test Put
        </Button>

        
        <Button key="modalfinish_btnpost" variant="secondary" onClick={TestMethod3}>
         Prueba Test Post
        </Button>

                
        <Button key="modalfinish_btnDelete" variant="secondary" onClick={TestMethod4}>
         Prueba Test Delete
        </Button>

                
        <Button key="modalfinish_btnPatch" variant="secondary" onClick={TestMethod5}>
         Prueba Test Patch
        </Button>

        </>
            
        )}
        
export default Prueba