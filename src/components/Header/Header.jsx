import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const { tasks } = useSelector((state) => {
    return state.tasksReducer;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <img src="/img/goscrum.png" alt="Logo" />
      <div className="wrapper_right_header">
        <div>
          <button onClick={() => navigate("/donate", { replace: true })}>
            Donar
          </button>
        </div>
        <div className="black">Tareas creadas: {!tasks ? 0 : tasks.length}</div>
        <div className="black">{localStorage.getItem("userName")}</div>
        <div onClick={handleLogout}>x</div>
      </div>
    </header>
  );
};
