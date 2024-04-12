import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useLoginMutation } from "./authEndpoint";
import { useEffect } from "react";
import { saveToLocalStorage } from "../Common/utils/localStorage";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [
    login,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess,
    },
  ] = useLoginMutation();
  const onFinish = (data: any) => {
    login(data);
  };
  console.log(loginData);
  useEffect(() => {
    if (isSuccess) {
      messageApi.open({
        type: "success",
        content: "Login successful",
      });
      if (loginData?.token) {
        saveToLocalStorage("accessToken", loginData?.token);
      }
      // Reset the form fields after successful submission
      form.resetFields();
      navigate("/dashboard");
    }
  }, [isSuccess]);
  return (
    <>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 500,
          height: "100vh",
          margin: "auto",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h1>login</h1>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
              defaultValue={"eve.holt@reqres.in"}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              defaultValue={"cityslicka"}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loginIsLoading}
              style={{ width: "100%" }}
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
