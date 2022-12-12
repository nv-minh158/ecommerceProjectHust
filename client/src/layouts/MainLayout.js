import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};

export default MainLayout;
