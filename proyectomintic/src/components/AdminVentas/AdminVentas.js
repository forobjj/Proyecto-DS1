import React from 'react';
import './AdminVentas.css';

export default class AdminVentas extends React.Component{

  render(){
    return(
      
      <div className="contenedor-ventas">
        <div className="contenedor-img">
          <h1>Administrar Ventas</h1>
          <p>Nombre Vendedor</p>
          <img alt="FotoVendedor"></img>
        </div>
        <div className="contenedor-formulario">
          <form className="formulario" id="id-formulario">
            <div className="contenedor-izquierda">
              <label for="id-venta">ID Venta</label>
              <input type="number" id="id-venta" required placeholder="Ingrese el ID de la venta"></input>
              <label for="id-cantidad">Cantidad</label>
              <input type="number" id="id-cantidad" required placeholder="Ingrese la cantidad"></input>
              <label for="id-valorunitario">Valor Unitario</label>
              <input type="number" id="id-valorunitario" required placeholder="Ingrese el valor unitario"></input>
              <label for="id-valor">Valor Total Venta</label>
              <input type="number" id="id-valor" required placeholder="Ingrese el valor de la venta"></input>
              
            </div>
            <div className="contenedor-derecho">
              <label for="id-cliente">ID Cliente</label>
              <input type="number" id="id-cliente" required placeholder="Ingrese el ID del cliente"></input>
              <label for="id-nombre">Nombre y Apellido Cliente</label>
              <input type="text" id="id-nombre" required placeholder="Ingrese el nombre y apellido del Cliente"></input>
              <label for="id-fecha">Fecha</label>
              <input type="date" id="id-fecha" required></input>
              <label for="id-descripcion">Descripción</label>
              <textarea id="id-descripcion" rows="2" cols="25" placeholder="Descripcion de la venta"></textarea>
            </div>
            
          </form>
          <div className="contenedor-enviar">
            <input className="enviar" type="submit" id="id-submit" form="id-formulario" value="Registrar Venta"></input>
          </div>
        </div>
         
      </div>
    )
  }
}


// const AdminVentas = () => (
//   <div className="nueva">
//     {/* <link rel="stylesheet" href="./AdminVentas.css"/> */}
//     <h1 className="title">Casa</h1>
//   </div>
// );



