import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Form from "react-bootstrap/Form";
import movieRecord from "./movieData";

import About from "./About";
import MovieDetails from "./MovieDetails";

function Sidebar({ children }) {
  const [inputTitle, setInputTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [movieItems, setMovieItems] = useState(movieRecord);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-sidebar">
      <div className="sidebar" style={{ width: isOpen ? "300px" : "50px" }}>
        <div className="top_section">
          <NavLink to="/" className="nav-head">
            <Navbar.Brand
              className="logo"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {" "}
              Movies.com
            </Navbar.Brand>
          </NavLink>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            {isOpen ? (
              <i className="bx bx-x bars" onClick={toggle}></i>
            ) : (
              <i
                className="bx bx-menu bars"
                style={{ marginRight: "110px" }}
                onClick={toggle}
              ></i>
            )}
          </div>
        </div>
        <Nav>
          <Row style={{ width: "100%" }}>
            <Form className="d-flex mb-5 m-2">
              <Form.Control
                type="search"
                placeholder="Search by movie name"
                className="me-2"
                aria-label="Search"
                style={{ display: isOpen ? "block" : "none" }}
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </Form>
            <Col>
              <div>
                <NavLink
                  className="link"
                  style={{ display: isOpen ? "block" : "none" }}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="link"
                  style={{ display: isOpen ? "block" : "none" }}
                  to="/"
                >
                  <li className="link_text">Adults</li>
                </NavLink>
                <NavLink
                  className="link"
                  style={{ display: isOpen ? "block" : "none" }}
                  to="/"
                >
                  <li className="link_text">Animes</li>
                </NavLink>
                <NavLink
                  className="link"
                  style={{ display: isOpen ? "block" : "none" }}
                  to="/"
                >
                  <li className="link_text">Documentry</li>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Nav>
      </div>
      {/* <main> */}
      {/* {children} */}
      {/* <Home /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              handleShow={handleShow}
              inputTitle={inputTitle}
              movieItems={movieItems}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/product/:id"
          element={<MovieDetails handleClose={handleClose} show={show} />}
        />
      </Routes>
      {/* </main> */}
    </div>
  );
}

export default Sidebar;
