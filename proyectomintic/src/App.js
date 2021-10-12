import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login/Login";
import MenuNavegacion from './components/MenuNavegacion/MenuNavegacion';


function App() {
  
  const { isAuthenticated } = useAuth0();

  return (
    <div className="AppGeneral">
        <div className="AppHeader">
        <header className="App-header">
          {isAuthenticated ? (
            <>
              <MenuNavegacion></MenuNavegacion>
              
            </>
          ) : (
            <LoginButton />
          )}
        </header>
      </div>
      
    </div>
  );
}

export default App;
