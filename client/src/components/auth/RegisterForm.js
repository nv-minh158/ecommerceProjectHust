import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = registerForm;
  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const registerData = await registerUser(registerForm);
      if (registerData) {
      } else {
        alert("Có lỗi khi đăng kí");
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
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" type="submit">
            Register
          </Button>
        </Form.Group>
      </Form>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ms-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
