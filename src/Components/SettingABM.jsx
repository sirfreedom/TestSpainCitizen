import { useState, useEffect } from "react";
import RGrid from './RGrid'
import { FindSetting } from '../Api/SettingHelper';
import { Modal, Button } from 'react-bootstrap/'
import { ListDependency } from '../Api/DependencyHelper';
import { EmptyAllProperties } from '../Api/BaseHelper';
import { ChangePropertyValue } from '../Api/BaseHelper';
import { UpdateSetting } from '../Api/SettingHelper';
import { InsertSetting } from '../Api/SettingHelper';

export const SettingABM = () => {

  const [Settings, setSettings] = useState([]);
  const [ShowModalEdit, setShowModalEdit] = useState(false);
  const [Dependencies, setDependencies] = useState([]);
  const [Setting, setSetting] = useState();

  const GrillaConfiguracion = [
    {
      Tittle: 'Titulo',
      Selector: fila => fila.title,
      WidthColumn: '70%',
      Ordenable: false,
      ColumnOrdenable: 'tittle',
    },
    {
      Tittle: 'Preguntas Por pagina',
      Selector: fila => fila.questionperpage,
      WidthColumn: '30%',
      Ordenable: false
    },
  ];

  useEffect(() => {

    FindSetting().then(lSetting => {
      setSettings(lSetting);
    });

    if(Dependencies.length===0){
      ListDependency().then(lDependencies => {
        setDependencies(lDependencies);
      });
    }

  }, []);

  const GridEdit = id => {
    var oSetting;
    setShowModalEdit(true);
    oSetting = Settings.filter(x => x.Id === id);

    console.log(oSetting);
    if (oSetting.length === 1) {
      setSetting(oSetting[0]);
    }

  };

  const GridModalShowOff = () => {
    setShowModalEdit(false);
  }

  const GridDelete = id => {
    const newList = Settings.filter(objeto => objeto.Id !== id);
    setSettings(newList);
    alert("This is a funny test, its not avalible to delete the row, the id is " + id );
  };

  const GridNew = () => {
    setSetting([]);
    setShowModalEdit(true);
    setSetting({...EmptyAllProperties(Setting),
      Id:0,
      correctanswers:1,
      questionperpage:1, 
      IdDependency:1 
    });
  };

  const ChangeValues = (value, campo) => {
    setSetting(ChangePropertyValue(Setting, campo, value));
  }

  const Save = () => {
   let Token;
   Token = localStorage.getItem('token');

    if (Setting.Id !== 0){

      UpdateSetting(Token,
        Setting.Id,
        parseInt(Setting.IdDependency),
        Setting.title,
        parseInt(Setting.questionperpage),
        parseInt(Setting.correctanswers),
        Setting.subtitle,
        Setting.instruction,
        Setting.downloadtitle,
        Setting.downloadlink,
        Setting.preinstructiontitle,
        Setting.preinstruction
        ).then(data => {
         setSettings(x => 
         x.map(item => // Si bien actualiza, necesito que se actualice todo lo que maneja la pantalla 
         item.Id === Setting.Id ? { ...item, 
          questionperpage: Setting.questionperpage,
          title: Setting.title,
          IdDependency: Setting.IdDependency,
          subtitle:Setting.subtitle,
          title: Setting.title,
          instruction: Setting.instruction,
          downloadtitle: Setting.downloadtitle,
          downloadlink: Setting.downloadlink,
          preinstructiontitle: Setting.preinstructiontitle,
          preinstruction: Setting.preinstruction
         } : item
         )
         );
         setShowModalEdit(false);
        }
      );

     }

     
     if (Setting.Id === 0)  {

      InsertSetting(Token,
        parseInt(Setting.IdDependency),
        Setting.title,
        parseInt(Setting.questionperpage),
        parseInt(Setting.correctanswers),
        Setting.subtitle,
        Setting.instruction,
        Setting.downloadtitle,
        Setting.downloadlink,
        Setting.preinstructiontitle,
        Setting.preinstruction
        ).then(data => {
          setSettings(oSetting => [...oSetting, data]);
          setShowModalEdit(false);
        })
     }
     
  }

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

      <Modal show={ShowModalEdit} className="modal-dialog modal-xl" aria-labelledby="contained-modal-title-vcenter1">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter1">

            {Setting?.Id !== 0 && Setting?.Dependency}
            {Setting?.Id === 0 || Setting?.Id === null && ("Nueva Setting")}

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">

          <div className="container-fluid" >

            <div className="row" >

              <div className="col-5">

                <label htmlFor="txtTitle" className="form-label"> Title </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtTitle"
                  name="txtTitle"
                  defaultValue={Setting?.title}
                  placeholder={Setting?.title}
                  onChange={e =>  ChangeValues(e.target.value, 'title')}
                />

              </div>

              <div className="col-3">

                <label htmlFor="ddlDependency">Dependency</label>
                <select id="ddlDependency"
                  className="form-select"
                  defaultValue={Setting?.IdDependency}
                  onChange={e => ChangeValues(e.target.value,'IdDependency') }
                  >
                  {Dependencies?.map((dependency) =>
                  (
                    <option key={dependency.id} value={dependency.id}>
                      {dependency.descripcion}
                    </option>
                  ))}
                </select>

              </div>

              <div className="col-2">
                <label htmlFor="txtcorrectanswers" className="form-label">Respuestas correctas</label>
                <input
                  type="number"
                  className="form-control"
                  id="txtcorrectanswers"
                  name="txtcorrectanswers"
                  min="1"
                  max="100"
                  defaultValue={Setting?.correctanswers}
                  onChange={e => ChangeValues(e.target.value, 'correctanswers')}
                />
              </div>

              <div className="col-2">
                <label htmlFor="txtquestionperpage" className="form-label"> Preguntas x pagina </label>
                <input
                  type="number"
                  className="form-control"
                  id="txtquestionperpage"
                  name="txtsquestionperpage"
                  min="1"
                  max="100"
                  defaultValue={Setting?.questionperpage}
                  onChange={e => ChangeValues(e.target.value, 'questionperpage')}
                />
              </div>

            </div>

            <div className="row" >

              <div className="col-3">

                <label htmlFor="txtpreinstructiontitle" className="form-label"> Titulo intrucciones </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtpreinstructiontitle"
                  name="txtpreinstructiontitle"
                  value={Setting?.preinstructiontitle}
                  placeholder={Setting?.preinstructiontitle}
                  onChange={e => ChangeValues(e.target.value, 'preinstructiontitle')}
                />

              </div>

              <div className="col-4">

                <label htmlFor="txtpreinstruction" className="form-label"> Pre intrucciones </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtpreinstruction"
                  name="txtpreinstruction"
                  value={Setting?.preinstruction}
                  placeholder={Setting?.preinstruction}
                  onChange={e => ChangeValues(e.target.value, 'preinstruction')}
                />

              </div>

             <div className="col-5">

                <label htmlFor="txtinstruction" className="form-label"> intrucciones </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtinstruction"
                  name="txtinstruction"
                  value={Setting?.instruction}
                  placeholder={Setting?.instruction}
                  onChange={e => ChangeValues(e.target.value, 'instruction')}
                />

              </div>
            </div>

            <div className="row" >

              <div className="col-4">
                <label htmlFor="txtsubtitle" className="form-label"> Sub Titulo </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtsubtitle"
                  name="txtsubtitle"
                  value={Setting?.subtitle}
                  placeholder={Setting?.subtitle}
                  onChange={e => ChangeValues(e.target.value, 'subtitle')}
                />
              </div>

              <div className="col-4">

                <label htmlFor="txtdownloadtitle" className="form-label"> Titulo Descarga </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtdownloadtitle"
                  name="txtdownloadtitle"
                  value={Setting?.downloadtitle}
                  placeholder={Setting?.downloadtitle}
                  onChange={e => ChangeValues(e.target.value, 'downloadtitle')}
                />

              </div>

              <div className="col-4">

                <label htmlFor="txtdownloadlink" className="form-label"> Descarga </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtdownloadlink"
                  name="txtdownloadlink"
                  value={Setting?.downloadlink}
                  placeholder={Setting?.downloadlink}
                  onChange={e => ChangeValues(e.target.value, 'downloadlink')}
                />

              </div>
            </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => Save()}>Save</Button>
          <Button onClick={() => GridModalShowOff()}>Close</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default SettingABM
