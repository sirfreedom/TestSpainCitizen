import { useState,useEffect } from "react";
import RGrid from './RGrid'
import { FindSetting } from '../Api/SettingHelper';
import {Modal, Button} from 'react-bootstrap/'
import { ListDependency } from '../Api/DependencyHelper';
import {EmptyAllProperties} from '../Api/BaseHelper';


export const SettingABM = () => {

  const [Settings, setSettings] = useState([]);
  const [ShowModalEdit, setShowModalEdit] = useState(false);
  const [Dependencies, setDependencies] = useState([]);
  const [DependencyId, setDependencyId] = useState(0);
  const [Setting, setSetting] = useState();

const GrillaConfiguracion = [
  {
    Tittle: 'Titulo',
    Selector: fila => fila.tittle,
    WidthColumn: '50%',
    Ordenable: false,
    ColumnOrdenable: 'tittle',
  },
  {
    Tittle: 'Preguntas Por pagina',
    Selector: fila => fila.questionperpage,
    WidthColumn: '50%',
    Ordenable: false
  },
];

  useEffect(() => {
    FindSetting().then(lSetting => {
    setSettings(lSetting);
  });

  ListDependency().then(lDependencies => {
  setDependencies(lDependencies);
  });

  }, []);

  const GridEdit = id => {
   var oSetting;
   setShowModalEdit(true);
   oSetting = Settings.filter(x => x.Id === id);

  if(oSetting.length === 1){
    setSetting(oSetting[0]);
  }

};

 const GridModalShowOff = () =>{
  setShowModalEdit(false);
 }

  const GridDelete = id => {
    console.log(id);
  };

  const GridNew = () => {
    setSetting([]);
    setShowModalEdit(true);
    setSetting(EmptyAllProperties(Setting));
  };


    return (
    <>
        <div className='container-fluid'>
         <div className='row align-items-end'>
            <div className='col-12'>
                <button className="btn-2" onClick={GridNew} > Nuevo Registro </button>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-12'>
              <RGrid
                key="RGrid"
                Tittle="Setting"
                rows={Settings}
                RowPerPage={5}
                ShowPaging={false}
                columns={GrillaConfiguracion}
                ShowDelete={true}
                ShowEdit={true}
                TotalWidth="100%"
                DeleteId={id => GridDelete(id)}
                EditId={id => GridEdit(id)}
                isLoading={false}
                ConfigurationId="Id" //Id de los datos de la grilla
              />
            </div>
          </div>

        </div>

{/*}
    "Id": 1,
      "cod": 1,
      "Dependency": "TestSpainCitizen",
      "correctanswers": 15,
      "downloadlink": "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202024_0.pdf",
      "downloadtittle": "Baja el documento de Preparacion Examen Ciudadania",
      "IdDependency": 1,
      "instruction": "El examen consta de 25 preguntas totalmente aleatorias, obtenidas de unas 300 que son tomadas en el examen real, para poder aprobar el examen debe tener 15 preguntas respondidas de forma correcta.de esta forma se le tomara el examen para la nacionalidad Española. puede elegir preguntas : Random, Nivel bajo, Medio, Alto. Al final podras verificar tus respuestas. ",
      "preinstruction": "Este examen es a modo de prueba para saber sus conocimientos y poder practicar \r\n</br> Suerte...",
      "preinstructiontittle": "Revisa las instrucciones antes del inicio del examen.",
      "questionperpage": 25,
      "subtittle": "Bienvenido al examen CCSE 2024",
      "tittle": "Bienvenido al examen CCSE 2024 NACIONALIDAD ESPAÑOLA version 2.0"
{*/}

<div>

        <Modal show={ShowModalEdit} aria-labelledby="contained-modal-title-vcenter1">

          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter1"> 

            {Setting?.Id !== 0 && Setting?.Dependency}
            {Setting?.Id === 0 || Setting?.Id === null && ("Nueva Setting")}
                
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="show-grid">
    
             <div className="form-container">
                    <h2 className="form-title"> Setting </h2>
                    
                        <div className="mb-3">
                            <label htmlFor="dropdown">Dependency</label>
                            <select id="ddlDependency" 
                            className="form-select"
                            value={DependencyId} 
                            onChange={e => setDependencyId(e)}>
                            <option value="0">-- Elige una opción --</option>
                            {Dependencies.map((dependency) => 
                            (
                            <option key={dependency.id} value={dependency.id}>
                            {dependency.descripcion}
                            </option>
                            ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="texto1" className="form-label">Primer campo de texto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="texto1" 
                                name="texto1"
                                //value={}
                                defaultValue={""}
                                placeholder="Ingresa texto aquí"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="texto2" className="form-label">Segundo campo de texto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="texto2" 
                                name="texto2"
                                //value={""}
                                placeholder="Ingresa más texto"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="texto3" className="form-label">Tercer campo de texto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="texto3" 
                                name="texto3"
                                //value={""}
                                placeholder="Último campo de texto"
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Enviar Formulario</button>
                            <button type="reset" className="btn btn-secondary">Limpiar</button>
                        </div>
                </div>
    
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => GridModalShowOff()}>Close</Button>
          </Modal.Footer>
        </Modal>

</div>

        </>
        )}
        
export default SettingABM