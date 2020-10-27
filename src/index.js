import React from 'react';
import ReactDOM from 'react-dom';



function myUseState(initState) {
  let state = initState
  function setState(newState) {
    state = newState
    render()
  }
  return [state, setState]
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

const App = () => {
  // 原 useState: const [n,setN] = useState(0)
  const [state, setState] = myUseState(0)

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
