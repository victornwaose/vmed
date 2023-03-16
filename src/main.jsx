import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import  {AuthProvider} from "./context/AuthContext";

import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
