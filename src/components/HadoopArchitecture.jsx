import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { 
  Database, 
  Server, 
  Network, 
  Settings, 
  FileText,
  Zap,
  ArrowRight,
  ArrowDown,
  Play,
  Pause
} from 'lucide-react'

const HadoopArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const components = {
    hdfs: {
      title: 'HDFS',
      subtitle: 'Hadoop Distributed File System',
      icon: Database,
      color: 'blue',
      description: 'Sistema de arquivos distribuído que armazena dados em blocos replicados através do cluster.',
      subComponents: [
        { name: 'NameNode', role: 'Gerencia metadados e namespace', status: 'active' },
        { name: 'DataNode', role: 'Armazena blocos de dados', status: 'active' },
        { name: 'Secondary NameNode', role: 'Checkpoint dos metadados', status: 'active' }
      ],
      features: [
        'Tolerância a falhas através de replicação',
        'Escalabilidade horizontal',
        'Otimizado para grandes arquivos',
        'Write-once, read-many pattern'
      ]
    },
    yarn: {
      title: 'YARN',
      subtitle: 'Yet Another Resource Negotiator',
      icon: Settings,
      color: 'green',
      description: 'Gerenciador de recursos que agenda e coordena a execução de aplicações no cluster.',
      subComponents: [
        { name: 'ResourceManager', role: 'Gerencia recursos globais', status: 'active' },
        { name: 'NodeManager', role: 'Gerencia recursos locais', status: 'active' },
        { name: 'ApplicationMaster', role: 'Coordena aplicação específica', status: 'running' }
      ],
      features: [
        'Alocação dinâmica de recursos',
        'Suporte a múltiplos frameworks',
        'Isolamento de aplicações',
        'Monitoramento em tempo real'
      ]
    },
    mapreduce: {
      title: 'MapReduce',
      subtitle: 'Modelo de Programação',
      icon: Zap,
      color: 'purple',
      description: 'Framework para processamento paralelo de dados em duas fases: Map e Reduce.',
      subComponents: [
        { name: 'JobTracker', role: 'Coordena jobs MapReduce', status: 'deprecated' },
        { name: 'TaskTracker', role: 'Executa tarefas', status: 'deprecated' },
        { name: 'YARN Integration', role: 'Execução via YARN', status: 'active' }
      ],
      features: [
        'Processamento paralelo distribuído',
        'Tolerância a falhas automática',
        'Localidade de dados',
        'Escalabilidade linear'
      ]
    },
    common: {
      title: 'Hadoop Common',
      subtitle: 'Bibliotecas e Utilitários',
      icon: FileText,
      color: 'orange',
      description: 'Conjunto de bibliotecas, utilitários e APIs compartilhadas pelos outros componentes.',
      subComponents: [
        { name: 'Configuration', role: 'Sistema de configuração', status: 'active' },
        { name: 'FileSystem API', role: 'Interface para sistemas de arquivos', status: 'active' },
        { name: 'Security', role: 'Autenticação e autorização', status: 'active' }
      ],
      features: [
        'APIs consistentes',
        'Sistema de configuração unificado',
        'Utilitários de linha de comando',
        'Bibliotecas de serialização'
      ]
    }
  }

  const dataFlow = [
    { from: 'Client', to: 'NameNode', action: 'Solicita metadados' },
    { from: 'NameNode', to: 'Client', action: 'Retorna localização dos blocos' },
    { from: 'Client', to: 'DataNode', action: 'Lê/escreve dados' },
    { from: 'DataNode', to: 'NameNode', action: 'Heartbeat + Block Report' }
  ]

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const getColorClasses = (color, selected = false) => {
    const colors = {
      blue: selected ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' : 'border-blue-200 hover:border-blue-400',
      green: selected ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-green-200 hover:border-green-400',
      purple: selected ? 'border-purple-500 bg-purple-50 dark:bg-purple-950' : 'border-purple-200 hover:border-purple-400',
      orange: selected ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-orange-200 hover:border-orange-400'
    }
    return colors[color] || colors.blue
  }

  const getIconColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="space-y-6">
      {/* Architecture Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Arquitetura do Hadoop - Visão Interativa</span>
            <Button variant="outline" size="sm" onClick={toggleAnimation}>
              {isAnimating ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
              {isAnimating ? 'Pausar' : 'Animar'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Object.entries(components).map(([key, component]) => {
              const Icon = component.icon
              const isSelected = selectedComponent === key
              return (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-300 ${getColorClasses(component.color, isSelected)} ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                  onClick={() => setSelectedComponent(isSelected ? null : key)}
                >
                  <CardContent className="p-4 text-center">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${getIconColor(component.color)}`} />
                    <h3 className="font-semibold text-sm">{component.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {component.subtitle}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Data Flow Visualization */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Network className="h-5 w-5" />
              Fluxo de Dados no HDFS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dataFlow.map((flow, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
                    {flow.from}
                  </div>
                  <ArrowRight className={`h-4 w-4 text-blue-500 ${isAnimating ? 'animate-bounce' : ''}`} />
                  <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
                    {flow.to}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Details */}
      {selectedComponent && (
        <Card className={`${getColorClasses(components[selectedComponent].color, true)} transition-all duration-500`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {(() => {
                const Icon = components[selectedComponent].icon
                return <Icon className={`h-6 w-6 ${getIconColor(components[selectedComponent].color)}`} />
              })()}
              {components[selectedComponent].title}
              <Badge variant="secondary">{components[selectedComponent].subtitle}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              {components[selectedComponent].description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  Subcomponentes
                </h4>
                <div className="space-y-2">
                  {components[selectedComponent].subComponents.map((sub, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{sub.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{sub.role}</div>
                      </div>
                      <Badge 
                        variant={sub.status === 'active' ? 'default' : sub.status === 'running' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {sub.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Características Principais
                </h4>
                <div className="space-y-2">
                  {components[selectedComponent].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg">
                      <div className={`w-2 h-2 rounded-full bg-${components[selectedComponent].color}-500`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Referência Rápida - Portas e Interfaces</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-600">HDFS</h4>
              <div className="text-sm space-y-1">
                <div>NameNode Web UI: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">9870</code></div>
                <div>NameNode RPC: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">9000</code></div>
                <div>DataNode Web UI: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">9864</code></div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-green-600">YARN</h4>
              <div className="text-sm space-y-1">
                <div>ResourceManager: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">8088</code></div>
                <div>NodeManager: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">8042</code></div>
                <div>Timeline Service: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">8188</code></div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-purple-600">MapReduce</h4>
              <div className="text-sm space-y-1">
                <div>Job History: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">19888</code></div>
                <div>Shuffle: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">13562</code></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HadoopArchitecture
