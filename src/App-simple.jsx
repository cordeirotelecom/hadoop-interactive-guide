import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🚀 Hadoop Interactive Guide
        </h1>
        <p className="text-xl text-gray-600">
          Guia Interativo Completo do Apache Hadoop
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">✅ Site Funcionando!</h2>
          <p className="text-gray-700 mb-4">
            O Hadoop Interactive Guide está carregando corretamente. 
            Esta é uma versão simplificada para teste.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">📊 Big Data</h3>
              <p className="text-blue-600">Processamento em escala</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">⚡ Performance</h3>
              <p className="text-green-600">Clusters distribuídos</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800">🔧 Escalável</h3>
              <p className="text-purple-600">Horizontal scaling</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">🎉 Deploy Realizado com Sucesso!</h2>
          <p className="text-blue-100">
            O site está funcionando perfeitamente. Todas as configurações foram corrigidas.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App