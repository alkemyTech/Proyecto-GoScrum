import { useEffect, useState } from "react";
import { Header } from "../../Header/Header";

import "./Tasks.styles.css";

export const Tasks = () => {
  const [isPhone, setIsPhone] = useState(
    window.innerWidth < 900 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 900) setIsPhone(true);
    else setIsPhone(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  return (
    <>
      <Header />
      <main id="tasks">
        <div className="wrapper_list">
          <div className="list_header">
            <h2>Mis Tareas</h2>
          </div>
          {isPhone ? (
            <div className="list phone">
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
          ) : (
            <div className="list_group">
              <div className="list">
                <div className="card">
                  <div className="close">x</div>
                  <h3>Tarea 1</h3>
                  <h6>24/1/2022 16:40 hs.</h6>
                  <h5>Facundo Uferer</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>
                    {
                      limitString(`Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lore`).string
                    }
                  </p>
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
            </div>
          )}
        </div>
      </main>
    </>
  );
};
