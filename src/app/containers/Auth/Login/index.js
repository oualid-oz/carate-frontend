import { Button, Col, Form, Input, Row, Typography, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate } from "../../../api";
import { PDT_RULES } from "../../../rules";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getLogin = async (payload) => {
    try {
      const response = await authenticate(payload);
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("currentUser", payload.username);
      localStorage.setItem("isAuthenticated", true);
      notification.success({
        message: "Logged successfuly",
        description: (
          <div>
            Welcome back&nbsp;@
            <span className="font-bold">{payload.username}</span>
          </div>
        ),
        placement: "top",
      });
      navigate("/");
    } catch (error) {
      console.log("error", error?.response?.data);
      notification.error({
        message: "Login Failed",
        description:
          error?.response?.status === 400
            ? error?.response?.data?.detail
            : error?.message,
        placement: "top",
      });
    }
  };

  const onFinish = (values) => {
    const payload = {
      username: `${values.username}`,
      password: `${values.password}`,
    };
    setLoading(true);
    getLogin(payload);
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center items-center h-187">
      <Row className="p-10 bg-slate-900 bg-opacity-80 rounded-lg shadow-xl">
        <Col>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[PDT_RULES.required]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[PDT_RULES.required]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-100 mb-3"
                loading={loading}
              >
                Log in
              </Button>
              <Typography.Paragraph>
                <div>
                  Don't have an account? <Link to="/signup">Sign up </Link>
                </div>
              </Typography.Paragraph>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
