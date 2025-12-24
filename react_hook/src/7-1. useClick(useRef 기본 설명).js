import React, { useState, useEffect, useRef } from "react";

/**
 * [useRef 기본 설명]
 * - 컴포넌트의 특정 부분을 선택할 수 있는 방법
 * - document.getElementById를 사용하는 것과 비슷
 * - 이 외에도 useRef는 다양하게 사용할 수 있다.
 * 
 * ex) 단, 커스텀 컴포넌트에 대한 ref는 얻을 수 없다.
 * const inputRef = useRef(null);
 * return <MyInput ref={inputRef} />;
 * [Error] TypeError: Cannot read properties of null
 */
const App = () => {
  const input = useRef(null);
  // 렌더링 중에는 ref 객체를 읽거나 쓰면 X, 정상 동작을 보장할 수 없다.
  // 그래서 setTimeout 추가한 거임
  setTimeout(() => {
    console.log(input);
    console.log(input.current); // = document.getElementById
    input.current.focus();
  }, 1000);
  
  return (
    <div className="App">
      <div>main</div>
      <input ref={input} type="text" placeholder="placeholder"/>
    </div>
  );
}

export default App;