import React from 'react';
import ReactDOM from 'react-dom';


let _state
function myUseState(initState) {
  _state = _state || initState
  console.log(_state)
  function setState(newState) {
    _state = newState
    render()
  }
  return [_state, setState]
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

const App = () => {
  // 原 useState: const [n,setN] = useState(0)
  const [state, setState] = myUseState(1)

  return (
    <div className="App">
      n: {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
