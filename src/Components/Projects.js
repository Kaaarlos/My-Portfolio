import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//carlos imagenes
import projImg27 from "../assets/img/3dPort.png";
import projImg28 from "../assets/img/calculadora.png";
import projImg29 from "../assets/img/EditMe.png";
import projImg30 from "../assets/img/cripto.png";
import projImg31 from "../assets/img/clima.png";
import projImg32 from "../assets/img/clonAmazon.png";
import projImg33 from "../assets/img/crudDjango.png";
import projImg34 from "../assets/img/cv.png";
import projImg35 from "../assets/img/electron.png";
import projImg36 from "../assets/img/listaTareasReac.png";
import projImg37 from "../assets/img/panaderia.png";
import projImg38 from "../assets/img/threeScroll.png";
import projImg39 from "../assets/img/crudLaravel.png";
import projImg40 from "../assets/img/contador.png";
import projImg41 from "../assets/img/crudPhp.png";
import projImg42 from "../assets/img/chatNode.png";
import projImg43 from "../assets/img/calculadoraJs.png";
import projImg44 from "../assets/img/calculadoraReact.png";
import projImg45 from "../assets/img/login.png";
import projImg46 from "../assets/img/phaserGame.png";
import projImg47 from "../assets/img/R&M.png";
import projImg48 from "../assets/img/testimonios.png";
import projImg49 from "../assets/img/ListaTareasReact.png";
import projImg50 from "../assets/img/todoVue.png";


//3D imagenes
import projImg4 from "../assets/img/lab.gif";
import projImg5 from "../assets/img/mine.gif";
import projImg6 from "../assets/img/oficina.gif";
import projImg7 from "../assets/img/desert.png";
import projImg8 from "../assets/img/3dPort.png";
import projImg9 from "../assets/img/banca.png";
import projImg10 from "../assets/img/cartoon.png";
import projImg11 from "../assets/img/cicles.png";
import projImg12 from "../assets/img/LegoCicles.png";
import projImg14 from "../assets/img/edificios.png";
import projImg15 from "../assets/img/forest.png";
import projImg16 from "../assets/img/future.png";
import projImg17 from "../assets/img/Gato.png";
import projImg18 from "../assets/img/gun.png";
import projImg19 from "../assets/img/kirby.png";
import projImg20 from "../assets/img/cubo.png";
import projImg21 from "../assets/img/LegoCycles.png";
import projImg22 from "../assets/img/nave.png";
import projImg23 from "../assets/img/pollo.png";
import projImg24 from "../assets/img/saul.png";
import projImg25 from "../assets/img/shiba.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const websites = [
    {
      title: "3D Webs",
      description: "Design & Development",
      imgUrl: projImg27,
      url: "https://harmonious-meringue-3f109b.netlify.app/",
    },
    {
      title: "3D Webs",
      description: "Design",
      imgUrl: projImg28,
      url: "https://helpful-hotteok-1b8d38.netlify.app/",
    },
    {
      title: "Interactives Webs",
      description: "Design & Development",
      imgUrl: projImg29,
      url: "https://remarkable-granita-72ee7a.netlify.app/",
    },
    {
      title: "Dao",
      description: "Cryptocurrencies",
      imgUrl: projImg30,
    },
    {
      title: "React",
      description: "Weather",
      imgUrl: projImg31,
    },
    {
      title: "Amazon Clone",
      description: "Design & Development",
      imgUrl: projImg32,
      url: "https://harmonious-smakager-cc26e4.netlify.app/",
    },
    {
      title: "Crud Django",
      description: "Design & Development",
      imgUrl: projImg33,
      url: "https://cruddjangop2.herokuapp.com/",
    },
    {
      title: "My CV",
      description: "CSS layout",
      imgUrl: projImg34,
      url: "https://kaaarlos.github.io/",
    },
    {
      title: "Electron List",
      description: "Design & Development",
      imgUrl: projImg35,
    },
    {
      title: "To do list",
      description: "Design & Development",
      imgUrl: projImg36,
    },
    {
      title: "Bakery",
      description: "Design",
      imgUrl: projImg37,
      url: "https://lively-pika-dd4eb1.netlify.app/",
    },
    {
      title: "3D Webs",
      description: "Design & Development",
      imgUrl: projImg38,
      url: "https://clinquant-haupia-38f84d.netlify.app/",
    },
    {
      title: "Crud Laravel",
      description: "Design & Development",
      imgUrl: projImg39,
    },
    {
      title: "Counter React",
      description: "Design & Development",
      imgUrl: projImg40,
    },
    {
      title: "Crud Php",
      description: "Design & Development",
      imgUrl: projImg41,
    },
    {
      title: "Chat NodeJs",
      description: "Design & Development",
      imgUrl: projImg42,
    },
    {
      title: "Calculator Javascript",
      description: "Development",
      imgUrl: projImg43,
    },
    {
      title: "Calculator React",
      description: "Design & Development",
      imgUrl: projImg44,
    },
    {
      title: "Authentication Firebase ",
      description: "Development",
      imgUrl: projImg45,
      url: "https://candid-cajeta-778015.netlify.app/",
    },
    {
      title: "Phaser Game",
      description: "Design",
      imgUrl: projImg46,
      url: "https://magical-palmier-99a1d2.netlify.app/",
    },
    {
      title: "API React",
      description: "Design & Development",
      imgUrl: projImg47,
    },
    {
      title: "Testimonials React",
      description: "Design & Development",
      imgUrl: projImg48,
    },
    {
      title: "To do List React",
      description: "Design & Development",
      imgUrl: projImg49,
    },
    {
      title: "To do List Vue",
      description: "Design & Development",
      imgUrl: projImg50,
      url: "https://eloquent-sundae-620cdb.netlify.app/",
    },

  ];
  
  //mariana imagenes
  const imagesRender = [
    {
      title: "3D Diorama",
      description: "Animation",
      imgUrl: projImg4,
      url: "https://www.contadorvisitasgratis.com/step_3.php#masquer",
    },
    {
      title: "3D Diorama",
      description: "Animation",
      imgUrl: projImg5,
    },
    {
      title: "3D Diorama",
      description: "Animation",
      imgUrl: projImg6,
    },
    {
      title: "3D Render",
      description: "Desert",
      imgUrl: projImg7,
    },
    {
      title: "3D Web",
      description: "Interactive Web",
      imgUrl: projImg8,
    },
    {
      title: "3D Render",
      description: "Park Alone",
      imgUrl: projImg9,
    },
    {
      title: "3D Render",
      description: "Design Cartoon",
      imgUrl: projImg10,
    },
    {
      title: "3D Render",
      description: "Ducks in Swimming pool",
      imgUrl: projImg11,
    },
    {
      title: "3D Render",
      description: "lights",
      imgUrl: projImg12,
    },
    {
      title: "3D Render",
      description: "Desert Realistic",
      imgUrl: projImg14,
    },
    {
      title: "3D Render",
      description: "Forest",
      imgUrl: projImg15,
    },
    {
      title: "3D Render",
      description: "Futuristic Render",
      imgUrl: projImg16,
    },
    {
      title: "3D Render",
      description: "Cute Cat",
      imgUrl: projImg17,
    },
    {
      title: "3D Render",
      description: "Rick and Morty Gun",
      imgUrl: projImg18,
    },
    {
      title: "3D Render",
      description: "Kirby Ranchero",
      imgUrl: projImg19,
    },
    {
      title: "3D Render",
      description: "Backroom",
      imgUrl: projImg20,
    },
    {
      title: "3D Render",
      description: "Lego gigant rock",
      imgUrl: projImg21,
    },
    {
      title: "3D Render",
      description: "spacecraft",
      imgUrl: projImg22,
    },
    {
      title: "3D Render",
      description: "little Chicken",
      imgUrl: projImg23,
    },
    {
      title: "3D Render",
      description: "Better call saul",
      imgUrl: projImg24,
    },
    {
      title: "3D Render",
      description: "Shiba Inu",
      imgUrl: projImg25,
    },
  ];

  const projectsAlex = [
    {
      title: "ART GALLERY",
      description: "Development",
      imgUrl: projImg33,
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
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">3D</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Under Construction</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          websites.map((project, index) => {
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
                            imagesRender.map((project, index) => {
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