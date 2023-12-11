import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// BOOTSRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

    // CONTEXT API
    <BrowserRouter>
        <App />
    </BrowserRouter>
   
)
