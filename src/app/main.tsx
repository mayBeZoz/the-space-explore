import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../styles/index.css'
import GlobalContext from '../contexts/GlobalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalContext>
           <App />
        </GlobalContext>
    </React.StrictMode>
)
