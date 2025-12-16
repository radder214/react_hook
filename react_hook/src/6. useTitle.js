import React from "react";
import useTitle from "./customHooks/useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 1000);
  return (
    <div>
      <div className="title">main</div>
    </div>
  );
}

export default App;

/**
 * 1. 맨 처음 App 함수 호출
 * 2. const titleUpdater = useTitle("Loading..."); 실행
 * 3. <div className="title">Loading...</div> 매핑
    * 3-1. by useEffect에 등록된 updateTitle 콜백 함수
    * 3-2. why? useEffect는 deps 존재 유무와 상관 없이 최초 한 번은 실행되기에 콜백 함수(updateTitle)가 호출된다.
 * 4. titleUpdater 변수에 setTitle 함수 할당
 * 5. setTimeout(() => titleUpdater("Home"), 1000); 실행
    * 5-1. 1000ms 후에 titleUpdater("Home") = setTitle("Home") 실행
    * 5-2. title state 값이 됐기에 useEffect(updateTitle, [title]); 다시 호출 됨
 * 6. <div className="title">Home</div> 매핑
 */