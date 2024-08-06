import React, { useState, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaLinkedin,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub as FaGithubSkill,
  FaAws,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
import {
  SiSpring,
  SiTypescript,
  SiKubernetes,
  SiApachekafka,
  SiJson,
  SiYaml,
  SiPostgresql,
  SiOracle,
  SiMongodb,
  SiAngular,
  SiGooglecloud,
} from "react-icons/si";
import iconWhite from "./assets/img/icon_white.png";
import iconBlack from "./assets/img/icon_black.png";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [educationImage, setEducationImage] = useState("vallegrandelogo.png");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section.offsetTop <= scrollPosition + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("light-mode");
  };

  const skillCategories = [
    {
      name: "Backend",
      skills: [
        { name: "Java", level: 90, icon: <FaJava /> },
        { name: "Python", level: 85, icon: <FaPython /> },
        { name: "Node.js", level: 90, icon: <FaNodeJs /> },
        { name: "Spring", level: 85, icon: <SiSpring /> },
      ],
    },
    {
      name: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 85, icon: <SiPostgresql /> },
        { name: "Oracle SQL", level: 80, icon: <SiOracle /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb /> },
      ],
    },
    {
      name: "DevOps y Cloud",
      skills: [
        { name: "Docker", level: 80, icon: <FaDocker /> },
        { name: "Kubernetes", level: 75, icon: <SiKubernetes /> },
        { name: "AWS", level: 80, icon: <FaAws /> },
        { name: "Google Cloud", level: 75, icon: <SiGooglecloud /> },
      ],
    },
    {
      name: "Herramientas y Tecnologías",
      skills: [
        { name: "Git", level: 85, icon: <FaGit /> },
        { name: "GitHub", level: 85, icon: <FaGithubSkill /> },
        { name: "Kafka", level: 70, icon: <SiApachekafka /> },
        { name: "JSON", level: 90, icon: <SiJson /> },
        { name: "YAML", level: 85, icon: <SiYaml /> },
      ],
    },
    {
      name: "Frontend (Conocimientos básicos)",
      skills: [
        { name: "HTML", level: 70, icon: <FaHtml5 /> },
        { name: "CSS", level: 65, icon: <FaCss3Alt /> },
        { name: "TypeScript", level: 60, icon: <SiTypescript /> },
        { name: "Angular", level: 55, icon: <SiAngular /> },
      ],
    },
  ];

  const toggleEducationImage = () => {
    setEducationImage(
      educationImage === "vallegrandelogo.png"
        ? "vglocal.png"
        : "vallegrandelogo.png"
    );
  };

  const projects = [
    {
      title: "Sistema de Microservicios para E-commerce",
      description:
        "Desarrollé una arquitectura de microservicios escalable para una plataforma de comercio electrónico de alto tráfico. Implementé servicios como gestión de inventario, procesamiento de pedidos y sistema de recomendaciones utilizando Spring Boot, Kafka para comunicación asíncrona y Docker para contenerización.",
      technologies: ["Java", "Spring Boot", "Kafka", "Docker", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/ecommerce-microservices",
    },
    {
      title: "API de Análisis de Sentimientos",
      description:
        "Creé una API RESTful que utiliza procesamiento de lenguaje natural para analizar sentimientos en texto. La API está construida con Python y Flask, e integra modelos de machine learning para proporcionar análisis precisos. Implementada en AWS Lambda para escalabilidad automática.",
      technologies: ["Python", "Flask", "NLTK", "AWS Lambda", "DynamoDB"],
      githubLink: "https://github.com/yourusername/sentiment-analysis-api",
    },
    {
      title: "Dashboard de Monitoreo en Tiempo Real",
      description:
        "Desarrollé un dashboard interactivo para monitorear métricas de sistema en tiempo real. Utilicé Node.js con Express para el backend, Socket.IO para actualizaciones en tiempo real, y React para una interfaz de usuario dinámica. La aplicación procesa y visualiza grandes volúmenes de datos de logs.",
      technologies: ["Node.js", "Express", "Socket.IO", "React", "MongoDB"],
      githubLink:
        "https://github.com/yourusername/realtime-monitoring-dashboard",
    },
  ];

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <nav>
        <div className="logo">
          <img src={isDarkMode ? iconWhite : iconBlack} alt="Logo" />
        </div>
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              Sobre mi
            </a>
          </li>

          <li>
            <a
              href="#education"
              className={activeSection === "education" ? "active" : ""}
            >
              Educación
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contactos
            </a>
          </li>
        </ul>
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
      </nav>

      <main>
        <section id="home">
          <div className="home-content">
            <div
              className="text-content"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h1>
                Hola, soy <span className="highlight">Pedro PL</span>
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Backend Developer
              </h2>
              <p data-aos="fade-up" data-aos-delay="600">
                Especializado en crear soluciones robustas y escalables.
                Apasionado por la tecnología y la innovación.
              </p>
              <div
                className="cta-buttons"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <a href="#contact" className="cta-button primary">
                  Contáctame
                </a>
                <a
                  href={`${process.env.PUBLIC_URL}/CV_PedroPL.pdf`}
                  className="cta-button secondary"
                  download="Pedro_PL_CV.pdf"
                >
                  Curriculum vitae
                </a>
              </div>
            </div>
            <div
              className="profile-image"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img src={require("./assets/img/cat.jpg")} alt="Pedro PL" />
            </div>
          </div>
          <div className="scroll-down animate__animated animate__fadeIn animate__delay-1s">
            <a href="#about">
              <span className="scroll-text">Scroll Down</span>
              <span className="scroll-icon">&#9660;</span>
            </a>
          </div>
        </section>

        <section id="about">
          <h2 data-aos="fade-down">Sobre Mi</h2>
          <div className="about-content" data-aos="fade-up">
            <div
              className="about-text"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <p>
                Soy un{" "}
                <span className="highlight-word">
                  egresado en Análisis de Sistemas
                </span>{" "}
                con una sólida formación en{" "}
                <span className="highlight-word">desarrollo backend</span>. Mi
                educación en Valle Grande me ha proporcionado una base fuerte en{" "}
                <span className="highlight-word">
                  Java, Python y tecnologías web
                </span>
                , con un enfoque especial en el{" "}
                <span className="highlight-word">
                  diseño de sistemas escalables
                </span>{" "}
                y{" "}
                <span className="highlight-word">
                  arquitecturas de microservicios
                </span>
                .
              </p>
              <p>Durante mi formación, he adquirido experiencia en:</p>
              <ul>
                <li>
                  Desarrollo de{" "}
                  <span className="highlight-word">APIs RESTful</span> y
                  aplicaciones web
                </li>
                <li>
                  Implementación de{" "}
                  <span className="highlight-word">bases de datos</span>{" "}
                  relacionales y NoSQL
                </li>
                <li>
                  Aplicación de principios de{" "}
                  <span className="highlight-word">diseño de software</span> y
                  patrones
                </li>
                <li>
                  Uso de{" "}
                  <span className="highlight-word">
                    sistemas de control de versiones
                  </span>{" "}
                  como Git
                </li>
                <li>
                  Participación en proyectos usando{" "}
                  <span className="highlight-word">metodologías ágiles</span>
                </li>
              </ul>
              <p>
                Aunque mi especialidad es el backend, también tengo
                conocimientos en{" "}
                <span className="highlight-word">tecnologías frontend</span>, lo
                que me permite comprender el panorama completo del desarrollo de
                aplicaciones.
              </p>
              <p>
                Estoy entusiasmado por aplicar mis conocimientos en un entorno
                profesional y continuar aprendiendo. Busco oportunidades que me
                permitan crecer como desarrollador y contribuir a proyectos
                innovadores.
              </p>
            </div>
            <div
              className="about-stats"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Proyectos Académicos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Años de Formación</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tecnologías Dominadas</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <h2 data-aos="fade-down">Educación</h2>
          <div className="education-content" data-aos="fade-up">
            <div
              className="education-text"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3>Análisis de Sistemas</h3>
              <p>Instituto Superior Tecnológico Valle Grande</p>
              <p>2021 - 2024</p>
              <p>
                Durante mi formación en Valle Grande, adquirí sólidos
                conocimientos en desarrollo de software, bases de datos,
                análisis de sistemas y metodologías ágiles. Participé en
                diversos proyectos prácticos que me permitieron aplicar la
                teoría en escenarios reales, preparándome para los desafíos del
                mundo laboral en tecnología.
              </p>
              <ul>
                <li>Desarrollo de aplicaciones web y móviles</li>
                <li>Gestión de bases de datos SQL y NoSQL</li>
                <li>Análisis y diseño de sistemas de información</li>
                <li>Implementación de metodologías ágiles (Scrum)</li>
                <li>Fundamentos de redes y seguridad informática</li>
              </ul>
            </div>
            <div
              className="education-image"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img
                src={require(`./assets/img/${educationImage}`)}
                alt="Valle Grande"
                onClick={toggleEducationImage}
              />
            </div>
          </div>
        </section>

        <section id="skills">
          <h2 data-aos="fade-down">Mis Habilidades</h2>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
            >
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    data-aos="fade-up"
                    data-aos-delay={skillIndex * 100}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="projects">
          <h2 data-aos="fade-down">Mis Proyectos</h2>
          <div className="projects-grid" data-aos="fade-up">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project"
                >
                  Ver en GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 data-aos="fade-down">Contáctame</h2>
          <div className="contact-content" data-aos="fade-up">
            <div className="contact-text">
              <p>
                Estoy siempre interesado en{" "}
                <span className="highlight-word">nuevos proyectos</span> y{" "}
                <span className="highlight-word">
                  oportunidades de colaboración
                </span>
                . Si tienes una{" "}
                <span className="highlight-word">idea innovadora</span>,
                necesitas ayuda con un{" "}
                <span className="highlight-word">proyecto existente</span> o
                simplemente quieres charlar sobre{" "}
                <span className="highlight-word">tecnología</span>, ¡no dudes en
                contactarme!
              </p>
              <p>Puedes contactarme en los siguientes medios:</p>
            </div>
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/pedro-hugo-porras-luyo-6834a923b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/PedroLuyo"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://wa.me/51986062248"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:pedro.luyo.2003@gmail.com"
                className="contact-icon"
              >
                <FaMailBulk />
                <span>Email</span>
              </a>
            </div>
            <div className="availability">
              <h3>Disponibilidad</h3>
              <p>
                Actualmente estoy disponible para proyectos web y oportunidades
                de trabajo.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer data-aos="fade-up">
        <p>&copy; 2024 Pedro PL. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
