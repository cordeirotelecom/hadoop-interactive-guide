import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import LinuxCommandGuideSimple from './LinuxCommandGuideSimple.jsx'
import { 
  Play, 
  Pause, 
  CheckCircle, 
  Clock,
  Terminal,
  Database,
  Server,
  Zap,
  Rocket
} from 'lucide-react'

const FunctionalLabs = () => {
  const [selectedLab, setSelectedLab] = useState('hadoop-setup')
  const [labProgress, setLabProgress] = useState({})
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState([])

  const labs = {
    'hadoop-setup': {
      title: 'Lab 1: Configuração Completa do Hadoop',
      difficulty: 'Intermediário',
      duration: '2-3 horas',
      icon: Server,
      description: 'Configure um ambiente Hadoop funcional do zero',
      objectives: [
        'Instalar e configurar Java 8/11',
        'Configurar SSH sem senha',
        'Instalar Hadoop 3.3.x',
        'Configurar HDFS e YARN',
        'Testar cluster funcionando'
      ],
      steps: [
        {
          title: 'Preparação do Sistema',
          commands: [
            'sudo apt update && sudo apt upgrade -y',
            'sudo apt install openjdk-8-jdk openssh-server -y',
            'java -version',
            'ssh-keygen -t rsa -P "" -f ~/.ssh/id_rsa',
            'cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys',
            'ssh localhost'
          ]
        },
        {
          title: 'Download e Instalação do Hadoop',
          commands: [
            'wget https://downloads.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz',
            'tar -xzf hadoop-3.3.6.tar.gz',
            'sudo mv hadoop-3.3.6 /opt/hadoop',
            'sudo chown -R $USER:$USER /opt/hadoop',
            'echo "export HADOOP_HOME=/opt/hadoop" >> ~/.bashrc',
            'echo "export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin" >> ~/.bashrc',
            'source ~/.bashrc'
          ]
        },
        {
          title: 'Configuração dos Arquivos XML',
          commands: [
            'cd $HADOOP_HOME/etc/hadoop',
            'nano core-site.xml',
            'nano hdfs-site.xml',
            'nano mapred-site.xml',
            'nano yarn-site.xml',
            'nano hadoop-env.sh'
          ]
        },
        {
          title: 'Formatação e Inicialização',
          commands: [
            'hdfs namenode -format',
            'start-dfs.sh',
            'start-yarn.sh',
            'jps',
            'hdfs dfs -mkdir /test',
            'hdfs dfs -ls /'
          ]
        }
      ]
    },
    'spark-setup': {
      title: 'Lab 2: Apache Spark com Hadoop',
      difficulty: 'Avançado',
      duration: '3-4 horas',
      icon: Zap,
      description: 'Instale e configure Apache Spark integrado com Hadoop',
      objectives: [
        'Instalar Apache Spark',
        'Configurar integração com Hadoop',
        'Executar jobs Spark',
        'Usar Spark SQL e DataFrames',
        'Monitorar aplicações Spark'
      ],
      steps: [
        {
          title: 'Download e Instalação do Spark',
          commands: [
            'cd /opt',
            'sudo wget https://downloads.apache.org/spark/spark-3.4.0/spark-3.4.0-bin-hadoop3.tgz',
            'sudo tar -xzf spark-3.4.0-bin-hadoop3.tgz',
            'sudo mv spark-3.4.0-bin-hadoop3 spark',
            'sudo chown -R $USER:$USER /opt/spark',
            'echo "export SPARK_HOME=/opt/spark" >> ~/.bashrc',
            'echo "export PATH=$PATH:$SPARK_HOME/bin" >> ~/.bashrc'
          ]
        },
        {
          title: 'Configuração do Spark',
          commands: [
            'cd $SPARK_HOME/conf',
            'cp spark-defaults.conf.template spark-defaults.conf',
            'cp spark-env.sh.template spark-env.sh',
            'echo "spark.master yarn" >> spark-defaults.conf',
            'echo "export HADOOP_HOME=/opt/hadoop" >> spark-env.sh',
            'echo "export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop" >> spark-env.sh'
          ]
        },
        {
          title: 'Teste do Spark',
          commands: [
            'spark-shell --master yarn',
            'spark-submit --class org.apache.spark.examples.SparkPi $SPARK_HOME/examples/jars/spark-examples*.jar 10',
            'pyspark --master yarn',
            'spark-sql --master yarn'
          ]
        }
      ]
    },
    'hive-setup': {
      title: 'Lab 3: Apache Hive Data Warehouse',
      difficulty: 'Intermediário',
      duration: '2-3 horas',
      icon: Database,
      description: 'Configure Hive para consultas SQL em dados Hadoop',
      objectives: [
        'Instalar Apache Hive',
        'Configurar metastore',
        'Criar tabelas e carregar dados',
        'Executar consultas SQL',
        'Integrar com ferramentas BI'
      ],
      steps: [
        {
          title: 'Instalação do Hive',
          commands: [
            'cd /opt',
            'sudo wget https://downloads.apache.org/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz',
            'sudo tar -xzf apache-hive-3.1.3-bin.tar.gz',
            'sudo mv apache-hive-3.1.3-bin hive',
            'sudo chown -R $USER:$USER /opt/hive',
            'echo "export HIVE_HOME=/opt/hive" >> ~/.bashrc',
            'echo "export PATH=$PATH:$HIVE_HOME/bin" >> ~/.bashrc'
          ]
        },
        {
          title: 'Configuração do Metastore',
          commands: [
            'cd $HIVE_HOME/conf',
            'cp hive-default.xml.template hive-site.xml',
            'schematool -dbType derby -initSchema',
            'hive --version',
            'beeline -u jdbc:hive2://localhost:10000'
          ]
        }
      ]
    }
  }

  const simulateExecution = async (labId, stepIndex) => {
    setIsRunning(true)
    setOutput([])
    
    const lab = labs[labId]
    const step = lab.steps[stepIndex]
    
    for (let i = 0; i < step.commands.length; i++) {
      const command = step.commands[i]
      setOutput(prev => [...prev, `$ ${command}`])
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Simulate realistic output
      let result = ''
      if (command.includes('version')) {
        result = 'Version installed successfully ✓'
      } else if (command.includes('jps')) {
        result = 'NameNode\nDataNode\nResourceManager\nNodeManager'
      } else if (command.includes('wget')) {
        result = 'Download completed ✓'
      } else if (command.includes('hdfs dfs')) {
        result = 'HDFS operation completed ✓'
      } else {
        result = 'Command executed successfully ✓'
      }
      
      setOutput(prev => [...prev, result, ''])
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    
    // Update progress
    setLabProgress(prev => ({
      ...prev,
      [labId]: {
        completedSteps: Math.max((prev[labId]?.completedSteps || 0), stepIndex + 1)
      }
    }))
    
    setIsRunning(false)
  }

  const selectedLabData = labs[selectedLab]
  const progress = labProgress[selectedLab] || { completedSteps: 0 }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Rocket className="h-8 w-8" />
            Laboratórios Práticos Funcionais
          </CardTitle>
          <p className="text-purple-100">
            Experimente configurações reais com simulações interativas
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="labs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="labs">Laboratórios Hadoop</TabsTrigger>
          <TabsTrigger value="linux">Comandos Linux</TabsTrigger>
        </TabsList>

        {/* Hadoop Labs Tab */}
        <TabsContent value="labs" className="space-y-6">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Lab Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Laboratórios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(labs).map(([key, lab]) => {
                    const Icon = lab.icon
                    const completed = progress.completedSteps || 0
                    const total = lab.steps.length
                    
                    return (
                      <Button
                        key={key}
                        variant={selectedLab === key ? "default" : "outline"}
                        className="w-full h-auto p-4 flex flex-col items-start text-left"
                        onClick={() => setSelectedLab(key)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5" />
                          <Badge variant="secondary">{lab.difficulty}</Badge>
                        </div>
                        <div className="font-semibold text-sm mb-1">{lab.title}</div>
                        <div className="text-xs text-gray-600 mb-2">{lab.duration}</div>
                        <Progress value={(completed / total) * 100} className="w-full h-2" />
                        <div className="text-xs mt-1">{completed}/{total} passos</div>
                      </Button>
                    )
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Lab Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <selectedLabData.icon className="h-8 w-8 text-indigo-600" />
                    <div>
                      <CardTitle>{selectedLabData.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {selectedLabData.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Objetivos:</h4>
                    <ul className="space-y-1">
                      {selectedLabData.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Progress 
                    value={(progress.completedSteps / selectedLabData.steps.length) * 100} 
                    className="mb-2"
                  />
                  <div className="text-sm text-gray-600">
                    Progresso: {progress.completedSteps}/{selectedLabData.steps.length} passos
                  </div>
                </CardContent>
              </Card>

              {/* Steps */}
              <div className="space-y-4">
                {selectedLabData.steps.map((step, idx) => {
                  const isCompleted = progress.completedSteps > idx
                  const isCurrent = progress.completedSteps === idx
                  
                  return (
                    <Card key={idx} className={`border-l-4 ${
                      isCompleted ? 'border-green-500' : 
                      isCurrent ? 'border-blue-500' : 'border-gray-300'
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            {isCompleted ? (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            ) : isCurrent ? (
                              <Clock className="h-6 w-6 text-blue-500" />
                            ) : (
                              <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-sm">
                                {idx + 1}
                              </div>
                            )}
                            Passo {idx + 1}: {step.title}
                          </CardTitle>
                          <Button
                            size="sm"
                            disabled={!isCurrent || isRunning}
                            onClick={() => simulateExecution(selectedLab, idx)}
                          >
                            {isRunning ? (
                              <>
                                <Pause className="h-4 w-4 mr-2" />
                                Executando...
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Executar
                              </>
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm max-h-48 overflow-y-auto">
                          {step.commands.map((cmd, cmdIdx) => (
                            <div key={cmdIdx} className="mb-1">$ {cmd}</div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Terminal Output */}
              {output.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Terminal className="h-5 w-5" />
                      Saída do Terminal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
                      {output.map((line, idx) => (
                        <div key={idx} className={line.startsWith('$') ? 'text-yellow-400 mb-1' : 'text-green-400'}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Linux Commands Tab */}
        <TabsContent value="linux">
          <LinuxCommandGuideSimple />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default FunctionalLabs