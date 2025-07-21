import React from 'react'
import { Link } from 'react-router'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-purple-700">Créer votre compte</h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Nom complet"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Adresse email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="py-3 mt-4 font-bold text-white transition bg-purple-600 rounded-md hover:bg-purple-700"
          >
            S'inscrire
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500">
          Vous avez déjà un compte ? <Link to="/" className="font-bold text-purple-600 cursor-pointer">Connectez-vous</Link>
        </p>
      </div>
    </div>
  )
}
