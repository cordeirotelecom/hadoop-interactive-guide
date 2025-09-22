import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  CheckCircle, 
  XCircle, 
  Brain,
  Trophy,
  RotateCcw,
  ArrowRight,
  Lightbulb,
  Target
} from 'lucide-react'

const HadoopQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const questions = [
    {
      id: 1,
      category: "Fundamentos",
      question: "O que significa HDFS no ecossistema Hadoop?",
      options: [
        "Hadoop Data Flow System",
        "Hadoop Distributed File System", 
        "Hadoop Dynamic File Storage",
        "Hadoop Database File System"
      ],
      correct: 1,
      explanation: "HDFS significa Hadoop Distributed File System - é o sistema de arquivos distribuído do Hadoop que permite armazenar grandes volumes de dados em clusters de computadores comuns."
    },
    {
      id: 2,
      category: "Arquitetura",
      question: "Qual é o papel do NameNode no HDFS?",
      options: [
        "Armazenar os dados reais",
        "Gerenciar metadados e namespace do sistema de arquivos",
        "Executar jobs MapReduce",
        "Balancear carga entre nós"
      ],
      correct: 1,
      explanation: "O NameNode é responsável por gerenciar os metadados do sistema de arquivos, incluindo informações sobre quais blocos compõem cada arquivo e onde estão localizados no cluster."
    },
    {
      id: 3,
      category: "MapReduce",
      question: "Em MapReduce, qual é a função da fase de 'Shuffle'?",
      options: [
        "Dividir o input em chunks menores",
        "Reorganizar e agrupar dados por chave entre Map e Reduce",
        "Combinar resultados finais",
        "Distribuir tarefas pelos nós"
      ],
      correct: 1,
      explanation: "A fase Shuffle reorganiza e agrupa os dados produzidos pelos mappers por chave, preparando-os para serem processados pelos reducers de forma eficiente."
    },
    {
      id: 4,
      category: "YARN",
      question: "O que é YARN no Hadoop 2.x?",
      options: [
        "Um sistema de arquivos",
        "Um framework de gerenciamento de recursos e jobs",
        "Uma linguagem de programação",
        "Um banco de dados"
      ],
      correct: 1,
      explanation: "YARN (Yet Another Resource Negotiator) é o framework de gerenciamento de recursos que permite múltiplas aplicações executarem simultaneamente no cluster Hadoop."
    },
    {
      id: 5,
      category: "Configuração",
      question: "Qual arquivo contém as configurações principais do HDFS?",
      options: [
        "mapred-site.xml",
        "yarn-site.xml",
        "hdfs-site.xml",
        "core-site.xml"
      ],
      correct: 2,
      explanation: "O arquivo hdfs-site.xml contém configurações específicas do HDFS, como fatores de replicação, tamanhos de bloco e configurações de DataNodes."
    },
    {
      id: 6,
      category: "Replicação",
      question: "Qual é o fator de replicação padrão no HDFS?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correct: 1,
      explanation: "O fator de replicação padrão no HDFS é 3, garantindo alta disponibilidade e tolerância a falhas ao manter três cópias de cada bloco de dados."
    },
    {
      id: 7,
      category: "Comandos",
      question: "Qual comando é usado para listar arquivos no HDFS?",
      options: [
        "hdfs dfs -list /",
        "hdfs dfs -ls /",
        "hadoop fs -dir /",
        "hdfs list /"
      ],
      correct: 1,
      explanation: "O comando 'hdfs dfs -ls /' é usado para listar arquivos e diretórios no HDFS, similar ao comando 'ls' em sistemas Unix."
    },
    {
      id: 8,
      category: "Ecosystem",
      question: "Qual ferramenta é comumente usada para consultas SQL-like no Hadoop?",
      options: [
        "Pig",
        "Hive",
        "Flume",
        "Sqoop"
      ],
      correct: 1,
      explanation: "Hive é um data warehouse software que facilita consultas e análises de dados usando uma linguagem similar ao SQL (HiveQL) em dados armazenados no Hadoop."
    },
    {
      id: 9,
      category: "Performance",
      question: "Qual é uma vantagem principal do processamento paralelo no Hadoop?",
      options: [
        "Reduz o uso de memória",
        "Aumenta a velocidade de processamento dividindo tarefas",
        "Diminui a complexidade do código",
        "Reduz o espaço de armazenamento"
      ],
      correct: 1,
      explanation: "O processamento paralelo permite dividir grandes tarefas em subtarefas menores que podem ser executadas simultaneamente em diferentes nós, aumentando significativamente a velocidade de processamento."
    },
    {
      id: 10,
      category: "Tolerância a Falhas",
      question: "Como o Hadoop lida com falhas de DataNodes?",
      options: [
        "Para todo o cluster",
        "Re-replica blocos automaticamente usando outras cópias",
        "Reinicia o nó com falha",
        "Ignora os dados perdidos"
      ],
      correct: 1,
      explanation: "Quando um DataNode falha, o Hadoop detecta automaticamente e re-replica os blocos perdidos usando as cópias existentes em outros nós, mantendo o fator de replicação configurado."
    }
  ]

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct
    
    setAnswers([...answers, {
      questionId: questions[currentQuestion].id,
      selected: selectedAnswer,
      correct: questions[currentQuestion].correct,
      isCorrect
    }])

    if (isCorrect) {
      setScore(score + 1)
    }

    setSelectedAnswer(null)
    setShowResult(true)
  }

  const handleContinue = () => {
    setShowResult(false)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz finished
      setCurrentQuestion(questions.length) // Will show final results
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return "🎉 Perfeito! Você é um especialista em Hadoop!"
    if (percentage >= 80) return "🌟 Excelente! Você tem um ótimo conhecimento sobre Hadoop!"
    if (percentage >= 60) return "👍 Bom trabalho! Continue estudando para se tornar um expert!"
    if (percentage >= 40) return "📚 Você está no caminho certo! Revise os conceitos e tente novamente!"
    return "💪 Continue estudando! O Hadoop tem muitos conceitos importantes para dominar!"
  }

  // Final results view
  if (currentQuestion >= questions.length) {
    return (
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8" />
              Quiz Finalizado!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-6xl font-bold">{score}/{questions.length}</div>
            <div className="text-xl">{Math.round((score / questions.length) * 100)}% de acertos</div>
            <div className="text-lg bg-white/20 rounded-lg p-4">
              {getScoreMessage()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Revisão das Respostas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {answers.map((answer, index) => {
              const question = questions[index]
              return (
                <div key={question.id} className={`p-4 rounded-lg border-2 ${answer.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-semibold text-sm text-gray-600">
                      {question.category} - Questão {index + 1}
                    </span>
                    {answer.isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <p className="font-medium mb-2">{question.question}</p>
                  <div className="text-sm space-y-1">
                    <p className={answer.isCorrect ? 'text-green-700' : 'text-red-700'}>
                      <strong>Sua resposta:</strong> {question.options[answer.selected]}
                    </p>
                    {!answer.isCorrect && (
                      <p className="text-green-700">
                        <strong>Resposta correta:</strong> {question.options[answer.correct]}
                      </p>
                    )}
                    <p className="text-gray-600 text-xs mt-2 p-2 bg-blue-50 rounded">
                      <Lightbulb className="h-4 w-4 inline mr-1" />
                      {question.explanation}
                    </p>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button onClick={resetQuiz} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Tentar Novamente
          </Button>
        </div>
      </div>
    )
  }

  // Results view for individual question
  if (showResult) {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-sm">
            Questão {currentQuestion + 1} de {questions.length}
          </Badge>
          <div className="text-right">
            <div className="text-sm text-gray-600">Pontuação</div>
            <div className={`text-xl font-bold ${getScoreColor()}`}>
              {score}/{currentQuestion + 1}
            </div>
          </div>
        </div>

        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-6" />

        <Card className={`border-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {isCorrect ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600" />
              )}
              <div>
                <div className={`text-2xl ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correto!' : 'Incorreto!'}
                </div>
                <div className="text-sm text-gray-600 font-normal">
                  {questions[currentQuestion].category}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg font-medium">
              {questions[currentQuestion].question}
            </p>

            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => {
                let bgColor = "bg-gray-100"
                let textColor = "text-gray-700"
                let borderColor = "border-gray-200"

                if (index === questions[currentQuestion].correct) {
                  bgColor = "bg-green-100"
                  textColor = "text-green-800"
                  borderColor = "border-green-300"
                } else if (index === selectedAnswer && !isCorrect) {
                  bgColor = "bg-red-100"
                  textColor = "text-red-800"
                  borderColor = "border-red-300"
                }

                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-2 ${bgColor} ${borderColor}`}
                  >
                    <span className={`${textColor} font-medium`}>
                      {option}
                    </span>
                    {index === questions[currentQuestion].correct && (
                      <CheckCircle className="h-4 w-4 text-green-600 inline ml-2" />
                    )}
                    {index === selectedAnswer && !isCorrect && (
                      <XCircle className="h-4 w-4 text-red-600 inline ml-2" />
                    )}
                  </div>
                )
              })}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-blue-800 mb-1">Explicação:</div>
                  <p className="text-blue-700 text-sm">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={handleContinue} className="flex items-center gap-2">
                {currentQuestion < questions.length - 1 ? 'Próxima' : 'Ver Resultados'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Quiz question view
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Brain className="h-8 w-8" />
            Quiz Interativo - Hadoop
          </CardTitle>
          <p className="text-blue-100">
            Teste seus conhecimentos sobre Apache Hadoop e Big Data
          </p>
        </CardHeader>
      </Card>

      <div className="flex items-center justify-between mb-4">
        <Badge variant="outline" className="text-sm">
          {questions[currentQuestion].category}
        </Badge>
        <div className="text-right">
          <div className="text-sm text-gray-600">Questão</div>
          <div className="text-xl font-bold">
            {currentQuestion + 1} de {questions.length}
          </div>
        </div>
      </div>

      <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-6" />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className={`w-full text-left justify-start h-auto p-4 ${
                selectedAnswer === index 
                  ? "bg-blue-600 text-white" 
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              <span className="mr-3 font-bold">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </Button>
          ))}

          <div className="flex justify-end pt-4">
            <Button 
              onClick={handleNextQuestion} 
              disabled={selectedAnswer === null}
              className="flex items-center gap-2"
            >
              Responder
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-500">
        <p>Selecione uma resposta e clique em "Responder" para continuar</p>
      </div>
    </div>
  )
}

export default HadoopQuiz