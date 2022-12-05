import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background from "../../img/imagen-no-disponible.jpg";

export const Search = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("saw");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=8f6a5f014b0051324d16cacd208d3599&language=en-US&query=${title}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((obj) => {
          if (typeof obj.results !== "undefined") {
          setData(obj.results);
        }
      })
      .catch((err) => console.error(err));
  }, [title]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Buscar Película o Serie</h1>

            <input onChange={(event) => setTitle(event.target.value)} />
          </Col>
        </Row>

        {data.map(
          ({
            title,
            poster_path,
            vote_average,
            vote_count,
            media_type,
            id,
          }) => (
            <div key={id} className="d-flex d-inline-flex mx-3 my-3">
              {media_type !== "person" && (
                <Card style={{ width: "16rem" }}>
                  {poster_path !== null ? (
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                    />
                  ) : (
                    <Card.Img variant="top" src={`${background}`} />
                  )}

                  <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>
                      <AiFillStar color="gold" />
                      {vote_average}
                    </Card.Text>
                    <div className="text-danger fw-bold fs-3 mb-3">
                      {" "}
                      $ {vote_count}
                    </div>

                    {media_type === "movie" ? (
                      <Button
                        variant="primary "
                        size="sm"
                        href={`/pelicula/${id}`}
                      >
                        Ver Más
                      </Button>
                    ) : (
                      <Button
                        variant="primary "
                        size="sm"
                        href={`/serie/${id}`}
                      >
                        Ver Más
                      </Button>
                    )}

                    <Button variant="primary" className="ms-3" size="sm">
                      Agregar al carro
                    </Button>

                    
                  </Card.Body>
                </Card>
              )}
            </div>
          )
        )}
      </Container>
    </div>
  );
};
