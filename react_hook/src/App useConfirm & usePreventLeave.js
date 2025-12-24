import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome back!</h1>
    </div>
  );
}

export default App;




// [useConfirm & usePreventLeave]
// - 해당 챕터에서는 useState, useEffect, useRef 등의 Hooks을 사용하지는 않았다.

// 1. useConfirm
// import "./styles.css";

// /**
//  * custom Hooks : useConfirm
//  */
// const useConfirm = (message = "", onConfirm, onCancel) => { // message = "" [default parameter]
//   if(!onConfirm || typeof onConfirm !== 'function') return;
//   if(!onCancel || typeof onCancel !== 'function') return;
  
//   const confirmAction = () => {
//     if(confirm(message)) {
//       onConfirm();
//     } else {
//       onCancel();
//     }
//   }
//   return confirmAction;
// };

// const App = () => {
//   const deleteWorld = () => console.log("Deleting thw world");
//   const abort = () => console.log("Aborted");
//   const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

//   return (
//     <div>
//       <button onClick={confirmDelete}>Delete the world</button>
//     </div>
//   );
// };

// export default App;
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// 2. usePreventLeave
// import "./styles.css";

// /**
//  * custom Hooks : usePreventLeave
//  * 
//  * [beforeunload 이벤트]
//  * 사용자가 웹 페이지를 떠나려고 할 때(창 닫기, 링크 이동, 새로고침 등) 발생하는 이벤트
//  * 해당 이벤트가 발생하면 브라우저에 확인 메시지를 표시, 사용자의 의도를 다시 확인할 수 있다.
//  * 사용자가 페이지를 떠나기 전에 확인을 요청하거나 데이터를 저장하는 등의 작업을 수행할 수 있게 해준다.
//  */
// const usePreventLeave = () => {
//   const listener = (event) => {
//     event.preventDefault();
//     event.returnValue = "";
//   }

//   const enablePreventLeave = () => {
//     window.addEventListener("beforeunload", listener);
//   }
//   const disablePreventLeave = () => {
//     window.removeEventListener("beforeunload", listener);
//   }

//   return {enablePreventLeave, disablePreventLeave}
//   // = return {enablePreventLeave : enablePreventLeave, disablePreventLeave : disablePreventLeave}
// };

// const App = () => {
//   const {enablePreventLeave, disablePreventLeave} = usePreventLeave();
//   return (
//     <div>
//       <button onClick={enablePreventLeave}>Protect</button>
//       <button onClick={disablePreventLeave}>UnProtect</button>
//     </div>
//   );
// };

// export default App;