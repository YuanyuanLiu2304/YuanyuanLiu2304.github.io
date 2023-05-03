import { Email, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./home.css";
import homepage from "../assets/homepage.jpeg";

export function Home() {
  return (
    <div className="home_container ">
      <div className="container-fluid">
        <div className="row bg_img">
          <div className="col-md-12 col-lg-6 home_left">
            <h3>Hello</h3>
            <h1>
              I'm <span className="author">Yuanyuan Liu</span>
            </h1>
            <p>
              I am dedicated and self-motivated to learn and expand my skills in
              order to become a skilled developer who can create innovative and
              effective solutions. I am excited to bring my knowledge and
              enthusiasm to every project and collaborate with others to achieve
              great results.
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
            <img src={homepage} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
