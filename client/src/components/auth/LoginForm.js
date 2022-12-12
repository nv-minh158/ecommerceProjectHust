import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginForm;
  const handleChange = (event) => {
    return setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData) {
        alert(loginData.message);
      } else {
        alert("Có lỗi khi đăng nhập!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="mb-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={email}
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>

      <p style={{ display: "flex", justifyContent: "center" }}>
        Don't have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ms-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
