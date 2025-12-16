import React, { useEffect, useState } from "react";

// [Introduction to useEffect]
export default function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const sayHello = () => console.log("Hello");

  // useEffect는 ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate 의 역할을 수행한다.
  useEffect(() => {
    // 1번째 인자 ==> ComponentDidMount 유사
    if(numberA === 0) return;
    sayHello();
  }, [numberA]);  // 2번째 인자 ==> ComponentDidUpdate 유사, cf) (deps?: React.DependencyList)는 반드시 array 형태

  return (
    <div className="App">
      <button onClick={() => setNumberA(current => current + 1)}>numberA : {numberA}</button>
      <button onClick={() => setNumberB(current => current + 1)}>numberB : {numberB}</button>
    </div>
  );
}