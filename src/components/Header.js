import React from 'react'
import { Link } from 'react-router-dom'
import { RiRecycleFill } from 'react-icons/ri'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="titulo">
        <RiRecycleFill className="icone" />
        Turismo Sustentável
      </div>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/destinos">Destinos Sustentáveis</Link>
        <Link to="/dicas">Dicas Ecológicas</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

export default Header