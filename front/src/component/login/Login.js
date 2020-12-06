import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import './Login.scss';
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    onSubmit();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {

    if (validateEmail(username)) {
        // check username by api

    } else {
      message.error("It's not an email!");
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div>
      <div className="login-zone">
        <h2>Login</h2>
        <hr />
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onSubmit={onSubmit}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input 
                className="input-field"
                placeholder="username"
                onChange={onChangeUsername} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password 
                className="input-field"
                placeholder="password"
                onChange={onChangePassword} />
          </Form.Item>

          <Form.Item >
            <Button align="right" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        
      </div>
    </div>
  );
}

export default Login;