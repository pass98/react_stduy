import './App.css';
import MemberCard from './Components/MemberCard';


/*  1.Componenet(컴포넌트)
      - 반복되는 코드를 하나로 묵어서 만드는 화면의 최소 단위
      - 대문자로 파일을 만들고 확장자는 .jsx를 사용
      - 사용방법 -> <컴포넌트 이름/>
        ex) Menubox.jsx -> <Menubox/>
      - rafce 명령어를 이용해서 기본 틀을 생성한다.

    --> 컴포넌트화했을 때 문제점은 데이터가 모두 동일하다는 점...
        해결책 : props 활용!

  2.props(프로퍼티[속성]) 
    - 상위 컴포넌트 -> 하위 컴포넌트로 정보 전달


*/

// function App() {
//   return (
//     <div>
//       {/*<div className = 'menu-item'>
//         <h1>아메리카노</h1>
//         <p>3500</p>
//       </div>
//       <div className = 'menu-item'>
//         <h1>아메리카노</h1>
//         <p>3500</p>
//   </div> */}
//       <Menubox  name="아메리카노" price="3000"/>
//       <Menubox name="카페라떼" price="3500"/>
//       <Menubox name="바닐라라떼" price="4500"/>
//       <Menubox name="카라멜 프라푸치노" price="5000"/>
//       </div>
//   );
// }



function App() {
  return (
    <div>
    <MemberCard team = 'KIA' team_name = '강병우'/>
    <MemberCard team = 'SSG' team_name = ' 김광'/>
    <MemberCard team = '두산' team_name = '김동주'/>
    <MemberCard team = '한화' team_name = '문동주'/>
    </div>
  );
}


export default App;
