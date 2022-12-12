import React from "react";
import { Col, Row } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import MainLayout from "./../layouts/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <LoginForm />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Login;
