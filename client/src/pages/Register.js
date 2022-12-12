import React from "react";
import { Col, Row } from "react-bootstrap";
import RegisterForm from "../components/auth/RegisterForm";
import MainLayout from "../layouts/MainLayout";

const Register = () => {
  return (
    <MainLayout>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <RegisterForm />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Register;
