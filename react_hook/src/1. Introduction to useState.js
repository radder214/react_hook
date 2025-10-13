import React, { useState } from "react";

// 함수형 컴포넌트
const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(current => current + 1);
  const decrementItem = () => setItem(current => current - 1);
  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increase</button>
      <button onClick={decrementItem}>Decrease</button>
    </div>
  );
}

// 위의 함수형 컴포넌트를 클래스 컴포넌트로 바꿔보자
// 코드의 길이가 매우 늘어나는 것을 확인할 수 있다.
class AppClass extends React.Component {
  state = {
    item : 1
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item : state.item + 1
      }
    });
  }

  decrementItem = () => {
    this.setState(state => {
      return {
        item : state.item - 1
      }
    });
  }

  render() {
    const {item} = this.state;
    return (
      <div>
        <h1>Hello {item}</h1>
        <button onClick={this.incrementItem}>Increase</button>
        <button onClick={this.decrementItem}>Decrease</button>
      </div>
    )
  }
}

export default App;