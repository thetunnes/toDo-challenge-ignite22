import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ListTodoProvider } from './contexts/listTodo'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListTodoProvider>
      <App />
    </ListTodoProvider>
  </React.StrictMode>
)
