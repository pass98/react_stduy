import React from 'react'
import Card from 'react-bootstrap/Card';

const PokeCard = ({pokemon}) => {
  return (
    <div >
        <Card style={{ width: '18rem' }}/>
      <Card.Img variant="top" src={pokemon.img} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          {pokemon.height}
        </Card.Text>
        <Card.Text>
        {pokemon.weight}
        </Card.Text>
        <Card.Text>
        {pokemon.type}
        </Card.Text>
      </Card.Body>
      </div>
  )
}

export default PokeCard