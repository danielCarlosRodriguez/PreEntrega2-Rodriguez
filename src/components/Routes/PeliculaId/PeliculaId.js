import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import Image from "react-bootstrap/Image";

export const PeliculaId = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [plataforma, setPlataforma] = useState("cine");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8f6a5f014b0051324d16cacd208d3599&language=en-US`
    )
      .then((response) => response.json())
      .then((obj) => {
        console.log(" imprimo obj ", obj);
        setData(obj);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=8f6a5f014b0051324d16cacd208d3599`
    )
      .then((response) => response.json())
      .then((obj) => {
        if (typeof obj.results.AR.flatrate !== "undefined") {
          setPlataforma(obj.results.AR.flatrate);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}
              />
            </Card>
          </Col>
          <Col className="bg-white rounded bg-opacity-75">
            {" "}
            <h1>{data.original_title}</h1>
            <p>Año: {data.release_date}</p>
            <h4>
              {" "}
              <AiFillStar color="gold" />
              {data.vote_average}
            </h4>
            <h5 className="mt-3">{data.overview}</h5>
            <h5 className="fw-bold">
              Plataforma: {plataforma[0].provider_name}
            </h5>
            <Image
              style={{ display: "block", width: 70 }}
              src={`https://www.themoviedb.org/t/p/original/${plataforma[0].logo_path}`}
              rounded
              alt={plataforma[0].logo_path}
            />
            <div className="text-danger fw-bold fs-3 my-5">
              {" "}
              $ {data.vote_count}{" "}
              <Button variant="primary" className="ms-3" size="sm">
                Agregar al carro
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
