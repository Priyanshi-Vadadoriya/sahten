import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";


const Header = () => {
  const [fixnavbar, setFixnavbar] = useState(false);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setFixnavbar(true);
      } else {
        setFixnavbar(false);
      }
    });
  }, []);

  return (
    <div>
      <div className="">
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          fixnavbar ? "fixed-navbar" : ""
        }`}
      >
        <div className="container text-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" className="logo-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/albums">Albums</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
      
    </div>
  );
};

export default Header;
