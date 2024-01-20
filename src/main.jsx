import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MeetupProvider } from './context/main.jsx'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
    <MeetupProvider>
    <ToastContainer />
    <App />
    </MeetupProvider>
    </HashRouter>
  </React.StrictMode>
)
