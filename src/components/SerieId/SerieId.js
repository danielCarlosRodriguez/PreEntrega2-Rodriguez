import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";

export const SerieId = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=8f6a5f014b0051324d16cacd208d3599&language=en-US`
    )
      .then((response) => response.json())
      .then((obj) => {
        console.log(" imprimo obj ", obj);
        setData(obj);
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
          <Col>
            {" "}
            <h1>{data.name}</h1>
            <h4>
              {" "}
              <AiFillStar color="gold" />
              {data.vote_average}
            </h4>
            <h5 className="mt-3">{data.overview}</h5>
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
