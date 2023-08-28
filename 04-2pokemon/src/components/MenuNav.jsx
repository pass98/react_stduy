import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../style/poke.css'

const MenuNav = ({onClick}) => {
  let navList = ['All', '1~50', '51~100', '101~150','151~200']

  return (
    <Nav>
    {navList.map((item,index)=>(
      <Nav.Item key={index}>
        <Nav.Link eventKey="disabled" onClick={onClick}>{item}
      </Nav.Link>
      </Nav.Item>
      ))}
    </Nav>
  );
  }
  


export default MenuNav