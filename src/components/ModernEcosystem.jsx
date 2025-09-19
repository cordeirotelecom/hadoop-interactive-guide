import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { 
  Database, 
  Zap, 
  Search, 
  BarChart3, 
  Cloud, 
  Cpu, 
  Globe,
  TrendingUp,
  Building2,
  Smartphone,
  ShoppingCart,
  Heart,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Star
} from 'lucide-react'

const ModernEcosystem = () => {
  const [selectedTool, setSelectedTool] = useState(null)
  const [selectedUseCase, setSelectedUseCase] = useState(null)

  const ecosystemTools = {
    storage: {
      title: 'Armazenamento e Dados',
      tools: [
        {
          name: 'Apache HBase',
          description: 'Banco NoSQL distribuído para acesso em tempo real',
          status: 'active',
          usage: 'Alto',
          companies: ['Facebook', 'Adobe', 'Yahoo'],
          features: ['Acesso em tempo real', 'Escalabilidade linear', 'Consistência forte'],
          icon: Database
        },
        {
          name: 'Apache Hive',
          description: 'Data warehouse com interface SQL (HiveQL)',
          status: 'active',
          usage: 'Muito Alto',
          companies: ['Netflix', 'Airbnb', 'Uber'],
          features: ['SQL-like queries', 'Schema on read', 'Integração com BI'],
          icon: Database
        },
        {
          name: 'Apache Kudu',
          description: 'Storage engine para análises rápidas',
          status: 'active',
          usage: 'Médio',
          companies: ['Cloudera', 'Xiaomi'],
          features: ['OLAP otimizado', 'Upserts eficientes', 'Integração Spark'],
          icon: Database
        }
      ]
    },
    processing: {
      title: 'Processamento e Análise',
      tools: [
        {
          name: 'Apache Spark',
          description: 'Engine de processamento unificado para big data',
          status: 'dominant',
          usage: 'Muito Alto',
          companies: ['Netflix', 'Uber', 'Airbnb', 'Apple'],
          features: ['In-memory processing', 'MLlib', 'Streaming', 'GraphX'],
          icon: Zap
        },
        {
          name: 'Apache Flink',
          description: 'Stream processing em tempo real',
          status: 'growing',
          usage: 'Alto',
          companies: ['Alibaba', 'Uber', 'Netflix'],
          features: ['Low latency', 'Event time processing', 'Exactly-once'],
          icon: Zap
        },
        {
          name: 'Apache Storm',
          description: 'Processamento de streams distribuído',
          status: 'declining',
          usage: 'Baixo',
          companies: ['Twitter', 'Spotify'],
          features: ['Real-time processing', 'Fault-tolerant', 'Scalable'],
          icon: Zap
        }
      ]
    },
    coordination: {
      title: 'Coordenação e Workflow',
      tools: [
        {
          name: 'Apache Airflow',
          description: 'Orquestração de workflows de dados',
          status: 'dominant',
          usage: 'Muito Alto',
          companies: ['Airbnb', 'Spotify', 'Adobe'],
          features: ['DAG-based', 'Rich UI', 'Extensible', 'Monitoring'],
          icon: Globe
        },
        {
          name: 'Apache Oozie',
          description: 'Sistema de workflow para jobs Hadoop',
          status: 'legacy',
          usage: 'Baixo',
          companies: ['Yahoo', 'LinkedIn'],
          features: ['XML-based', 'Hadoop integration', 'Scheduling'],
          icon: Globe
        },
        {
          name: 'Apache NiFi',
          description: 'Automação de fluxo de dados',
          status: 'active',
          usage: 'Médio',
          companies: ['NSA', 'Hortonworks'],
          features: ['Visual interface', 'Data lineage', 'Security'],
          icon: Globe
        }
      ]
    },
    search: {
      title: 'Busca e Indexação',
      tools: [
        {
          name: 'Apache Solr',
          description: 'Plataforma de busca empresarial',
          status: 'active',
          usage: 'Médio',
          companies: ['Netflix', 'Instagram', 'Comcast'],
          features: ['Full-text search', 'Faceted search', 'Distributed'],
          icon: Search
        },
        {
          name: 'Elasticsearch',
          description: 'Engine de busca e análise distribuída',
          status: 'dominant',
          usage: 'Muito Alto',
          companies: ['Uber', 'Tinder', 'GitHub'],
          features: ['Real-time search', 'Analytics', 'Kibana integration'],
          icon: Search
        }
      ]
    }
  }

  const modernUseCases = [
    {
      id: 'streaming',
      title: 'Análise de Dados em Tempo Real',
      description: 'Processamento de streams de dados para insights imediatos',
      companies: ['Netflix', 'Uber', 'Spotify'],
      technologies: ['Kafka', 'Spark Streaming', 'Flink'],
      examples: [
        'Recomendações em tempo real (Netflix)',
        'Detecção de fraudes (bancos)',
        'Monitoramento de IoT (indústria)',
        'Análise de sentimentos (redes sociais)'
      ],
      icon: TrendingUp,
      growth: '+45% em 2024'
    },
    {
      id: 'ml',
      title: 'Machine Learning em Escala',
      description: 'Treinamento e inferência de modelos ML com big data',
      companies: ['Google', 'Amazon', 'Microsoft'],
      technologies: ['Spark MLlib', 'TensorFlow', 'PyTorch'],
      examples: [
        'Sistemas de recomendação',
        'Processamento de linguagem natural',
        'Visão computacional',
        'Análise preditiva'
      ],
      icon: Cpu,
      growth: '+60% em 2024'
    },
    {
      id: 'iot',
      title: 'Internet das Coisas (IoT)',
      description: 'Coleta e análise de dados de dispositivos conectados',
      companies: ['Tesla', 'GE', 'Siemens'],
      technologies: ['Kafka', 'HBase', 'Time Series DBs'],
      examples: [
        'Carros autônomos (Tesla)',
        'Smart cities',
        'Monitoramento industrial',
        'Dispositivos médicos'
      ],
      icon: Smartphone,
      growth: '+35% em 2024'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce e Retail',
      description: 'Personalização e otimização de experiência do cliente',
      companies: ['Amazon', 'Alibaba', 'Walmart'],
      technologies: ['Hadoop', 'Spark', 'Elasticsearch'],
      examples: [
        'Recomendações de produtos',
        'Otimização de preços',
        'Análise de comportamento',
        'Gestão de inventário'
      ],
      icon: ShoppingCart,
      growth: '+25% em 2024'
    },
    {
      id: 'healthcare',
      title: 'Saúde e Medicina',
      description: 'Análise de dados médicos para melhor atendimento',
      companies: ['IBM Watson', 'Google Health', 'Microsoft Healthcare'],
      technologies: ['Hadoop', 'Spark', 'TensorFlow'],
      examples: [
        'Diagnóstico por imagem',
        'Descoberta de medicamentos',
        'Análise genômica',
        'Epidemiologia'
      ],
      icon: Heart,
      growth: '+50% em 2024'
    },
    {
      id: 'fintech',
      title: 'Serviços Financeiros',
      description: 'Análise de risco e detecção de fraudes',
      companies: ['JPMorgan', 'Goldman Sachs', 'PayPal'],
      technologies: ['Hadoop', 'Spark', 'Kafka'],
      examples: [
        'Detecção de fraudes',
        'Análise de crédito',
        'Trading algorítmico',
        'Compliance regulatório'
      ],
      icon: DollarSign,
      growth: '+40% em 2024'
    }
  ]

  const cloudNativeComparison = {
    traditional: {
      title: 'Hadoop Tradicional',
      pros: [
        'Controle total da infraestrutura',
        'Custos previsíveis para grandes volumes',
        'Sem vendor lock-in',
        'Customização completa'
      ],
      cons: [
        'Complexidade de gerenciamento',
        'Custos de infraestrutura',
        'Escalabilidade manual',
        'Manutenção intensiva'
      ]
    },
    cloudNative: {
      title: 'Soluções Cloud-Native',
      pros: [
        'Escalabilidade automática',
        'Gerenciamento simplificado',
        'Pay-as-you-use',
        'Integração nativa'
      ],
      cons: [
        'Vendor lock-in',
        'Custos podem escalar',
        'Menos controle',
        'Dependência de conectividade'
      ]
    }
  }

  const getStatusColor = (status) => {
    const colors = {
      dominant: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      active: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      growing: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      declining: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      legacy: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
    return colors[status] || colors.active
  }

  const getUsageColor = (usage) => {
    const colors = {
      'Muito Alto': 'text-green-600 font-bold',
      'Alto': 'text-blue-600 font-semibold',
      'Médio': 'text-yellow-600',
      'Baixo': 'text-red-600'
    }
    return colors[usage] || 'text-gray-600'
  }

  return (
    <div className="space-y-8">
      {/* Ecosystem Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600" />
            Ecossistema Hadoop Moderno (2024-2025)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {Object.entries(ecosystemTools).map(([category, data]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {data.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.tools.map((tool, index) => {
                    const Icon = tool.icon
                    const isSelected = selectedTool === `${category}-${index}`
                    return (
                      <Card 
                        key={index}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          isSelected ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' : ''
                        }`}
                        onClick={() => setSelectedTool(isSelected ? null : `${category}-${index}`)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Icon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-sm truncate">{tool.name}</h4>
                                <Badge className={`text-xs ${getStatusColor(tool.status)}`}>
                                  {tool.status}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                {tool.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">Uso:</span>
                                <span className={`text-xs ${getUsageColor(tool.usage)}`}>
                                  {tool.usage}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tool Details */}
      {selectedTool && (() => {
        const [category, index] = selectedTool.split('-')
        const tool = ecosystemTools[category].tools[index]
        const Icon = tool.icon
        
        return (
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-blue-600" />
                {tool.name}
                <Badge className={getStatusColor(tool.status)}>
                  {tool.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">{tool.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Características Principais</h4>
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Empresas que Utilizam</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.companies.map((company, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {company}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Nível de Uso: </span>
                    <span className={`text-sm font-semibold ${getUsageColor(tool.usage)}`}>
                      {tool.usage}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })()}

      {/* Modern Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            Casos de Uso Modernos do Big Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modernUseCases.map((useCase) => {
              const Icon = useCase.icon
              const isSelected = selectedUseCase === useCase.id
              return (
                <Card 
                  key={useCase.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-950' : ''
                  }`}
                  onClick={() => setSelectedUseCase(isSelected ? null : useCase.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Icon className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-2">{useCase.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                          {useCase.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs text-green-600">
                            {useCase.growth}
                          </Badge>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Use Case Details */}
      {selectedUseCase && (() => {
        const useCase = modernUseCases.find(uc => uc.id === selectedUseCase)
        const Icon = useCase.icon
        
        return (
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-green-600" />
                {useCase.title}
                <Badge variant="outline" className="text-green-600">
                  {useCase.growth}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">{useCase.description}</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Empresas Líderes
                  </h4>
                  <div className="space-y-2">
                    {useCase.companies.map((company, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    Tecnologias Principais
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Exemplos Práticos
                  </h4>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="text-xs text-gray-600 dark:text-gray-400">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })()}

      {/* Cloud Native vs Traditional */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-purple-600" />
            Hadoop Tradicional vs. Soluções Cloud-Native
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(cloudNativeComparison).map(([type, data]) => (
              <Card key={type} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{data.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Vantagens
                    </h4>
                    <div className="space-y-1">
                      {data.pros.map((pro, idx) => (
                        <div key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                          • {pro}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Desvantagens
                    </h4>
                    <div className="space-y-1">
                      {data.cons.map((con, idx) => (
                        <div key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                          • {con}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Trends */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            Tendências do Mercado 2024-2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">$274B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mercado Big Data 2024</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-600">+12.3%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Crescimento Anual</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Empresas usando Big Data</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">2.5M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Profissionais demandados</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ModernEcosystem
