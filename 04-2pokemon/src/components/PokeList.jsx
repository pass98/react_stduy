import React from 'react'
import '../style/poke.css'
import PokeCard from './PokeCard';

const PokeList = ({pokemons}) => {

const styleDiv = {
  display : 'flex',
  gap : '10px',
  flexWrap: 'wrap',
  width : '50%',
  margin : '0 auto' 
}

  return (
      <div style={styleDiv} >
        {pokemons.map((item)=>(
        <PokeCard pokemon={item}></PokeCard>
        ))}
      </div>
  )
}

export default PokeList;