import { NavBar } from "./components/NavBar/NavBar";
import { NavItemListContainer } from "./components/NavBar/NavItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Routes/Home/Home";
import { PeliculasListContainer } from "./components/Routes/Peliculas/PeliculasListContainer";
import { PeliculaId } from "./components/Routes/PeliculaId/PeliculaId";
import { SeriesListContainer } from "./components/Routes/Series/SeriesListContainer";
import { SerieId } from "./components/Routes/SerieId/SerieId";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <NavItemListContainer />
        </NavBar>
      </header>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/series" element={<SeriesListContainer />} />
          <Route exact path="/peliculas" element={<PeliculasListContainer />} />
          <Route exact path="/serie/:id" element={<SerieId />} />
          <Route exact path="/pelicula/:id" element={<PeliculaId />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
