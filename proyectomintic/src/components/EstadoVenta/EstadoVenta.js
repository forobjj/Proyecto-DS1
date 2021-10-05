import React from 'react';
import './EstadoVenta.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EstadoVenta extends React.Component {

    render() {
        return (
            <div className="contenedor-estadoventas">
               
                <div className="contenedor-head">
                    <h1>Estado de Ventas</h1>
                    <p>Nombre Vendedor</p>
                    <img alt="FotoVendedorEstado"></img>
                </div>
                <div className="contenedor-formulario-estado">
                    <form className="formulario-estado" id="id-formulario">
                        <div className="contenedor-estado-izquierda">
                            <label for="id-venta-estado">ID Venta</label>
                            <input type="number" id="id-venta-estado" required placeholder="Ingrese el ID de la venta"></input>
                            <label for="id-cliente-estado">ID Cliente</label>
                            <input type="number" id="id-cliente-estado" required placeholder="Ingrese el ID del cliente"></input>
                            <label for="id-valorunitario-estado">Nombre Del Cliente</label>
                            <input type="text" id="id-nombrecliente-estado" placeholder="Ingrese el nombre del Usuario"></input>
                            <div className="contenedor-consultar">
                                <input type="submit" value="Consultar" className="consultar"></input>
                            </div>

                        </div>
                        <div className="contenedor-estado-derecho">
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
