import { useState } from 'react'
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
  Users
} from 'lucide-react'
import HadoopArchitecture from './components/HadoopArchitecture.jsx'
import MapReduceDemo from './components/MapReduceDemo.jsx'
import TerminalSimulator from './components/TerminalSimulator.jsx'
import ModernEcosystem from './components/ModernEcosystem.jsx'
import RealWorldCases from './components/RealWorldCases.jsx'
import TechComparisons from './components/TechComparisons.jsx'
import PythonDataProcessing from './components/PythonDataProcessing.jsx'
import CareerCertifications from './components/CareerCertifications.jsx'
import PracticalLabs from './components/PracticalLabs.jsx'
import HadoopFundamentals from './components/HadoopFundamentals.jsx'
import FunctionalLabs from './components/FunctionalLabs.jsx'
import PerformanceMonitoring from './components/PerformanceMonitoring.jsx'
import SecurityGovernance from './components/SecurityGovernance.jsx'
import AdvancedProjects from './components/AdvancedProjects.jsx'
import CloudContainerization from './components/CloudContainerization.jsx'
import ResourcesCommunity from './components/ResourcesCommunity.jsx'
import ClassroomGuide from './components/ClassroomGuide.jsx'
import InteractiveExercises from './components/InteractiveExercises.jsx'

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
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Apache Hadoop
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Guia Interativo Completo
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Big Data Framework
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1 h-auto">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <BookOpen className="h-4 w-4" />
              <span className="text-center leading-tight">Visão Geral</span>
            </TabsTrigger>
            <TabsTrigger value="fundamentals" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Brain className="h-4 w-4" />
              <span className="text-center leading-tight">Fundamentos</span>
            </TabsTrigger>
            <TabsTrigger value="architecture" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Settings className="h-4 w-4" />
              <span className="text-center leading-tight">Arquitetura</span>
            </TabsTrigger>
            <TabsTrigger value="installation" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Download className="h-4 w-4" />
              <span className="text-center leading-tight">Instalação</span>
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Code className="h-4 w-4" />
              <span className="text-center leading-tight">Exemplos</span>
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Terminal className="h-4 w-4" />
              <span className="text-center leading-tight">Prática</span>
            </TabsTrigger>
            <TabsTrigger value="python" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <FileText className="h-4 w-4" />
              <span className="text-center leading-tight">Python</span>
            </TabsTrigger>
            <TabsTrigger value="labs" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Beaker className="h-4 w-4" />
              <span className="text-center leading-tight">Labs</span>
            </TabsTrigger>
            <TabsTrigger value="career" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <GraduationCap className="h-4 w-4" />
              <span className="text-center leading-tight">Carreira</span>
            </TabsTrigger>
            <TabsTrigger value="ecosystem" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Globe className="h-4 w-4" />
              <span className="text-center leading-tight">Ecossistema</span>
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Building2 className="h-4 w-4" />
              <span className="text-center leading-tight">Casos Reais</span>
            </TabsTrigger>
            <TabsTrigger value="comparisons" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <BarChart3 className="h-4 w-4" />
              <span className="text-center leading-tight">Comparações</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Activity className="h-4 w-4" />
              <span className="text-center leading-tight">Performance</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Shield className="h-4 w-4" />
              <span className="text-center leading-tight">Segurança</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Rocket className="h-4 w-4" />
              <span className="text-center leading-tight">Projetos</span>
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Cloud className="h-4 w-4" />
              <span className="text-center leading-tight">Cloud</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Users className="h-4 w-4" />
              <span className="text-center leading-tight">Recursos</span>
            </TabsTrigger>
            <TabsTrigger value="classroom" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <GraduationCap className="h-4 w-4" />
              <span className="text-center leading-tight">Roteiro</span>
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex flex-col items-center gap-1 text-xs p-2 h-auto min-h-[60px]">
              <Brain className="h-4 w-4" />
              <span className="text-center leading-tight">Exercícios</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Zap className="h-8 w-8" />
                  O que é Apache Hadoop?
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Framework de código aberto para processamento distribuído de Big Data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  O Apache Hadoop revolucionou a forma como lidamos com grandes volumes de dados. 
                  É uma solução robusta, econômica e escalável que permite o processamento distribuído 
                  de conjuntos de dados massivos em clusters de computadores comuns.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    Escalabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Adicione facilmente novos nós ao cluster para crescer junto com seus dados.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Confiabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tolerância a falhas automática com replicação de dados em múltiplos nós.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Processamento paralelo que aproveita ao máximo os recursos do cluster.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Por que usar Hadoop?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Vantagens</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Custo-efetivo para grandes volumes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Escalabilidade horizontal
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Tolerância a falhas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Flexibilidade de dados
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Casos de Uso</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Análise de logs de servidores web</li>
                      <li>• Processamento de dados de sensores IoT</li>
                      <li>• Data warehousing e ETL</li>
                      <li>• Machine Learning em grandes datasets</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture">
            <HadoopArchitecture />
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
            <MapReduceDemo />
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice">
            <TerminalSimulator />
          </TabsContent>

          {/* Ecosystem Tab */}
          <TabsContent value="ecosystem">
            <ModernEcosystem />
          </TabsContent>

          {/* Real World Cases Tab */}
          <TabsContent value="cases">
            <RealWorldCases />
          </TabsContent>

          {/* Python Data Processing Tab */}
          <TabsContent value="python">
            <PythonDataProcessing />
          </TabsContent>

          {/* Fundamentals Tab */}
          <TabsContent value="fundamentals">
            <HadoopFundamentals />
          </TabsContent>

          {/* Practical Labs Tab */}
          <TabsContent value="labs">
            <FunctionalLabs />
          </TabsContent>

          {/* Career and Certifications Tab */}
          <TabsContent value="career">
            <CareerCertifications />
          </TabsContent>

                {/* Tech Comparisons Tab */}
          <TabsContent value="comparisons">
            <TechComparisons />
          </TabsContent>

          {/* Performance Monitoring Tab */}
          <TabsContent value="performance">
            <PerformanceMonitoring />
          </TabsContent>

          {/* Security and Governance Tab */}
          <TabsContent value="security">
            <SecurityGovernance />
          </TabsContent>

          {/* Advanced Projects Tab */}
          <TabsContent value="projects">
            <AdvancedProjects />
          </TabsContent>

          {/* Cloud and Containerization Tab */}
          <TabsContent value="cloud">
            <CloudContainerization />
          </TabsContent>

          {/* Resources and Community Tab */}
          <TabsContent value="resources">
            <ResourcesCommunity />
          </TabsContent>

          {/* Classroom Guide Tab */}
          <TabsContent value="classroom">
            <ClassroomGuide />
          </TabsContent>

          {/* Interactive Exercises Tab */}
          <TabsContent value="exercises">
            <InteractiveExercises />
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
