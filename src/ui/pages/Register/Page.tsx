import { useState, FC } from "react";
import { queryRegister } from "./api";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";
import styled from "styled-components";
import { LockOutlined, SendOutlined } from "@ant-design/icons";
import { UserRegisterData } from "./types";

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

export const RegisterPage: FC = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [age, setAge] = useState<string>("");

  const onSubmit = async () => {
    const data: UserRegisterData = {
      firstName,
      lastName,
      nickname,
      email,
      age: +age,
      password,
      passwordConfirmation: confirmPassword,
    };

    const token = await queryRegister(data);
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
            Зарегистрироваться
          </Text>
        </Form.Item>

        <Form.Item
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input
            autoFocus
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="nickname"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
            },
          ]}
        >
          <Input
            placeholder="nickname"
            value={lastName}
            onChange={(e) => setNickname(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <InputNumber
            min="10"
            max="100"
            placeholder="age"
            value={age}
            onChange={(value) => value && setAge(value)}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <Form.Item
          name="repeat-password"
          rules={[
            {
              required: true,
              message: "Please repeat your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <LoginAndRegisterContainer>
            <Button icon={<SendOutlined />} type="primary" htmlType="submit">
              примкнуть к нашим рядам!
            </Button>
          </LoginAndRegisterContainer>
        </Form.Item>
      </Form>
    </Container>
  );
};
