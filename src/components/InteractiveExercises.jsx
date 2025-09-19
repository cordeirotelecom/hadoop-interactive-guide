import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Play, 
  CheckCircle, 
  XCircle,
  RotateCcw,
  Lightbulb,
  Target,
  Trophy,
  Star,
  Clock,
  Code,
  Database,
  Terminal,
  FileText,
  BarChart3,
  Zap,
  Users,
  Award,
  Brain,
  Rocket,
  Eye,
  Copy,
  Download
} from 'lucide-react'

const InteractiveExercises = () => {
  const [currentExercise, setCurrentExercise] = useState('basic-commands')
  const [exerciseProgress, setExerciseProgress] = useState({})
  const [userAnswers, setUserAnswers] = useState({})
  const [showHints, setShowHints] = useState({})
  const [completedExercises, setCompletedExercises] = useState(new Set())
  const [score, setScore] = useState(0)
  const [timeSpent, setTimeSpent] = useState({})

  const exercises = {
    'basic-commands': {
      title: "Comandos Básicos HDFS",
      difficulty: "Iniciante",
      estimatedTime: "15 min",
      points: 100,
      description: "Aprenda os comandos fundamentais do HDFS através de exercícios práticos",
      icon: <Terminal className="h-5 w-5" />,
      questions: [
        {
          id: 1,
          type: "command",
          question: "Como listar o conteúdo do diretório raiz do HDFS?",
          options: [
            "hdfs dfs -ls /",
            "hdfs ls /",
            "hadoop fs -list /",
            "hdfs list /"
          ],
          correct: 0,
          explanation: "O comando 'hdfs dfs -ls /' lista o conteúdo do diretório raiz. O prefixo 'dfs' indica operações no sistema de arquivos distribuído.",
          hint: "Lembre-se que HDFS usa 'dfs' para operações de sistema de arquivos"
        },
        {
          id: 2,
          type: "command",
          question: "Qual comando cria um diretório no HDFS?",
          options: [
            "hdfs dfs -mkdir /novo-diretorio",
            "hdfs create-dir /novo-diretorio",
            "hadoop mkdir /novo-diretorio",
            "hdfs dfs -create /novo-diretorio"
          ],
          correct: 0,
          explanation: "O comando 'mkdir' (make directory) é usado para criar diretórios, similar ao Linux.",
          hint: "É similar ao comando mkdir do Linux"
        },
        {
          id: 3,
          type: "scenario",
          question: "Você precisa copiar um arquivo local 'dados.txt' para o HDFS no diretório '/user/student/'. Qual comando usar?",
          options: [
            "hdfs dfs -put dados.txt /user/student/",
            "hdfs dfs -copy dados.txt /user/student/",
            "hdfs dfs -upload dados.txt /user/student/",
            "hdfs dfs -move dados.txt /user/student/"
          ],
          correct: 0,
          explanation: "O comando 'put' copia arquivos do sistema local para o HDFS.",
          hint: "Pense em 'put' como 'colocar' o arquivo no HDFS"
        },
        {
          id: 4,
          type: "command",
          question: "Como visualizar o conteúdo de um arquivo no HDFS?",
          options: [
            "hdfs dfs -cat /caminho/arquivo.txt",
            "hdfs dfs -view /caminho/arquivo.txt",
            "hdfs dfs -show /caminho/arquivo.txt",
            "hdfs dfs -read /caminho/arquivo.txt"
          ],
          correct: 0,
          explanation: "O comando 'cat' (concatenate) exibe o conteúdo completo do arquivo.",
          hint: "É o mesmo comando 'cat' do Linux"
        },
        {
          id: 5,
          type: "scenario",
          question: "Você quer ver apenas as últimas 10 linhas de um arquivo grande. Qual comando usar?",
          options: [
            "hdfs dfs -tail /caminho/arquivo.txt",
            "hdfs dfs -end /caminho/arquivo.txt",
            "hdfs dfs -last /caminho/arquivo.txt",
            "hdfs dfs -bottom /caminho/arquivo.txt"
          ],
          correct: 0,
          explanation: "O comando 'tail' mostra as últimas linhas de um arquivo, útil para arquivos grandes.",
          hint: "Pense na 'cauda' (tail) do arquivo"
        }
      ]
    },
    'mapreduce-concepts': {
      title: "Conceitos MapReduce",
      difficulty: "Intermediário",
      estimatedTime: "20 min",
      points: 150,
      description: "Teste seu entendimento sobre o paradigma MapReduce",
      icon: <Code className="h-5 w-5" />,
      questions: [
        {
          id: 1,
          type: "concept",
          question: "Qual é a principal função da fase Map no MapReduce?",
          options: [
            "Transformar dados de entrada em pares chave-valor",
            "Agregar resultados finais",
            "Ordenar os dados",
            "Distribuir dados pelos nós"
          ],
          correct: 0,
          explanation: "A fase Map transforma dados de entrada em pares chave-valor intermediários.",
          hint: "Map = transformar/mapear dados"
        },
        {
          id: 2,
          type: "concept",
          question: "O que acontece na fase Shuffle do MapReduce?",
          options: [
            "Dados são agrupados por chave e enviados aos reducers",
            "Dados são embaralhados aleatoriamente",
            "Arquivos são reorganizados no HDFS",
            "Mappers são redistribuídos"
          ],
          correct: 0,
          explanation: "Shuffle agrupa dados por chave e os distribui para os reducers apropriados.",
          hint: "Shuffle = agrupar e distribuir por chave"
        },
        {
          id: 3,
          type: "scenario",
          question: "No WordCount, se a entrada é 'hadoop spark hadoop', qual seria a saída da fase Map?",
          options: [
            "(hadoop,1), (spark,1), (hadoop,1)",
            "(hadoop,2), (spark,1)",
            "hadoop=2, spark=1",
            "(hadoop spark hadoop, 3)"
          ],
          correct: 0,
          explanation: "Cada palavra é mapeada para o par (palavra, 1), independentemente de repetições.",
          hint: "Map processa cada palavra individualmente"
        },
        {
          id: 4,
          type: "concept",
          question: "Qual é a vantagem principal do paradigma MapReduce?",
          options: [
            "Processamento paralelo e distribuído",
            "Interface gráfica amigável",
            "Baixo consumo de memória",
            "Processamento em tempo real"
          ],
          correct: 0,
          explanation: "MapReduce permite processar grandes volumes de dados em paralelo através de múltiplos nós.",
          hint: "Pense em 'dividir para conquistar'"
        },
        {
          id: 5,
          type: "scenario",
          question: "Quantos reducers você usaria para processar 1TB de dados com saída de 100MB?",
          options: [
            "1-2 reducers",
            "10-20 reducers",
            "100-200 reducers",
            "1000+ reducers"
          ],
          correct: 0,
          explanation: "Para saída pequena (100MB), poucos reducers são suficientes. Muitos reducers criariam overhead desnecessário.",
          hint: "Considere o tamanho da saída, não da entrada"
        }
      ]
    },
    'architecture-design': {
      title: "Arquitetura e Design",
      difficulty: "Avançado",
      estimatedTime: "25 min",
      points: 200,
      description: "Desafios sobre arquitetura de sistemas Hadoop",
      icon: <Database className="h-5 w-5" />,
      questions: [
        {
          id: 1,
          type: "design",
          question: "Para um cluster com 100 nós, qual seria uma configuração adequada de replicação?",
          options: [
            "Replicação 3",
            "Replicação 5",
            "Replicação 10",
            "Replicação 1"
          ],
          correct: 0,
          explanation: "Replicação 3 é o padrão, oferecendo boa tolerância a falhas sem desperdício excessivo de espaço.",
          hint: "Padrão da indústria para clusters grandes"
        },
        {
          id: 2,
          type: "scenario",
          question: "Seu cluster está com 90% de uso de disco. Qual a melhor estratégia?",
          options: [
            "Adicionar mais nós ao cluster",
            "Reduzir fator de replicação",
            "Compactar dados existentes",
            "Deletar dados antigos"
          ],
          correct: 0,
          explanation: "Adicionar nós é a solução mais sustentável, mantendo performance e tolerância a falhas.",
          hint: "Pense na solução mais escalável"
        },
        {
          id: 3,
          type: "design",
          question: "Para dados críticos de compliance, qual configuração usar?",
          options: [
            "Replicação 5 com backup externo",
            "Replicação 3 padrão",
            "Replicação 1 com RAID",
            "Apenas backup em fita"
          ],
          correct: 0,
          explanation: "Dados críticos requerem maior replicação e backup adicional para garantir disponibilidade.",
          hint: "Dados críticos = máxima proteção"
        },
        {
          id: 4,
          type: "performance",
          question: "Qual fator mais impacta a performance do MapReduce?",
          options: [
            "Número de mappers e reducers",
            "Velocidade da CPU",
            "Quantidade de RAM",
            "Tipo de disco (SSD vs HDD)"
          ],
          correct: 0,
          explanation: "O paralelismo (número de mappers/reducers) é o fator mais crítico para performance.",
          hint: "MapReduce é sobre paralelismo"
        },
        {
          id: 5,
          type: "scenario",
          question: "Para análise em tempo real, qual tecnologia complementar usar?",
          options: [
            "Apache Spark Streaming",
            "Mais nós Hadoop",
            "Discos SSD",
            "Mais memória RAM"
          ],
          correct: 0,
          explanation: "Spark Streaming é otimizado para processamento em tempo real, complementando o Hadoop.",
          hint: "Hadoop é batch, precisa de tecnologia streaming"
        }
      ]
    },
    'troubleshooting': {
      title: "Resolução de Problemas",
      difficulty: "Avançado",
      estimatedTime: "30 min",
      points: 250,
      description: "Cenários reais de troubleshooting em ambientes Hadoop",
      icon: <Zap className="h-5 w-5" />,
      questions: [
        {
          id: 1,
          type: "troubleshoot",
          question: "Job MapReduce falha com 'OutOfMemoryError'. Qual a primeira ação?",
          options: [
            "Aumentar heap size dos containers",
            "Reduzir número de mappers",
            "Reiniciar o cluster",
            "Trocar algoritmo"
          ],
          correct: 0,
          explanation: "OutOfMemoryError indica falta de memória heap. Aumentar o heap size resolve o problema.",
          hint: "Erro de memória = aumentar memória"
        },
        {
          id: 2,
          type: "troubleshoot",
          question: "NameNode não inicia após reinicialização. Onde verificar primeiro?",
          options: [
            "Logs do NameNode",
            "Espaço em disco",
            "Conectividade de rede",
            "Configuração do YARN"
          ],
          correct: 0,
          explanation: "Logs sempre contêm informações detalhadas sobre falhas de inicialização.",
          hint: "Logs são a primeira fonte de informação"
        },
        {
          id: 3,
          type: "troubleshoot",
          question: "DataNode reporta 'Disk full' mas df mostra espaço disponível. Causa provável?",
          options: [
            "Limite de blocos por DataNode atingido",
            "Erro no comando df",
            "Problema de permissões",
            "Corrupção do filesystem"
          ],
          correct: 0,
          explanation: "DataNodes têm limite de blocos que podem armazenar, independente do espaço em disco.",
          hint: "HDFS tem limites além do espaço físico"
        },
        {
          id: 4,
          type: "troubleshoot",
          question: "Performance degradou após adicionar novos nós. Possível causa?",
          options: [
            "Desbalanceamento de dados",
            "Hardware inferior nos novos nós",
            "Configuração de rede",
            "Todas as anteriores"
          ],
          correct: 3,
          explanation: "Múltiplos fatores podem causar degradação: desbalanceamento, hardware diferente, ou problemas de rede.",
          hint: "Novos nós podem introduzir vários problemas"
        },
        {
          id: 5,
          type: "troubleshoot",
          question: "Como identificar jobs que consomem muitos recursos?",
          options: [
            "yarn top e ResourceManager UI",
            "Apenas logs de aplicação",
            "Monitoramento de CPU",
            "Verificar espaço em disco"
          ],
          correct: 0,
          explanation: "yarn top e ResourceManager UI mostram uso de recursos em tempo real por aplicação.",
          hint: "YARN gerencia recursos, use suas ferramentas"
        }
      ]
    }
  }

  const handleAnswer = (exerciseId, questionId, answerIndex) => {
    const key = `${exerciseId}-${questionId}`
    setUserAnswers(prev => ({
      ...prev,
      [key]: answerIndex
    }))
  }

  const checkAnswer = (exerciseId, questionId, answerIndex) => {
    const exercise = exercises[exerciseId]
    const question = exercise.questions.find(q => q.id === questionId)
    return answerIndex === question.correct
  }

  const showHint = (exerciseId, questionId) => {
    const key = `${exerciseId}-${questionId}`
    setShowHints(prev => ({
      ...prev,
      [key]: true
    }))
  }

  const calculateScore = (exerciseId) => {
    const exercise = exercises[exerciseId]
    let correct = 0
    
    exercise.questions.forEach(question => {
      const key = `${exerciseId}-${question.id}`
      if (userAnswers[key] === question.correct) {
        correct++
      }
    })
    
    return Math.round((correct / exercise.questions.length) * exercise.points)
  }

  const completeExercise = (exerciseId) => {
    const exerciseScore = calculateScore(exerciseId)
    setScore(prev => prev + exerciseScore)
    setCompletedExercises(prev => new Set([...prev, exerciseId]))
    setExerciseProgress(prev => ({
      ...prev,
      [exerciseId]: 100
    }))
  }

  const resetExercise = (exerciseId) => {
    const exercise = exercises[exerciseId]
    exercise.questions.forEach(question => {
      const key = `${exerciseId}-${question.id}`
      setUserAnswers(prev => {
        const newAnswers = { ...prev }
        delete newAnswers[key]
        return newAnswers
      })
      setShowHints(prev => {
        const newHints = { ...prev }
        delete newHints[key]
        return newHints
      })
    })
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-100 text-green-800'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800'
      case 'Avançado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const currentExerciseData = exercises[currentExercise]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Exercícios Interativos Hadoop
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Pratique seus conhecimentos com exercícios interativos e receba feedback imediato
        </p>
      </div>

      {/* Score Dashboard */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">Painel de Progresso</CardTitle>
              <CardDescription>Acompanhe seu desempenho nos exercícios</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600 flex items-center gap-2">
                <Trophy className="h-8 w-8" />
                {score} pts
              </div>
              <div className="text-sm text-gray-600">
                {completedExercises.size}/{Object.keys(exercises).length} exercícios
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(exercises).map(([id, exercise]) => (
              <div key={id} className="text-center p-3 border rounded-lg">
                <div className="flex justify-center mb-2">{exercise.icon}</div>
                <div className="font-semibold text-sm">{exercise.title}</div>
                <div className="text-xs text-gray-600">{exercise.difficulty}</div>
                {completedExercises.has(id) ? (
                  <Badge className="mt-2" variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Concluído
                  </Badge>
                ) : (
                  <Badge className="mt-2" variant="outline">
                    {exercise.points} pts
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="exercises" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="exercises" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Exercícios
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Ranking
          </TabsTrigger>
          <TabsTrigger value="certificates" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Certificados
          </TabsTrigger>
        </TabsList>

        {/* Exercises */}
        <TabsContent value="exercises" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {Object.entries(exercises).map(([id, exercise]) => (
              <Button
                key={id}
                variant={currentExercise === id ? "default" : "outline"}
                onClick={() => setCurrentExercise(id)}
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="flex items-center gap-2 mb-2">
                  {exercise.icon}
                  {completedExercises.has(id) && <CheckCircle className="h-4 w-4 text-green-600" />}
                </div>
                <div className="font-semibold text-left">{exercise.title}</div>
                <div className="text-xs text-left mt-1">{exercise.description}</div>
                <div className="flex gap-2 mt-2">
                  <Badge className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {exercise.estimatedTime}
                  </Badge>
                </div>
              </Button>
            ))}
          </div>

          {currentExerciseData && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {currentExerciseData.icon}
                      {currentExerciseData.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {currentExerciseData.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => resetExercise(currentExercise)} variant="outline">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reiniciar
                    </Button>
                    <Button onClick={() => completeExercise(currentExercise)}>
                      <Trophy className="h-4 w-4 mr-2" />
                      Finalizar
                    </Button>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <Badge className={getDifficultyColor(currentExerciseData.difficulty)}>
                    {currentExerciseData.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1" />
                    {currentExerciseData.estimatedTime}
                  </Badge>
                  <Badge variant="outline">
                    {currentExerciseData.points} pontos
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentExerciseData.questions.map((question, index) => {
                    const key = `${currentExercise}-${question.id}`
                    const userAnswer = userAnswers[key]
                    const isAnswered = userAnswer !== undefined
                    const isCorrect = isAnswered && checkAnswer(currentExercise, question.id, userAnswer)
                    
                    return (
                      <Card key={question.id} className={isAnswered ? (isCorrect ? 'border-green-500' : 'border-red-500') : ''}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">
                              Questão {index + 1}
                            </CardTitle>
                            <div className="flex gap-2">
                              <Badge variant="outline">{question.type}</Badge>
                              {isAnswered && (
                                isCorrect ? 
                                  <CheckCircle className="h-5 w-5 text-green-600" /> :
                                  <XCircle className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                          </div>
                          <CardDescription className="text-base">
                            {question.question}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="grid gap-2">
                              {question.options.map((option, optionIndex) => (
                                <Button
                                  key={optionIndex}
                                  variant={userAnswer === optionIndex ? "default" : "outline"}
                                  onClick={() => handleAnswer(currentExercise, question.id, optionIndex)}
                                  className="justify-start h-auto p-3 text-left"
                                  disabled={isAnswered}
                                >
                                  <span className="mr-2 font-bold">
                                    {String.fromCharCode(65 + optionIndex)}.
                                  </span>
                                  {option}
                                </Button>
                              ))}
                            </div>

                            {!isAnswered && (
                              <Button 
                                onClick={() => showHint(currentExercise, question.id)}
                                variant="ghost" 
                                size="sm"
                                className="text-blue-600"
                              >
                                <Lightbulb className="h-4 w-4 mr-2" />
                                Mostrar Dica
                              </Button>
                            )}

                            {showHints[key] && (
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <Lightbulb className="h-4 w-4 text-blue-600" />
                                  <span className="font-semibold text-blue-800">Dica:</span>
                                </div>
                                <p className="text-blue-700 text-sm">{question.hint}</p>
                              </div>
                            )}

                            {isAnswered && (
                              <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                  {isCorrect ? (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-red-600" />
                                  )}
                                  <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                    {isCorrect ? 'Correto!' : 'Incorreto'}
                                  </span>
                                </div>
                                <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                  {question.explanation}
                                </p>
                                {!isCorrect && (
                                  <p className="text-sm text-gray-600 mt-2">
                                    <strong>Resposta correta:</strong> {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Leaderboard */}
        <TabsContent value="leaderboard" className="space-y-6">
          <h2 className="text-2xl font-bold">Ranking de Pontuação</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>Melhores pontuações da turma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Você", score: score, position: 1, avatar: "🎓" },
                  { name: "Ana Silva", score: 850, position: 2, avatar: "👩‍💻" },
                  { name: "João Santos", score: 720, position: 3, avatar: "👨‍💻" },
                  { name: "Maria Costa", score: 680, position: 4, avatar: "👩‍🎓" },
                  { name: "Pedro Lima", score: 650, position: 5, avatar: "👨‍🎓" }
                ].map((user, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${user.name === 'Você' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{user.avatar}</div>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-gray-600">Posição #{user.position}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{user.score} pts</div>
                      <div className="flex items-center gap-1">
                        {[...Array(Math.min(5, Math.floor(user.score / 200)))].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certificates */}
        <TabsContent value="certificates" className="space-y-6">
          <h2 className="text-2xl font-bold">Certificados de Conclusão</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificado Básico</CardTitle>
                <CardDescription>Complete todos os exercícios básicos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <Award className="h-16 w-16 mx-auto text-yellow-500" />
                    <h3 className="font-bold mt-2">Hadoop Fundamentals</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Comandos Básicos</span>
                      {completedExercises.has('basic-commands') ? 
                        <CheckCircle className="h-5 w-5 text-green-600" /> :
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                      }
                    </div>
                    <div className="flex justify-between">
                      <span>Conceitos MapReduce</span>
                      {completedExercises.has('mapreduce-concepts') ? 
                        <CheckCircle className="h-5 w-5 text-green-600" /> :
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                      }
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={!completedExercises.has('basic-commands') || !completedExercises.has('mapreduce-concepts')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Certificado
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certificado Avançado</CardTitle>
                <CardDescription>Complete todos os exercícios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <Award className="h-16 w-16 mx-auto text-purple-500" />
                    <h3 className="font-bold mt-2">Hadoop Expert</h3>
                  </div>
                  <div className="space-y-2">
                    {Object.keys(exercises).map(exerciseId => (
                      <div key={exerciseId} className="flex justify-between">
                        <span>{exercises[exerciseId].title}</span>
                        {completedExercises.has(exerciseId) ? 
                          <CheckCircle className="h-5 w-5 text-green-600" /> :
                          <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                        }
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={completedExercises.size < Object.keys(exercises).length}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Certificado
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default InteractiveExercises
