import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome back!</h1>
    </div>
  );
}

export default App;


// [useBeforeLeave]
// import "./styles.css";
// import React, { useEffect } from "react";

// /**
//  * custom Hooks : useBeforeLeave
//  * 
//  * [mouseleave]
//  * 마우스 포인터가 특정 요소의 영역을 벗어날 때 발생하는 이벤트
//  * 사용자가 해당 요소와 상호작용을 멈추고 다른 곳으로 마우스를 이동했을 때 트리거된다.
//  */
// const useBeforeLeave = (onBefore) => {
//   if(typeof onBefore !== 'function') return;

//   const handle = () => {
//     onBefore();
//   }

//   useEffect(() => {
//     // componentDidMount
//     document.addEventListener("mouseleave", handle);

//     // componentWillUnMount
//     return () => {
//       document.removeEventListener("mouseleave", handle);
//     }
//   }, []); // 딱 한 번만 addEventListener 작동 by []
// };

// const App = () => {
//   const begForLife = () => console.log("Leaved...");
//   useBeforeLeave(begForLife);

//   return (
//     <div>
//       <h1>H1 Title</h1>
//     </div>
//   );
// };

// export default App;