import logo from './logo.svg';
import './GestionVendedores.css';

function GestionVendedores() {
  return ( <div className="contenedor-vendedor">
  <div className="contenedor vendedor">
    <h1>Gestion de vendedores</h1>
  </div>
  <div className="contenedor-formulario">
    <form className="formulario" id="id-formulario">
      <div className="contenedor-izquierda">
        <label for="id-vendedor">ID Vendedor</label>
        <input type="id-Vendedor" id="Id vendedor" required placeholder="Ingrese el ID del vendedor"></input>
        <label for="id-nombre">Nombre</label>
        <input type="id_nombre" id="Nombre" required placeholder="Ingrese El nombre del vendedor"></input>
        <label for="id-especialidad">Especialidad</label>
        <input type="id-especialidad" id="Especialidad" required placeholder="Ingrese la especialidad"></input>
        <label for="id-celular">Numero del celular</label>
        <input type="number" id="celular" required placeholder="Ingrese el numero del celular"></input>
        <label for="id-Fingreso">Fech de ingreso</label>
        <input type="date" id="fecha_ingreso" required placeholder="Fecha de ingreso"></input>        
      </div>
      
    </form>
    <div className="contenedor-enviar">
      <input className="enviar" type="submit" id="id-submit" form="id-formulario" value="Registrar Vendedor"></input>
    </div>
  </div>
   
</div>
  );
}

export default App;
