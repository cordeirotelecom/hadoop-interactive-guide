import { useState, Suspense } from 'react'
import React from 'react'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Button } from './components/ui/button.jsx'
import { Badge } from './components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs.jsx'
import { Progress } from './components/ui/progress.jsx'
import { Separator } from './components/ui/separator.jsx'
import { 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  BookOpen, 
  Layers, 
  Download, 
  Code, 
  Play,
  CheckCircle,
  Circle,
  Server,
  HardDrive,
  Cpu,
  Network,
  Globe,
  Building2,
  Beaker,
  GraduationCap,
  Brain,
  Activity,
  Rocket,
  Cloud,
  Users,
  Terminal,
  FileText,
  Settings,
  Target,
  Loader2
} from 'lucide-react'

// Lazy load components for better performance
const HadoopArchitecture = React.lazy(() => import('./components/HadoopArchitecture.jsx'))
const MapReduceDemo = React.lazy(() => import('./components/MapReduceDemo.jsx'))
const TerminalSimulator = React.lazy(() => import('./components/TerminalSimulator.jsx'))
const ModernEcosystem = React.lazy(() => import('./components/ModernEcosystem.jsx'))
const RealWorldCases = React.lazy(() => import('./components/RealWorldCases.jsx'))
const TechComparisons = React.lazy(() => import('./components/TechComparisons.jsx'))
const PythonDataProcessing = React.lazy(() => import('./components/PythonDataProcessing.jsx'))
const CareerCertifications = React.lazy(() => import('./components/CareerCertifications.jsx'))
const HadoopFundamentalsExpanded = React.lazy(() => import('./components/HadoopFundamentalsExpanded.jsx'))
const FunctionalLabs = React.lazy(() => import('./components/FunctionalLabs.jsx'))
const PerformanceMonitoring = React.lazy(() => import('./components/PerformanceMonitoring.jsx'))
const SecurityGovernance = React.lazy(() => import('./components/SecurityGovernance.jsx'))
const AdvancedProjects = React.lazy(() => import('./components/AdvancedProjects.jsx'))
const CloudContainerization = React.lazy(() => import('./components/CloudContainerization.jsx'))
const ResourcesCommunity = React.lazy(() => import('./components/ResourcesCommunity.jsx'))
const ClassroomGuide = React.lazy(() => import('./components/ClassroomGuide.jsx'))
const InteractiveExercises = React.lazy(() => import('./components/InteractiveExercises.jsx'))
const HadoopQuiz = React.lazy(() => import('./components/HadoopQuiz.jsx'))

function App() {
  const [currentStep, setCurrentStep] = useState(0)

  const installationSteps = [
    {
      title: "Pré-requisitos",
      description: "Instalar Java 8+ e configurar SSH",
      commands: [
        "sudo apt update",
        "sudo apt install openjdk-8-jdk",
        "sudo apt install openssh-server",
        "ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa",
        "cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys"
      ],
      completed: false
    },
    {
      title: "Download do Hadoop",
      description: "Baixar e extrair o Apache Hadoop",
      commands: [
        "wget https://downloads.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz",
        "tar -xzf hadoop-3.3.6.tar.gz",
        "sudo mv hadoop-3.3.6 /opt/hadoop",
        "sudo chown -R $USER:$USER /opt/hadoop"
      ],
      completed: false
    },
    {
      title: "Configurar Variáveis de Ambiente",
      description: "Definir JAVA_HOME e HADOOP_HOME",
      commands: [
        "echo 'export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64' >> ~/.bashrc",
        "echo 'export HADOOP_HOME=/opt/hadoop' >> ~/.bashrc",
        "echo 'export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin' >> ~/.bashrc",
        "source ~/.bashrc"
      ],
      completed: false
    },
    {
      title: "Configurar Hadoop",
      description: "Editar arquivos de configuração",
      commands: [
        "nano $HADOOP_HOME/etc/hadoop/hadoop-env.sh",
        "nano $HADOOP_HOME/etc/hadoop/core-site.xml",
        "nano $HADOOP_HOME/etc/hadoop/hdfs-site.xml",
        "nano $HADOOP_HOME/etc/hadoop/mapred-site.xml",
        "nano $HADOOP_HOME/etc/hadoop/yarn-site.xml"
      ],
      completed: false
    },
    {
      title: "Formatar NameNode",
      description: "Inicializar o sistema de arquivos HDFS",
      commands: [
        "hdfs namenode -format"
      ],
      completed: false
    },
    {
      title: "Iniciar Serviços",
      description: "Executar HDFS e YARN",
      commands: [
        "start-dfs.sh",
        "start-yarn.sh",
        "jps"
      ],
      completed: false
    }
  ]

  const toggleStep = (index) => {
    const newSteps = [...installationSteps]
    newSteps[index].completed = !newSteps[index].completed
    setCurrentStep(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header Moderno */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <Database className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hadoop Interactive Guide
                </h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Guia Interativo Completo
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              Big Data Framework
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 transition-all duration-300 ease-in-out">
        <Tabs defaultValue="overview" className="space-y-6">
          {/* Navegação de Tabs Responsiva Melhorada */}
          <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1 h-auto overflow-x-auto p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <TabsTrigger value="overview" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <BookOpen className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Visão Geral</span>
              </TabsTrigger>
              <TabsTrigger value="fundamentals" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Brain className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Fundamentos</span>
              </TabsTrigger>
              <TabsTrigger value="architecture" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Settings className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Arquitetura</span>
              </TabsTrigger>
              <TabsTrigger value="installation" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Download className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Instalação</span>
              </TabsTrigger>
              <TabsTrigger value="examples" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Code className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Exemplos</span>
              </TabsTrigger>
              <TabsTrigger value="practice" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Terminal className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Prática</span>
              </TabsTrigger>
              <TabsTrigger value="python" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <FileText className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Python</span>
              </TabsTrigger>
              <TabsTrigger value="labs" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Beaker className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Labs</span>
              </TabsTrigger>
              <TabsTrigger value="career" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <GraduationCap className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Carreira</span>
              </TabsTrigger>
              <TabsTrigger value="ecosystem" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Globe className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Ecossistema</span>
              </TabsTrigger>
              <TabsTrigger value="cases" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Building2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Casos Reais</span>
              </TabsTrigger>
              <TabsTrigger value="comparisons" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <BarChart3 className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Comparações</span>
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Activity className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Performance</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Shield className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Segurança</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Rocket className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Projetos</span>
              </TabsTrigger>
              <TabsTrigger value="cloud" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Cloud className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Cloud</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Users className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Recursos</span>
              </TabsTrigger>
              <TabsTrigger value="classroom" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <GraduationCap className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Roteiro</span>
              </TabsTrigger>
              <TabsTrigger value="exercises" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Brain className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Exercícios</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Target className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Quiz</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab com Animações Suaves */}
          <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
            {/* Hero Section Aprimorado */}
            <Card className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden relative animate-gradient animate-fade-in hover-lift">
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-3xl lg:text-4xl font-bold flex items-center gap-4 animate-slide-up">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm animate-pulse-glow">
                    <Zap className="h-8 w-8 lg:h-10 lg:w-10 animate-bounce-subtle" />
                  </div>
                  Apache Hadoop - Plataforma de Big Data
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg lg:text-xl font-medium animate-slide-up">
                  Framework distribuído para processamento de petabytes de dados em clusters escaláveis
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="text-lg lg:text-xl leading-relaxed">
                      O Apache Hadoop é a <span className="font-bold text-yellow-200">espinha dorsal do Big Data moderno</span>, 
                      processando dados em escala de zettabytes para empresas como Netflix, Uber e Meta.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                        💼 95% das Fortune 500
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                        🌐 10,000+ clusters ativos
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                        💰 60% economia vs proprietário
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                      <div className="text-3xl lg:text-4xl font-bold text-yellow-200">175 ZB</div>
                      <div className="text-sm lg:text-base opacity-90 mt-2">Dados globais em 2025</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                      <div className="text-3xl lg:text-4xl font-bold text-green-200">$274B</div>
                      <div className="text-sm lg:text-base opacity-90 mt-2">Mercado Big Data</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                      <div className="text-3xl lg:text-4xl font-bold text-orange-200">10M+</div>
                      <div className="text-sm lg:text-base opacity-90 mt-2">Profissionais</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                      <div className="text-3xl lg:text-4xl font-bold text-purple-200">99.9%</div>
                      <div className="text-sm lg:text-base opacity-90 mt-2">Disponibilidade</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cards de Recursos Aprimorados */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-green-200 dark:hover:border-green-800 hover-lift smooth-transition">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg group-hover:scale-110 smooth-transition animate-bounce-subtle">
                      <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    Escalabilidade Massiva
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    De gigabytes a petabytes. Clusters com 1-10,000+ nodes processando dados ilimitados com performance linear.
                  </p>
                  <div className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">
                    ↗️ Escala horizontal automática
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    Tolerância a Falhas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Auto-recuperação inteligente, replicação tripla, zero downtime com NameNode HA e backup automático.
                  </p>
                  <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    🛡️ 99.9% de disponibilidade
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    Performance Extrema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Processamento paralelo massivo com throughput de TBs/hora em clusters otimizados e distribuídos.
                  </p>
                  <div className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
                    ⚡ Até 1000x mais rápido que sistemas tradicionais
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-yellow-200 dark:hover:border-yellow-800">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg group-hover:scale-110 transition-transform">
                      <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    Custo-Benefício
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hardware commodity + software open source = 90% economia vs soluções proprietárias de Big Data.
                  </p>
                  <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400 font-medium">
                    💰 ROI de 300% em 2 anos típico
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Seção Aprimorada "Por que usar Hadoop?" */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader className="bg-green-50 dark:bg-green-950 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="h-6 w-6" />
                    Vantagens do Hadoop
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 dark:bg-green-900 rounded-full mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Custo-efetivo para grandes volumes</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Use hardware commodity ao invés de servidores caros</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 dark:bg-green-900 rounded-full mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Escalabilidade horizontal ilimitada</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Adicione nodes conforme a demanda cresce</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 dark:bg-green-900 rounded-full mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Processa qualquer formato</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Dados estruturados, semi-estruturados e não-estruturados</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 dark:bg-green-900 rounded-full mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Ecossistema maduro e ativo</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Spark, Hive, HBase, Kafka integrados nativamente</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 dark:border-orange-800">
                <CardHeader className="bg-orange-50 dark:bg-orange-950 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                    <AlertTriangle className="h-6 w-6" />
                    Considerações Importantes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900 rounded-full mt-1">
                        <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Complexidade inicial elevada</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Requer conhecimento especializado para setup</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900 rounded-full mt-1">
                        <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Latência maior para queries pequenas</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Otimizado para batch processing, não real-time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900 rounded-full mt-1">
                        <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Overhead para datasets pequenos</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Investimento justificado apenas com TB+ de dados</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900 rounded-full mt-1">
                        <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Manutenção contínua necessária</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Monitoramento, tuning e updates regulares</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture">
            <Suspense fallback={<LoadingSpinner message="Carregando Arquitetura Hadoop..." />}>
              <HadoopArchitecture />
            </Suspense>
          </TabsContent>

          {/* Installation Tab */}
          <TabsContent value="installation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-6 w-6 text-blue-600" />
                  Guia de Instalação Passo a Passo
                </CardTitle>
                <CardDescription>
                  Siga este guia para instalar o Hadoop em Ubuntu/Debian
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {installationSteps.map((step, index) => (
                    <Card key={index} className={`border-2 ${step.completed ? 'border-green-200 bg-green-50 dark:bg-green-950' : 'border-gray-200'}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleStep(index)}
                            className={step.completed ? 'bg-green-100 border-green-300' : ''}
                          >
                            {step.completed ? <CheckCircle className="h-4 w-4 text-green-600" /> : <Circle className="h-4 w-4" />}
                          </Button>
                          <div>
                            <div className="text-lg">Passo {index + 1}: {step.title}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                              {step.description}
                            </div>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {step.commands.map((command, cmdIndex) => (
                            <div key={cmdIndex} className="bg-gray-900 rounded p-3">
                              <code className="text-green-400 text-sm">{command}</code>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-8" />

                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200">Dicas Importantes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
                    <p>• Certifique-se de que o Java está corretamente instalado</p>
                    <p>• Configure o SSH sem senha para localhost</p>
                    <p>• Verifique se as portas 9000, 9870, 8088 estão livres</p>
                    <p>• Acesse NameNode em <code>http://localhost:9870</code></p>
                    <p>• Monitor YARN em <code>http://localhost:8088</code></p>
                    <p>• Sempre formate o NameNode apenas na primeira instalação</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples">
            <Suspense fallback={<LoadingSpinner message="Carregando exemplos MapReduce..." />}>
              <MapReduceDemo />
            </Suspense>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice">
            <Suspense fallback={<LoadingSpinner message="Carregando simulador de terminal..." />}>
              <TerminalSimulator />
            </Suspense>
          </TabsContent>

          {/* Ecosystem Tab */}
          <TabsContent value="ecosystem">
            <Suspense fallback={<LoadingSpinner message="Carregando ecossistema Hadoop..." />}>
              <ModernEcosystem />
            </Suspense>
          </TabsContent>

          {/* Real World Cases Tab */}
          <TabsContent value="cases">
            <Suspense fallback={<LoadingSpinner message="Carregando casos reais..." />}>
              <RealWorldCases />
            </Suspense>
          </TabsContent>

          {/* Python Data Processing Tab */}
          <TabsContent value="python">
            <Suspense fallback={<LoadingSpinner message="Carregando processamento com Python..." />}>
              <PythonDataProcessing />
            </Suspense>
          </TabsContent>

          {/* Fundamentals Tab */}
          <TabsContent value="fundamentals">
            <Suspense fallback={<LoadingSpinner message="Carregando fundamentos..." />}>
              <HadoopFundamentalsExpanded />
            </Suspense>
          </TabsContent>

          {/* Practical Labs Tab */}
          <TabsContent value="labs">
            <Suspense fallback={<LoadingSpinner message="Carregando laboratórios..." />}>
              <FunctionalLabs />
            </Suspense>
          </TabsContent>

          {/* Career and Certifications Tab */}
          <TabsContent value="career">
            <Suspense fallback={<LoadingSpinner message="Carregando informações de carreira..." />}>
              <CareerCertifications />
            </Suspense>
          </TabsContent>

                {/* Tech Comparisons Tab */}
          <TabsContent value="comparisons">
            <Suspense fallback={<LoadingSpinner message="Carregando comparações tecnológicas..." />}>
              <TechComparisons />
            </Suspense>
          </TabsContent>

          {/* Performance Monitoring Tab */}
          <TabsContent value="performance">
            <Suspense fallback={<LoadingSpinner message="Carregando monitoramento de performance..." />}>
              <PerformanceMonitoring />
            </Suspense>
          </TabsContent>

          {/* Security and Governance Tab */}
          <TabsContent value="security">
            <Suspense fallback={<LoadingSpinner message="Carregando segurança e governança..." />}>
              <SecurityGovernance />
            </Suspense>
          </TabsContent>

          {/* Advanced Projects Tab */}
          <TabsContent value="projects">
            <Suspense fallback={<LoadingSpinner message="Carregando projetos avançados..." />}>
              <AdvancedProjects />
            </Suspense>
          </TabsContent>

          {/* Cloud and Containerization Tab */}
          <TabsContent value="cloud">
            <Suspense fallback={<LoadingSpinner message="Carregando soluções cloud..." />}>
              <CloudContainerization />
            </Suspense>
          </TabsContent>

          {/* Resources and Community Tab */}
          <TabsContent value="resources">
            <Suspense fallback={<LoadingSpinner message="Carregando recursos e comunidade..." />}>
              <ResourcesCommunity />
            </Suspense>
          </TabsContent>

          {/* Classroom Guide Tab */}
          <TabsContent value="classroom">
            <Suspense fallback={<LoadingSpinner message="Carregando guia de sala de aula..." />}>
              <ClassroomGuide />
            </Suspense>
          </TabsContent>

          {/* Interactive Exercises Tab */}
          <TabsContent value="exercises">
            <Suspense fallback={<LoadingSpinner message="Carregando exercícios interativos..." />}>
              <InteractiveExercises />
            </Suspense>
          </TabsContent>

          {/* Hadoop Quiz Tab */}
          <TabsContent value="quiz">
            <Suspense fallback={<LoadingSpinner message="Carregando quiz..." />}>
              <HadoopQuiz />
            </Suspense>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Apache Hadoop - Guia Interativo Completo</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Desenvolvido para facilitar o aprendizado do framework de Big Data mais popular do mundo.
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>© 2024 Guia Hadoop</span>
              <span>•</span>
              <span>Apache Hadoop é uma marca registrada da Apache Software Foundation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
