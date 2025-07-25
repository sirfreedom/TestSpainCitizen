import { useState,useEffect } from "react";
import RGrid from './RGrid'
import { FindSetting } from '../Api/SettingHelper';
import ModalEdicion from './SettingModal';

export const SettingABM = () => {

  const [SettingId,setSettingId] = useState(0);
  const [Settings, setSettings] = useState([]);
  const [ShowModalEdit, setShowModalEdit] = useState(false);
  const [ShowModalNew, setShowModalNew] = useState(false);

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
  }, []);

  const GridEdit = id => {
      setShowModalEdit(true);
      setSettingId(id);
  };

  const GridDelete = id => {
    console.log(id);
  };

  const GridNew = () => {
    setShowModalNew(true);
  };

    return (
    <>
        <div className='container-fluid'>
         <div className='row align-items-end'>
            <div className='col-12'>
                <button className="btn-2" onClick={GridNew} > Nuevo Registro  </button>
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
          <div className='row'>
              <div className='col-12'>
                  <ModalEdicion show={ShowModalEdit} onHide={() => setShowModalEdit(false)}  ValueId={SettingId} />
              </div>
          </div>
          <div className='row'>
              <div className='col-12'>
                  <ModalEdicion show={ShowModalNew} onHide={() => setShowModalNew(false)}  />
              </div>
          </div>
        </div>

        </>
        )}
        
export default SettingABM