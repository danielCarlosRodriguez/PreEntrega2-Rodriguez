import React, { useState, useEffect } from "react";
import { PeliculasList } from "./PeliculasList";

export const PeliculasListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8f6a5f014b0051324d16cacd208d3599&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj.results);
        setData(obj.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <PeliculasList data={data} />
    </div>
  );
};
