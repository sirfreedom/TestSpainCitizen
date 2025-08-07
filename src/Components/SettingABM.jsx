import { useState, useEffect } from "react";
import RGrid from './RGrid'
import { FindSetting } from '../Api/SettingHelper';
import { Modal, Button } from 'react-bootstrap/'
import { ListDependency } from '../Api/DependencyHelper';
import { EmptyAllProperties } from '../Api/BaseHelper';
import { ChangePropertyValue } from '../Api/BaseHelper';
import { UpdateSetting } from '../Api/SettingHelper';

export const SettingABM = () => {

  const [Settings, setSettings] = useState([]);
  const [ShowModalEdit, setShowModalEdit] = useState(false);
  const [Dependencies, setDependencies] = useState([]);
  const [Setting, setSetting] = useState();

  const GrillaConfiguracion = [
    {
      Tittle: 'Titulo',
      Selector: fila => fila.tittle,
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

    ListDependency().then(lDependencies => {
      setDependencies(lDependencies);
    });

  }, []);

  const GridEdit = id => {
    var oSetting;
    setShowModalEdit(true);
    oSetting = Settings.filter(x => x.Id === id);

    if (oSetting.length === 1) {
      setSetting(oSetting[0]);
    }
  };

  const GridModalShowOff = () => {
    setShowModalEdit(false);
  }

  const GridDelete = id => {
    console.log(id);
  };

  const GridNew = () => {
    setSetting([]);
    setShowModalEdit(true);
    setSetting(EmptyAllProperties(Setting));
    setSetting({
      ...Setting,
        Id : 0,
        IdDependency: 0,
        correctanswers:1,
        questionperpage:1
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
        Setting.IdDependency,
        Setting.cod,
        Setting.tittle,
        Setting.questionperpage,
        Setting.correctanswers,
        Setting.subtittle,
        Setting.instruction,
        Setting.downloadtittle,
        Setting.downloadlink,
        Setting.preinstructiontittle,
        Setting.preinstruction
        ).then(data => {
          console.log(data);
        }
      );
      //setSettings(Settings.filter(x => x.id !== Setting.Id));
      //setSettings([...Settings, Setting]);
    }
    setShowModalEdit(false);
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

                <label htmlFor="txtTittle" className="form-label"> Tittle </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtTittle"
                  name="txtTittle"
                  defaultValue={Setting?.tittle}
                  placeholder={Setting?.tittle}
                  onChange={e =>  ChangeValues(e.target.value, 'tittle')}
                />

              </div>

              <div className="col-3">

                <label htmlFor="ddlDependency">Dependency</label>
                <select id="ddlDependency"
                  className="form-select"
                  value={Setting?.IdDependency}
                  onChange={e => ChangeValues(e.target.value,'iddependency') }
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
                  max="1000"
                  defaultValue={Setting?.correctanswers}
                  placeholder={Setting?.correctanswers}
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
                  max="50"
                  defaultValue={Setting?.questionperpage}
                  placeholder={Setting?.questionperpage}
                  onChange={e => ChangeValues(e.target.value, 'questionperpage')}
                />
              </div>

            </div>

            <div className="row" >

              <div className="col-3">

                <label htmlFor="txtpreinstructiontittle" className="form-label"> Titulo intrucciones </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtpreinstructiontittle"
                  name="txtpreinstructiontittle"
                  defaultValue={Setting?.preinstructiontittle}
                  placeholder={Setting?.preinstructiontittle}
                  onChange={e => ChangeValues(e.target.value, 'preinstructiontittle')}
                />

              </div>

              <div className="col-4">

                <label htmlFor="txtpreinstruction" className="form-label"> Pre intrucciones </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtpreinstruction"
                  name="txtpreinstruction"
                  defaultValue={Setting?.preinstruction}
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
                  defaultValue={Setting?.instruction}
                  placeholder={Setting?.instruction}
                  onChange={e => ChangeValues(e.target.value, 'instruction')}
                />

              </div>
            </div>

            <div className="row" >

              <div className="col-4">
                <label htmlFor="txtsubtittle" className="form-label"> Sub Titulo </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtsubtittle"
                  name="txtsubtittle"
                  defaultValue={Setting?.tittle}
                  placeholder={Setting?.tittle}
                  onChange={e => ChangeValues(e.target.value, 'subtittle')}
                />
              </div>

              <div className="col-4">

                <label htmlFor="txtdownloadtittle" className="form-label"> Titulo Descarga </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtdownloadtittle"
                  name="txtdownloadtittle"
                  defaultValue={Setting?.downloadtittle}
                  placeholder={Setting?.downloadtittle}
                  onChange={e => ChangeValues(e.target.value, 'downloadtittle')}
                />

              </div>

              <div className="col-4">

                <label htmlFor="txtdownloadlink" className="form-label"> Descarga </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="txtdownloadlink"
                  name="txtdownloadlink"
                  defaultValue={Setting?.downloadlink}
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
