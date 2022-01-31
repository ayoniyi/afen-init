import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ModeContextProvider } from './context/ModeContext.js'

ReactDOM.render(
  <React.StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
