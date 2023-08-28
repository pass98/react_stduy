import React, { useState } from 'react'
import MenuNav from './MenuNav'
import Menuitem from './Menuitem'
import pokedata from '../data/pokemon.json'

const MenuBorad = () => {
  console.log('총 포켓몬 데이터는?',pokedata)
  const [pokemon,setPokemon] = useState(pokedata)
  const [pokemonId,setPokemonId] = useState(pokemon)


  const Range = (index)=>{
    const startInd = (index -1) *50;
    const endInd = (index) * 50;
    const filterpoke = pokedata.slice(startInd,endInd)
    setPokemonId(filterpoke);

    console.log('선택된 카테고리는?',)
}

  return (
    <div>
        <div className='pokemonNav'>
        {/*포켓몬 리스트 번호 집어넣는곳*/ }
        <MenuNav/>
        </div>

        <div className='pokemonCard'>
        {/*포켓몬 데이터 집어넣는곳*/} 
        {pokemonId.map((item)=>(
        <Menuitem key={item.id}
                  name = {item.name}
                  height = {item.height}
                  weight = {item.weight}
                  type = {item.type}
                  imga = {item.img}
        />
          
        ))}
        </div>
    </div>
  )
}

export default MenuBorad