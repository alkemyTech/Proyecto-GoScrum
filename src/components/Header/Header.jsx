import { useNavigate } from "react-router-dom";

import "./Header.styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <img src="/img/goscrum.png" alt="Logo" />
      <div onClick={handleLogout}>x</div>
    </header>
  );
};
