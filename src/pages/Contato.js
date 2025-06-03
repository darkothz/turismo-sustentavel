import React from 'react'

function Contato() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Fale conosco</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nome"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Mensagem"
          className="w-full border border-gray-300 p-2 rounded h-32"
        />
        <button className="bg-green-700 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </div>
  )
}

export default Contato