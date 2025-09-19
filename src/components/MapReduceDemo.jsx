import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Progress } from "./ui/progress.jsx"
import { Textarea } from "./ui/textarea.jsx"
import { 
  Play, 
  RotateCcw, 
  ArrowRight, 
  FileText, 
  Shuffle, 
  BarChart3,
  Clock,
  CheckCircle
} from 'lucide-react'

const MapReduceDemo = () => {
  const [inputText, setInputText] = useState(`Apache Hadoop é um framework de código aberto
para processamento distribuído de Big Data.
Hadoop permite o processamento de grandes volumes de dados
através de clusters de computadores usando programação simples.
O framework Hadoop é projetado para escalar
de servidores únicos para milhares de máquinas.`)

  const [currentPhase, setCurrentPhase] = useState('input')
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mapResults, setMapResults] = useState([])
  const [shuffleResults, setShuffleResults] = useState([])
  const [reduceResults, setReduceResults] = useState([])
  const [finalResults, setFinalResults] = useState([])

  const phases = [
    { id: 'input', name: 'Entrada', icon: FileText, description: 'Dados de entrada para processamento' },
    { id: 'map', name: 'Map', icon: ArrowRight, description: 'Divisão e mapeamento dos dados' },
    { id: 'shuffle', name: 'Shuffle', icon: Shuffle, description: 'Agrupamento por chave' },
    { id: 'reduce', name: 'Reduce', icon: BarChart3, description: 'Agregação dos resultados' },
    { id: 'output', name: 'Saída', icon: CheckCircle, description: 'Resultado final' }
  ]

  const simulateMapPhase = (text) => {
    const lines = text.split('\n').filter(line => line.trim())
    const mapResults = []
    
    lines.forEach((line, lineIndex) => {
      const words = line.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 0)
      
      words.forEach(word => {
        mapResults.push({
          mapper: `Mapper ${lineIndex + 1}`,
          key: word,
          value: 1,
          line: lineIndex + 1
        })
      })
    })
    
    return mapResults
  }

  const simulateShufflePhase = (mapResults) => {
    const grouped = {}
    
    mapResults.forEach(result => {
      if (!grouped[result.key]) {
        grouped[result.key] = []
      }
      grouped[result.key].push(result.value)
    })
    
    return Object.entries(grouped).map(([key, values]) => ({
      key,
      values,
      count: values.length
    }))
  }

  const simulateReducePhase = (shuffleResults) => {
    return shuffleResults.map(group => ({
      word: group.key,
      count: group.values.reduce((sum, val) => sum + val, 0),
      reducerId: `Reducer ${Math.floor(Math.random() * 3) + 1}`
    }))
  }

  const runMapReduce = async () => {
    setIsRunning(true)
    setProgress(0)
    setCurrentPhase('input')
    
    // Reset results
    setMapResults([])
    setShuffleResults([])
    setReduceResults([])
    setFinalResults([])
    
    // Input phase
    await new Promise(resolve => setTimeout(resolve, 1000))
    setProgress(20)
    setCurrentPhase('map')
    
    // Map phase
    await new Promise(resolve => setTimeout(resolve, 1500))
    const mapRes = simulateMapPhase(inputText)
    setMapResults(mapRes)
    setProgress(40)
    setCurrentPhase('shuffle')
    
    // Shuffle phase
    await new Promise(resolve => setTimeout(resolve, 1500))
    const shuffleRes = simulateShufflePhase(mapRes)
    setShuffleResults(shuffleRes)
    setProgress(70)
    setCurrentPhase('reduce')
    
    // Reduce phase
    await new Promise(resolve => setTimeout(resolve, 1500))
    const reduceRes = simulateReducePhase(shuffleRes)
    setReduceResults(reduceRes)
    setProgress(90)
    setCurrentPhase('output')
    
    // Final results
    await new Promise(resolve => setTimeout(resolve, 1000))
    const sortedResults = reduceRes
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
    setFinalResults(sortedResults)
    setProgress(100)
    setIsRunning(false)
  }

  const resetDemo = () => {
    setCurrentPhase('input')
    setIsRunning(false)
    setProgress(0)
    setMapResults([])
    setShuffleResults([])
    setReduceResults([])
    setFinalResults([])
  }

  const getPhaseStatus = (phaseId) => {
    const phaseIndex = phases.findIndex(p => p.id === phaseId)
    const currentIndex = phases.findIndex(p => p.id === currentPhase)
    
    if (phaseIndex < currentIndex) return 'completed'
    if (phaseIndex === currentIndex) return 'active'
    return 'pending'
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Demonstração Interativa do MapReduce</span>
            <div className="flex gap-2">
              <Button onClick={runMapReduce} disabled={isRunning}>
                <Play className="h-4 w-4 mr-1" />
                {isRunning ? 'Executando...' : 'Executar'}
              </Button>
              <Button variant="outline" onClick={resetDemo} disabled={isRunning}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Texto de Entrada:</label>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isRunning}
                rows={6}
                className="w-full"
                placeholder="Digite o texto para análise..."
              />
            </div>
            
            {isRunning && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Progresso:</span>
                  <span className="text-sm text-gray-600">{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Phase Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Fases do MapReduce</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const status = getPhaseStatus(phase.id)
              
              return (
                <div key={phase.id} className="flex items-center">
                  <div className={`
                    flex flex-col items-center p-4 rounded-lg transition-all duration-300
                    ${status === 'completed' ? 'bg-green-100 dark:bg-green-900' : ''}
                    ${status === 'active' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : ''}
                    ${status === 'pending' ? 'bg-gray-100 dark:bg-gray-800' : ''}
                  `}>
                    <Icon className={`
                      h-6 w-6 mb-2
                      ${status === 'completed' ? 'text-green-600' : ''}
                      ${status === 'active' ? 'text-blue-600' : ''}
                      ${status === 'pending' ? 'text-gray-400' : ''}
                    `} />
                    <span className={`
                      text-sm font-medium
                      ${status === 'completed' ? 'text-green-800 dark:text-green-200' : ''}
                      ${status === 'active' ? 'text-blue-800 dark:text-blue-200' : ''}
                      ${status === 'pending' ? 'text-gray-500' : ''}
                    `}>
                      {phase.name}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
                      {phase.description}
                    </span>
                  </div>
                  
                  {index < phases.length - 1 && (
                    <ArrowRight className={`
                      h-5 w-5 mx-2
                      ${status === 'completed' ? 'text-green-500' : 'text-gray-300'}
                    `} />
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Results Display */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Map Results */}
        {mapResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600" />
                Resultados da Fase Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-64 overflow-y-auto space-y-1">
                {mapResults.slice(0, 20).map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm">
                    <span className="text-blue-600">{result.mapper}</span>
                    <span>({result.key}, {result.value})</span>
                    <Badge variant="outline" className="text-xs">Linha {result.line}</Badge>
                  </div>
                ))}
                {mapResults.length > 20 && (
                  <div className="text-center text-sm text-gray-500 py-2">
                    ... e mais {mapResults.length - 20} resultados
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Shuffle Results */}
        {shuffleResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shuffle className="h-5 w-5 text-purple-600" />
                Resultados da Fase Shuffle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-64 overflow-y-auto space-y-1">
                {shuffleResults.slice(0, 15).map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm">
                    <span className="font-medium">{result.key}</span>
                    <span className="text-purple-600">[{result.values.join(', ')}]</span>
                    <Badge variant="secondary" className="text-xs">{result.count} ocorrências</Badge>
                  </div>
                ))}
                {shuffleResults.length > 15 && (
                  <div className="text-center text-sm text-gray-500 py-2">
                    ... e mais {shuffleResults.length - 15} grupos
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Final Results */}
      {finalResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Resultado Final - Top 10 Palavras
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {finalResults.map((result, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{result.word}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Processado por {result.reducerId}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{result.count}</div>
                    <div className="text-xs text-gray-500">ocorrências</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default MapReduceDemo
