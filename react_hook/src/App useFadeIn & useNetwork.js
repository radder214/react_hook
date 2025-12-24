import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome back!</h1>
    </div>
  );
}

export default App;


// [useFadeIn & useNetwork]
// 1. useFadeIn
// import "./styles.css";
// import React, { useEffect, useRef } from "react";

// const useFadeIn = (duration = 1, delay = 0) => {
//   if(typeof duration !== 'number' || typeof delay !== 'number') return;

//   const element = useRef(null);

//   useEffect(() => {
//     // componentDidMount
//     if(element.current) {      
//       const { current } = element;
//       current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
//       current.style.opacity = 1;
//     }
//   }, []); // 딱 한 번만 addEventListener 작동 by []

//   return {ref : element, style : {opacity : 0}};
// };

// const App = () => {
//   const fadeInH1 = useFadeIn(2, 1);
//   const fadeInP = useFadeIn(4, 2);

//   return (
//     <div>
//       <h1 {...fadeInH1}>H1 Tag</h1>
//       <p {...fadeInP}>p Tag</p>
//     </div>
//   );
// };

// export default App;
// =======================================================================================================
// 2. useNetwork

// import "./styles.css";
// import React, { useState, useEffect, useRef } from "react";

// /**
//  * [navigator]
//  * JS 내장 객체, 브라우저 전용 API 이므로 Node.js 환경에서는 존재하지 않는다.
//  * 현재 사용 중인 웹 브라우저의 종류, 버전, 운영체제 등의 정보를 제공
//  * navigator.onLine : 네트워크 연결 여부,  return type은 boolean
//  */
// const useNetwork = (onChange) => {
//   const [status, setStatus] = useState(navigator.onLine);

//   const handleChange = () => {
//     if(typeof onChange === 'function') {
//       onChange(navigator.onLine);
//     }
//     setStatus(navigator.onLine);
//   }

//   useEffect(() => {
//     // componentDidMount
//     window.addEventListener("online", handleChange);
//     window.addEventListener("offline", handleChange);

//     // componentWillUnMount
//     return () => {
//       window.removeEventListener("online", handleChange);
//       window.removeEventListener("offline", handleChange);
//     }
//   }, []); // 딱 한 번만 addEventListener 작동 by []

//   return status;
// };

// const App = () => {
//   const handleNetworkChange = (online) => {
//     console.log(online ? "Now Online" : "Now Offline");
//   }
//   const onLine = useNetwork(handleNetworkChange);
//   return (
//     <div>
//       <h1>{onLine ? "Browser OnLine" : "Browser OffLine"}</h1>
//     </div>
//   );
// };

// export default App;