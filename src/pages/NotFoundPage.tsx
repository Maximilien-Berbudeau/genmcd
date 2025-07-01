import { Link } from 'react-router-dom'
import { ROUTES } from '../router'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Page non trouvée
          </h1>
          <p className="text-gray-600">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="mb-8">
          <svg className="w-24 h-24 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <div className="space-y-4">
          <Link
            to={ROUTES.HOME}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Retour à l'accueil
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>ou essayez ces liens utiles :</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              to={ROUTES.GENERATOR}
              className="text-blue-600 hover:text-blue-700 underline text-sm"
            >
              Générateur MCD
            </Link>
            <Link
              to={ROUTES.SETTINGS}
              className="text-blue-600 hover:text-blue-700 underline text-sm"
            >
              Configuration
            </Link>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-400">
          <p>
            Si vous pensez qu'il s'agit d'une erreur, veuillez{' '}
            <a 
              href="https://github.com/Maximilien-Berbudeau/genmcd/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              nous le signaler
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}