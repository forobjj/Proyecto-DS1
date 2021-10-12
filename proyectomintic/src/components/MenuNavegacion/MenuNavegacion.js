import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AdminVentas from '../AdminVentas/AdminVentas';
import EstadoVenta from '../EstadoVenta/EstadoVenta';
import Estados from '../Estados/Estados';
import GestionVendedores from '../GestionVendedores/GestionVendedores';
import GestionUsuario from '../GestionUsuario/GestionUsuario';
import './MenuNavegacion.css';
import { LogoutButton } from '../Login/Logout';

export default class MenuNavegacion extends React.Component{
  render(){
    return(
      <Router>
        <div className="btn-group">
          <Link to="/" className="btn">Administracion de Ventas</Link>
          <Link to="/estadoventas" className="btn">Estado de Ventas</Link>
          <Link to="/estados" className="btn">Estado</Link>
          <Link to="/gestionusuarios" className="btn">Gestion de Usuarios</Link>
          <Link to="/gestionvendedores" className="btn">Gestion Vendedores</Link>
          <LogoutButton className="cerrar"></LogoutButton>
          {/* <NavLink to="/users" className="btn btn-dark" activeClassName="active">Users</NavLink> */}
        </div>
        <Switch>
          <Route path="/" exact>
            <AdminVentas />
          </Route>
          <Route path="/estadoventas" exact>
            <EstadoVenta />
          </Route>
          <Route path="/estados" exact>
            <Estados />
          </Route>
          <Route path="/gestionusuarios" exact>
            <GestionUsuario />
          </Route>
          <Route path="/gestionvendedores" exact>
            <GestionVendedores />
          </Route>
          
        </Switch>
      </Router>
    )
  }
}
