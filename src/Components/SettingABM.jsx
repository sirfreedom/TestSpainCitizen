import React, { useState,useEffect } from "react";
import RGrid from './RGrid'
import { FindSetting } from '../Api/SettingHelper';

export const SettingABM = () => {

  const [SettingId,setSettingId] = useState(0);
  const [Settings, setSettings] = useState([]);
  //const [ShowModalEdit, setShowModalEdit] = useState(false);
  //const [ShowModalNew, setShowModalNew] = useState(false);

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
        console.log(lSetting);
      setSettings(lSetting);
    });
  }, []);

  const GridEdit = id => {
    //setShowModalEdit(true);
    //setDogId(id);
  };

const GridNew = () => {
  //console.log("paso");
  //alert("ssss");
  //setShowModalNew(true);
  };
  
    return (
    <>

       <div>

          <RGrid
              key="RGrid"
              Tittle="Setting"
              rows={Settings}
              RowPerPage={5}
              columns={GrillaConfiguracion}
              ShowDelete={true}
              ShowEdit={true}
              TotalWidth="100%"
              DeleteId={id => alert("not implementes id" + id)}
              EditId={id => GridEdit(id)}
              isLoading={false}
              ConfigurationId="id" //Id de los datos de la grilla
            />

       </div>

       <div className="form-container">
                    <h2 className="form-title"> Setting </h2>
                    
                        <div className="mb-3">
                            <label htmlFor="opcion" className="form-label">Selecciona una opción</label>
                            <select 
                                className="form-select" 
                                id="opcion" 
                                name="opcion"
                                value={""}
                                required
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="opcion1">Opción 1</option>
                                <option value="opcion2">Opción 2</option>
                                <option value="opcion3">Opción 3</option>
                                <option value="opcion4">Opción 4</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="texto1" className="form-label">Primer campo de texto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="texto1" 
                                name="texto1"
                                value={""}
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
                                value={""}
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
                                value={""}
                                placeholder="Último campo de texto"
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Enviar Formulario</button>
                            <button type="reset" className="btn btn-secondary">Limpiar</button>
                        </div>
                </div>


        </>
        )}
        
export default SettingABM