import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";

import { Nav } from "react-bootstrap";
import { IoIosLogOut } from "react-icons/io";

export default function MainPageNavbar() {
  return (
    <div className="custom-navbar">
      <Nav
      className='top-nav'
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <IoPersonCircleOutline className="icon"></IoPersonCircleOutline>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="admin" className="custom-admin">Admin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="logout" className="custom-out"><IoIosLogOut /></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
