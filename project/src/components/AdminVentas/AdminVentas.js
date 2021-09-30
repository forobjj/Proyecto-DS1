import React from 'react';
import './AdminVentas.css';

export default class AdminVentas extends React.Component{
  
  render(){
    return(
      <div className="contenedor-ventas">
        
        <div className="contenedor-img">
          {/* <h1>Nota</h1> */}
          <p>Nombre Vendedor</p>
          <img alt="FotoVendedor"></img>
        </div>
        <div className="contenedor-formulario">
          <form className="formulario" id="id-formulario">
            <div className="contenedor-izquierda">
              <label for="id-venta">ID</label>
              <input type="number" id="id-venta" required placeholder="Ingrese el ID de la venta"></input>
              <label for="id-valor">Valor Total Venta</label>
              <input type="number" id="id-valor" required placeholder="Ingrese el valor de la venta"></input>
              <label for="id-descripcion">Descripción</label>
              <textarea id="id-descripcion" rows="10" cols="25" placeholder="Descripcion de la venta"></textarea>
            </div>
            <div className="contenedor-derecho">
              <label for="id-inicial">Fecha Inicial</label>
              <input type="date" id="id-inicial" required></input>
              <label for="id-pago">Fecha de Pago</label>
              <input type="date" id="id-pago" required></input>
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



