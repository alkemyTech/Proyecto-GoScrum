import './App.css';

export const App = () => (
  <div className="container">
    <form>
      <h1>Iniciar sesión</h1>
      <div>
        <label>Email</label>
        <input name="email" type="text" />
      </div>
      <div>
        <label>Contraseña</label>
        <input name="password" type="password" />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
)