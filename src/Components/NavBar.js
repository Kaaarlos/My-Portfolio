import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from "../assets/img/git.png";
import cv from "../assets/cv/CV_Carlos_Alberto_Ceja_Zapata.pdf";

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const mostrarPDF = () => {
    console.log("asdada")
    window.open(cv, '_blank');
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <a href="https://www.contadorvisitasgratis.com" title="contador de visitas"><img src="https://counter5.optistats.ovh/private/contadorvisitasgratis.php?c=b2lclsgad2m59wc5761ln7a98azxqksg" border="0" title="contador de visitas" alt="contador de visitas"></img></a>
              <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
              <button onClick={mostrarPDF}>
              <Nav.Link href="" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>CV</Nav.Link> 
              </button> 

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/karlosceja" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Kaaarlos" target="_blank"><img src={navIcon4} alt="" /></a>
                <a href="https://www.instagram.com/karlos_nwn/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              <a  href="https://harmonious-meringue-3f109b.netlify.app/" target="_blank">
                <button className="vvd">
                  <span>Let’s 3D</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
