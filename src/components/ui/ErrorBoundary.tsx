import { useRouteError, Link } from 'react-router-dom'
import { ROUTES } from '../../router'

export function ErrorBoundary() {
  const error = useRouteError() as Error & { status?: number; statusText?: string }

  console.error('Router Error:', error)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops ! Une erreur s'est produite
          </h1>
          <p className="text-gray-600 mb-6">
            {error.status === 404 
              ? "La page que vous recherchez n'existe pas."
              : "Quelque chose s'est mal passé. Nous nous excusons pour la gêne occasionnée."
            }
          </p>
        </div>

        {error.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-700 font-mono">
              {error.message}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <Link
            to={ROUTES.HOME}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Recharger la page
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Si le problème persiste, veuillez{' '}
            <a 
              href="https://github.com/Maximilien-Berbudeau/genmcd/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              signaler le problème
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}