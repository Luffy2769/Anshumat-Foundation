import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
        <div className="">
          <a className="navbar-brand ms-3 fs-4" href="#">
            ANSHUMAT FOUNDATION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse d-flex justify-content-center gap-5" id="navbarSupportedContent">
            <ul className="navbar-nav gap-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-nowrap fs-4" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-nowrap fs-4" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-4"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item fs-5" href="#">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fs-5" href="#">
                      Volunteers
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item fs-5" href="#">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-nowrap fs-4">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item text-nowrap fs-4">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
              <button className="dntbtn text-nowrap mx-5" type="submit">
                DONATE NOW
              </button>
          </div>
      </nav>
    </div>
  );
}