import React from 'react'
import { Peliculas } from './Peliculas';

export const PeliculasList = ({ data }) => {
  return (
    <div>
      <Peliculas data={data} />
    </div>
  );
};
