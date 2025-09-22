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
  DollarSign
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
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 h-auto overflow-x-auto p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 text-xs p-3 h-auto min-h-[70px] rounded-lg">
              <BookOpen className="h-5 w-5 flex-shrink-0" />
              <span className="text-center leading-tight text-[10px] sm:text-xs font-medium">Visão Geral</span>
            </TabsTrigger>
          </TabsList>

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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App