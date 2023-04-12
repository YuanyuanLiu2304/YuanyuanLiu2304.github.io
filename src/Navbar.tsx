import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="Navbar">
      <nav className="nav nav-tabs justify-content-center ">
        <Link to="/" className="nav-link text-secondary fs-4">
          DemoPerson
        </Link>
        <Link to="/Form" className="nav-link text-secondary fs-4">
          Form
        </Link>
        <Link to="/FetchData" className="nav-link text-secondary fs-4">
          FetchData
        </Link>
        <Link to="/UseContextDemo" className="nav-link text-secondary fs-4">
          UseContextDemo
        </Link>
      </nav>
    </div>
  );
}
