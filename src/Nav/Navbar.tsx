import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useEffect, useState } from "react";

export function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="logo">
        <Link to="/" className="nav-link ">
          Portfolio
        </Link>
      </div>

      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <ul className="nav nav-item justify-content-center ">
          <Link to="/" className="nav-link ">
            Home
          </Link>
          <Link to="/Resume" className="nav-link">
            Resume
          </Link>
          <Link to="/Projects" className="nav-link">
            Projects
          </Link>
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}
