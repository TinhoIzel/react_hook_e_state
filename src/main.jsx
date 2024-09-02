import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // É usado para debugar (deve mandar mensagem de erro)
  // explicando o que aconteceu

  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
