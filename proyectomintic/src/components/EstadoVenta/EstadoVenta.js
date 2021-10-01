import React from 'react';
import './EstadoVenta.css';

export default class EstadoVenta extends React.Component {

    render() {
        return (
            <div className="contenedor-estadoventas">

                <div className="contenedor-img">
                    {/* <h1>Nota</h1> */}
                    <p>Nombre Vendedor</p>
                    <img alt="FotoVendedor"></img>
                </div>
                <div className="contenedor-formulario">
                    <form className="formulario-estado" id="id-formulario">
                        <div className="contenedor-izquierda">
                            <label for="id-venta">ID Venta</label>
                            <input type="number" id="id-venta" required placeholder="Ingrese el ID de la venta"></input>
                            <label for="id-cliente">ID Cliente</label>
                            <input type="number" id="id-cliente" required placeholder="Ingrese el ID del cliente"></input>
                            <label for="id-valorunitario">Nombre Del Cliente</label>
                            <input type="text" id="id-nombrecliente" placeholder="Ingrese el nombre del Usuario"></input>
                            <div className="contenedor-consultar">
                                <input type="submit" value="Consultar" className="consultar"></input>
                            </div>

                        </div>
                        <div className="contenedor-derecho">
                            <table class="tabla">
                              <tr>
                                <th>ID Venta</th>
                                <th>ID Vendedor</th>
                                <th>ID Cliente</th>
                                <th>Nombre Cliente</th>
                                <th>Valor Venta</th>
                                <th>Estado</th>
                              </tr>
                              <tr>
                                  <td><p>1234</p></td>
                                  <td><p>1234</p></td>
                                  <td><p>1234</p></td>
                                  <td><p>Simon</p></td>
                                  <td><p>1234</p></td>
                                  <td>
                                    <select>
                                      <option>Creacion</option>
                                      <option>Embalaje</option>
                                      <option>Despacho</option>
                                      <option>Ruta</option>
                                    </select>
                                  </td> 
                              </tr>
                            </table>
                        </div>
                    </form>
                  </div>
            </div>
        )
    }
}
