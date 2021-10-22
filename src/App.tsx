import { useState } from 'react'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { incremented, ammountAdded } from './features/counter/counter-slice'
import logo from './logo.svg'
import './App.css'

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(ammountAdded(3));
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handlerClick}>
            count is: {value}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
