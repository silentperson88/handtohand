import React from "react";
import logo from "./../../logo2.svg";
function Header() {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ padding: "0.5rem" }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#page-top"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* <img
              src="./../../assets/delivery-truck-truck-svgrepo-com.svg"
              alt="..."
            /> */}
            <div
              style={{
                textTransform: "none",
                fontWeight: "normal",
                fontSize: "0.5rem",
              }}
            >
              <h3 style={{ marginBottom: "0px" }}>Hand To Hand</h3>
              {/* <p
                style={{
                  textAlign: "center",
                  fontSize: "initial",
                  marginBottom: "0px",
                }}
              >
                Transportation
              </p> */}
            </div>
            <img
              style={{ width: "2rem", height: "auto", marginLeft: "0.5rem" }}
              src={logo}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#ffc800", boxShadow: "none" }}
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">
            Welcome To Hand To Hand Transport!
          </div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Tell Me More
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
