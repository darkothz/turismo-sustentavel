import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Menu:</h1>
        <ul className="flex space-x-6">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/destinos">Destinos Sustentáveis</Link></li>
          <li><Link to="/dicas">Dicas Ecológicas</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar