import React from 'react';
import ReactDOM from 'react-dom';


let _state = []
let index = 0
function myUseState(initState) {
  const currentIndex = index
  console.log('currentIndex')
  console.log(currentIndex)
  _state[currentIndex] = _state[currentIndex] === undefined ? initState : _state[currentIndex]
  console.log(_state)
  index += 1
  function setState(newState) {
    // 发现此时这边的 index 会有问题。因为下一次应该是 index +1
    _state[currentIndex] = newState
    render()
  }
  // index += 1 这边 +1 了 那么下面 return 的就不是当前的一个，而是下一个了。 单页不可能放到return后面。所以这条路不对啊。
  // 需要一个中介，保存当时的index，然后修改index，但是当前的index并不会丢失。 
  return [_state[currentIndex], setState]
}

const render = () => {
  index = 0
  ReactDOM.render(<App />, document.getElementById('root'))
}

const App = () => {
  // 原 useState: const [n,setN] = useState(0)
  const [state, setState] = myUseState(0)
  const [m, setM] = myUseState(0)
  index = 0  // 这一次是为了清除 myUseState第一次渲染时调用的。


  return (
    <div className="App">
      n: {state}
      <button onClick={() => setState(state + 1)}>+1</button>
      m: {m}
      <button onClick={() => setM(m + 1)}>+1</button>

    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
