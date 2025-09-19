import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Beaker, 
  Play, 
  CheckCircle,
  Clock,
  Users,
  Star,
  Download,
  Code,
  Database,
  BarChart3,
  Zap,
  Target,
  Award,
  FileText,
  GitBranch,
  Cpu,
  HardDrive,
  Network,
  Settings,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react'

const PracticalLabs = () => {
  const [selectedLab, setSelectedLab] = useState(null)
  const [completedLabs, setCompletedLabs] = useState(new Set())
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const labs = [
    {
      id: 'setup-cluster',
      title: 'Configuração de Cluster Hadoop Multi-Node',
      difficulty: 'Intermediário',
      duration: '3-4 horas',
      category: 'Infraestrutura',
      rating: 4.8,
      participants: 1250,
      description: 'Configure um cluster Hadoop com 3 nós usando VirtualBox',
      objectives: [
        'Configurar 3 VMs com Ubuntu',
        'Instalar e configurar Hadoop',
        'Estabelecer comunicação entre nós',
        'Testar HDFS distribuído',
        'Configurar YARN ResourceManager'
      ],
      prerequisites: [
        'Conhecimento básico de Linux',
        'VirtualBox instalado',
        '8GB RAM disponível',
        'Conceitos básicos de rede'
      ],
      technologies: ['Hadoop', 'HDFS', 'YARN', 'Ubuntu', 'VirtualBox'],
      deliverables: [
        'Cluster funcional de 3 nós',
        'Documentação de configuração',
        'Scripts de automação',
        'Relatório de testes'
      ],
      steps: [
        {
          step: 1,
          title: 'Preparação do Ambiente',
          description: 'Criar e configurar VMs',
          estimatedTime: '45 min',
          commands: [
            'Criar 3 VMs Ubuntu 20.04',
            'Configurar rede bridge',
            'Definir IPs estáticos',
            'Configurar SSH sem senha'
          ]
        },
        {
          step: 2,
          title: 'Instalação do Hadoop',
          description: 'Instalar Hadoop em todos os nós',
          estimatedTime: '60 min',
          commands: [
            'sudo apt update && sudo apt install openjdk-8-jdk',
            'wget hadoop-3.3.6.tar.gz',
            'tar -xzf hadoop-3.3.6.tar.gz',
            'sudo mv hadoop-3.3.6 /opt/hadoop'
          ]
        },
        {
          step: 3,
          title: 'Configuração do Cluster',
          description: 'Configurar arquivos de cluster',
          estimatedTime: '90 min',
          commands: [
            'Editar core-site.xml',
            'Configurar hdfs-site.xml',
            'Definir workers no arquivo slaves',
            'Configurar yarn-site.xml'
          ]
        },
        {
          step: 4,
          title: 'Inicialização e Testes',
          description: 'Iniciar serviços e validar',
          estimatedTime: '45 min',
          commands: [
            'hdfs namenode -format',
            'start-dfs.sh',
            'start-yarn.sh',
            'hdfs dfsadmin -report'
          ]
        }
      ],
      icon: Network
    },
    {
      id: 'etl-pipeline',
      title: 'Pipeline ETL Completo com Spark e Hive',
      difficulty: 'Avançado',
      duration: '4-5 horas',
      category: 'Processamento',
      rating: 4.9,
      participants: 890,
      description: 'Construir pipeline ETL para análise de dados de e-commerce',
      objectives: [
        'Ingerir dados de múltiplas fontes',
        'Transformar dados com Spark',
        'Criar data warehouse com Hive',
        'Implementar controle de qualidade',
        'Automatizar com Airflow'
      ],
      prerequisites: [
        'Conhecimento de Spark',
        'SQL intermediário',
        'Python básico',
        'Conceitos de ETL'
      ],
      technologies: ['Spark', 'Hive', 'Airflow', 'Python', 'SQL'],
      deliverables: [
        'Pipeline ETL funcional',
        'Data warehouse estruturado',
        'Dashboard de monitoramento',
        'Documentação técnica'
      ],
      steps: [
        {
          step: 1,
          title: 'Preparação dos Dados',
          description: 'Configurar fontes de dados',
          estimatedTime: '60 min',
          commands: [
            'Baixar datasets de e-commerce',
            'Configurar conexões de banco',
            'Validar qualidade dos dados',
            'Definir schema inicial'
          ]
        },
        {
          step: 2,
          title: 'Desenvolvimento Spark',
          description: 'Criar jobs de transformação',
          estimatedTime: '120 min',
          commands: [
            'Desenvolver job de limpeza',
            'Implementar transformações',
            'Criar agregações',
            'Otimizar performance'
          ]
        },
        {
          step: 3,
          title: 'Modelagem Hive',
          description: 'Estruturar data warehouse',
          estimatedTime: '90 min',
          commands: [
            'Criar tabelas dimensionais',
            'Implementar tabelas fato',
            'Configurar particionamento',
            'Otimizar queries'
          ]
        },
        {
          step: 4,
          title: 'Orquestração Airflow',
          description: 'Automatizar pipeline',
          estimatedTime: '60 min',
          commands: [
            'Criar DAG do pipeline',
            'Configurar dependências',
            'Implementar monitoramento',
            'Testar execução'
          ]
        }
      ],
      icon: Zap
    },
    {
      id: 'realtime-analytics',
      title: 'Analytics em Tempo Real com Kafka e Flink',
      difficulty: 'Avançado',
      duration: '5-6 horas',
      category: 'Streaming',
      rating: 4.7,
      participants: 650,
      description: 'Sistema de análise em tempo real para detecção de fraudes',
      objectives: [
        'Configurar Kafka cluster',
        'Desenvolver aplicação Flink',
        'Implementar detecção de anomalias',
        'Criar alertas em tempo real',
        'Visualizar métricas live'
      ],
      prerequisites: [
        'Java ou Scala',
        'Conceitos de streaming',
        'Conhecimento de Kafka',
        'Estatística básica'
      ],
      technologies: ['Kafka', 'Flink', 'Elasticsearch', 'Kibana', 'Java'],
      deliverables: [
        'Sistema de streaming funcional',
        'Algoritmo de detecção',
        'Dashboard em tempo real',
        'Documentação de arquitetura'
      ],
      steps: [
        {
          step: 1,
          title: 'Setup Kafka',
          description: 'Configurar cluster Kafka',
          estimatedTime: '75 min',
          commands: [
            'Instalar e configurar Kafka',
            'Criar tópicos necessários',
            'Configurar produtores',
            'Testar throughput'
          ]
        },
        {
          step: 2,
          title: 'Desenvolvimento Flink',
          description: 'Criar aplicação de streaming',
          estimatedTime: '150 min',
          commands: [
            'Configurar ambiente Flink',
            'Desenvolver job de processamento',
            'Implementar windowing',
            'Criar funções de agregação'
          ]
        },
        {
          step: 3,
          title: 'Detecção de Anomalias',
          description: 'Implementar algoritmos ML',
          estimatedTime: '120 min',
          commands: [
            'Implementar Z-score detection',
            'Configurar thresholds',
            'Criar sistema de alertas',
            'Testar com dados sintéticos'
          ]
        },
        {
          step: 4,
          title: 'Visualização',
          description: 'Configurar dashboards',
          estimatedTime: '75 min',
          commands: [
            'Configurar Elasticsearch',
            'Criar índices de métricas',
            'Desenvolver dashboard Kibana',
            'Configurar alertas visuais'
          ]
        }
      ],
      icon: BarChart3
    },
    {
      id: 'ml-pipeline',
      title: 'Pipeline de Machine Learning com MLlib',
      difficulty: 'Avançado',
      duration: '4-5 horas',
      category: 'Machine Learning',
      rating: 4.6,
      participants: 720,
      description: 'Sistema de recomendação usando Spark MLlib',
      objectives: [
        'Preparar dados para ML',
        'Treinar modelo de recomendação',
        'Avaliar performance do modelo',
        'Implementar serving em produção',
        'Monitorar drift do modelo'
      ],
      prerequisites: [
        'Python ou Scala',
        'Conceitos de ML',
        'Spark intermediário',
        'Estatística'
      ],
      technologies: ['Spark MLlib', 'Python', 'Jupyter', 'MLflow', 'Docker'],
      deliverables: [
        'Modelo treinado e validado',
        'API de recomendação',
        'Pipeline de retreino',
        'Métricas de monitoramento'
      ],
      steps: [
        {
          step: 1,
          title: 'Preparação de Dados',
          description: 'Feature engineering',
          estimatedTime: '90 min',
          commands: [
            'Carregar dataset MovieLens',
            'Análise exploratória',
            'Feature engineering',
            'Split train/test'
          ]
        },
        {
          step: 2,
          title: 'Treinamento do Modelo',
          description: 'Collaborative filtering',
          estimatedTime: '120 min',
          commands: [
            'Configurar ALS algorithm',
            'Hyperparameter tuning',
            'Cross-validation',
            'Avaliar métricas'
          ]
        },
        {
          step: 3,
          title: 'Deployment',
          description: 'Colocar modelo em produção',
          estimatedTime: '90 min',
          commands: [
            'Serializar modelo',
            'Criar API Flask',
            'Containerizar com Docker',
            'Testar endpoints'
          ]
        },
        {
          step: 4,
          title: 'Monitoramento',
          description: 'MLOps e observabilidade',
          estimatedTime: '60 min',
          commands: [
            'Configurar MLflow tracking',
            'Implementar drift detection',
            'Criar alertas de performance',
            'Dashboard de métricas'
          ]
        }
      ],
      icon: Cpu
    },
    {
      id: 'data-lake',
      title: 'Construção de Data Lake Moderno',
      difficulty: 'Intermediário',
      duration: '3-4 horas',
      category: 'Arquitetura',
      rating: 4.5,
      participants: 980,
      description: 'Implementar data lake com Delta Lake e governança',
      objectives: [
        'Configurar Delta Lake',
        'Implementar data governance',
        'Criar catálogo de dados',
        'Configurar controle de acesso',
        'Otimizar performance'
      ],
      prerequisites: [
        'Conceitos de data lake',
        'Spark básico',
        'SQL intermediário',
        'Conceitos de governança'
      ],
      technologies: ['Delta Lake', 'Spark', 'Hive Metastore', 'Apache Atlas', 'Ranger'],
      deliverables: [
        'Data lake funcional',
        'Catálogo de dados',
        'Políticas de governança',
        'Documentação de arquitetura'
      ],
      steps: [
        {
          step: 1,
          title: 'Setup Delta Lake',
          description: 'Configurar ambiente',
          estimatedTime: '60 min',
          commands: [
            'Instalar Delta Lake',
            'Configurar Spark com Delta',
            'Criar primeiro delta table',
            'Testar ACID transactions'
          ]
        },
        {
          step: 2,
          title: 'Ingestão de Dados',
          description: 'Carregar dados diversos',
          estimatedTime: '75 min',
          commands: [
            'Ingerir dados estruturados',
            'Processar dados semi-estruturados',
            'Configurar streaming ingestion',
            'Implementar schema evolution'
          ]
        },
        {
          step: 3,
          title: 'Governança',
          description: 'Implementar controles',
          estimatedTime: '90 min',
          commands: [
            'Configurar Apache Atlas',
            'Criar políticas Ranger',
            'Implementar data lineage',
            'Configurar auditoria'
          ]
        },
        {
          step: 4,
          title: 'Otimização',
          description: 'Performance tuning',
          estimatedTime: '75 min',
          commands: [
            'Configurar Z-ordering',
            'Implementar compaction',
            'Otimizar partitioning',
            'Configurar caching'
          ]
        }
      ],
      icon: Database
    },
    {
      id: 'security-implementation',
      title: 'Implementação de Segurança Hadoop',
      difficulty: 'Avançado',
      duration: '4-5 horas',
      category: 'Segurança',
      rating: 4.4,
      participants: 420,
      description: 'Configurar segurança completa em cluster Hadoop',
      objectives: [
        'Configurar Kerberos',
        'Implementar SSL/TLS',
        'Configurar Apache Ranger',
        'Implementar auditoria',
        'Testar controles de acesso'
      ],
      prerequisites: [
        'Administração Hadoop',
        'Conceitos de segurança',
        'Conhecimento de Kerberos',
        'Linux avançado'
      ],
      technologies: ['Kerberos', 'Apache Ranger', 'Knox', 'SSL/TLS', 'LDAP'],
      deliverables: [
        'Cluster seguro configurado',
        'Políticas de acesso',
        'Documentação de segurança',
        'Plano de auditoria'
      ],
      steps: [
        {
          step: 1,
          title: 'Configuração Kerberos',
          description: 'Autenticação centralizada',
          estimatedTime: '120 min',
          commands: [
            'Instalar KDC',
            'Criar principals',
            'Configurar keytabs',
            'Testar autenticação'
          ]
        },
        {
          step: 2,
          title: 'SSL/TLS Setup',
          description: 'Criptografia em trânsito',
          estimatedTime: '90 min',
          commands: [
            'Gerar certificados',
            'Configurar keystores',
            'Habilitar SSL nos serviços',
            'Testar conexões seguras'
          ]
        },
        {
          step: 3,
          title: 'Apache Ranger',
          description: 'Controle de acesso',
          estimatedTime: '120 min',
          commands: [
            'Instalar Ranger',
            'Configurar plugins',
            'Criar políticas',
            'Testar permissões'
          ]
        },
        {
          step: 4,
          title: 'Auditoria',
          description: 'Monitoramento de segurança',
          estimatedTime: '60 min',
          commands: [
            'Configurar logs de auditoria',
            'Implementar SIEM integration',
            'Criar alertas de segurança',
            'Testar compliance'
          ]
        }
      ],
      icon: Shield
    }
  ]

  const difficulties = ['all', 'Iniciante', 'Intermediário', 'Avançado']
  const categories = ['all', 'Infraestrutura', 'Processamento', 'Streaming', 'Machine Learning', 'Arquitetura', 'Segurança']

  const filteredLabs = labs.filter(lab => 
    selectedDifficulty === 'all' || lab.difficulty === selectedDifficulty
  )

  const toggleLabCompletion = (labId) => {
    const newCompleted = new Set(completedLabs)
    if (newCompleted.has(labId)) {
      newCompleted.delete(labId)
    } else {
      newCompleted.add(labId)
    }
    setCompletedLabs(newCompleted)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Avançado': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Infraestrutura': return Network
      case 'Processamento': return Zap
      case 'Streaming': return BarChart3
      case 'Machine Learning': return Cpu
      case 'Arquitetura': return Database
      case 'Segurança': return Shield
      default: return Code
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Beaker className="h-8 w-8" />
            Laboratórios Práticos Hadoop
          </CardTitle>
          <p className="text-orange-100 text-lg">
            Projetos hands-on para dominar tecnologias Big Data na prática
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="labs" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="labs">Laboratórios</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
          <TabsTrigger value="community">Comunidade</TabsTrigger>
        </TabsList>

        {/* Labs Tab */}
        <TabsContent value="labs" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Dificuldade:</span>
                  <div className="flex gap-2">
                    {difficulties.map(diff => (
                      <Button
                        key={diff}
                        variant={selectedDifficulty === diff ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDifficulty(diff)}
                      >
                        {diff === 'all' ? 'Todas' : diff}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Labs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLabs.map((lab) => {
              const Icon = lab.icon
              const CategoryIcon = getCategoryIcon(lab.category)
              const isCompleted = completedLabs.has(lab.id)
              
              return (
                <Card 
                  key={lab.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedLab === lab.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' : ''
                  } ${isCompleted ? 'border-green-500 bg-green-50 dark:bg-green-950' : ''}`}
                  onClick={() => setSelectedLab(selectedLab === lab.id ? null : lab.id)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon className="h-4 w-4 text-gray-600" />
                          <Badge variant="outline" className="text-xs">{lab.category}</Badge>
                          {isCompleted && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <CardTitle className="text-sm mb-2">{lab.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`text-xs ${getDifficultyColor(lab.difficulty)}`}>
                            {lab.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Clock className="h-3 w-3" />
                            {lab.duration}
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                          {lab.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{lab.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-gray-500" />
                            <span>{lab.participants}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          {/* Lab Details */}
          {selectedLab && (() => {
            const lab = labs.find(l => l.id === selectedLab)
            const Icon = lab.icon
            const isCompleted = completedLabs.has(lab.id)
            
            return (
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                      {lab.title}
                      {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </CardTitle>
                    <Button
                      variant={isCompleted ? "outline" : "default"}
                      onClick={() => toggleLabCompletion(lab.id)}
                    >
                      {isCompleted ? 'Marcar como Pendente' : 'Marcar como Concluído'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                      <TabsTrigger value="objectives">Objetivos</TabsTrigger>
                      <TabsTrigger value="steps">Passos</TabsTrigger>
                      <TabsTrigger value="resources">Recursos</TabsTrigger>
                      <TabsTrigger value="deliverables">Entregáveis</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Informações Gerais</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Dificuldade:</span>
                              <Badge className={getDifficultyColor(lab.difficulty)}>
                                {lab.difficulty}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Duração:</span>
                              <span className="font-semibold">{lab.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Categoria:</span>
                              <span className="font-semibold">{lab.category}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Avaliação:</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="font-semibold">{lab.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Tecnologias Utilizadas</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <h4 className="font-semibold mb-3 mt-4">Pré-requisitos</h4>
                          <div className="space-y-1">
                            {lab.prerequisites.map((prereq, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <AlertCircle className="h-3 w-3 text-orange-500" />
                                <span>{prereq}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="objectives" className="space-y-4">
                      <h4 className="font-semibold">Objetivos de Aprendizado</h4>
                      <div className="space-y-3">
                        {lab.objectives.map((objective, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-sm">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="steps" className="space-y-4">
                      <h4 className="font-semibold">Passos Detalhados</h4>
                      <div className="space-y-6">
                        {lab.steps.map((step, idx) => (
                          <Card key={idx} className="border-l-4 border-blue-500">
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {step.step}
                                </span>
                                {step.title}
                                <Badge variant="outline" className="text-xs">
                                  {step.estimatedTime}
                                </Badge>
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                              <div className="space-y-2">
                                <h5 className="font-semibold text-sm">Comandos/Ações:</h5>
                                {step.commands.map((command, cmdIdx) => (
                                  <div key={cmdIdx} className="bg-gray-900 rounded p-2">
                                    <code className="text-green-400 text-sm">{command}</code>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="resources" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Download className="h-5 w-5 text-blue-600" />
                              Downloads
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <FileText className="h-4 w-4 mr-2" />
                              Guia do Laboratório (PDF)
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Code className="h-4 w-4 mr-2" />
                              Código de Exemplo
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Database className="h-4 w-4 mr-2" />
                              Datasets de Teste
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <ExternalLink className="h-5 w-5 text-green-600" />
                              Links Úteis
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <GitBranch className="h-4 w-4 mr-2" />
                              Repositório GitHub
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Play className="h-4 w-4 mr-2" />
                              Vídeo Tutorial
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              <Users className="h-4 w-4 mr-2" />
                              Fórum de Discussão
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="deliverables" className="space-y-4">
                      <h4 className="font-semibold">Entregáveis do Projeto</h4>
                      <div className="space-y-3">
                        {lab.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                            <Award className="h-5 w-5 text-green-600" />
                            <span className="text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                              Dica para o Portfolio
                            </h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                              Documente seu projeto no GitHub com README detalhado, screenshots e 
                              explicações técnicas. Isso demonstra suas habilidades para recrutadores!
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          })()}
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                Seu Progresso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{completedLabs.size}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Concluídos</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{labs.length - completedLabs.size}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pendentes</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round((completedLabs.size / labs.length) * 100)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Progresso</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {completedLabs.size * 4}h
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tempo Investido</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Progresso Geral</span>
                  <span className="text-sm text-gray-600">
                    {completedLabs.size} de {labs.length} laboratórios
                  </span>
                </div>
                <Progress value={(completedLabs.size / labs.length) * 100} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Documentação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Guia de Setup do Ambiente
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Troubleshooting Comum
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Best Practices
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-600" />
                  Código e Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Templates de Projeto
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Scripts de Automação
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Exemplos de Código
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-purple-600" />
                  Vídeos e Tutoriais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Série: Hadoop do Zero
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Masterclass: Spark Avançado
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Workshop: MLOps com Hadoop
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Comunidade de Aprendizado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Estatísticas da Comunidade</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Participantes Ativos:</span>
                      <span className="font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projetos Compartilhados:</span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discussões Ativas:</span>
                      <span className="font-semibold">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mentores Disponíveis:</span>
                      <span className="font-semibold">42</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Canais de Comunicação</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Discord - Chat em Tempo Real
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <GitBranch className="h-4 w-4 mr-2" />
                      GitHub - Projetos Colaborativos
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Fórum - Discussões Técnicas
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PracticalLabs
