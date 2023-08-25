import './App.css';

/*
    map() 함수 
    - 배열 내 모든 요소를 각각 접근해서 원하는 형태로 변환한 후 
    새로운 배열로 변환해주는 함수 
    -문법 : 배열객체.map((item, index)=>{}) --> return문 위쪽
            {배열객체.map((item, index)=>())}  -> return문 안쪽 
      item : 현재 배열 내 값
      index : 현재 배열 내 값의 인덱스  
*/


function App() {

  let array = [1,2,3,4,5]
  let array2 = [6,7,8,9,10]

  let new_array = array.map((item)=>{
    console.log(item);
    return item+1 
  }) //map함수는 소괄호 안에 화살표 함수, 배열안에 있는 값들을 받아서 새로운 배열로 만들어주는 함수 
     //map함수를 사용해도 원래 배열은 신경을 쓰지 않음
//질문: 매개변수 item은 어떻게 배열 array를 인식하는가? map의 함수가 배열을 자동으로 인식하는 거라면
//다른 비슷한 함수들도 같은 방식인건가.
  let new_array2 = array.map((item) => item+2)
  console.log(new_array2);


  //map()에 HTML 문법을 적용해보기
  /*
    - map()를 이용하여 HTML or 컴포넌트를 사용할 때
      반드시 key속성을 정의해주어야 한다.

    - key값은 반드시 고유해야 한다

    - React에서 이전 DOM트리와 비교할 때 key를 이용해서 비교
      key가 없으면 배열 내 추가/수정/삭제가 정상적으로 동작하지 않는다!

    * map()함수에서 index를 활용할 수 있지만, 권장하지는 않는다.
      index는 순서가 불안정한 값이므로 비교시 문제가 발생된다. 
  */
 
  let new_array3 = array.map((item,index)=><p key={index}>{item}</p>)

  return (
    <div className="App">
      <p>기존배열 : {array}</p>
      <p>새로운배열 : {new_array2}</p>
      {new_array3}
    </div>
  );
}

export default App;
