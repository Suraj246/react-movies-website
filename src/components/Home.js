import React, { useState, useEffect, useReducer } from "react";
import movieRecord from "./movieData";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
function Home({ handleShow, inputTitle }) {
  const [movieList, setMovieList] = useState(movieRecord);
  const [load, setLoad] = useState(false);

  const filterItems = (date) => {
    const get = movieRecord.filter((item) => {
      return item.release_date === date;
    });
    setMovieList(get);
  };

  const loader = () => {
    if (movieList === undefined) {
      <span>Loading...</span>
    }

  }
  return (
    <div className="movie-lists">
      <Nav
        variant="dark"
        style={{ backgroundColor: "#252525" }}
        defaultActiveKey="/"
        className="d-flex justify-content-center align-items-center p-2 "
      >
        <Nav.Item>
          <Nav.Link href="/" className="text-white">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Dropdown
              //  title="Get Movies By Date"
              className="link link_text "
              style={{ backgroundColor: "#252525", textDecoration: "none" }}
            >
              <Dropdown.Toggle
                as={NavLink}
                style={{ textDecoration: "none", color: "white" }}
              >
                Get Movies By Date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavDropdown.Item onClick={() => filterItems("2022-07-27")}>
                  2022-07-27
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-07-03")}>
                  2022-07-03
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-11")}>
                  2022-08-11
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-09-27")}>
                  2022-09-27
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-09-23")}>
                  2022-09-23
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-09-23")}>
                  2022-09-23
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-24")}>
                  2022-08-24
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-07-11")}>
                  2022-07-11
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-09-07")}>
                  2022-09-07
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-23")}>
                  2022-08-23
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-06")}>
                  2022-08-06
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-25")}>
                  2022-08-25
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-09-09")}>
                  2022-09-09
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-02")}>
                  2022-08-02
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-15")}>
                  2022-08-15
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-09-02")}>
                  2022-09-02
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-06-01")}>
                  2022-06-01
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-08-31")}>
                  2022-08-31
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterItems("2022-06-11")}>
                  2022-06-11
                </NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="movie-container d-flex flex-wrap col gap-4 justify-content-center py-4">
        {/* {!movieList ? <span>Loading...</span> : ''} */}

        {movieList
          .filter((elem) => {
            if (inputTitle === elem) {
              return elem;
            } else if (elem.original_title.toLowerCase().includes(inputTitle)) {
              return elem;
            }
          })
          .map((elem, index) => {
            return (
              <div key={index} className="movie-list ">
                {loader}
                <NavLink
                  to={`/product/${elem.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={handleShow}
                >
                  <div className="movie-img">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${elem.poster_path}`}
                      alt={elem.original_title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="movie-info">
                    <span className="text-white">{elem.original_title}</span>
                    <br />
                    <div className="d-flex">
                      <span>
                        <i className="bx bxs-star ratings"></i>
                      </span>
                      <span className="text-white">{elem.vote_average}</span>
                    </div>
                  </div>
                </NavLink>
              </div>

            );
          })}
      </div>
    </div>
  );
}

export default Home;
