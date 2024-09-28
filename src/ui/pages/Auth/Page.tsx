import { useState, FC } from "react";
import { queryLogin } from "./api";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { LockOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginAndRegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.span<{ color: string; size?: number }>`
  text-align: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size + "px"};
`;

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
    <Container>
      <Form
        layout="vertical"
        onFinish={onSubmit}
        style={{
          backgroundColor: "#2e2d2d",
          padding: "30px",
          borderRadius: "10px",
          minWidth: "300px",
        }}
      >
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Text color="#b7b5b5" size={30}>
            Представься брат!
          </Text>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            autoFocus
            prefix={<UserOutlined />}
            placeholder="username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <LoginAndRegisterContainer>
            <Button icon={<SendOutlined />} type="primary" htmlType="submit">
              зайти
            </Button>
            <Link to={"/register"}>
              <Text color="#fafafa">я новенький!</Text>
            </Link>
          </LoginAndRegisterContainer>
        </Form.Item>
      </Form>
    </Container>
  );
};
