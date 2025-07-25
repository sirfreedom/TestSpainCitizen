import {Modal, Button} from 'react-bootstrap/'

function SettingModal(props) {

      return (
        <Modal show={props.show} aria-labelledby="contained-modal-title-vcenter1">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter1"> Nuevo Registro </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
    
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
    
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
export default SettingModal;
    