import { Link } from "react-router-dom";
import { useState } from "react";
import "./projects.css";
import rocket from "../assets/rocket.png";
import todolist from "../assets/todolist.png";
import calculator from "../assets/calculator.png";
import s_info_sys from "../assets/s_info_sys.png";
import shape from "../assets/shape.png";

export function Projects() {
  return (
    <div className="projects">
      <div className="portfolio_container">
        <img src={shape} className="shape" alt="img"></img>
        <div className="portfolio_wrapper">
          <div className="portfolio">
            <h1>Portfolio</h1>
            <p>
              Creativity is a journey without a map, where the destination is
              constantly evolving.
            </p>
          </div>

          <div className="rocket_container">
            <img src={rocket} alt="rocket" />
          </div>
        </div>
      </div>

      <Project />
    </div>
  );
}

export function Project() {
  const [stuInfoSys, setStuInfoSys] = useState(0);
  const [calcScale, setCalcScale] = useState(0);
  const [todoListScale, setToDoListScale] = useState(0);
  return (
    <div className="projects_container">
      <div className="projects_wrapper">
        <div className="subtitle mt-5 text-center">
          <span
            className="bi bi-circle-fill"
            style={{ color: "#ffd109" }}
          ></span>
          <span className="">Portfolio</span>
          <h1 className="py-4 text-dark fs-1">
            <span className="portfolio_underline">Creative</span> Work
          </h1>
        </div>
        <div className="projects_cards">
          {/* To Do List start here */}
          <div
            className="projects_card"
            onMouseOver={() => {
              setToDoListScale(1);
            }}
            onMouseLeave={() => {
              setToDoListScale(0);
            }}
          >
            <div
              className="projects_img"
              style={{ backgroundColor: "#ffd109" }}
            >
              <img src={todolist} alt="Basic Calculator" />
            </div>

            <div
              className="projects_hover"
              style={{ transform: `scale(${todoListScale})` }}
            >
              <p>Application</p>
              <h3>To Do List</h3>
              <p> REACT BOOTSTRAP </p>
              <button>
                <Link to="/Projects/TaskList">View Details</Link>
              </button>
            </div>
          </div>

          {/* Basic Calculator start here */}
          <div
            className="projects_card"
            onMouseOver={() => {
              setCalcScale(1);
            }}
            onMouseLeave={() => {
              setCalcScale(0);
            }}
          >
            <div
              className="projects_img"
              style={{ backgroundColor: "#fd7e14" }}
            >
              <img src={calculator} alt="Basic Calculator" />
            </div>

            <div
              className="projects_hover"
              style={{ transform: `scale(${calcScale})` }}
            >
              <p>Web Application</p>
              <h3>Basic Calculator</h3>
              <p> REACT TYPESCRIPT </p>
              <button>
                <Link to="/Projects/Calculator">View Details</Link>
              </button>
            </div>
          </div>

          {/* Student Information Systsem  start here*/}
          <div
            className="projects_card"
            onMouseOver={() => {
              setStuInfoSys(1);
            }}
            onMouseLeave={() => {
              setStuInfoSys(0);
            }}
          >
            <div
              className="projects_img"
              style={{ backgroundColor: "#5956e9" }}
            >
              <img src={s_info_sys} alt="Student Information System" />
            </div>
            <div
              className="projects_hover"
              style={{ transform: `scale(${stuInfoSys})` }}
            >
              <p>Web Application</p>
              <h3>Student Information System</h3>
              <p>HTML CSS PHP </p>
              <button>
                <Link to="/Projects/StudentInfoSysDemo">View Details</Link>
              </button>
            </div>
          </div>

          {/* still working on it */}
          <div className="projects_card">
            <div
              className="d-flex justify-content-center align-items-center projects_img "
              style={{ backgroundColor: "#82cefd" }}
            >
              <h3 className="text-center fst-italic text-secondary ">
                Work in Progress
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
