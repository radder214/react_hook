import React, { useEffect, useRef } from "react";

/**
 * custom hooks
 */
const useClick = (onClick) => {
    const element = useRef(null);
    useEffect(() => {
      if (typeof onClick !== 'function') {
        return;
      }
      // 컴포넌트 mount 시 호출(componentDidMount)
      // [deps]가 있으면 componentDidUpdate 때도 호출된다.
      if(element.current) {
        element.current.addEventListener("click", onClick);
      }

      // 컴포넌트 unMount 시 호출(componentWillUnMount)
      return () => {
        console.log(111);
        if(element.current) {
          element.current.removeEventListener("click", onClick); // 등록한 event 해제
        }
      }
    }, []); // [deps]가 없으므로 componentDidUpdate는 호출되지 않는다.

    return element;
}

const App = () => {
  function sayHello() {
    console.log("Hello");
  }
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Welcome back!</h1>
    </div>
  );
}

export default App;