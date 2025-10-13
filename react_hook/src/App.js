// export default가 아니기에 {중괄호}로 감싸야한다.
import { useInput } from "./customHooks/useInput";

// 함수형 컴포넌트
const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Apple", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input
        onChange={name.onChange}
        value={name.value}
        placeholder="name"
        type="text"
      />
    </div>
  );
}

export default App;