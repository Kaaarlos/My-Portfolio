import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//carlos imagenes
import projImg1 from "../assets/img/calculadora.png";
import projImg2 from "../assets/img/Gato.png";
import projImg3 from "../assets/img/EditMe.png";

//mariana imagenes
import projImg4 from "../assets/img/GaleriaArteMariana.png";
import projImg5 from "../assets/img/gatoGame.png";
import projImg6 from "../assets/img/juegoMariana.png";

//alex imagenes
import projImg7 from "../assets/img/alex1.png";
import projImg8 from "../assets/img/alex2.png";
import projImg9 from "../assets/img/alex3.png";




import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "3D WEBS",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "3D RENDERS",
      description: "DesigN",
      imgUrl: projImg2,
    },
    {
      title: "INTERACTIVE WEB",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  
  //mariana imagenes
  const projectsMariana = [
    {
      title: "ART GALLERY",
      description: "Development",
      imgUrl: projImg4,
    },
    {
      title: "WEB GAME",
      description: "Games",
      imgUrl: projImg5,
    },
    {
      title: "WEB GAME",
      description: "Games",
      imgUrl: projImg6,
    },
  ];
  
  //alex imagenes
  const projectsAlex = [
    {
      title: "3D WEN",
      description: "Development",
      imgUrl: projImg7,
    },
    {
      title: "WEB GAME",
      description: "Games",
      imgUrl: projImg8,
    },
    {
      title: "CALCULATOR",
      description: "Games",
      imgUrl: projImg9,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects that have been created throughout the university.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Carlos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mariana</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Alex</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projectsMariana.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {
                            projectsAlex.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}