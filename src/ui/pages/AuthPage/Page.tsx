import { useState, FC } from "react";
import { queryLogin } from "./api";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export const AuthPage: FC = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async () => {
    const token = await queryLogin(login, password);
    if (token === "BAD") {
      alert("Неверный логин или пароль");
      return;
    }

    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Представься брат</h1>
        <div className="login-box">
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="login-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={onSubmit}> нажми меня пожалуйста </button>
      </div>
    </div>
  );
};
