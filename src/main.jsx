import React from 'react'
import ReactDOM from 'react-dom/client'
import Topo from './Topo.jsx'
import Logo from './Logo.jsx'
import './styles.css'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <Topo />
    <Footer />
  </React.StrictMode>,
)
