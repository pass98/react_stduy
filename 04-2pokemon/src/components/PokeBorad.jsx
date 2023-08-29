import React, { useState } from 'react'
import PokeNav from './PokeNav'
import pokemondata from '../data/pokemon.json'
import PokeList from './PokeList'
import PokeCard from './PokeCard'

const PokeBorad = () => {
  console.log('총 포켓몬 데이터는?',pokemondata)
  const [pokemon,setPokemon] = useState(pokemondata)
  // const [pokemonId,setPokemonId] = useState(pokemon)

  const handleClick = (e) => {
    let menu =  e.target.innerText      // 타겟팅한 내용의 텍스트
    console.log('선택한메뉴 : ',menu);

    let filter = [];
    
    if(menu === 'All'){
      setPokemon(pokemondata)
    }else{
      if(menu === '1~50'){
          filter = pokemondata.filter((item)=> item.id >= 1 && item.id <= 50)
      }else if(menu === '51~100'){
        filter = pokemondata.filter((item)=> item.id >= 51 && item.id <= 100)
      }else if(menu === '101~151'){
        filter = pokemondata.filter((item)=> item.id >= 101 && item.id <= 151)
      }else{ 
          // slice 방식이 아닌 순수 문자를 적용시키고, item의 값 분류
      }
      setPokemon(filter) //filter 선언의 간소화를 위해 미리 선언 
    }

 
  }

  return (

    <div>
        <div className='pokemonNav'>
        {/*메뉴영역*/ }
        <PokeNav onClick={handleClick}/>
        </div>

        <div className='pokemonCard'>
        {/*포켓몬 정보를 부여주는 영역*/} 
        <PokeList pokemons={pokemon}></PokeList>
        
          
        
        </div>
    </div>
  )
}

export default PokeBorad