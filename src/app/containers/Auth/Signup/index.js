import { Button, Col, Form, Input, Row, Typography, notification } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../../api";

function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const createNewUser = async (payload) => {
    try {
      const response = await createUser(payload);
      notification.success({
        message: `Signup successfuly`,
        description: `Welcome to our platform ${(
          <span className="font-bold">{response?.full_name}</span>
        )}, Now you can Login`,
        placement: "top",
      });
      navigate("/login");
    } catch (error) {
      notification.error({
        message: `Signup Failed`,
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
      email: `${values.email}`,
      full_name: `${values.fullname}`,
      is_active: true,
      password: `${values.password}`,
    };
    setLoading(true);
    createNewUser(payload);
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validatePassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Passwords must match!"));
    },
  });
  return (
    <div className="flex justify-center items-center h-187">
      <Row className="p-10 bg-slate-900 bg-opacity-80 rounded-lg shadow-xl">
        <Col>
          <Form
            name="signup-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Full name"
              name="fullname"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please input a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => validatePassword({ getFieldValue }),
              ]}
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
                Sign up
              </Button>
              <Typography.Paragraph>
                <div>
                  Already have an account? <Link to="/login">Log in</Link>
                </div>
              </Typography.Paragraph>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
