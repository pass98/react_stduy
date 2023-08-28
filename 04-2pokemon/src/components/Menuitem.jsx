import React from 'react'
import '../style/poke.css'
import Card from 'react-bootstrap/Card';

const Menuitem = ({imga,name,height,weight,type}) => {
  return (
      <div >
        <Card style={{ width: '18rem' }}/>
      <Card.Img variant="top" src={imga} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {height}
        </Card.Text>
        <Card.Text>
          {weight}
        </Card.Text>
        <Card.Text>
          {type}
        </Card.Text>
      </Card.Body>
      </div>
  )
}

export default Menuitem;