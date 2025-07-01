import { useState } from 'react'

export function GeneratorPage() {
  const [textBrief, setTextBrief] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Générateur de MCD
          </h1>
          <p className="text-gray-600">
            Décrivez votre base de données en langage naturel et obtenez un MCD visuel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Description de votre base de données
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="textBrief" className="block text-sm font-medium text-gray-700 mb-2">
                  Décrivez votre système de données
                </label>
                <textarea
                  id="textBrief"
                  value={textBrief}
                  onChange={(e) => setTextBrief(e.target.value)}
                  placeholder="Exemple: Je veux créer une base de données pour un système de gestion de bibliothèque. Il y a des livres avec un titre, auteur, ISBN. Il y a des utilisateurs avec nom, email. Un utilisateur peut emprunter plusieurs livres..."
                  className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  maxLength={2000}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    {textBrief.length}/2000 caractères
                  </span>
                  <button
                    disabled={!textBrief.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
                  >
                    Générer le MCD
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Diagramme MCD
            </h2>
            
            <div className="h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-500">
                  Votre MCD apparaîtra ici après la génération
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Entrez une description et cliquez sur "Générer le MCD"
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                disabled
                className="bg-gray-100 text-gray-400 px-4 py-2 rounded-md font-medium cursor-not-allowed"
              >
                Exporter SVG
              </button>
              <button
                disabled
                className="bg-gray-100 text-gray-400 px-4 py-2 rounded-md font-medium cursor-not-allowed"
              >
                Exporter PNG
              </button>
              <button
                disabled
                className="bg-gray-100 text-gray-400 px-4 py-2 rounded-md font-medium cursor-not-allowed"
              >
                Copier Mermaid
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            💡 Conseils pour une meilleure génération
          </h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Décrivez clairement les entités (tables) de votre système</li>
            <li>• Mentionnez les attributs importants de chaque entité</li>
            <li>• Précisez les relations entre les entités</li>
            <li>• Indiquez les clés primaires et étrangères si vous les connaissez</li>
          </ul>
        </div>
      </div>
    </div>
  )
}