import { useState, FC } from "react";
import { queryLogin } from "./api";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Input } from "ui/base/Input/Input";

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
          <Input value={login} onChange={setLogin} />
        </div>
        <div className="login-box">
          <Input value={password} onChange={setPassword} />
        </div>
        <button onClick={onSubmit}> нажми меня пожалуйста </button>
      </div>
    </div>
  );
};
