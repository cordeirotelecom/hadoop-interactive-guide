import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Rocket, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap,
  Globe,
  Building2,
  Users,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  CheckCircle,
  AlertTriangle,
  Code,
  Server,
  Network,
  Cpu,
  HardDrive,
  Eye,
  Settings,
  Download,
  Play
} from 'lucide-react'

const AdvancedProjects = () => {
  const [selectedProject, setSelectedProject] = useState('realtime-fraud')
  const [projectProgress, setProjectProgress] = useState({})

  const advancedProjects = {
    'realtime-fraud': {
      title: "Sistema de Detecção de Fraudes em Tempo Real",
      difficulty: "Avançado",
      duration: "8-12 semanas",
      team: "4-6 pessoas",
      budget: "$50k-100k",
      description: "Sistema completo para detecção de fraudes financeiras usando ML em tempo real",
      technologies: ["Kafka", "Spark Streaming", "MLlib", "Cassandra", "Elasticsearch", "Kibana"],
      businessValue: "$2M+ economia anual em fraudes prevenidas",
      architecture: {
        ingestion: "Kafka Streams para transações em tempo real",
        processing: "Spark Streaming com modelos ML",
        storage: "Cassandra para dados quentes, HDFS para histórico",
        visualization: "Kibana dashboards em tempo real"
      },
      phases: [
        {
          name: "Fase 1: Arquitetura e Setup",
          duration: "2 semanas",
          tasks: [
            "Configurar cluster Kafka multi-broker",
            "Setup Spark Streaming com checkpointing",
            "Configurar Cassandra cluster",
            "Implementar data pipeline básico"
          ]
        },
        {
          name: "Fase 2: Feature Engineering",
          duration: "3 semanas", 
          tasks: [
            "Análise exploratória de dados históricos",
            "Criação de features temporais e geográficas",
            "Implementação de agregações em janelas",
            "Validação de qualidade de features"
          ]
        },
        {
          name: "Fase 3: Modelagem ML",
          duration: "3 semanas",
          tasks: [
            "Treinamento de modelos (Random Forest, XGBoost)",
            "Implementação de ensemble methods",
            "Validação cruzada temporal",
            "Otimização de hiperparâmetros"
          ]
        },
        {
          name: "Fase 4: Deploy e Monitoramento",
          duration: "2-4 semanas",
          tasks: [
            "Deploy de modelos em produção",
            "Implementação de A/B testing",
            "Setup de alertas e monitoramento",
            "Documentação e treinamento"
          ]
        }
      ],
      metrics: {
        performance: "Latência < 100ms para decisões",
        accuracy: "Precisão > 95%, Recall > 90%",
        throughput: "100k+ transações/segundo",
        availability: "99.9% uptime"
      },
      challenges: [
        "Balancear latência vs precisão",
        "Lidar com concept drift",
        "Escalabilidade horizontal",
        "False positives vs false negatives"
      ]
    },
    'recommendation-engine': {
      title: "Engine de Recomendação Personalizada",
      difficulty: "Avançado",
      duration: "6-10 semanas",
      team: "3-5 pessoas",
      budget: "$30k-70k",
      description: "Sistema de recomendação híbrido usando collaborative filtering e content-based",
      technologies: ["Spark MLlib", "ALS", "Deep Learning", "Redis", "MongoDB", "GraphX"],
      businessValue: "25-40% aumento em engagement e vendas",
      architecture: {
        ingestion: "Streaming de eventos de usuário via Kafka",
        processing: "Spark MLlib para treinamento de modelos",
        storage: "MongoDB para perfis, Redis para cache",
        serving: "API REST com cache distribuído"
      },
      phases: [
        {
          name: "Fase 1: Data Pipeline",
          duration: "2 semanas",
          tasks: [
            "Coleta e limpeza de dados de interação",
            "Feature engineering para usuários e itens",
            "Setup de pipeline de dados",
            "Implementação de métricas de qualidade"
          ]
        },
        {
          name: "Fase 2: Algoritmos Base",
          duration: "3 semanas",
          tasks: [
            "Implementação de Collaborative Filtering (ALS)",
            "Content-based filtering",
            "Matrix factorization avançada",
            "Avaliação offline de modelos"
          ]
        },
        {
          name: "Fase 3: Modelos Híbridos",
          duration: "3 semanas",
          tasks: [
            "Ensemble de múltiplos algoritmos",
            "Deep learning para embeddings",
            "Graph-based recommendations",
            "Otimização de performance"
          ]
        },
        {
          name: "Fase 4: Produção",
          duration: "2 semanas",
          tasks: [
            "API de serving em tempo real",
            "A/B testing framework",
            "Monitoramento de performance",
            "Cold start problem solutions"
          ]
        }
      ],
      metrics: {
        performance: "Recomendações em < 50ms",
        accuracy: "RMSE < 0.8, Precision@10 > 0.3",
        coverage: "Cobertura de catálogo > 80%",
        diversity: "Intra-list diversity > 0.7"
      },
      challenges: [
        "Cold start para novos usuários/itens",
        "Escalabilidade para milhões de usuários",
        "Diversidade vs relevância",
        "Explicabilidade das recomendações"
      ]
    },
    'iot-analytics': {
      title: "Plataforma de Analytics IoT Industrial",
      difficulty: "Expert",
      duration: "12-16 semanas",
      team: "6-8 pessoas",
      budget: "$100k-200k",
      description: "Plataforma completa para análise de dados IoT industriais com manutenção preditiva",
      technologies: ["Kafka", "Storm", "InfluxDB", "Grafana", "TensorFlow", "Kubernetes"],
      businessValue: "30-50% redução em downtime de equipamentos",
      architecture: {
        ingestion: "MQTT + Kafka para sensores IoT",
        processing: "Storm para processamento em tempo real",
        storage: "InfluxDB para time series, HDFS para batch",
        analytics: "TensorFlow para manutenção preditiva"
      },
      phases: [
        {
          name: "Fase 1: Infraestrutura IoT",
          duration: "3 semanas",
          tasks: [
            "Setup de brokers MQTT",
            "Configuração de Kafka para IoT",
            "Implementação de protocolos de comunicação",
            "Setup de edge computing"
          ]
        },
        {
          name: "Fase 2: Processamento Streaming",
          duration: "4 semanas",
          tasks: [
            "Topologias Storm para diferentes sensores",
            "Agregações em janelas temporais",
            "Detecção de anomalias em tempo real",
            "Alertas automáticos"
          ]
        },
        {
          name: "Fase 3: Analytics Avançado",
          duration: "5 semanas",
          tasks: [
            "Modelos de manutenção preditiva",
            "Análise de padrões temporais",
            "Otimização de processos industriais",
            "Digital twins implementation"
          ]
        },
        {
          name: "Fase 4: Visualização e Deploy",
          duration: "4 semanas",
          tasks: [
            "Dashboards Grafana customizados",
            "Mobile apps para técnicos",
            "Deploy em Kubernetes",
            "Treinamento operacional"
          ]
        }
      ],
      metrics: {
        performance: "Latência < 1 segundo para alertas",
        accuracy: "Predição de falhas com 85%+ precisão",
        throughput: "1M+ eventos/segundo",
        availability: "99.95% uptime"
      },
      challenges: [
        "Heterogeneidade de protocolos IoT",
        "Processamento de volumes massivos",
        "Manutenção de modelos em produção",
        "Integração com sistemas legados"
      ]
    }
  }

  const caseStudies = [
    {
      company: "Banco Inter",
      industry: "Fintech",
      challenge: "Detecção de fraudes em cartões de crédito",
      solution: "Sistema Hadoop + Spark ML para análise em tempo real",
      implementation: {
        timeline: "8 meses",
        team: "12 pessoas",
        budget: "R$ 2.5M",
        technologies: ["Hadoop 3.2", "Spark 3.0", "Kafka", "Cassandra", "MLlib"]
      },
      results: {
        fraudReduction: "78% redução em fraudes",
        falsePositives: "45% redução em falsos positivos", 
        processingTime: "De 24h para 2 minutos",
        savings: "R$ 15M economia anual"
      },
      architecture: "Lambda architecture com batch e streaming",
      lessons: [
        "Importância de feature engineering temporal",
        "Necessidade de retraining contínuo",
        "Balanceamento entre precisão e latência",
        "Integração com sistemas legados crítica"
      ]
    },
    {
      company: "Magazine Luiza",
      industry: "E-commerce",
      challenge: "Sistema de recomendação personalizada",
      solution: "Engine híbrida com Spark MLlib e deep learning",
      implementation: {
        timeline: "6 meses",
        team: "8 pessoas", 
        budget: "R$ 1.8M",
        technologies: ["Spark MLlib", "TensorFlow", "Redis", "MongoDB", "Kafka"]
      },
      results: {
        conversionIncrease: "32% aumento em conversão",
        engagement: "45% mais tempo no site",
        revenue: "R$ 50M receita adicional/ano",
        coverage: "85% cobertura de catálogo"
      },
      architecture: "Microservices com cache distribuído",
      lessons: [
        "Cold start resolvido com content-based",
        "A/B testing essencial para validação",
        "Cache estratégico para performance",
        "Diversidade importante para experiência"
      ]
    },
    {
      company: "Petrobras",
      industry: "Energia",
      challenge: "Manutenção preditiva de equipamentos offshore",
      solution: "Plataforma IoT com analytics em tempo real",
      implementation: {
        timeline: "14 meses",
        team: "20 pessoas",
        budget: "R$ 8M",
        technologies: ["Hadoop", "Storm", "InfluxDB", "TensorFlow", "Kubernetes"]
      },
      results: {
        downtimeReduction: "42% redução em paradas",
        maintenanceCost: "35% economia em manutenção",
        safetyIncidents: "60% redução em incidentes",
        efficiency: "18% aumento em eficiência"
      },
      architecture: "Edge computing + cloud hybrid",
      lessons: [
        "Edge processing crítico para latência",
        "Modelos específicos por tipo de equipamento",
        "Integração com sistemas de manutenção",
        "Treinamento operacional fundamental"
      ]
    }
  ]

  const projectTemplates = [
    {
      name: "Real-time Analytics Starter",
      description: "Template para projetos de analytics em tempo real",
      components: ["Kafka", "Spark Streaming", "Cassandra", "Grafana"],
      estimatedTime: "2-3 semanas setup",
      complexity: "Médio",
      downloadUrl: "#"
    },
    {
      name: "ML Pipeline Template", 
      description: "Pipeline completo para projetos de machine learning",
      components: ["Spark MLlib", "MLflow", "Airflow", "Jupyter"],
      estimatedTime: "1-2 semanas setup",
      complexity: "Médio",
      downloadUrl: "#"
    },
    {
      name: "Data Lake Architecture",
      description: "Arquitetura completa de data lake empresarial",
      components: ["HDFS", "Hive", "Presto", "Atlas", "Ranger"],
      estimatedTime: "4-6 semanas setup",
      complexity: "Alto",
      downloadUrl: "#"
    }
  ]

  const startProject = (projectId) => {
    setProjectProgress(prev => ({
      ...prev,
      [projectId]: { started: true, currentPhase: 0, progress: 0 }
    }))
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Projetos Avançados e Estudos de Caso
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Projetos reais de nível empresarial e estudos de caso detalhados de implementações Hadoop em grandes empresas
        </p>
      </div>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <Rocket className="h-4 w-4" />
            Projetos Avançados
          </TabsTrigger>
          <TabsTrigger value="casestudies" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Estudos de Caso
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="roadmap" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Roadmap
          </TabsTrigger>
        </TabsList>

        {/* Advanced Projects */}
        <TabsContent value="projects" className="space-y-6">
          <h2 className="text-2xl font-bold">Projetos de Nível Empresarial</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {Object.entries(advancedProjects).map(([key, project]) => (
              <Button
                key={key}
                variant={selectedProject === key ? "default" : "outline"}
                onClick={() => setSelectedProject(key)}
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold text-left">{project.title}</div>
                <div className="text-xs text-left mt-1">{project.description}</div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">{project.difficulty}</Badge>
                  <Badge variant="outline">{project.duration}</Badge>
                </div>
              </Button>
            ))}
          </div>

          {selectedProject && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{advancedProjects[selectedProject].title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {advancedProjects[selectedProject].description}
                      </CardDescription>
                    </div>
                    <Button 
                      onClick={() => startProject(selectedProject)}
                      className="flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Iniciar Projeto
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">Duração</div>
                        <div className="text-sm text-gray-600">{advancedProjects[selectedProject].duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-semibold">Equipe</div>
                        <div className="text-sm text-gray-600">{advancedProjects[selectedProject].team}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold">Orçamento</div>
                        <div className="text-sm text-gray-600">{advancedProjects[selectedProject].budget}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-semibold">Valor de Negócio</div>
                        <div className="text-sm text-gray-600">{advancedProjects[selectedProject].businessValue}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {advancedProjects[selectedProject].technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline">{tech}</Badge>
                        ))}
                      </div>

                      <h4 className="font-semibold mb-3">Arquitetura:</h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(advancedProjects[selectedProject].architecture).map(([layer, desc]) => (
                          <div key={layer}>
                            <strong className="capitalize">{layer}:</strong> {desc}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Métricas de Sucesso:</h4>
                      <div className="space-y-2 text-sm mb-4">
                        {Object.entries(advancedProjects[selectedProject].metrics).map(([metric, value]) => (
                          <div key={metric} className="flex justify-between">
                            <span className="capitalize">{metric.replace(/([A-Z])/g, ' $1')}:</span>
                            <strong>{value}</strong>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold mb-3">Principais Desafios:</h4>
                      <ul className="space-y-1">
                        {advancedProjects[selectedProject].challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <AlertTriangle className="h-3 w-3 text-orange-600" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Phases */}
              <Card>
                <CardHeader>
                  <CardTitle>Fases do Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {advancedProjects[selectedProject].phases.map((phase, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold">{phase.name}</h4>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Principais Tarefas:</h5>
                            <ul className="space-y-1">
                              {phase.tasks.map((task, taskIdx) => (
                                <li key={taskIdx} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            {projectProgress[selectedProject] && (
                              <div>
                                <h5 className="font-medium mb-2">Progresso:</h5>
                                <Progress value={idx === 0 ? 25 : 0} className="mb-2" />
                                <p className="text-sm text-gray-600">
                                  {idx === 0 ? "Em andamento" : "Aguardando"}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        {/* Case Studies */}
        <TabsContent value="casestudies" className="space-y-6">
          <h2 className="text-2xl font-bold">Estudos de Caso Reais</h2>
          
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{study.company}</CardTitle>
                      <CardDescription className="text-base">{study.industry}</CardDescription>
                    </div>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Desafio:</h4>
                        <p className="text-sm text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Solução:</h4>
                        <p className="text-sm text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Implementação:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Timeline: <strong>{study.implementation.timeline}</strong></div>
                          <div>Equipe: <strong>{study.implementation.team}</strong></div>
                          <div>Orçamento: <strong>{study.implementation.budget}</strong></div>
                          <div>Arquitetura: <strong>{study.architecture}</strong></div>
                        </div>
                        <div className="mt-2">
                          <strong>Tecnologias:</strong>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {study.implementation.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Resultados:</h4>
                        <div className="space-y-2">
                          {Object.entries(study.results).map(([metric, value]) => (
                            <div key={metric} className="flex justify-between items-center">
                              <span className="text-sm capitalize">{metric.replace(/([A-Z])/g, ' $1')}:</span>
                              <Badge variant="default">{value}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Lições Aprendidas:</h4>
                        <ul className="space-y-1">
                          {study.lessons.map((lesson, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Brain className="h-3 w-3 text-blue-600 mt-0.5" />
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Project Templates */}
        <TabsContent value="templates" className="space-y-6">
          <h2 className="text-2xl font-bold">Templates de Projeto</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTemplates.map((template, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm">Componentes:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {template.components.map((comp, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{comp}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tempo de Setup:</span>
                      <strong>{template.estimatedTime}</strong>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Complexidade:</span>
                      <Badge variant={template.complexity === 'Alto' ? 'destructive' : 'secondary'}>
                        {template.complexity}
                      </Badge>
                    </div>
                    <Button className="w-full flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Learning Roadmap */}
        <TabsContent value="roadmap" className="space-y-6">
          <h2 className="text-2xl font-bold">Roadmap de Aprendizado Avançado</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trilha: Arquiteto de Dados Sênior</CardTitle>
                <CardDescription>Caminho para se tornar um arquiteto de dados especialista em Hadoop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold">Fundamentos</h4>
                      <p className="text-sm text-gray-600">HDFS, YARN, MapReduce</p>
                      <Badge variant="default" className="mt-1">Concluído</Badge>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold">Processamento</h4>
                      <p className="text-sm text-gray-600">Spark, Flink, Storm</p>
                      <Badge variant="secondary" className="mt-1">Em Progresso</Badge>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <Brain className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold">Machine Learning</h4>
                      <p className="text-sm text-gray-600">MLlib, TensorFlow</p>
                      <Badge variant="outline" className="mt-1">Próximo</Badge>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <Building2 className="h-6 w-6 text-orange-600" />
                      </div>
                      <h4 className="font-semibold">Arquitetura</h4>
                      <p className="text-sm text-gray-600">Design de sistemas</p>
                      <Badge variant="outline" className="mt-1">Futuro</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Próximos Passos Recomendados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Completar Projeto de Detecção de Fraudes</h4>
                      <p className="text-sm text-gray-600">Aplicar conhecimentos de streaming e ML</p>
                    </div>
                    <Badge>2-3 meses</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Certificação Cloudera CCA</h4>
                      <p className="text-sm text-gray-600">Validar conhecimentos com certificação</p>
                    </div>
                    <Badge variant="outline">1 mês</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Target className="h-5 w-5 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Especialização em Kubernetes</h4>
                      <p className="text-sm text-gray-600">Hadoop em containers e cloud-native</p>
                    </div>
                    <Badge variant="outline">2-4 meses</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdvancedProjects
