import useTabs from "./customHooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

function App() {
  // 구조 분해 할당
  const { currentItem, setCurrentIndex } = useTabs(0, content);
  return (
    <div>
      {
        // 선택한 Section의 content만 출력
        // changeItem : state 변경 시 모든 걸 새로고침 해준다.(리렌더링)
        content.map((itme, index) => {
          return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
              >{itme.tab}</button>
            );
        })
      }
      <div>
        {currentItem.content}
      </div>
    </div>
  );
}

export default App;