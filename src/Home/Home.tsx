import "./home.css";
import { Email, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import perfil from "../assets/perfil.jpeg";
import { useEffect } from "react";
import Typed from "typed.js";
import Skills from "../Skills/Skills";
import { Project } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

export function Home() {
  useEffect(() => {
    const typingEffect = new Typed(".author", {
      strings: ["Yuanyuan Liu", "Developer"],
      loop: true,
      typeSpeed: 120,
      backSpeed: 40,
      backDelay: 1500,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div className="home_container ">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-12 col-lg-6 home_left">
            <h3>Hello</h3>
            <h1>
              I'm <span className="author"></span>
            </h1>
            <p>
              I am dedicated and self-motivated to learn and expand my skills in
              order to become a skilled developer. I am excited to bring my
              knowledge and enthusiasm in collaborative efforts, working closely
              with others to achieve remarkable outcomes.
            </p>
            <div className="left_btn">
              <Link to="/Projects" className="nav-link ">
                <button>View My Work</button>
              </Link>
            </div>
            <div className="social_contact">
              <Link
                to="mailto:racheliu9816@gmail.com"
                target="_blank"
                className="nav-link "
              >
                <div className="social_email">
                  <Email fontSize="medium" />
                  <span>EMAIL</span>
                </div>
              </Link>
              <Link
                to="https://github.com/YuanyuanLiu2304"
                target="_blank"
                className="nav-link"
              >
                <div className="social_github">
                  <GitHub fontSize="medium" />
                  <span>GITHUB</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 home_right">
            <img src={perfil} alt="img" />
          </div>
        </div>
        <div className="skills_wrapper ">
          <div className="w-50 m-auto">
            <h1 style={{ letterSpacing: "2px" }}>
              <span
                className="bi bi-circle-fill pe-3"
                style={{ color: "#ffd109", fontSize: "22px" }}
              ></span>
              Skills
            </h1>
            <p className="pt-3 pb-5 text-white-50 ">
              Through practical projects and assignments, I have gained valuable
              coding experience in various programming languages and developed a
              problem-solving mindset to tackle complex coding challenges.
            </p>
          </div>

          <div
            id="carouseSkillsControl"
            className="carousel slide"
            data-bs-touch="true"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Skills
                  percent={90}
                  skill="HTML"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={90}
                  skill="CSS"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={80}
                  skill="JavaScript "
                  className="m-4 d-inline-block"
                />
              </div>

              <div className="carousel-item">
                <Skills
                  percent={80}
                  skill="Java"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={70}
                  skill="PHP"
                  className="m-4 d-inline-block"
                />

                <Skills
                  percent={85}
                  skill="SQL"
                  className="m-4 d-inline-block"
                />
              </div>
              <div className="carousel-item">
                <Skills
                  percent={70}
                  skill="Maven"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={50}
                  skill="SpringMVC"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={80}
                  skill="MyBatis"
                  className="m-4 d-inline-block"
                />
              </div>
              <div className="carousel-item">
                <Skills
                  percent={70}
                  skill="React"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={50}
                  skill="Angular"
                  className="m-4 d-inline-block"
                />
                <Skills
                  percent={80}
                  skill="Bootstrap"
                  className="m-4 d-inline-block"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouseSkillsControl"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouseSkillsControl"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>

        <Project />

        <Contact className="mt-0" />
      </div>
    </div>
  );
}
