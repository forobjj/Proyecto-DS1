import React from 'react';
import './GestionUsuario.css';

export default function GestionUsuario() {
  return (
    <React.Fragment>
      <body>
      <h1>Gestion de usuario</h1>
      <label for="idusuario">ID Usuario</label><br />
      <input type="tetx" id="idusuario" name="idusuario" required="true" /><br />
      <label for="cargo">Cargo</label><br />
      <select id="cargo" name="cargo">
        <option value="administrador">Administrador</option>
        <option value="vendedor">Vendedor</option>
      </select><br />
      <label for="estadousuario">Estado del Usuario</label><br />
      <select id="estadousuario" name="estadousuario">
        <option value="pendiente">Pendiente</option>
        <option value="autorizado">Autorizado</option>
        <option value="noautorizado">No Autorizado</option>
      </select><br /><br />
      <input type="submit" value="Guardar" />
      <input type="submit" value="Cancelar" />
      </body>
    </React.Fragment>
  );
}


