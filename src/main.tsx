import React from 'react' //global
import ReactDOM from 'react-dom/client' //liga react a web
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
