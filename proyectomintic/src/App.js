import './App.css';
import AdminVentas from './components/AdminVentas/AdminVentas';
import EstadoVenta from './components/EstadoVenta/EstadoVenta';

function App() {
  
  return (
    <div className="App">
      <div className="contenedorAdminVentas">
        <AdminVentas></AdminVentas>  
      </div>
      <div className="contenedorEstadoVentas">   
        <EstadoVenta></EstadoVenta> 
      </div>
    </div>
  );
}

export default App;
