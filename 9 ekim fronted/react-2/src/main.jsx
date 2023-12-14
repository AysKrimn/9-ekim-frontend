import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// BS CSS



import 'bootstrap/dist/css/bootstrap.min.css';


// BROWSEROUTER
import { BrowserRouter } from 'react-router-dom'


// Context
import UserContext from './Context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>

        <UserContext>
            <App />
        </UserContext>

    </BrowserRouter>


)
