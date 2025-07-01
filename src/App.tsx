import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">MCD Generator</h1>
        <div className="space-y-4">
          <button
            onClick={() => setCount(count => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            count is {count}
          </button>
          <p className="text-sm text-gray-600">
            Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code>{' '}
            and save to test HMR
          </p>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
