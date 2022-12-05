import React from 'react'
import Nav from "react-bootstrap/Nav";
import { listContainer } from './listContainer';

export const NavItemListContainer = () => {
  return (
    <Nav className="me-auto">
      {listContainer.map((item) => (
        <div key={item.id}>
          <Nav.Link href={item.link} className="text-light">
            {item.name}
          </Nav.Link>
        </div>
      ))}
    </Nav>
  );
};
