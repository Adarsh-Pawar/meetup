import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MeetupProvider } from './context/main.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
    <MeetupProvider>
    <App />
    </MeetupProvider>
    </HashRouter>
  </React.StrictMode>
)
