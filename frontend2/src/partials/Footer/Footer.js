import React from "react";
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <>
  {/* Remove the container if you want to extend the Footer to full width. */}
    {/* Footer */}
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#2d2d2d" }}
    >
      {/* Grid container */}
      <div className="container">
        {/* Section: Links */}
        <section className="mt-5">
          {/* Grid row*/}
          <div className="row text-center d-flex justify-content-center pt-5">
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold ">
                <a href="/aboutus" className="text-white text-decoration-none">
                  About us
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/services" className="text-white text-decoration-none">
                  Services
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white text-decoration-none">
                  Help Center
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white text-decoration-none">
                  Contact
                </a>
              </h6>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
        </section>
        {/* Section: Links */}
        <hr className="my-5" />
        {/* Section: Text */}
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Text */}
        {/* Section: Social */}
        <section className="text-center mb-5">
          <Link to='' className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to='' className="text-white me-4">
            <i className="fab fa-twitter" />
          </Link>
          <Link to='' className="text-white me-4">
            <i className="fab fa-google" />
          </Link>
          <Link to=''className="text-white me-4">
            <i className="fab fa-instagram" />
          </Link>
          <Link to='' className="text-white me-4">
            <i className="fab fa-linkedin" />
          </Link>
          <Link to='' className="text-white me-4">
            <i className="fab fa-github" />
          </Link>
        </section>
        {/* Section: Social */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3 bg-dark"
        // style={{ backgroundColor: "rgba(2, 5, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white text-decoration-none" href="https://mdbootstrap.com/">
          &nbsp;Hey Jude
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  {/* End of .container */}
</>

    )
}

export default Footer;