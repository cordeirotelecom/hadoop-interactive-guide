import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  Play, 
  Pause,
  RotateCcw,
  BookOpen,
  Terminal,
  Code,
  Database,
  Zap,
  Target,
  Users,
  Award,
  AlertTriangle,
  Info,
  Lightbulb,
  FileText,
  Download,
  Copy,
  Eye,
  Settings,
  Monitor
} from 'lucide-react'

const ClassroomGuide = () => {
  const [currentLesson, setCurrentLesson] = useState(1)
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [lessonProgress, setLessonProgress] = useState({})
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timer])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const lessons = {
    1: {
      title: "Aula 1: Introdução ao Big Data e Hadoop",
      duration: "90 minutos",
      objectives: [
        "Compreender o conceito de Big Data",
        "Conhecer a história e evolução do Hadoop",
        "Identificar os componentes principais",
        "Executar primeiros comandos básicos"
      ],
      materials: [
        "Computador com acesso à internet",
        "Navegador web atualizado",
        "Bloco de notas para anotações",
        "Esta plataforma interativa"
      ],
      steps: [
        {
          id: 1,
          title: "Abertura e Apresentação",
          duration: "10 min",
          type: "theory",
          description: "Apresentação do curso e objetivos da aula",
          instructions: [
            "Acesse a aba 'Visão Geral' da plataforma",
            "Leia a introdução sobre Big Data",
            "Anote 3 exemplos de Big Data do seu cotidiano",
            "Discuta com o colega ao lado"
          ],
          commands: [],
          expected: "Compreensão básica do conceito de Big Data",
          tips: "Pense em redes sociais, streaming, e-commerce"
        },
        {
          id: 2,
          title: "Explorando os 5 V's do Big Data",
          duration: "15 min",
          type: "interactive",
          description: "Análise detalhada das características do Big Data",
          instructions: [
            "Vá para a aba 'Fundamentos'",
            "Clique em cada um dos 5 V's",
            "Para cada V, anote um exemplo real",
            "Complete o quiz interativo"
          ],
          commands: [],
          expected: "Identificação clara dos 5 V's com exemplos",
          tips: "Volume = tamanho, Velocidade = tempo, Variedade = tipos"
        },
        {
          id: 3,
          title: "História do Hadoop",
          duration: "10 min",
          type: "theory",
          description: "Timeline e evolução do Apache Hadoop",
          instructions: [
            "Explore a timeline interativa",
            "Clique em cada marco histórico",
            "Anote as datas importantes",
            "Identifique as empresas pioneiras"
          ],
          commands: [],
          expected: "Conhecimento da evolução histórica",
          tips: "Google MapReduce (2004) → Hadoop (2006) → Ecossistema"
        },
        {
          id: 4,
          title: "Arquitetura do Hadoop",
          duration: "20 min",
          type: "interactive",
          description: "Exploração dos componentes principais",
          instructions: [
            "Acesse a aba 'Arquitetura'",
            "Clique em cada componente (HDFS, YARN, MapReduce)",
            "Observe as animações de fluxo de dados",
            "Anote a função de cada componente"
          ],
          commands: [],
          expected: "Compreensão da arquitetura distribuída",
          tips: "HDFS = storage, YARN = recursos, MapReduce = processamento"
        },
        {
          id: 5,
          title: "Primeiro Contato com Terminal",
          duration: "25 min",
          type: "hands-on",
          description: "Execução de comandos básicos do Hadoop",
          instructions: [
            "Vá para a aba 'Prática'",
            "Digite 'help' para ver comandos disponíveis",
            "Execute cada comando da lista abaixo",
            "Anote os resultados de cada comando"
          ],
          commands: [
            "help",
            "hdfs version",
            "hdfs dfs -ls /",
            "hdfs dfs -mkdir /user",
            "hdfs dfs -mkdir /user/student",
            "hdfs dfs -ls /user"
          ],
          expected: "Familiarização com comandos HDFS básicos",
          tips: "Use 'help comando' para detalhes específicos"
        },
        {
          id: 6,
          title: "Exercício Prático: Manipulação de Arquivos",
          duration: "15 min",
          type: "hands-on",
          description: "Criação e manipulação de arquivos no HDFS",
          instructions: [
            "Execute os comandos abaixo em sequência",
            "Observe o resultado de cada operação",
            "Anote qualquer erro ou mensagem",
            "Discuta os resultados com o professor"
          ],
          commands: [
            "hdfs dfs -put /etc/hosts /user/student/",
            "hdfs dfs -ls /user/student/",
            "hdfs dfs -cat /user/student/hosts",
            "hdfs dfs -cp /user/student/hosts /user/student/hosts_backup",
            "hdfs dfs -rm /user/student/hosts",
            "hdfs dfs -ls /user/student/"
          ],
          expected: "Manipulação básica de arquivos no HDFS",
          tips: "put = upload, cat = visualizar, cp = copiar, rm = remover"
        },
        {
          id: 7,
          title: "Wrap-up e Próximos Passos",
          duration: "5 min",
          type: "theory",
          description: "Revisão da aula e preparação para próxima",
          instructions: [
            "Revise os conceitos aprendidos",
            "Anote 3 dúvidas para próxima aula",
            "Acesse a aba 'Carreira' para ver oportunidades",
            "Planeje estudos para casa"
          ],
          commands: [],
          expected: "Consolidação do aprendizado",
          tips: "Pratique os comandos em casa usando a plataforma"
        }
      ]
    },
    2: {
      title: "Aula 2: HDFS e Armazenamento Distribuído",
      duration: "90 minutos",
      objectives: [
        "Compreender a arquitetura do HDFS",
        "Executar operações avançadas de arquivo",
        "Entender replicação e tolerância a falhas",
        "Monitorar o cluster HDFS"
      ],
      materials: [
        "Conhecimento da Aula 1",
        "Acesso à plataforma",
        "Arquivo de dados para upload",
        "Calculadora para exercícios"
      ],
      steps: [
        {
          id: 1,
          title: "Revisão e Aquecimento",
          duration: "10 min",
          type: "review",
          description: "Revisão dos conceitos da aula anterior",
          instructions: [
            "Execute os comandos básicos da aula passada",
            "Verifique se lembra dos componentes principais",
            "Tire dúvidas com o professor",
            "Prepare-se para conteúdo avançado"
          ],
          commands: [
            "hdfs version",
            "hdfs dfs -ls /",
            "hdfs dfs -ls /user/student"
          ],
          expected: "Relembrar comandos básicos",
          tips: "Se esqueceu algo, revise a aba Fundamentos"
        },
        {
          id: 2,
          title: "Arquitetura HDFS Detalhada",
          duration: "20 min",
          type: "theory",
          description: "Estudo aprofundado do sistema de arquivos",
          instructions: [
            "Acesse a seção HDFS na aba Fundamentos",
            "Estude NameNode vs DataNode",
            "Compreenda o processo de replicação",
            "Analise o diagrama de blocos"
          ],
          commands: [],
          expected: "Compreensão da arquitetura distribuída",
          tips: "NameNode = metadados, DataNode = dados reais"
        },
        {
          id: 3,
          title: "Comandos Avançados de Arquivo",
          duration: "25 min",
          type: "hands-on",
          description: "Operações complexas no HDFS",
          instructions: [
            "Execute cada comando e observe o resultado",
            "Anote o tamanho dos arquivos",
            "Observe as permissões",
            "Teste diferentes opções"
          ],
          commands: [
            "hdfs dfs -du -h /user/student",
            "hdfs dfs -df -h",
            "hdfs dfs -chmod 755 /user/student",
            "hdfs dfs -chown student:hadoop /user/student",
            "hdfs dfs -setrep 2 /user/student/hosts_backup",
            "hdfs dfs -stat %r /user/student/hosts_backup"
          ],
          expected: "Domínio de operações avançadas",
          tips: "du = disk usage, df = disk free, setrep = set replication"
        },
        {
          id: 4,
          title: "Upload e Processamento de Dados",
          duration: "20 min",
          type: "hands-on",
          description: "Trabalhando com arquivos de dados reais",
          instructions: [
            "Crie um arquivo de dados localmente",
            "Faça upload para o HDFS",
            "Analise o arquivo no cluster",
            "Execute operações de análise"
          ],
          commands: [
            "hdfs dfs -mkdir /user/student/data",
            "hdfs dfs -put dados.txt /user/student/data/",
            "hdfs dfs -ls -h /user/student/data/",
            "hdfs dfs -tail /user/student/data/dados.txt",
            "hdfs dfs -head /user/student/data/dados.txt"
          ],
          expected: "Capacidade de trabalhar com dados reais",
          tips: "Use tail e head para visualizar grandes arquivos"
        },
        {
          id: 5,
          title: "Monitoramento e Saúde do Cluster",
          duration: "10 min",
          type: "monitoring",
          description: "Verificação do status do sistema",
          instructions: [
            "Execute comandos de monitoramento",
            "Interprete as métricas",
            "Identifique possíveis problemas",
            "Anote os valores importantes"
          ],
          commands: [
            "hdfs dfsadmin -report",
            "hdfs fsck /user/student -files -blocks",
            "hdfs dfs -df -h",
            "yarn node -list"
          ],
          expected: "Capacidade de monitorar o cluster",
          tips: "fsck = file system check, dfsadmin = admin commands"
        },
        {
          id: 6,
          title: "Exercício: Cálculo de Replicação",
          duration: "10 min",
          type: "exercise",
          description: "Exercício prático de cálculo",
          instructions: [
            "Arquivo de 1GB com replicação 3",
            "Calcule espaço total usado",
            "Calcule tolerância a falhas",
            "Discuta trade-offs"
          ],
          commands: [],
          expected: "Compreensão de replicação e espaço",
          tips: "Replicação 3 = 3x espaço, tolera 2 falhas"
        }
      ]
    },
    3: {
      title: "Aula 3: MapReduce e Processamento Distribuído",
      duration: "90 minutos",
      objectives: [
        "Compreender o paradigma MapReduce",
        "Executar jobs MapReduce",
        "Analisar performance e logs",
        "Criar pipeline de processamento"
      ],
      materials: [
        "Conhecimento das Aulas 1-2",
        "Arquivo de dados para processamento",
        "Acesso ao simulador MapReduce",
        "Papel para desenhar fluxos"
      ],
      steps: [
        {
          id: 1,
          title: "Conceitos MapReduce",
          duration: "15 min",
          type: "theory",
          description: "Fundamentos do paradigma MapReduce",
          instructions: [
            "Acesse a aba 'Exemplos'",
            "Estude o diagrama MapReduce",
            "Compreenda Map vs Reduce",
            "Desenhe o fluxo no papel"
          ],
          commands: [],
          expected: "Compreensão do paradigma",
          tips: "Map = transformar, Reduce = agregar"
        },
        {
          id: 2,
          title: "Demonstração WordCount",
          duration: "20 min",
          type: "interactive",
          description: "Execução do exemplo clássico",
          instructions: [
            "Use o simulador WordCount",
            "Digite um texto de exemplo",
            "Execute passo a passo",
            "Observe cada fase"
          ],
          commands: [],
          expected: "Visualização do processo completo",
          tips: "Observe como palavras são mapeadas e contadas"
        },
        {
          id: 3,
          title: "Execução de Jobs MapReduce",
          duration: "25 min",
          type: "hands-on",
          description: "Comandos para executar jobs",
          instructions: [
            "Execute os comandos MapReduce",
            "Monitore o progresso",
            "Analise os resultados",
            "Verifique logs de execução"
          ],
          commands: [
            "yarn jar hadoop-examples.jar wordcount input output",
            "yarn application -list",
            "yarn application -status application_id",
            "hdfs dfs -cat output/part-r-00000",
            "yarn logs -applicationId application_id"
          ],
          expected: "Execução bem-sucedida de jobs",
          tips: "Use yarn para monitorar aplicações"
        },
        {
          id: 4,
          title: "Análise de Performance",
          duration: "15 min",
          type: "analysis",
          description: "Métricas e otimização",
          instructions: [
            "Analise métricas do job",
            "Identifique gargalos",
            "Compare diferentes configurações",
            "Anote tempos de execução"
          ],
          commands: [
            "yarn application -status application_id",
            "mapred job -history output",
            "hdfs dfs -du -h output/"
          ],
          expected: "Capacidade de análise de performance",
          tips: "Observe map time vs reduce time"
        },
        {
          id: 5,
          title: "Pipeline de Processamento",
          duration: "15 min",
          type: "hands-on",
          description: "Criação de pipeline completo",
          instructions: [
            "Combine múltiplos jobs",
            "Crie pipeline de dados",
            "Teste com dados reais",
            "Documente o processo"
          ],
          commands: [
            "hdfs dfs -mkdir /pipeline",
            "hdfs dfs -cp input /pipeline/step1",
            "yarn jar hadoop-examples.jar wordcount /pipeline/step1 /pipeline/step2",
            "yarn jar hadoop-examples.jar sort /pipeline/step2 /pipeline/step3"
          ],
          expected: "Pipeline funcional de processamento",
          tips: "Output de um job = input do próximo"
        }
      ]
    }
  }

  const completeStep = (stepId) => {
    setCompletedSteps(prev => new Set([...prev, stepId]))
    const lesson = lessons[currentLesson]
    const newProgress = ((completedSteps.size + 1) / lesson.steps.length) * 100
    setLessonProgress(prev => ({
      ...prev,
      [currentLesson]: newProgress
    }))
  }

  const startTimer = () => setIsTimerRunning(true)
  const pauseTimer = () => setIsTimerRunning(false)
  const resetTimer = () => {
    setTimer(0)
    setIsTimerRunning(false)
  }

  const currentLessonData = lessons[currentLesson]
  const currentStepData = currentLessonData.steps[currentStep]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Roteiro de Aula - Hadoop na Prática
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Guia passo a passo para professores e alunos seguirem em sala de aula com exercícios práticos e simulações
        </p>
      </div>

      {/* Timer e Controles */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">Cronômetro da Aula</CardTitle>
              <CardDescription>Controle o tempo de cada atividade</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-600">{formatTime(timer)}</div>
              <div className="flex gap-2 mt-2">
                <Button onClick={startTimer} size="sm" variant="outline">
                  <Play className="h-4 w-4" />
                </Button>
                <Button onClick={pauseTimer} size="sm" variant="outline">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button onClick={resetTimer} size="sm" variant="outline">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="lessons" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lessons" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Aulas
          </TabsTrigger>
          <TabsTrigger value="current" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            Aula Atual
          </TabsTrigger>
          <TabsTrigger value="exercises" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Exercícios
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Material
          </TabsTrigger>
        </TabsList>

        {/* Lesson Overview */}
        <TabsContent value="lessons" className="space-y-6">
          <h2 className="text-2xl font-bold">Plano de Aulas Completo</h2>
          
          <div className="grid gap-6">
            {Object.entries(lessons).map(([lessonId, lesson]) => (
              <Card key={lessonId} className={currentLesson === parseInt(lessonId) ? 'ring-2 ring-blue-500' : ''}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{lesson.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4" />
                        {lesson.duration}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{lesson.steps.length} passos</Badge>
                      <Button 
                        onClick={() => setCurrentLesson(parseInt(lessonId))}
                        variant={currentLesson === parseInt(lessonId) ? "default" : "outline"}
                      >
                        {currentLesson === parseInt(lessonId) ? "Atual" : "Selecionar"}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Objetivos de Aprendizado:</h4>
                      <ul className="space-y-1">
                        {lesson.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Target className="h-3 w-3 text-green-600" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Materiais Necessários:</h4>
                      <ul className="space-y-1">
                        {lesson.materials.map((material, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-blue-600" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {lessonProgress[lessonId] && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progresso da Aula</span>
                        <span className="text-sm text-gray-600">{Math.round(lessonProgress[lessonId])}%</span>
                      </div>
                      <Progress value={lessonProgress[lessonId]} />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Current Lesson */}
        <TabsContent value="current" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{currentLessonData.title}</h2>
            <div className="flex gap-2">
              <Button 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                variant="outline"
              >
                Anterior
              </Button>
              <Button 
                onClick={() => setCurrentStep(Math.min(currentLessonData.steps.length - 1, currentStep + 1))}
                disabled={currentStep === currentLessonData.steps.length - 1}
              >
                Próximo
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {currentLessonData.steps.map((step, index) => (
              <Button
                key={step.id}
                variant={currentStep === index ? "default" : completedSteps.has(step.id) ? "secondary" : "outline"}
                onClick={() => setCurrentStep(index)}
                className="h-auto p-3 flex flex-col items-start"
              >
                <div className="flex items-center gap-2 mb-1">
                  {completedSteps.has(step.id) ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <span className="text-sm font-bold">{step.id}</span>
                  )}
                  <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                </div>
                <div className="text-xs text-left">{step.title}</div>
              </Button>
            ))}
          </div>

          {currentStepData && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {currentStepData.type === 'theory' && <BookOpen className="h-5 w-5" />}
                      {currentStepData.type === 'hands-on' && <Terminal className="h-5 w-5" />}
                      {currentStepData.type === 'interactive' && <Monitor className="h-5 w-5" />}
                      {currentStepData.type === 'exercise' && <Code className="h-5 w-5" />}
                      Passo {currentStepData.id}: {currentStepData.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {currentStepData.duration}
                      </span>
                      <Badge variant="outline">{currentStepData.type}</Badge>
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={() => completeStep(currentStepData.id)}
                    disabled={completedSteps.has(currentStepData.id)}
                    variant={completedSteps.has(currentStepData.id) ? "secondary" : "default"}
                  >
                    {completedSteps.has(currentStepData.id) ? "Concluído" : "Marcar como Concluído"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Descrição:</h4>
                    <p className="text-gray-600">{currentStepData.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Instruções para o Aluno:</h4>
                    <ol className="space-y-2">
                      {currentStepData.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            {idx + 1}
                          </span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {currentStepData.commands.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Comandos para Executar:</h4>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                        {currentStepData.commands.map((command, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-gray-500">$</span>
                            <span>{command}</span>
                            <Button size="sm" variant="ghost" className="ml-auto text-gray-400 hover:text-white">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-green-600" />
                        Resultado Esperado:
                      </h4>
                      <p className="text-sm text-green-800">{currentStepData.expected}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-blue-600" />
                        Dicas:
                      </h4>
                      <p className="text-sm text-blue-800">{currentStepData.tips}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Exercises */}
        <TabsContent value="exercises" className="space-y-6">
          <h2 className="text-2xl font-bold">Exercícios Práticos</h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Exercício 1: WordCount Personalizado</CardTitle>
                <CardDescription>Crie seu próprio exemplo de contagem de palavras</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instruções:</h4>
                    <ol className="space-y-1 text-sm">
                      <li>1. Vá para a aba "Exemplos"</li>
                      <li>2. Digite um texto sobre sua cidade natal</li>
                      <li>3. Execute o WordCount</li>
                      <li>4. Anote as 5 palavras mais frequentes</li>
                      <li>5. Compare com um colega</li>
                    </ol>
                  </div>
                  <Button className="w-full">Ir para Simulador WordCount</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exercício 2: Análise de Logs</CardTitle>
                <CardDescription>Processe logs de servidor web</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cenário:</h4>
                    <p className="text-sm text-gray-600">
                      Você é um engenheiro de dados e precisa analisar logs de acesso de um site de e-commerce
                    </p>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    hdfs dfs -put access.log /data/logs/<br/>
                    yarn jar hadoop-examples.jar grep /data/logs /output "ERROR"
                  </div>
                  <Button className="w-full">Executar no Terminal</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exercício 3: Pipeline de Dados</CardTitle>
                <CardDescription>Crie um pipeline completo de processamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Desafio:</h4>
                    <p className="text-sm text-gray-600">
                      Processe dados de vendas: limpe → agregue → ordene → exporte
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-blue-100 p-2 rounded text-sm">Raw Data</div>
                    <div className="bg-green-100 p-2 rounded text-sm">Clean</div>
                    <div className="bg-yellow-100 p-2 rounded text-sm">Aggregate</div>
                    <div className="bg-purple-100 p-2 rounded text-sm">Export</div>
                  </div>
                  <Button className="w-full">Iniciar Pipeline</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Resources */}
        <TabsContent value="resources" className="space-y-6">
          <h2 className="text-2xl font-bold">Material de Apoio</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Para o Professor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Slides da Apresentação
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Plano de Aula Detalhado
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Code className="h-4 w-4 mr-2" />
                    Scripts de Exemplo
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Award className="h-4 w-4 mr-2" />
                    Rubrica de Avaliação
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Para o Aluno</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Apostila de Comandos
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Terminal className="h-4 w-4 mr-2" />
                    Cheat Sheet HDFS
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Database className="h-4 w-4 mr-2" />
                    Datasets de Exemplo
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Fórum de Dúvidas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cronograma Sugerido</CardTitle>
              <CardDescription>Planejamento para curso de 8 semanas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-4 text-sm font-semibold border-b pb-2">
                  <div>Semana</div>
                  <div>Tópico</div>
                  <div>Prática</div>
                  <div>Avaliação</div>
                </div>
                {[
                  ["1-2", "Fundamentos e HDFS", "Comandos básicos", "Quiz teórico"],
                  ["3-4", "MapReduce", "WordCount e jobs", "Projeto prático"],
                  ["5-6", "Ecossistema", "Hive, Pig, Spark", "Análise de dados"],
                  ["7-8", "Projeto Final", "Pipeline completo", "Apresentação"]
                ].map(([week, topic, practice, assessment], idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-4 text-sm py-2 border-b">
                    <div className="font-medium">{week}</div>
                    <div>{topic}</div>
                    <div className="text-blue-600">{practice}</div>
                    <div className="text-green-600">{assessment}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ClassroomGuide
