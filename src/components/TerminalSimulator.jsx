import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Input } from "./ui/input.jsx"
import { Terminal, Play, RotateCcw } from 'lucide-react'

const TerminalSimulator = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Hadoop Terminal Simulator v1.0' },
    { type: 'output', content: 'Digite "help" para ver comandos disponíveis' },
    { type: 'prompt', content: 'hadoop@cluster:~$' }
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const terminalRef = useRef(null)

  const commands = {
    'help': {
      description: 'Mostra comandos disponíveis',
      output: [
        'Comandos disponíveis:',
        '  hdfs dfs -ls [path]     - Lista arquivos no HDFS',
        '  hdfs dfs -put <file>    - Envia arquivo para HDFS',
        '  hdfs dfs -get <file>    - Baixa arquivo do HDFS',
        '  hdfs dfs -cat <file>    - Mostra conteúdo do arquivo',
        '  hdfs dfs -mkdir <dir>   - Cria diretório no HDFS',
        '  yarn application -list  - Lista aplicações YARN',
        '  yarn node -list         - Lista nós do cluster',
        '  jps                     - Lista processos Java',
        '  start-dfs.sh           - Inicia serviços HDFS',
        '  start-yarn.sh          - Inicia serviços YARN',
        '  stop-dfs.sh            - Para serviços HDFS',
        '  stop-yarn.sh           - Para serviços YARN',
        '  clear                  - Limpa terminal',
        '  help                   - Mostra esta ajuda'
      ]
    },
    'hdfs dfs -ls': {
      description: 'Lista arquivos no HDFS',
      output: [
        'Found 3 items',
        'drwxr-xr-x   - hadoop supergroup          0 2024-01-15 10:30 /input',
        'drwxr-xr-x   - hadoop supergroup          0 2024-01-15 10:35 /output',
        'drwxr-xr-x   - hadoop supergroup          0 2024-01-15 09:15 /user'
      ]
    },
    'hdfs dfs -ls /': {
      description: 'Lista arquivos na raiz do HDFS',
      output: [
        'Found 3 items',
        'drwxr-xr-x   - hadoop supergroup          0 2024-01-15 10:30 /input',
        'drwxr-xr-x   - hadoop supergroup          0 2024-01-15 10:35 /output',
        'drwxr-xr-x   - hadoop supergroup          0 2024-01-15 09:15 /user'
      ]
    },
    'hdfs dfs -ls /input': {
      description: 'Lista arquivos no diretório /input',
      output: [
        'Found 2 items',
        '-rw-r--r--   3 hadoop supergroup       1024 2024-01-15 10:30 /input/data.txt',
        '-rw-r--r--   3 hadoop supergroup       2048 2024-01-15 10:31 /input/sample.txt'
      ]
    },
    'hdfs dfs -cat /input/data.txt': {
      description: 'Mostra conteúdo do arquivo data.txt',
      output: [
        'Hello Hadoop World',
        'This is a sample file for MapReduce processing',
        'Apache Hadoop is a powerful framework',
        'Big Data processing made easy'
      ]
    },
    'hdfs dfs -mkdir /test': {
      description: 'Cria diretório /test no HDFS',
      output: ['Diretório /test criado com sucesso']
    },
    'yarn application -list': {
      description: 'Lista aplicações YARN em execução',
      output: [
        'Total number of applications (application-types: [], states: [SUBMITTED, ACCEPTED, RUNNING] and tags: []):2',
        'Application-Id      Application-Name    Application-Type    User    Queue    State       Final-State    Progress    Tracking-URL',
        'application_1642234567890_0001    WordCount    MAPREDUCE    hadoop    default    RUNNING    UNDEFINED    50%    http://localhost:8088/proxy/application_1642234567890_0001/',
        'application_1642234567890_0002    TeraSort     MAPREDUCE    hadoop    default    FINISHED   SUCCEEDED  100%   http://localhost:8088/proxy/application_1642234567890_0002/'
      ]
    },
    'yarn node -list': {
      description: 'Lista nós do cluster YARN',
      output: [
        'Total Nodes:3',
        'Node-Id             Node-State    Node-Http-Address    Number-of-Running-Containers',
        'localhost:45454     RUNNING       localhost:8042       2',
        'worker1:45454       RUNNING       worker1:8042         1',
        'worker2:45454       RUNNING       worker2:8042         1'
      ]
    },
    'jps': {
      description: 'Lista processos Java do Hadoop',
      output: [
        '12345 NameNode',
        '12346 DataNode',
        '12347 SecondaryNameNode',
        '12348 ResourceManager',
        '12349 NodeManager',
        '12350 Jps'
      ]
    },
    'start-dfs.sh': {
      description: 'Inicia serviços HDFS',
      output: [
        'Starting namenodes on [localhost]',
        'Starting datanodes',
        'Starting secondary namenodes [localhost]',
        'HDFS services started successfully'
      ]
    },
    'start-yarn.sh': {
      description: 'Inicia serviços YARN',
      output: [
        'Starting resourcemanager',
        'Starting nodemanagers',
        'YARN services started successfully'
      ]
    },
    'stop-dfs.sh': {
      description: 'Para serviços HDFS',
      output: [
        'Stopping namenodes on [localhost]',
        'Stopping datanodes',
        'Stopping secondary namenodes [localhost]',
        'HDFS services stopped'
      ]
    },
    'stop-yarn.sh': {
      description: 'Para serviços YARN',
      output: [
        'Stopping nodemanagers',
        'Stopping resourcemanager',
        'YARN services stopped'
      ]
    },
    'clear': {
      description: 'Limpa o terminal',
      output: []
    }
  }

  const executeCommand = async (command) => {
    setIsProcessing(true)
    
    // Adiciona o comando ao histórico
    setHistory(prev => [...prev, { type: 'command', content: `hadoop@cluster:~$ ${command}` }])
    
    // Simula delay de processamento
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const trimmedCommand = command.trim().toLowerCase()
    
    if (trimmedCommand === 'clear') {
      setHistory([
        { type: 'output', content: 'Hadoop Terminal Simulator v1.0' },
        { type: 'output', content: 'Digite "help" para ver comandos disponíveis' },
        { type: 'prompt', content: 'hadoop@cluster:~$' }
      ])
    } else if (commands[trimmedCommand]) {
      const output = commands[trimmedCommand].output
      setHistory(prev => [
        ...prev,
        ...output.map(line => ({ type: 'output', content: line })),
        { type: 'prompt', content: 'hadoop@cluster:~$' }
      ])
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'error', content: `Comando não encontrado: ${command}` },
        { type: 'error', content: 'Digite "help" para ver comandos disponíveis' },
        { type: 'prompt', content: 'hadoop@cluster:~$' }
      ])
    }
    
    setIsProcessing(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentCommand.trim() && !isProcessing) {
      executeCommand(currentCommand)
      setCurrentCommand('')
    }
  }

  const clearTerminal = () => {
    setHistory([
      { type: 'output', content: 'Hadoop Terminal Simulator v1.0' },
      { type: 'output', content: 'Digite "help" para ver comandos disponíveis' },
      { type: 'prompt', content: 'hadoop@cluster:~$' }
    ])
  }

  const runSampleCommands = async () => {
    const sampleCommands = [
      'hdfs dfs -ls /',
      'hdfs dfs -ls /input',
      'yarn application -list',
      'jps'
    ]
    
    for (const cmd of sampleCommands) {
      await executeCommand(cmd)
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Simulador de Terminal Hadoop
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={runSampleCommands} disabled={isProcessing}>
              <Play className="h-4 w-4 mr-1" />
              Demo
            </Button>
            <Button variant="outline" size="sm" onClick={clearTerminal}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Limpar
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
          <div 
            ref={terminalRef}
            className="h-96 overflow-y-auto space-y-1 mb-4"
          >
            {history.map((line, index) => (
              <div key={index} className={`
                ${line.type === 'command' ? 'text-yellow-400' : ''}
                ${line.type === 'output' ? 'text-green-400' : ''}
                ${line.type === 'error' ? 'text-red-400' : ''}
                ${line.type === 'prompt' ? 'text-blue-400' : ''}
              `}>
                {line.content}
              </div>
            ))}
            {isProcessing && (
              <div className="text-yellow-400 animate-pulse">
                Processando...
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-blue-400">hadoop@cluster:~$</span>
            <Input
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              className="flex-1 bg-transparent border-none text-green-400 focus:ring-0 focus:border-none"
              placeholder="Digite um comando..."
              disabled={isProcessing}
              autoComplete="off"
            />
          </form>
        </div>
        
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p>💡 <strong>Dica:</strong> Digite "help" para ver todos os comandos disponíveis ou clique em "Demo" para uma demonstração automática.</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TerminalSimulator
