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
  ChevronRight
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
                  Terminal Hadoop Interativo
                </CardTitle>
                <CardDescription>
                  Simule comandos Hadoop em um ambiente seguro de aprendizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">🚀 Comandos Disponíveis:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs font-mono">hdfs dfs -ls /</Badge>
                    <Badge variant="outline" className="text-xs font-mono">yarn application -list</Badge>
                    <Badge variant="outline" className="text-xs font-mono">hdfs dfsadmin -report</Badge>
                    <Badge variant="outline" className="text-xs font-mono">start-dfs.sh</Badge>
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
                    <Badge variant="secondary" className="text-xs">Online</Badge>
                  </div>

                  <div className="p-4 h-80 overflow-y-auto font-mono text-sm bg-gray-900">
                    <div className="text-blue-300 mb-2">$ Hadoop Terminal Simulator - Digite "help" para comandos disponíveis</div>
                    <div className="text-green-300 mb-2">$ Sistema iniciado com sucesso!</div>
                    <div className="text-green-400 font-bold mb-1">$ hdfs dfs -ls /</div>
                    <div className="text-gray-300 mb-1">Found 4 items</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup   0 2024-01-15 10:30 /data</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup   0 2024-01-15 09:15 /input</div>
                    <div className="text-gray-300 mb-1">drwxr-xr-x   - hadoop supergroup   0 2024-01-15 11:45 /output</div>
                    <div className="text-gray-300 mb-3">drwxr-xr-x   - hadoop supergroup   0 2024-01-15 08:00 /user</div>
                    
                    <div className="text-green-400 font-bold mb-1">$ yarn application -list</div>
                    <div className="text-gray-300 mb-1">Total applications: 2</div>
                    <div className="text-gray-300 mb-1">Application-Id          Name        State</div>
                    <div className="text-gray-300 mb-1">app_1642234567890_0001  WordCount   RUNNING</div>
                    <div className="text-gray-300 mb-3">app_1642234567890_0002  TeraSort    ACCEPTED</div>
                    
                    <div className="text-green-400 font-bold mb-1">$ hdfs dfsadmin -report</div>
                    <div className="text-gray-300 mb-1">Configured Capacity: 1 TB</div>
                    <div className="text-gray-300 mb-1">Present Capacity: 900 GB</div>
                    <div className="text-gray-300 mb-1">DFS Remaining: 500 GB</div>
                    <div className="text-gray-300 mb-1">DFS Used: 400 GB (44.44%)</div>
                    <div className="text-gray-300 mb-3">Live datanodes: 3</div>
                    
                    <div className="text-green-400 animate-pulse">$ _</div>
                  </div>

                  <div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-mono">$</span>
                      <div className="flex-1 bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono text-sm">
                        Digite um comando Hadoop...
                      </div>
                      <Button size="sm" disabled className="px-3 opacity-50">
                        <Terminal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>💡 <strong>Demo:</strong> Terminal interativo será implementado em breve</p>
                  <p>🎯 <strong>Objetivo:</strong> Pratique comandos Hadoop sem instalar nada!</p>
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