import React, { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import movieRecord from "./movieData";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function MovieDetails({ handleClose, show }) {
  const navigate = useNavigate();
  const params = useParams();
  // const { id } = params
  const proDetail = movieRecord.filter((x) => x.id == params.id);
  const product = proDetail[0];
  // console.log(product)

  return (
    <div>
      {/* <Home /> */}
      {/* {show ? <Home /> : navigate("/")} */}
      {handleClose ? (
        navigate("/")
      ) : (
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden text-white bg-light">
            Loading...
          </span>
        </Spinner>
      )}

      {/* backdrop="static" */}
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header className="modal-cancel" closeButton></Modal.Header>
        <Modal.Body className="modal-body">
          <Modal.Title className="modal-title-img">
            <img
              src={`https://image.tmdb.org/t/p/original/${product.poster_path}`}
              alt={product.original_title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </Modal.Title>
          <div>
            <div className="d-flex align-items-center gap-5 mb-2">
              <div>
                <span className="fs-5">
                  <strong>Movie Name : </strong> {product.original_title}{" "}
                </span>
              </div>
              <div className="fs-5">
                <span>
                  <strong>Movie Rating : </strong>{" "}
                  <i className="bx bxs-star ratings"></i>
                </span>
                <span>{product.vote_average}</span>
              </div>
            </div>
            <div className="fs-5 d-flex flex-column model-movie-info">
              <span className="mb-2">
                <strong>Language : </strong> {product.original_language}
              </span>
              <span className="mb-2">
                {" "}
                <strong>Overview : </strong>
                <span className="fs-6">{product.overview}</span>
              </span>
              <span>
                <strong>Votes : </strong>
                <span className="mb-2">{product.vote_count}</span>
              </span>
              <span>
                <strong>Popularity : </strong>
                <span className="mb-2">{product.popularity}</span>
              </span>
              <span>
                <strong>Release Date : </strong>
                <span>{product.release_date}</span>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="model-footer">
          <Button variant="secondary">Watch Online</Button>
          <Button variant="primary">Download</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieDetails;
