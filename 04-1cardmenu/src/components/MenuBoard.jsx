import React from 'react'
import menuData from '../data/coffee_menus.json'
import MenuNav from './MenuNav';
import Menuitem from './Menuitem';
import { useState } from 'react';


const MenuBoard = () => {
    console.log('카페 메뉴는?' , menuData);
    // const [menus, setMenus] = useState(menuData)
    const [menus,setMenus] = useState(menuData)
    const [filter,setFilter] = useState(menus)

    const filterMenus = (e) => {
        let category = e.target.innerText
        console.log('선택된 카테고리는?',category)
        if(category === '커피'){
            setFilter(menus.filter((item)=>item.category==='커피'))
        }else if(category === '에이드'){
            setFilter(menus.filter((item)=>item.category==='에이드'))
        }else if(category === '디저트'){
            setFilter(menus.filter((item)=>item.category==='디저트'))
        }else if(category === '베이커리'){
            setFilter(menus.filter((item)=>item.category==='베이커리'))
        }else {
            setFilter(menus.filter((item)=> item))
        }
    }
    
  return ( 
    <div>
        <div className='menu-nav'>
        {/*네비게이션 영역 2순위 작성*/}
        <MenuNav onClick = {filterMenus} />
        </div>
        <div className = 'menu_list'>
        {/*커피메뉴영역 1순위 작성*/} 
        {filter.map((item)=>(
            <Menuitem key={item.id}
                      namer={item.name}
                      price={item.price}
                      img={item.img}
            />
        ))}
        </div>
    </div>
  )
}

export default MenuBoard