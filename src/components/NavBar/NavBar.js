import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { PlayBtn } from "react-bootstrap-icons";
import { CartWidget } from "../CartWidget";

export const NavBar = ({children}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <PlayBtn size={30} color="royalblue" />
          </Navbar.Brand>

          {children}

          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
