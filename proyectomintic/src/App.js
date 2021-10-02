import './App.css';
import AdminVentas from './components/AdminVentas/AdminVentas';
import EstadoVenta from './components/EstadoVenta/EstadoVenta';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import logo from './logo.svg';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="AppGeneral">
      <div className="AppHeader">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </header>
      </div>
      {isAuthenticated ? (
        <div className="AppInterno">
          <div className="contenedorAdminVentas">
            <AdminVentas></AdminVentas>
          </div>
          <div className="contenedorEstadoVentas">
            <EstadoVenta></EstadoVenta>
          </div>
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
}

export default App;
