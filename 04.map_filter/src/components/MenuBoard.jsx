import React, { useState } from 'react'
import menuData from '../data/coffee_menus.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav'

const MenuBoard = () => {

    console.log(menuData);
    const [menus, setMenus] = useState(menuData) //커피메뉴의 원본 state
    const [filter,setFilter] = useState(menus) //필터 적용을 위한 state카피본
                                              //원본에 적용하면 기존의 데이터가 사라지기 때문
                                            //(menus)를 state를 사용한것은 그냥, menuData도 사용 가능 

    


    //특정 메뉴를 눌렀을 때 해당 메뉴데이터만 필터링하는 기능 
    const filterMenus = (e) => {
      let category = e.target.innerText
      if(category === '커피'){
        setFilter(coffeeList)
      }else if(category ==='에이드'){
        setFilter(adeList)
      }else if(category ==='디저트'){
        setFilter(desrtList)
      }else if(category ==='베이커리'){
        setFilter(bakerList)
      }else if(category === 'All'){
        setFilter()
      }
    }
    
    // 커피메뉴만 필터링 후 저장하는 변수 생성
    const coffeeList = menus.filter((item)=>item.category === '커피')
    console.log(coffeeList)
    const adeList = menus.filter((item) =>item.category === '에이드')
    console.log(adeList)
    const desrtList = menus.filter((item) =>item.category === '디저트')
    console.log(desrtList)
    const bakerList = menus.filter((item) =>item.category === '베이커리')
    console.log(bakerList)
  
  
    return (
    <div>
        {/*네비게이션바영역*/ }
        <div className='menu-nav'>
            <MenuNav onClick = {filterMenus}/>
        </div>
        {/*커피메뉴출력영역*/ }
        <div className='menu_list'>
        {filter.map((item)=>(           // 원본 state가 아닌 새롭게 정의된                             
            <MenuItem key={item.id}     // 새로운 state에 값을 받는다.
                      name={item.name} 
                      price={item.price} 
                      img={item.img}
            />
        ))} 
        </div>
    </div>
  )
}

export default MenuBoard