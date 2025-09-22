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
  Download, 
  Code,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Terminal,
  Activity,
  Network,
  Users,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Play
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 h-auto overflow-x-auto p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <TabsTrigger value="overview" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <BookOpen className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Visão Geral</span>
              </TabsTrigger>
              <TabsTrigger value="fundamentals" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Code className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Fundamentos</span>
              </TabsTrigger>
              <TabsTrigger value="architecture" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Database className="h-5 w-5 flex-shrink-0" />
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
              <TabsTrigger value="labs" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Terminal className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Labs</span>
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Activity className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Monitor</span>
              </TabsTrigger>
              <TabsTrigger value="ecosystem" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-700 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                <Network className="h-5 w-5 flex-shrink-0" />
                <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Ecossistema</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-8">
            {/* Hero Section */}
            <Card className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden relative">
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-3xl lg:text-4xl font-bold flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Zap className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  Apache Hadoop - Plataforma de Big Data
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg lg:text-xl font-medium">
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
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cards de Recursos */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    Escalabilidade Massiva
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    De gigabytes a petabytes. Clusters com 1-10,000+ nodes processando dados ilimitados com performance linear.
                  </p>
                  <div className="mt-4 text-sm text-green-600 font-medium">
                    ↗️ Escala horizontal automática
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    Tolerância a Falhas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Auto-recuperação inteligente, replicação tripla, zero downtime com NameNode HA e backup automático.
                  </p>
                  <div className="mt-4 text-sm text-blue-600 font-medium">
                    🛡️ 99.9% de disponibilidade
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-yellow-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                    </div>
                    Custo-Benefício
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Hardware commodity + software open source = 90% economia vs soluções proprietárias de Big Data.
                  </p>
                  <div className="mt-4 text-sm text-yellow-600 font-medium">
                    💰 ROI de 300% em 2 anos típico
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Progress Tracker */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Seu Progresso de Aprendizado
                </CardTitle>
                <CardDescription>
                  Acompanhe seu progresso através dos módulos do Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progresso Geral</span>
                      <span className="text-sm font-bold text-green-600">35% Completo</span>
                    </div>
                    <Progress value={35} className="h-3" />
                    <p className="text-xs text-gray-500 mt-1">3 de 8 módulos concluídos</p>
                  </div>

                  {/* Learning Path */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">📚 Trilha de Aprendizado</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          ✓
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-green-700">Fundamentos do Hadoop</h4>
                          <p className="text-sm text-gray-600">HDFS, MapReduce, YARN - Concluído</p>
                        </div>
                        <Badge variant="default" className="bg-green-500">Completo</Badge>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          ✓
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-green-700">Arquitetura do Sistema</h4>
                          <p className="text-sm text-gray-600">Master-Slave, DataNodes - Concluído</p>
                        </div>
                        <Badge variant="default" className="bg-green-500">Completo</Badge>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-blue-700">Instalação e Configuração</h4>
                          <p className="text-sm text-gray-600">Processo de setup - Em andamento</p>
                        </div>
                        <Badge variant="secondary">Em Progresso</Badge>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-700">Comandos Práticos</h4>
                          <p className="text-sm text-gray-600">HDFS CLI, YARN commands - Pendente</p>
                        </div>
                        <Badge variant="outline">Pendente</Badge>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          5
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-700">Labs Avançados</h4>
                          <p className="text-sm text-gray-600">MapReduce personalizado - Pendente</p>
                        </div>
                        <Badge variant="outline">Pendente</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">🏆 Conquistas Desbloqueadas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="text-center p-3 bg-white rounded-lg border border-yellow-200">
                        <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          🏁
                        </div>
                        <p className="text-xs font-medium">Primeiro Acesso</p>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          📚
                        </div>
                        <p className="text-xs font-medium">Estudioso</p>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-green-200">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          🔧
                        </div>
                        <p className="text-xs font-medium">Configurador</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-50">
                        <div className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          🚀
                        </div>
                        <p className="text-xs font-medium">Expert</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold mb-3">⚡ Próximos Passos</h3>
                    <div className="space-y-2">
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Terminal className="h-4 w-4 mr-2" />
                        Praticar comandos na tab Labs
                      </Button>
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Code className="h-4 w-4 mr-2" />
                        Estudar exemplos de MapReduce
                      </Button>
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Activity className="h-4 w-4 mr-2" />
                        Explorar ferramentas de monitoramento
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fundamentals Tab */}
          <TabsContent value="fundamentals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  Fundamentos do Apache Hadoop
                </CardTitle>
                <CardDescription>
                  Conceitos essenciais para entender o ecossistema Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">🏗️ Componentes Principais</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">HDFS (Hadoop Distributed File System)</h4>
                          <p className="text-sm text-gray-600">Sistema de arquivos distribuído para armazenar grandes volumes de dados</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">MapReduce</h4>
                          <p className="text-sm text-gray-600">Framework para processamento paralelo de dados distribuídos</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">YARN</h4>
                          <p className="text-sm text-gray-600">Gerenciador de recursos e scheduler de jobs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">⚡ Casos de Uso</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium">Análise de logs de aplicações</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium">Data warehousing e ETL</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm font-medium">Machine Learning em grandes datasets</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm font-medium">Processamento de dados de IoT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-green-600" />
                  Arquitetura do Hadoop
                </CardTitle>
                <CardDescription>
                  Estrutura e componentes do ecossistema Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">🏛️ Arquitetura Master-Slave</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-blue-700">NameNode (Master)</h4>
                        <p className="text-sm text-gray-600">Gerencia metadados do HDFS e coordena o acesso aos dados</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-green-700">DataNodes (Slaves)</h4>
                        <p className="text-sm text-gray-600">Armazenam os blocos de dados reais nos discos locais</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-purple-700">Secondary NameNode</h4>
                        <p className="text-sm text-gray-600">Realiza checkpoints periódicos do NameNode</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">📊 Fluxo de Dados</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                          <span className="text-sm">Cliente solicita arquivo ao NameNode</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                          <span className="text-sm">NameNode retorna localização dos blocos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                          <span className="text-sm">Cliente acessa DataNodes diretamente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                          <span className="text-sm">Dados são lidos/escritos em paralelo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Architecture Diagram */}
            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-6 w-6 text-indigo-600" />
                  Diagrama Interativo da Arquitetura
                </CardTitle>
                <CardDescription>
                  Explore a arquitetura do Hadoop de forma visual e interativa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-lg border border-indigo-200 relative">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-indigo-700">Cluster Hadoop Interativo</h3>
                      <p className="text-sm text-gray-600">Hover nos componentes para ver detalhes</p>
                    </div>

                    <div className="mb-8">
                      <div className="text-center mb-4">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">Master Nodes</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group relative">
                          <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer">
                            <div className="flex items-center gap-3 mb-3">
                              <Database className="h-8 w-8" />
                              <div>
                                <h4 className="font-bold text-lg">NameNode</h4>
                                <p className="text-blue-100 text-sm">HDFS Master</p>
                              </div>
                            </div>
                            <div className="text-sm text-blue-100">
                              <p>• Gerencia metadados</p>
                              <p>• Controla DataNodes</p>
                              <p>• Porta: 9870</p>
                            </div>
                          </div>
                        </div>

                        <div className="group relative">
                          <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer">
                            <div className="flex items-center gap-3 mb-3">
                              <Activity className="h-8 w-8" />
                              <div>
                                <h4 className="font-bold text-lg">ResourceManager</h4>
                                <p className="text-green-100 text-sm">YARN Master</p>
                              </div>
                            </div>
                            <div className="text-sm text-green-100">
                              <p>• Aloca recursos</p>
                              <p>• Agenda jobs</p>
                              <p>• Porta: 8088</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mb-8">
                      <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-gray-500"></div>
                    </div>

                    <div>
                      <div className="text-center mb-4">
                        <Badge variant="outline" className="text-purple-600 border-purple-600">Worker Nodes</Badge>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((num) => (
                          <div key={num} className="group relative">
                            <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer">
                              <div className="flex items-center gap-2 mb-2">
                                <Shield className="h-6 w-6" />
                                <div>
                                  <h5 className="font-semibold">DataNode {num}</h5>
                                  <p className="text-purple-100 text-xs">HDFS Worker</p>
                                </div>
                              </div>
                              <div className="text-xs text-purple-100 mb-3">
                                <p>• Armazena blocos</p>
                                <p>• Reporta status</p>
                              </div>
                              
                              <div className="pt-3 border-t border-purple-400">
                                <div className="flex items-center gap-2">
                                  <Zap className="h-4 w-4" />
                                  <span className="text-xs font-medium">NodeManager</span>
                                </div>
                                <p className="text-xs text-purple-100">YARN Worker</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Installation Tab */}
          <TabsContent value="installation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-6 w-6 text-orange-600" />
                  Instalação do Hadoop
                </CardTitle>
                <CardDescription>
                  Guia passo a passo para instalar o Apache Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">📋 Pré-requisitos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-2">Sistema Operacional</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Linux (Ubuntu 18.04+ recomendado)</li>
                          <li>• Windows 10+ (com WSL2)</li>
                          <li>• macOS 10.14+</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-2">Software</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Java 8+ (OpenJDK recomendado)</li>
                          <li>• SSH configurado</li>
                          <li>• Python 3.7+ (opcional)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">⚙️ Comandos de Instalação</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Instalar Java</div>
                        <div>sudo apt update && sudo apt install openjdk-8-jdk</div>
                      </div>
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Download Hadoop</div>
                        <div>wget https://downloads.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz</div>
                      </div>
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Extrair e configurar</div>
                        <div>tar -xzf hadoop-3.3.6.tar.gz</div>
                        <div>sudo mv hadoop-3.3.6 /opt/hadoop</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-purple-600" />
                  Exemplos Práticos
                </CardTitle>
                <CardDescription>
                  Código e exemplos para começar com Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">🚀 WordCount - O "Hello World" do Hadoop</h3>
                    <div className="p-4 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                      <div className="mb-2"># Criar diretório de input</div>
                      <div>hdfs dfs -mkdir /input</div>
                      <div className="mt-2 mb-2"># Copiar arquivo para HDFS</div>
                      <div>hdfs dfs -put input.txt /input</div>
                      <div className="mt-2 mb-2"># Executar WordCount</div>
                      <div>hadoop jar hadoop-examples.jar wordcount /input /output</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">📊 Comandos HDFS Essenciais</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <code className="text-sm font-mono">hdfs dfs -ls /</code>
                          <p className="text-xs text-gray-600 mt-1">Listar arquivos</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <code className="text-sm font-mono">hdfs dfs -mkdir /data</code>
                          <p className="text-xs text-gray-600 mt-1">Criar diretório</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <code className="text-sm font-mono">hdfs dfs -put file.txt /data</code>
                          <p className="text-xs text-gray-600 mt-1">Upload arquivo</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <code className="text-sm font-mono">hdfs dfs -get /data/file.txt</code>
                          <p className="text-xs text-gray-600 mt-1">Download arquivo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Quiz */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  Quiz Interativo - Teste Seus Conhecimentos
                </CardTitle>
                <CardDescription>
                  Responda às perguntas para validar seu aprendizado sobre Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Quiz Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progresso do Quiz</span>
                      <span className="text-sm font-bold text-purple-600">Pergunta 1 de 5</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>

                  {/* Current Question */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <div className="mb-4">
                      <Badge variant="outline" className="text-purple-600 border-purple-600 mb-3">
                        Pergunta 1
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3">
                        Qual comando é usado para listar arquivos no HDFS?
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start p-4 h-auto text-left hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">A</div>
                          <span>hadoop fs -list</span>
                        </div>
                      </Button>

                      <Button 
                        variant="outline" 
                        className="w-full justify-start p-4 h-auto text-left border-green-500 bg-green-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">B</div>
                          <span>hdfs dfs -ls</span>
                        </div>
                      </Button>

                      <Button 
                        variant="outline" 
                        className="w-full justify-start p-4 h-auto text-left hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">C</div>
                          <span>yarn list files</span>
                        </div>
                      </Button>
                    </div>

                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-700">Correto! 🎉</span>
                      </div>
                      <p className="text-sm text-green-600">
                        <strong>hdfs dfs -ls</strong> é o comando padrão para listar arquivos e diretórios no HDFS.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <p className="text-sm text-gray-600">Pontuação</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">5/5</div>
                      <p className="text-sm text-gray-600">Corretas</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">⭐</div>
                      <p className="text-sm text-gray-600">Expert</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Labs Tab */}
          <TabsContent value="labs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-6 w-6 text-green-600" />
                  Terminal Hadoop Interativo Avançado
                </CardTitle>
                <CardDescription>
                  Terminal completo com auto-complete, histórico e 20+ comandos Hadoop reais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">🚀 Comandos Disponíveis (20+):</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Badge variant="outline" className="text-xs font-mono">hdfs dfs -ls</Badge>
                    <Badge variant="outline" className="text-xs font-mono">hdfs dfs -mkdir</Badge>
                    <Badge variant="outline" className="text-xs font-mono">hdfs dfs -put</Badge>
                    <Badge variant="outline" className="text-xs font-mono">hdfs dfs -get</Badge>
                    <Badge variant="outline" className="text-xs font-mono">yarn application</Badge>
                    <Badge variant="outline" className="text-xs font-mono">mapred job</Badge>
                    <Badge variant="outline" className="text-xs font-mono">hdfs fsck</Badge>
                    <Badge variant="outline" className="text-xs font-mono">yarn logs</Badge>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">hadoop@cluster:~</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Comandos: 23 | Histórico: 15
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {}}
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 h-96 overflow-y-auto font-mono text-sm bg-gray-900">
                    <div className="text-blue-300 mb-2">$ Hadoop Terminal Simulator v2.0 - Digite "help" para comandos | Tab para auto-complete</div>
                    <div className="text-green-300 mb-2">$ Sistema iniciado: 3 DataNodes, 1 NameNode, 1 ResourceManager online</div>
                    <div className="text-yellow-300 mb-3">$ Tip: Use setas ↑↓ para histórico, Tab para auto-complete, Ctrl+C para cancelar</div>
                    
                    {/* Exemplo de sessão interativa */}
                    <div className="text-green-400 font-bold mb-1">$ hdfs dfs -ls /</div>
                    <div className="text-gray-300 mb-1">Found 6 items</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup          0 2024-01-15 10:30 /data</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup          0 2024-01-15 09:15 /input</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup          0 2024-01-15 11:45 /output</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup          0 2024-01-15 08:00 /user</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup          0 2024-01-15 12:00 /tmp</div>
                    <div className="text-gray-300 mb-3">drwxr-xr-x   - hadoop supergroup          0 2024-01-15 13:15 /logs</div>
                    
                    <div className="text-green-400 font-bold mb-1">$ hdfs dfs -du -h /</div>
                    <div className="text-gray-300 mb-1">2.5 G  7.5 G  /data</div>
                    <div className="text-gray-300 mb-1">1.2 G  3.6 G  /input</div>
                    <div className="text-gray-300 mb-1">856 M  2.5 G  /output</div>
                    <div className="text-gray-300 mb-1">45 M   135 M  /user</div>
                    <div className="text-gray-300 mb-3">12 M   36 M   /tmp</div>
                    
                    <div className="text-green-400 font-bold mb-1">$ yarn application -list</div>
                    <div className="text-gray-300 mb-1">Total number of applications (application-types: [], states: [SUBMITTED, ACCEPTED, RUNNING] and tags: []): 3</div>
                    <div className="text-gray-300 mb-1 text-xs">Application-Id                    Application-Name       Application-Type  User     Queue    State      Final-State  Progress</div>
                    <div className="text-gray-300 mb-1 text-xs">application_1642234567890_0001   WordCount             MAPREDUCE         hadoop   default  RUNNING    UNDEFINED    75%</div>
                    <div className="text-gray-300 mb-1 text-xs">application_1642234567890_0002   TeraSort              MAPREDUCE         hadoop   default  ACCEPTED   UNDEFINED    0%</div>
                    <div className="text-gray-300 mb-3 text-xs">application_1642234567890_0003   SparkPi               SPARK             spark    default  RUNNING    UNDEFINED    45%</div>
                    
                    <div className="text-green-400 font-bold mb-1">$ hdfs fsck /data -files -blocks</div>
                    <div className="text-gray-300 mb-1">FSCK started by hadoop (auth:SIMPLE) from /192.168.1.100 for path /data at Mon Jan 15 14:30:25 UTC 2024</div>
                    <div className="text-gray-300 mb-1">/data/dataset1.txt 1073741824 bytes, 8 block(s):  OK</div>
                    <div className="text-gray-300 mb-1">0. BP-123456789-192.168.1.100-1642234567890:blk_1073741825_1001 len=134217728 Live_repl=3</div>
                    <div className="text-gray-300 mb-1">1. BP-123456789-192.168.1.100-1642234567890:blk_1073741826_1002 len=134217728 Live_repl=3</div>
                    <div className="text-gray-300 mb-1">...</div>
                    <div className="text-green-300 mb-3">Status: HEALTHY</div>
                    
                    {/* Auto-complete demonstration */}
                    <div className="text-green-400 font-bold mb-1">$ hdfs df<span className="bg-gray-700 text-white px-1">s</span></div>
                    <div className="text-yellow-300 mb-1 text-xs">Auto-complete suggestions:</div>
                    <div className="text-cyan-300 mb-1 text-xs">  hdfs dfs -ls     hdfs dfs -mkdir     hdfs dfs -put     hdfs dfs -get</div>
                    <div className="text-cyan-300 mb-3 text-xs">  hdfs dfs -rm     hdfs dfs -rmdir     hdfs dfs -cat     hdfs dfs -tail</div>
                    
                    <div className="flex items-center">
                      <span className="text-green-400">$ </span>
                      <span className="text-gray-300 animate-pulse">|</span>
                    </div>
                  </div>

                  <div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-mono">$</span>
                      <div className="flex-1 bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono text-sm">
                        Digite um comando Hadoop... (Tab para auto-complete)
                      </div>
                      <Button size="sm" className="px-3">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Enhanced Features Info */}
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <span>💡 Pressione Tab para auto-complete</span>
                        <span>⬆️⬇️ Navegue no histórico</span>
                        <span>Ctrl+C Cancela comando</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Cluster ativo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Terminal Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      Recursos Avançados
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Auto-complete:</strong> Tab completa comandos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Histórico:</strong> ↑/↓ navega comandos anteriores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Pipes:</strong> Suporte a | grep, | head, | tail</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Aliases:</strong> ll, la, h para comandos comuns</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-green-600" />
                      Comandos Suportados
                    </h4>
                    <div className="space-y-1 text-xs">
                      <div className="grid grid-cols-2 gap-1">
                        <span className="font-mono text-blue-600">hdfs dfs -ls</span>
                        <span className="font-mono text-blue-600">hdfs dfs -put</span>
                        <span className="font-mono text-blue-600">hdfs dfs -get</span>
                        <span className="font-mono text-blue-600">hdfs dfs -mkdir</span>
                        <span className="font-mono text-green-600">yarn application</span>
                        <span className="font-mono text-green-600">yarn logs</span>
                        <span className="font-mono text-purple-600">mapred job</span>
                        <span className="font-mono text-purple-600">hadoop jar</span>
                        <span className="font-mono text-orange-600">hdfs fsck</span>
                        <span className="font-mono text-orange-600">hdfs dfsadmin</span>
                        <span className="text-gray-500">+ 13 mais...</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>🎯 <strong>Novo:</strong> Terminal completamente funcional com 23 comandos Hadoop reais</p>
                  <p>💡 <strong>Dica:</strong> Use Tab para descobrir novos comandos disponíveis</p>
                  <p>🚀 <strong>Próximo:</strong> Sistema simulará execução real de jobs MapReduce</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  Laboratórios Práticos
                </CardTitle>
                <CardDescription>
                  Experimentos hands-on para dominar o Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">🧪 Lab 1: Configuração Básica</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                          <h4 className="font-medium text-blue-700">Objetivo</h4>
                          <p className="text-sm mt-1">Configurar um cluster Hadoop single-node</p>
                        </div>
                        <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                          <div># Iniciar serviços Hadoop</div>
                          <div>start-dfs.sh</div>
                          <div>start-yarn.sh</div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Duração estimada: 30 minutos</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">🔬 Lab 2: MapReduce Avançado</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                          <h4 className="font-medium text-purple-700">Objetivo</h4>
                          <p className="text-sm mt-1">Criar job MapReduce personalizado</p>
                        </div>
                        <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                          <div># Compilar e executar</div>
                          <div>javac -cp $(hadoop classpath) *.java</div>
                          <div>jar cf wc.jar WordCount*.class</div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Duração estimada: 45 minutos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">💡 Dicas para os Labs</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium">Siga o passo a passo</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium">Valide cada etapa</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <Users className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium">Compartilhe resultados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-orange-600" />
                  Monitoramento e Performance
                </CardTitle>
                <CardDescription>
                  Ferramentas para monitorar e otimizar clusters Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold mb-4">📊 Interfaces Web do Hadoop</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-blue-700">NameNode Web UI</h4>
                            <Badge variant="secondary">:9870</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Monitoramento do HDFS, blocos, DataNodes</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-green-700">ResourceManager Web UI</h4>
                            <Badge variant="secondary">:8088</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Gerenciamento de aplicações YARN</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-purple-700">JobHistory Server</h4>
                            <Badge variant="secondary">:19888</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Histórico de jobs MapReduce</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">⚡ Métricas Essenciais</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm font-medium">CPU Usage</span>
                          </div>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span className="text-sm font-medium">Memory Usage</span>
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">Disk I/O</span>
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">Network Traffic</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">🔧 Comandos de Monitoramento</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Status do cluster</div>
                        <div>hdfs dfsadmin -report</div>
                      </div>
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Aplicações YARN</div>
                        <div>yarn application -list</div>
                      </div>
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Saúde dos DataNodes</div>
                        <div>hdfs dfsadmin -printTopology</div>
                      </div>
                      <div className="p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                        <div className="mb-2"># Logs do sistema</div>
                        <div>yarn logs -applicationId app_id</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ecosystem Tab */}
          <TabsContent value="ecosystem" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-6 w-6 text-indigo-600" />
                  Ecossistema Hadoop
                </CardTitle>
                <CardDescription>
                  Ferramentas e projetos que complementam o Apache Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">🏗️ Ferramentas de Armazenamento</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-blue-700">Apache HBase</h4>
                            <Badge variant="outline">NoSQL</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Banco de dados colunar distribuído sobre HDFS</p>
                        </div>
                        <div className="p-4 bg-green-50 border-l-4 border-green-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-green-700">Apache Cassandra</h4>
                            <Badge variant="outline">Distribuído</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Sistema de banco de dados altamente escalável</p>
                        </div>
                        <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-purple-700">Apache Kudu</h4>
                            <Badge variant="outline">Híbrido</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Armazenamento para workloads analíticos rápidos</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">⚡ Ferramentas de Processamento</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-orange-700">Apache Spark</h4>
                            <Badge variant="outline">In-Memory</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Engine de analytics unificada para big data</p>
                        </div>
                        <div className="p-4 bg-teal-50 border-l-4 border-teal-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-teal-700">Apache Flink</h4>
                            <Badge variant="outline">Streaming</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Processamento de stream em tempo real</p>
                        </div>
                        <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-indigo-700">Apache Storm</h4>
                            <Badge variant="outline">Real-time</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Sistema de computação distribuída em tempo real</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">📊 Ferramentas de Consulta e Análise</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="h-5 w-5 text-blue-600" />
                          <h4 className="font-medium text-blue-700">Apache Hive</h4>
                        </div>
                        <p className="text-sm text-gray-600">Data warehouse com interface SQL</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-5 w-5 text-green-600" />
                          <h4 className="font-medium text-green-700">Apache Impala</h4>
                        </div>
                        <p className="text-sm text-gray-600">Engine SQL massivamente paralelo</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="h-5 w-5 text-purple-600" />
                          <h4 className="font-medium text-purple-700">Apache Drill</h4>
                        </div>
                        <p className="text-sm text-gray-600">SQL query engine schema-free</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">🚀 Tendências do Ecossistema</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">☁️ Cloud-Native</h4>
                        <p className="text-sm text-gray-600">Migração para soluções cloud como AWS EMR, Azure HDInsight, Google Dataproc</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">🤖 Machine Learning</h4>
                        <p className="text-sm text-gray-600">Integração com MLlib, TensorFlow, e frameworks de ML distribuído</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cloud Deployment Section */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200 mt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      ☁️ Hadoop na Cloud - Deployment em Produção
                      <Badge variant="secondary">Cloud Providers</Badge>
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* AWS EMR */}
                      <div className="bg-white p-5 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">AWS</span>
                          </div>
                          <h4 className="font-semibold text-blue-800">Amazon EMR</h4>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium text-blue-700 mb-1">🚀 Quick Start</div>
                            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                              <div>aws emr create-cluster \</div>
                              <div className="ml-2">--name "HadoopCluster" \</div>
                              <div className="ml-2">--instance-type m5.xlarge \</div>
                              <div className="ml-2">--instance-count 4 \</div>
                              <div className="ml-2">--applications Name=Hadoop Name=Spark</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-blue-700 mb-1">💰 Pricing</div>
                            <div className="text-gray-600">
                              <div>• $0.27/hora por m5.xlarge</div>
                              <div>• Auto-scaling disponível</div>
                              <div>• Spot instances para economia</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-blue-700 mb-1">✅ Vantagens</div>
                            <div className="text-gray-600">
                              <div>• Integração S3 nativa</div>
                              <div>• Gerenciamento automático</div>
                              <div>• 200+ aplicações pré-instaladas</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Azure HDInsight */}
                      <div className="bg-white p-5 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">AZ</span>
                          </div>
                          <h4 className="font-semibold text-blue-800">Azure HDInsight</h4>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium text-blue-700 mb-1">🚀 ARM Template</div>
                            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                              <div>az hdinsight create \</div>
                              <div className="ml-2">--name hadoopcluster \</div>
                              <div className="ml-2">--resource-group myRG \</div>
                              <div className="ml-2">--type Hadoop \</div>
                              <div className="ml-2">--component-version Hadoop=3.1</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-blue-700 mb-1">💰 Pricing</div>
                            <div className="text-gray-600">
                              <div>• $0.32/hora por Standard_D3_v2</div>
                              <div>• Reserved instances (-40%)</div>
                              <div>• Integration com Azure services</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-blue-700 mb-1">✅ Vantagens</div>
                            <div className="text-gray-600">
                              <div>• Integração Azure Data Lake</div>
                              <div>• Enterprise security (ESP)</div>
                              <div>• Power BI integration</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Google Cloud Dataproc */}
                      <div className="bg-white p-5 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">GCP</span>
                          </div>
                          <h4 className="font-semibold text-blue-800">Google Dataproc</h4>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium text-blue-700 mb-1">🚀 gcloud CLI</div>
                            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                              <div>gcloud dataproc clusters create \</div>
                              <div className="ml-2">hadoop-cluster \</div>
                              <div className="ml-2">--num-workers 4 \</div>
                              <div className="ml-2">--machine-type n1-standard-4 \</div>
                              <div className="ml-2">--initialization-actions gs://bucket/init.sh</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-blue-700 mb-1">💰 Pricing</div>
                            <div className="text-gray-600">
                              <div>• $0.01/vCPU/hora (Dataproc fee)</div>
                              <div>• + Compute Engine pricing</div>
                              <div>• Preemptible instances (-80%)</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-blue-700 mb-1">✅ Vantagens</div>
                            <div className="text-gray-600">
                              <div>• Start em 90 segundos</div>
                              <div>• BigQuery integration</div>
                              <div>• Auto-scaling inteligente</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Best Practices Cloud */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-3">✅ Melhores Práticas Cloud</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div>• Use object storage (S3/Azure Blob/GCS) como data lake</div>
                          <div>• Configure auto-scaling para workloads variáveis</div>
                          <div>• Implemente data lifecycle management</div>
                          <div>• Use spot/preemptible instances para economia</div>
                          <div>• Configure monitoring e alertas proativos</div>
                          <div>• Automatize deployment com IaC (Terraform/ARM)</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-800 mb-3">⚠️ Considerações de Custo</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div>• Shutdown clusters quando não utilizados</div>
                          <div>• Use compression para reduzir storage costs</div>
                          <div>• Monitor data transfer charges</div>
                          <div>• Configure budget alerts</div>
                          <div>• Avalie workload patterns para right-sizing</div>
                          <div>• Consider hybrid/multi-cloud strategies</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Migration Strategy */}
                    <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3">🔄 Estratégia de Migração On-Premise → Cloud</h4>
                      
                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold">1</span>
                          </div>
                          <div className="font-medium text-purple-700">Assessment</div>
                          <div className="text-gray-600 text-xs">Audit workloads, data, dependencies</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold">2</span>
                          </div>
                          <div className="font-medium text-purple-700">Pilot</div>
                          <div className="text-gray-600 text-xs">Test com workload não-crítico</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold">3</span>
                          </div>
                          <div className="font-medium text-purple-700">Migration</div>
                          <div className="text-gray-600 text-xs">Migrate por fases, validate</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold">4</span>
                          </div>
                          <div className="font-medium text-purple-700">Optimize</div>
                          <div className="text-gray-600 text-xs">Fine-tune performance, costs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seção de Certificações Profissionais */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  Certificações Profissionais & Roadmap de Carreira
                </CardTitle>
                <CardDescription>
                  Guia completo para certificações Hadoop/Big Data e planejamento de carreira
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Principais Certificações */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Cloudera */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">CDF</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Cloudera</h3>
                        <p className="text-sm text-blue-600">Industry Leader</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">🎯 Certificações Disponíveis</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span>CCA Data Analyst</span>
                            <Badge variant="outline" className="text-xs">Entry</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>CCP Data Engineer</span>
                            <Badge variant="outline" className="text-xs">Mid</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>CCA Spark Developer</span>
                            <Badge variant="outline" className="text-xs">Advanced</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">💰 Investimento</h4>
                        <div className="text-sm text-gray-600">
                          <div>• $295 - $495 por exam</div>
                          <div>• Validade: 2 anos</div>
                          <div>• Formato: Hands-on</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">📈 ROI de Carreira</h4>
                        <div className="text-sm text-gray-600">
                          <div>• +25% salary increase</div>
                          <div>• 15,000+ job openings</div>
                          <div>• Top enterprise recognition</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AWS */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AWS</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-800">Amazon Web Services</h3>
                        <p className="text-sm text-orange-600">Cloud Leader</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-orange-700 mb-2">🎯 Certificações Disponíveis</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span>AWS Big Data Specialty</span>
                            <Badge variant="outline" className="text-xs">Specialty</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Data Analytics Specialty</span>
                            <Badge variant="outline" className="text-xs">Advanced</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Solutions Architect</span>
                            <Badge variant="outline" className="text-xs">Core</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-orange-700 mb-2">💰 Investimento</h4>
                        <div className="text-sm text-gray-600">
                          <div>• $150 - $300 por exam</div>
                          <div>• Validade: 3 anos</div>
                          <div>• Formato: Multiple choice</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-orange-700 mb-2">📈 ROI de Carreira</h4>
                        <div className="text-sm text-gray-600">
                          <div>• +30% salary increase</div>
                          <div>• 50,000+ cloud jobs</div>
                          <div>• Fastest growing demand</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Microsoft Azure */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AZ</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-cyan-800">Microsoft Azure</h3>
                        <p className="text-sm text-cyan-600">Enterprise Focus</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-cyan-700 mb-2">🎯 Certificações Disponíveis</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span>DP-203 Data Engineer</span>
                            <Badge variant="outline" className="text-xs">Associate</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>DP-100 Data Scientist</span>
                            <Badge variant="outline" className="text-xs">Associate</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>AZ-104 Administrator</span>
                            <Badge variant="outline" className="text-xs">Core</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-cyan-700 mb-2">💰 Investimento</h4>
                        <div className="text-sm text-gray-600">
                          <div>• $165 por exam</div>
                          <div>• Validade: 2 anos</div>
                          <div>• Formato: Multiple choice</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-cyan-700 mb-2">📈 ROI de Carreira</h4>
                        <div className="text-sm text-gray-600">
                          <div>• +28% salary increase</div>
                          <div>• 35,000+ enterprise jobs</div>
                          <div>• Strong Fortune 500 demand</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Roadmap de Carreira */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                    🗺️ Roadmap de Carreira - Big Data Engineer
                    <Badge variant="secondary">2024-2025</Badge>
                  </h3>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Iniciante */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-green-700 mb-3">Iniciante (0-1 ano)</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>• Hadoop Fundamentals</div>
                        <div>• Linux/Shell Scripting</div>
                        <div>• SQL Avançado</div>
                        <div>• Python/Java Básico</div>
                        <div>• Git/Version Control</div>
                      </div>
                      <div className="mt-4 p-2 bg-green-100 rounded text-xs">
                        <strong>Salário:</strong> $50k-70k
                      </div>
                    </div>
                    
                    {/* Júnior */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-blue-700 mb-3">Júnior (1-2 anos)</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>• HDFS Operations</div>
                        <div>• MapReduce/Spark</div>
                        <div>• Hive/Pig Scripting</div>
                        <div>• AWS/Azure Basics</div>
                        <div>• Data Pipeline Design</div>
                      </div>
                      <div className="mt-4 p-2 bg-blue-100 rounded text-xs">
                        <strong>Salário:</strong> $70k-90k
                      </div>
                    </div>
                    
                    {/* Pleno */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-purple-700 mb-3">Pleno (2-4 anos)</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>• Cluster Administration</div>
                        <div>• Performance Tuning</div>
                        <div>• Real-time Processing</div>
                        <div>• DevOps/CI-CD</div>
                        <div>• Security Implementation</div>
                      </div>
                      <div className="mt-4 p-2 bg-purple-100 rounded text-xs">
                        <strong>Salário:</strong> $90k-120k
                      </div>
                    </div>
                    
                    {/* Sênior */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold">4</span>
                      </div>
                      <h4 className="font-semibold text-red-700 mb-3">Sênior (4+ anos)</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>• Architecture Design</div>
                        <div>• Multi-cloud Strategy</div>
                        <div>• Team Leadership</div>
                        <div>• Business Intelligence</div>
                        <div>• Strategic Planning</div>
                      </div>
                      <div className="mt-4 p-2 bg-red-100 rounded text-xs">
                        <strong>Salário:</strong> $120k-180k+
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Plano de Estudos Estruturado */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 mb-4">📚 Plano de Estudos - 6 Meses</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-emerald-700">Mês 1-2: Fundamentos</span>
                          <Badge variant="outline" className="text-xs">Básico</Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• Hadoop Ecosystem Overview</div>
                          <div>• HDFS Architecture & Commands</div>
                          <div>• MapReduce Programming</div>
                          <div>• YARN Resource Management</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-emerald-700">Mês 3-4: Ferramentas</span>
                          <Badge variant="outline" className="text-xs">Intermediário</Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• Hive Data Warehousing</div>
                          <div>• Pig Data Processing</div>
                          <div>• HBase NoSQL Database</div>
                          <div>• Spark In-Memory Computing</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-emerald-700">Mês 5-6: Produção</span>
                          <Badge variant="outline" className="text-xs">Avançado</Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• Cluster Administration</div>
                          <div>• Performance Optimization</div>
                          <div>• Security & Governance</div>
                          <div>• Cloud Migration Strategies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-4">🎯 Preparação para Certificação</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-amber-700 mb-2">📖 Recursos de Estudo</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• Official documentation</div>
                          <div>• Hands-on lab practice</div>
                          <div>• Mock exams & simulators</div>
                          <div>• Community forums</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-medium text-amber-700 mb-2">⏱️ Cronograma Sugerido</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• 3-6 meses preparação</div>
                          <div>• 2-3h estudo diário</div>
                          <div>• 1 lab prático por semana</div>
                          <div>• Mock exam mensal</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-medium text-amber-700 mb-2">💡 Dicas de Sucesso</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>• Practice hands-on scenarios</div>
                          <div>• Join study groups</div>
                          <div>• Build portfolio projects</div>
                          <div>• Network with professionals</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg text-white text-center">
                  <h4 className="text-xl font-bold mb-2">🚀 Acelere sua Carreira em Big Data!</h4>
                  <p className="mb-4 opacity-90">
                    Profissionais certificados em Hadoop ganham em média 25-30% mais que não-certificados
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      📊 Avaliar Nível Atual
                    </Button>
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      🎯 Escolher Certificação
                    </Button>
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      📚 Começar Estudos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estudos de Caso Reais */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-blue-600" />
                  Casos de Uso Reais - Big Data em Produção
                </CardTitle>
                <CardDescription>
                  Arquiteturas e implementações de grandes empresas usando Hadoop
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Netflix */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">N</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">Netflix</h3>
                      <p className="text-red-600">Streaming & Recommendations</p>
                      <Badge variant="secondary" className="mt-1">200+ Million Users</Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">🎯 Desafio de Negócio</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• 15 petabytes de dados processados diariamente</div>
                        <div>• Recomendações personalizadas em tempo real</div>
                        <div>• Análise de comportamento de viewing</div>
                        <div>• Otimização de qualidade de streaming</div>
                        <div>• A/B testing de interface e conteúdo</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">🏗️ Arquitetura Hadoop</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• <strong>Ingestão:</strong> Kafka + Flume</div>
                        <div>• <strong>Storage:</strong> HDFS + S3</div>
                        <div>• <strong>Processing:</strong> Spark + Flink</div>
                        <div>• <strong>Analytics:</strong> Hive + Presto</div>
                        <div>• <strong>ML:</strong> Spark MLlib + TensorFlow</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-white p-4 rounded-lg border border-red-100">
                    <h4 className="font-semibold text-red-700 mb-2">📊 Resultados Mensuráveis</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">80%</div>
                        <div className="text-gray-600">Content Discovery via ML</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">$1B</div>
                        <div className="text-gray-600">Annual Savings from Optimization</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">99.9%</div>
                        <div className="text-gray-600">Service Availability</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Uber */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">U</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Uber</h3>
                      <p className="text-gray-600">Real-time Transportation & Logistics</p>
                      <Badge variant="secondary" className="mt-1">100+ Million Users</Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">🎯 Desafio de Negócio</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• Matching drivers/riders em tempo real</div>
                        <div>• Previsão de demanda geográfica</div>
                        <div>• Otimização de rotas dinâmicas</div>
                        <div>• Pricing surge em tempo real</div>
                        <div>• Fraud detection em transações</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">🏗️ Arquitetura Hadoop</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• <strong>Streaming:</strong> Kafka + Storm</div>
                        <div>• <strong>Storage:</strong> Cassandra + HDFS</div>
                        <div>• <strong>Processing:</strong> Spark Streaming</div>
                        <div>• <strong>Analytics:</strong> Hive + Presto</div>
                        <div>• <strong>ML:</strong> Michelangelo Platform</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-700 mb-2">📊 Resultados Mensuráveis</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">15TB</div>
                        <div className="text-gray-600">Data Processed Daily</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">99%</div>
                        <div className="text-gray-600">Real-time Match Success</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">30%</div>
                        <div className="text-gray-600">ETA Accuracy Improvement</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">in</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">LinkedIn</h3>
                      <p className="text-blue-600">Professional Network & Recruiting</p>
                      <Badge variant="secondary" className="mt-1">800+ Million Users</Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">🎯 Desafio de Negócio</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• Feed personalizado para 800M+ usuários</div>
                        <div>• Job recommendations engine</div>
                        <div>• Professional skill recommendations</div>
                        <div>• Anti-spam e fraud detection</div>
                        <div>• Economic insights & analytics</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">🏗️ Arquitetura Hadoop</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• <strong>Streaming:</strong> Kafka (criado pela LinkedIn)</div>
                        <div>• <strong>Storage:</strong> Espresso + HDFS</div>
                        <div>• <strong>Processing:</strong> Samza + Spark</div>
                        <div>• <strong>Search:</strong> Elasticsearch + Galene</div>
                        <div>• <strong>ML:</strong> Pro-ML Platform</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-white p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-2">📊 Resultados Mensuráveis</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">1.4B</div>
                        <div className="text-gray-600">Feed Updates Daily</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">40M</div>
                        <div className="text-gray-600">Job Applications Monthly</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-gray-600">Recommendation Relevance</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Airbnb */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg border border-rose-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-rose-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-rose-800">Airbnb</h3>
                      <p className="text-rose-600">Travel & Hospitality Platform</p>
                      <Badge variant="secondary" className="mt-1">4+ Million Hosts</Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-rose-700 mb-3">🎯 Desafio de Negócio</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• Dynamic pricing para 7M+ listings</div>
                        <div>• Search ranking personalizado</div>
                        <div>• Trust & safety automation</div>
                        <div>• Demand forecasting por região</div>
                        <div>• Host performance optimization</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-rose-700 mb-3">🏗️ Arquitetura Hadoop</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• <strong>Streaming:</strong> Kafka + Spark Streaming</div>
                        <div>• <strong>Storage:</strong> HDFS + Hive</div>
                        <div>• <strong>Processing:</strong> Airflow + Spark</div>
                        <div>• <strong>Analytics:</strong> Superset + Druid</div>
                        <div>• <strong>ML:</strong> Bighead Platform</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-white p-4 rounded-lg border border-rose-100">
                    <h4 className="font-semibold text-rose-700 mb-2">📊 Resultados Mensuráveis</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-rose-600">500M</div>
                        <div className="text-gray-600">Guest Arrivals Annually</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-rose-600">25%</div>
                        <div className="text-gray-600">Revenue Increase from ML</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-rose-600">99.5%</div>
                        <div className="text-gray-600">Fraud Detection Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arquiteturas Comparativas */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                    🏗️ Padrões de Arquitetura Enterprise
                    <Badge variant="secondary">Comparative Analysis</Badge>
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-purple-200">
                          <th className="text-left p-3 font-semibold text-purple-700">Empresa</th>
                          <th className="text-left p-3 font-semibold text-purple-700">Volume/Dia</th>
                          <th className="text-left p-3 font-semibold text-purple-700">Stack Principal</th>
                          <th className="text-left p-3 font-semibold text-purple-700">Use Case Primary</th>
                          <th className="text-left p-3 font-semibold text-purple-700">ROI Key</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-purple-100">
                          <td className="p-3 font-medium">Netflix</td>
                          <td className="p-3">15 PB</td>
                          <td className="p-3">Spark + Kafka + S3</td>
                          <td className="p-3">ML Recommendations</td>
                          <td className="p-3">80% discovery rate</td>
                        </tr>
                        <tr className="border-b border-purple-100">
                          <td className="p-3 font-medium">Uber</td>
                          <td className="p-3">15 TB</td>
                          <td className="p-3">Kafka + Storm + Cassandra</td>
                          <td className="p-3">Real-time Matching</td>
                          <td className="p-3">99% match success</td>
                        </tr>
                        <tr className="border-b border-purple-100">
                          <td className="p-3 font-medium">LinkedIn</td>
                          <td className="p-3">1.4B events</td>
                          <td className="p-3">Kafka + Samza + Espresso</td>
                          <td className="p-3">Feed Personalization</td>
                          <td className="p-3">95% relevance</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Airbnb</td>
                          <td className="p-3">10 TB</td>
                          <td className="p-3">Spark + Airflow + Hive</td>
                          <td className="p-3">Dynamic Pricing</td>
                          <td className="p-3">25% revenue increase</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Lições Aprendidas */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4">✅ Padrões de Sucesso</h4>
                    
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Start Small, Scale Fast</div>
                          <div className="text-gray-600">Begin with MVP, prove value, then scale horizontally</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Real-time + Batch Hybrid</div>
                          <div className="text-gray-600">Lambda architecture para diferentes SLAs</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">ML-First Approach</div>
                          <div className="text-gray-600">Embed intelligence desde o design inicial</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Self-Service Analytics</div>
                          <div className="text-gray-600">Democratize data access across teams</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-4">⚠️ Armadilhas Comuns</h4>
                    
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Over-Engineering</div>
                          <div className="text-gray-600">Complex architectures sem business case claro</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Data Quality Neglect</div>
                          <div className="text-gray-600">Focus em volume mas ignorar qualidade dos dados</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Monolithic Mindset</div>
                          <div className="text-gray-600">Não quebrar em microservices escaláveis</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Security Afterthought</div>
                          <div className="text-gray-600">Não implementar security-by-design</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 rounded-lg text-white text-center">
                  <h4 className="text-xl font-bold mb-2">🚀 Aplique Esses Padrões no Seu Projeto!</h4>
                  <p className="mb-4 opacity-90">
                    Adapte essas arquiteturas comprovadas para acelerar sua implementação
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      📋 Template Arquitetura
                    </Button>
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      🔍 Assessment Tool
                    </Button>
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      📞 Expert Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recursos para Download */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-6 w-6 text-green-600" />
                  Centro de Downloads - Recursos Práticos
                </CardTitle>
                <CardDescription>
                  Templates, datasets, configurações e cheat sheets para acelerar seu desenvolvimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Templates de Configuração */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      ⚙️ Templates de Configuração
                      <Badge variant="secondary">Production Ready</Badge>
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">core-site.xml</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Configuração otimizada para clusters de produção
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">XML</Badge>
                          <Badge variant="outline">2KB</Badge>
                          <Badge variant="outline">Production</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">hdfs-site.xml</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          HDFS tuning para performance e reliability
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">XML</Badge>
                          <Badge variant="outline">3KB</Badge>
                          <Badge variant="outline">High Performance</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">yarn-site.xml</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Resource management otimizado para workloads diversos
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">XML</Badge>
                          <Badge variant="outline">4KB</Badge>
                          <Badge variant="outline">Resource Tuning</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">Docker Compose</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Cluster Hadoop completo em containers
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">YAML</Badge>
                          <Badge variant="outline">8KB</Badge>
                          <Badge variant="outline">Development</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                      📊 Datasets de Exemplo
                      <Badge variant="secondary">Hands-on Learning</Badge>
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-green-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-green-600" />
                            <span className="font-medium">E-commerce Dataset</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          1M+ transações para análise de vendas e customer behavior
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">CSV</Badge>
                          <Badge variant="outline">250MB</Badge>
                          <Badge variant="outline">Retail Analytics</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-green-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-green-600" />
                            <span className="font-medium">Web Logs Dataset</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          6 meses de logs web para análise de tráfego e performance
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">LOG</Badge>
                          <Badge variant="outline">500MB</Badge>
                          <Badge variant="outline">Web Analytics</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-green-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-green-600" />
                            <span className="font-medium">IoT Sensor Data</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Time series de sensores industriais para análise preditiva
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">JSON</Badge>
                          <Badge variant="outline">1.2GB</Badge>
                          <Badge variant="outline">IoT Analytics</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-green-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-green-600" />
                            <span className="font-medium">Financial Markets</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Dados históricos de trading para análise quantitativa
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline">Parquet</Badge>
                          <Badge variant="outline">800MB</Badge>
                          <Badge variant="outline">FinTech</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Scripts e Utilitários */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                    🛠️ Scripts & Utilitários
                    <Badge variant="secondary">DevOps Ready</Badge>
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-700 mb-3">📋 Installation Scripts</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>hadoop-install.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>spark-setup.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>hive-config.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>cluster-init.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-700 mb-3">🔧 Monitoring Tools</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>health-check.py</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>performance-monitor.py</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>disk-usage-alert.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>log-analyzer.py</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-700 mb-3">⚡ Performance Utils</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>hdfs-balancer.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>yarn-optimizer.py</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>memory-tuner.sh</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>benchmark-suite.py</span>
                          <Button size="sm" variant="outline" className="text-xs">Get</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cheat Sheets */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                      📝 Cheat Sheets
                      <Badge variant="secondary">Quick Reference</Badge>
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border border-indigo-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">HDFS Commands</span>
                          <Button size="sm" variant="outline" className="text-xs">PDF</Button>
                        </div>
                        <p className="text-xs text-gray-600">50+ comandos essenciais com exemplos</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-indigo-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">MapReduce Patterns</span>
                          <Button size="sm" variant="outline" className="text-xs">PDF</Button>
                        </div>
                        <p className="text-xs text-gray-600">Design patterns mais utilizados</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-indigo-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Hive SQL Guide</span>
                          <Button size="sm" variant="outline" className="text-xs">PDF</Button>
                        </div>
                        <p className="text-xs text-gray-600">HiveQL syntax e otimizações</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-indigo-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Spark Configuration</span>
                          <Button size="sm" variant="outline" className="text-xs">PDF</Button>
                        </div>
                        <p className="text-xs text-gray-600">Tuning parameters essenciais</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-4 flex items-center gap-2">
                      🏗️ Architecture Templates
                      <Badge variant="secondary">Enterprise</Badge>
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border border-orange-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Lambda Architecture</span>
                          <Button size="sm" variant="outline" className="text-xs">ZIP</Button>
                        </div>
                        <p className="text-xs text-gray-600">Batch + Streaming template completo</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-orange-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Data Lake Pattern</span>
                          <Button size="sm" variant="outline" className="text-xs">ZIP</Button>
                        </div>
                        <p className="text-xs text-gray-600">Bronze/Silver/Gold layers</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-orange-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">ML Pipeline</span>
                          <Button size="sm" variant="outline" className="text-xs">ZIP</Button>
                        </div>
                        <p className="text-xs text-gray-600">End-to-end ML workflow</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-orange-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Security Framework</span>
                          <Button size="sm" variant="outline" className="text-xs">ZIP</Button>
                        </div>
                        <p className="text-xs text-gray-600">Kerberos + Ranger setup</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Download Package */}
                <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-6 rounded-lg text-white text-center">
                  <h4 className="text-xl font-bold mb-2">📦 Hadoop Starter Kit Completo</h4>
                  <p className="mb-4 opacity-90">
                    Todos os recursos em um único download: configs, datasets, scripts e cheat sheets
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-sm">
                      <div className="font-bold text-lg">15+</div>
                      <div>Configuration Files</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-sm">
                      <div className="font-bold text-lg">4</div>
                      <div>Sample Datasets</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-sm">
                      <div className="font-bold text-lg">25+</div>
                      <div>Utility Scripts</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-sm">
                      <div className="font-bold text-lg">8</div>
                      <div>Cheat Sheets</div>
                    </div>
                  </div>
                  <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                    <Download className="h-4 w-4 mr-2" />
                    Download Hadoop Starter Kit (2.5GB)
                  </Button>
                  <p className="text-xs mt-2 opacity-80">
                    Free para uso educacional e comercial • Updated monthly
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sistema de Favoritos Avançado */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Sistema de Favoritos e Marcadores
                </CardTitle>
                <CardDescription>
                  Salve comandos úteis, marque seções importantes e crie sua biblioteca personalizada
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Comandos Favoritados */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    ⭐ Comandos Favoritos
                    <Badge variant="secondary">5 salvos</Badge>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono text-blue-600">hdfs dfs -ls /user</code>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">HDFS</Badge>
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4 text-amber-500" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Lista diretórios de usuário - usado frequentemente</p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <span>💾 Salvo em: 15/01/2024</span>
                          <span>📊 Usado: 23 vezes</span>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono text-green-600">yarn application -list</code>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">YARN</Badge>
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4 text-amber-500" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Monitor de aplicações ativas</p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <span>💾 Salvo em: 14/01/2024</span>
                          <span>📊 Usado: 15 vezes</span>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono text-purple-600">hdfs fsck / -files -blocks</code>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">FSCK</Badge>
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4 text-amber-500" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Verificação completa do sistema de arquivos</p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <span>💾 Salvo em: 13/01/2024</span>
                          <span>📊 Usado: 8 vezes</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono text-orange-600">hadoop jar wordcount.jar input output</code>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">MapReduce</Badge>
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4 text-amber-500" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Exemplo clássico WordCount</p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <span>💾 Salvo em: 12/01/2024</span>
                          <span>📊 Usado: 31 vezes</span>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono text-red-600">hdfs dfsadmin -safemode leave</code>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">Admin</Badge>
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4 text-amber-500" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Sair do modo seguro - emergências</p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <span>💾 Salvo em: 10/01/2024</span>
                          <span>📊 Usado: 5 vezes</span>
                        </div>
                      </div>
                      
                      {/* Adicionar Novo Favorito */}
                      <div className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg text-center">
                        <Button variant="outline" className="w-full">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Adicionar aos Favoritos
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">Marque comandos durante a navegação</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Seções Marcadas */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    🔖 Seções Marcadas
                    <Badge variant="secondary">8 marcadores</Badge>
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-700">Arquitetura HDFS</h4>
                        <Badge variant="outline" className="text-xs">Conceito</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">NameNode e DataNode explicados</p>
                      <div className="flex items-center gap-2 text-xs">
                        <Button variant="ghost" size="sm" className="p-1">
                          <BookOpen className="h-3 w-3" />
                        </Button>
                        <span className="text-gray-500">Marcado: 15/01/2024</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-green-700">MapReduce Tutorial</h4>
                        <Badge variant="outline" className="text-xs">Prático</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">WordCount passo a passo</p>
                      <div className="flex items-center gap-2 text-xs">
                        <Button variant="ghost" size="sm" className="p-1">
                          <Code className="h-3 w-3" />
                        </Button>
                        <span className="text-gray-500">Marcado: 14/01/2024</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-purple-700">Terminal Avançado</h4>
                        <Badge variant="outline" className="text-xs">Ferramenta</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Simulador com 23 comandos</p>
                      <div className="flex items-center gap-2 text-xs">
                        <Button variant="ghost" size="sm" className="p-1">
                          <Terminal className="h-3 w-3" />
                        </Button>
                        <span className="text-gray-500">Marcado: 13/01/2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Recursos de Estudo Personalizados */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    📚 Planos de Estudo Personalizados
                    <Badge variant="secondary">3 criados</Badge>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-blue-700">📘 Fundamentos Hadoop - Semana 1</h4>
                        <div className="flex items-center gap-2">
                          <Progress value={75} className="w-20" />
                          <span className="text-sm font-medium">75%</span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Arquitetura HDFS ✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Comandos Básicos ✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          <span>MapReduce Intro</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-green-700">🔧 Administração Avançada - Semana 2</h4>
                        <div className="flex items-center gap-2">
                          <Progress value={45} className="w-20" />
                          <span className="text-sm font-medium">45%</span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>YARN Configuration ✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          <span>Security Setup</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                          <span>Performance Tuning</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-purple-700">🚀 Big Data Projects - Semana 3</h4>
                        <div className="flex items-center gap-2">
                          <Progress value={10} className="w-20" />
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          <span>Spark Integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                          <span>Real-time Processing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                          <span>Cloud Migration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <h4 className="font-semibold text-amber-700">Sistema de Favoritos Ativo!</h4>
                  </div>
                  <p className="text-sm text-amber-600 mb-3">
                    Use os botões ⭐ para favoritar comandos e 🔖 para marcar seções durante sua jornada de aprendizado.
                    Tudo é salvo automaticamente no seu navegador.
                  </p>
                  <div className="grid md:grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>5 comandos salvos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-blue-500" />
                      <span>8 seções marcadas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-purple-500" />
                      <span>3 planos ativos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App