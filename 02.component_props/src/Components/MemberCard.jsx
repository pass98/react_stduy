import React from 'react'


// 비구조화 할당 버전 (매개변수안에 속성을 직접 입력)
// const MemberCard = ({team,team_name}) => {
//     console.log(team)
//   return (
//     <div className='menu-item'>
//     <h3>{team}</h3>
//     <p>{team_name}</p>
//     </div>
//   )
// }


// props 적용 버전 (매개변수안에 변화하는 속성 props를 집어넣어서 객체로 변화시킴)
const MemberCard = (props) => {
    console.log(props.team)
  return (
    <div className='menu-item'>
    <h3>{props.team}</h3>
    <p>{props.team_name}</p>
    </div>
  )
}
export default MemberCard