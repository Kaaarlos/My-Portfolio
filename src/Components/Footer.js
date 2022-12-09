import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/GIT.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Kaaarlos" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/MarianaJimGar" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Alejandro-Sedano" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}