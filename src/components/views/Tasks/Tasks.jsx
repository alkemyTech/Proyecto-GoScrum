import { Header } from "../../Header/Header";

import "./Tasks.styles.css";

export const Tasks = () => (
  <>
    <Header />
    <main id="tasks">
      <div className="list_header">
        <h2>Mis Tareas</h2>
      </div>
      <div className="list">
        <div className="card">
          <div className="close">x</div>
          <h3>Tarea 1</h3>
          <h6>24/1/2022 16:40 hs.</h6>
          <h5>Facundo Uferer</h5>
          <button type="button">Nueva</button>
          <button type="button">Alta</button>
          <p>Descripción fake</p>
        </div>
      </div>

      <div className="list">
        <div className="card">
          <div className="close">x</div>
          <h3>Tarea 1</h3>
          <h6>24/1/2022 16:40 hs.</h6>
          <h5>Facundo Uferer</h5>
          <button type="button">Nueva</button>
          <button type="button">Alta</button>
          <p>Descripción fake</p>
        </div>
      </div>

      <div className="list">
        <div className="card">
          <div className="close">x</div>
          <h3>Tarea 1</h3>
          <h6>24/1/2022 16:40 hs.</h6>
          <h5>Facundo Uferer</h5>
          <button type="button">Nueva</button>
          <button type="button">Alta</button>
          <p>Descripción fake</p>
        </div>
      </div>
    </main>
  </>
);
