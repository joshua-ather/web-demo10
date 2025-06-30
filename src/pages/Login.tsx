import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../apis/auth";
import { useAuth } from "../auth/AuthContext";
import type { FormProps } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Card } from "antd";

type FieldType = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data: FieldType) => {
    try {
      const { access_token } = await loginApi(data.username, data.password);
      console.log("Login successful:", access_token);
      login(access_token);
      navigate("/");
    } catch (e) {
      alert("Login gagal");
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    handleLogin(values);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        maxWidth: "350px",
        height: "100vh",
        alignContent: "center",
      }}
    >
      <Card style={{ width: 350 }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form>
      </Card>
    </div>
  );
}
