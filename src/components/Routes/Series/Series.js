import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { AiFillStar } from "react-icons/ai";
import background from "../../../img/imagen-no-disponible.jpg";

export const Series = ({ data }) => {
  return (
    <div>
      <Container>
        {data.map(({ name, poster_path, vote_average, vote_count, id }) => (
          <div key={id} className="d-flex d-inline-flex mx-3 my-3">
            <Card style={{ width: "16rem" }}>
              {poster_path !== null ? (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
                />
              ) : (
                <Card.Img variant="top" src={`${background}`} />
              )}

              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  <AiFillStar color="gold" />
                  {vote_average}
                </Card.Text>
                <div className="text-danger fw-bold fs-3 mb-3">
                  {" "}
                  $ {vote_count}
                </div>

                <Button variant="primary " size="sm" href={`/serie/${id}`}>
                  Ver Más
                </Button>
                <Button variant="primary" className="ms-3" size="sm">
                  Agregar al carro
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </div>
  );
};
