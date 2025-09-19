import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Zap, 
  Database, 
  Cloud, 
  Cpu, 
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Settings,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Globe,
  Layers,
  Target
} from 'lucide-react'

const TechComparisons = () => {
  const [selectedComparison, setSelectedComparison] = useState('hadoop-vs-spark')
  const [selectedMetric, setSelectedMetric] = useState('performance')

  const comparisons = {
    'hadoop-vs-spark': {
      title: 'Hadoop MapReduce vs Apache Spark',
      description: 'Comparação entre os frameworks de processamento distribuído',
      technologies: [
        {
          name: 'Hadoop MapReduce',
          logo: '🐘',
          scores: {
            performance: 65,
            ease_of_use: 45,
            scalability: 85,
            cost: 90,
            community: 80,
            learning_curve: 40
          },
          pros: [
            'Muito estável e maduro',
            'Excelente para processamento batch',
            'Tolerância a falhas robusta',
            'Custo-efetivo para grandes volumes',
            'Integração nativa com HDFS'
          ],
          cons: [
            'Latência alta (disk-based)',
            'Complexidade de desenvolvimento',
            'Limitado para processamento iterativo',
            'API de baixo nível'
          ],
          bestFor: [
            'ETL de grandes volumes',
            'Processamento batch noturno',
            'Análises históricas',
            'Orçamentos limitados'
          ],
          marketShare: 25,
          trend: 'declining'
        },
        {
          name: 'Apache Spark',
          logo: '⚡',
          scores: {
            performance: 95,
            ease_of_use: 85,
            scalability: 90,
            cost: 70,
            community: 95,
            learning_curve: 80
          },
          pros: [
            'Processamento in-memory (100x mais rápido)',
            'APIs de alto nível (Scala, Python, R)',
            'Suporte a ML, streaming e graph processing',
            'Desenvolvimento mais produtivo',
            'Ecossistema rico'
          ],
          cons: [
            'Maior consumo de memória',
            'Complexidade de tuning',
            'Custos mais altos',
            'Curva de aprendizado inicial'
          ],
          bestFor: [
            'Machine Learning',
            'Análises interativas',
            'Processamento em tempo real',
            'Desenvolvimento ágil'
          ],
          marketShare: 75,
          trend: 'growing'
        }
      ]
    },
    'hadoop-vs-cloud': {
      title: 'Hadoop On-Premise vs Cloud Data Platforms',
      description: 'Comparação entre soluções tradicionais e cloud-native',
      technologies: [
        {
          name: 'Hadoop On-Premise',
          logo: '🏢',
          scores: {
            performance: 80,
            ease_of_use: 40,
            scalability: 70,
            cost: 85,
            security: 90,
            flexibility: 95
          },
          pros: [
            'Controle total dos dados',
            'Sem vendor lock-in',
            'Customização completa',
            'Custos previsíveis',
            'Compliance rigoroso'
          ],
          cons: [
            'Alto investimento inicial',
            'Complexidade operacional',
            'Escalabilidade manual',
            'Manutenção intensiva',
            'Time-to-market lento'
          ],
          bestFor: [
            'Dados altamente sensíveis',
            'Compliance rigoroso',
            'Grandes volumes estáveis',
            'Controle total necessário'
          ],
          marketShare: 35,
          trend: 'stable'
        },
        {
          name: 'Cloud Data Platforms',
          logo: '☁️',
          scores: {
            performance: 90,
            ease_of_use: 95,
            scalability: 100,
            cost: 60,
            security: 85,
            flexibility: 80
          },
          pros: [
            'Escalabilidade automática',
            'Gerenciamento simplificado',
            'Time-to-market rápido',
            'Integração nativa',
            'Inovação contínua'
          ],
          cons: [
            'Vendor lock-in',
            'Custos podem escalar',
            'Dependência de conectividade',
            'Menos controle',
            'Compliance complexo'
          ],
          bestFor: [
            'Startups e scale-ups',
            'Desenvolvimento ágil',
            'Cargas variáveis',
            'Inovação rápida'
          ],
          marketShare: 65,
          trend: 'growing'
        }
      ]
    },
    'storage-solutions': {
      title: 'Soluções de Armazenamento Big Data',
      description: 'Comparação entre diferentes tecnologias de storage',
      technologies: [
        {
          name: 'HDFS',
          logo: '📁',
          scores: {
            throughput: 85,
            latency: 40,
            scalability: 95,
            cost: 95,
            reliability: 90,
            ease_of_use: 50
          },
          pros: [
            'Throughput muito alto',
            'Escalabilidade linear',
            'Custo muito baixo',
            'Tolerância a falhas',
            'Otimizado para grandes arquivos'
          ],
          cons: [
            'Latência alta',
            'Não suporta updates',
            'NameNode como ponto único',
            'Complexidade operacional'
          ],
          bestFor: [
            'Data lakes',
            'Arquivos grandes',
            'Processamento batch',
            'Armazenamento de longo prazo'
          ],
          marketShare: 40,
          trend: 'stable'
        },
        {
          name: 'Cloud Object Storage',
          logo: '🪣',
          scores: {
            throughput: 80,
            latency: 60,
            scalability: 100,
            cost: 85,
            reliability: 95,
            ease_of_use: 90
          },
          pros: [
            'Escalabilidade infinita',
            'Gerenciamento zero',
            'Integração nativa',
            'Durabilidade 99.999999999%',
            'Múltiplas classes de storage'
          ],
          cons: [
            'Custos de transferência',
            'Latência de rede',
            'Vendor lock-in',
            'Dependência de conectividade'
          ],
          bestFor: [
            'Aplicações cloud-native',
            'Backup e arquivamento',
            'Data lakes modernos',
            'Integração com serviços cloud'
          ],
          marketShare: 60,
          trend: 'growing'
        }
      ]
    },
    'processing-engines': {
      title: 'Engines de Processamento Modernas',
      description: 'Comparação entre diferentes engines de processamento',
      technologies: [
        {
          name: 'Apache Spark',
          logo: '⚡',
          scores: {
            batch_processing: 95,
            stream_processing: 80,
            ml_support: 95,
            ease_of_use: 85,
            performance: 90,
            ecosystem: 95
          },
          pros: [
            'Processamento unificado',
            'In-memory computing',
            'MLlib integrado',
            'APIs múltiplas linguagens',
            'Ecossistema maduro'
          ],
          cons: [
            'Consumo alto de memória',
            'Complexidade de tuning',
            'Overhead para pequenos jobs',
            'Garbage collection issues'
          ],
          bestFor: [
            'Machine Learning',
            'Análises interativas',
            'ETL complexo',
            'Processamento unificado'
          ],
          marketShare: 70,
          trend: 'growing'
        },
        {
          name: 'Apache Flink',
          logo: '🌊',
          scores: {
            batch_processing: 80,
            stream_processing: 95,
            ml_support: 70,
            ease_of_use: 75,
            performance: 95,
            ecosystem: 75
          },
          pros: [
            'Stream processing nativo',
            'Latência ultra-baixa',
            'Event time processing',
            'Exactly-once semantics',
            'Backpressure automático'
          ],
          cons: [
            'Ecossistema menor',
            'Curva de aprendizado',
            'Menos ferramentas',
            'Comunidade menor'
          ],
          bestFor: [
            'Stream processing crítico',
            'IoT em tempo real',
            'Detecção de fraudes',
            'Análises de baixa latência'
          ],
          marketShare: 30,
          trend: 'growing'
        }
      ]
    }
  }

  const metrics = {
    performance: { name: 'Performance', icon: Zap, color: 'text-yellow-600' },
    ease_of_use: { name: 'Facilidade de Uso', icon: Users, color: 'text-blue-600' },
    scalability: { name: 'Escalabilidade', icon: TrendingUp, color: 'text-green-600' },
    cost: { name: 'Custo-Benefício', icon: DollarSign, color: 'text-purple-600' },
    security: { name: 'Segurança', icon: Shield, color: 'text-red-600' },
    flexibility: { name: 'Flexibilidade', icon: Settings, color: 'text-indigo-600' }
  }

  const currentComparison = comparisons[selectedComparison]

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'growing': return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'declining': return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
      case 'stable': return <ArrowRight className="h-4 w-4 text-gray-500" />
      default: return null
    }
  }

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'growing': return 'text-green-600'
      case 'declining': return 'text-red-600'
      case 'stable': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getProgressColor = (score) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="space-y-8">
      {/* Comparison Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            Comparações Tecnológicas Detalhadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(comparisons).map(([key, comparison]) => (
              <Button
                key={key}
                variant={selectedComparison === key ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-start text-left"
                onClick={() => setSelectedComparison(key)}
              >
                <div className="font-semibold text-sm mb-1">{comparison.title}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {comparison.description}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>{currentComparison.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="metrics">Métricas</TabsTrigger>
              <TabsTrigger value="pros-cons">Prós & Contras</TabsTrigger>
              <TabsTrigger value="use-cases">Casos de Uso</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {currentComparison.technologies.map((tech, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">{tech.logo}</span>
                        <div>
                          <div>{tech.name}</div>
                          <div className="flex items-center gap-2 text-sm font-normal">
                            <span className={getTrendColor(tech.trend)}>
                              Market Share: {tech.marketShare}%
                            </span>
                            {getTrendIcon(tech.trend)}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(tech.scores).slice(0, 4).map(([metric, score]) => (
                            <div key={metric} className="text-center">
                              <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                                {score}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                {metric.replace('_', ' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Pontos Fortes:</h4>
                          <div className="space-y-1">
                            {tech.pros.slice(0, 3).map((pro, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {Object.entries(metrics).map(([key, metric]) => {
                  const Icon = metric.icon
                  return (
                    <Button
                      key={key}
                      variant={selectedMetric === key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedMetric(key)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {metric.name}
                    </Button>
                  )
                })}
              </div>

              <div className="space-y-6">
                {currentComparison.technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-xl">{tech.logo}</span>
                        {tech.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {Object.entries(tech.scores).map(([metric, score]) => (
                          <div key={metric} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium capitalize">
                                {metric.replace('_', ' ')}
                              </span>
                              <span className={`text-sm font-bold ${getScoreColor(score)}`}>
                                {score}/100
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getProgressColor(score)}`}
                                style={{ width: `${score}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pros-cons" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {currentComparison.technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-xl">{tech.logo}</span>
                        {tech.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Vantagens
                        </h4>
                        <div className="space-y-2">
                          {tech.pros.map((pro, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                          <XCircle className="h-4 w-4" />
                          Desvantagens
                        </h4>
                        <div className="space-y-2">
                          {tech.cons.map((con, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="use-cases" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {currentComparison.technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-xl">{tech.logo}</span>
                        {tech.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Melhor Para
                        </h4>
                        <div className="space-y-2">
                          {tech.bestFor.map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <ArrowRight className="h-3 w-3 text-blue-500" />
                              <span>{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Decision Matrix */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Matriz de Decisão - Quando Usar Cada Tecnologia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Escolha Hadoop MapReduce se:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Processamento batch de grandes volumes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Orçamento limitado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Infraestrutura Hadoop existente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Tolerância a latência alta</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-purple-600">Escolha Apache Spark se:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Machine Learning é prioridade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Análises interativas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Desenvolvimento ágil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Performance é crítica</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Escolha Cloud Platforms se:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Time-to-market rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Escalabilidade automática</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Foco no negócio, não infraestrutura</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cargas de trabalho variáveis</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Migration Paths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6 text-orange-600" />
            Caminhos de Migração Recomendados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-lg">Fase 1: Modernização</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Migrar MapReduce para Spark</div>
                  <div>• Implementar Airflow para orquestração</div>
                  <div>• Adicionar ferramentas de monitoramento</div>
                  <div>• Treinar equipe em novas tecnologias</div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-lg">Fase 2: Hibridização</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Implementar cloud storage</div>
                  <div>• Usar serviços gerenciados</div>
                  <div>• Manter workloads críticos on-premise</div>
                  <div>• Estabelecer conectividade híbrida</div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-lg">Fase 3: Cloud-Native</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Migração completa para cloud</div>
                  <div>• Adoção de serverless</div>
                  <div>• Implementar DataOps</div>
                  <div>• Otimização contínua</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-yellow-800 dark:text-yellow-200">
                    Considerações Importantes
                  </div>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    A migração deve ser gradual e baseada em valor de negócio. Mantenha sistemas críticos 
                    estáveis enquanto moderniza componentes menos críticos primeiro.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TechComparisons
