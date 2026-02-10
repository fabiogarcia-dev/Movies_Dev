import React from 'react'
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/golbaStyles.js'
import Router from "./routes/routes.jsx"

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>

)