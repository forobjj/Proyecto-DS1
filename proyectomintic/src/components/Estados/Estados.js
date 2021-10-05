import React, {useState} from 'react';
import {InputGroup, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Breadcrumb, Form, FloatingLabel} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estados.css';


function Estados() {
  const [nombre,setNombre]=useState("");
  
  
  const cambiarNombre=(e)=>{
    const value=e.target.value;
    setNombre(value);
  };

  const guardarClick=(e)=>{
    window.alert(nombre + " esta en: ")
  };
  const limpiarClick=(e)=>{
    window.alert("Limpiar")
  }
  return (
    <Container >
    <legend className="leggend" name="contenedor">
    <div className="Estados">
      <h1 className="barra" >Venta</h1>
      <label >ID: </label>
      <input   id="nombre" name="nombre" value={nombre} onChange={cambiarNombre}></input>
      
      </div>
      <div className="Estados">
      <label>Estados</label>
      <select id="estado" name="estado">
        <option value="creacion">Creación</option>
        <option value="embalaje">Embalaje</option>
        <option value="despacho">Despacho</option>
        <option value="ruta">Ruta</option>
        <option value="ubicacion">Ubicación</option>
        </select> 
      </div>
      <div > 
      <Button color="primary" onClick={guardarClick}>Guardar</Button>
      <Button color="danger" onClick={limpiarClick}>Limpiar</Button>
      
      
      <onselect in="estado" name="estado" value={"Creación"}></onselect>
    </div>
    </legend>
    </Container>
    );
}

export {Estados};