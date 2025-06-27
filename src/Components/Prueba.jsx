import '../Css/App.css';
import '../Css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { GetTestMethod } from '../Api/PruebaHelper';
import { PutTestMethod } from '../Api/PruebaHelper';
import { PostTestMethod } from '../Api/PruebaHelper';
import { DeleteTestMethod } from '../Api/PruebaHelper';
import { PatchTestMethod } from '../Api/PruebaHelper';
import { getToken } from '../Api/PruebaHelper';


export const Prueba = () => {



        const TestMethodLogin = () => 
        {
            let sResult;

            sResult = getToken();

            console.log('Login');
            console.log(sResult);
            localStorage.setItem('token',sResult);
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
            let sToken;

            sToken = localStorage.getItem('token');

            lPutReturn = PutTestMethod(sToken);
            console.log('Put')
            console.log(lPutReturn);
        }

        const TestMethodPost = () => 
        {
            let lPostReturn;

            lPostReturn = PostTestMethod();

            console.log('Post')
            console.log(lPostReturn);
        }

        const TestMethodDelete = () => 
        {
            let lDeleteReturn;
            lDeleteReturn = DeleteTestMethod();

            console.log('Delete')
            console.log(lDeleteReturn);
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