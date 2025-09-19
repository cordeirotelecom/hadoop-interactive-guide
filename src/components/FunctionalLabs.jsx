import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
// Componentes UI básicos serão criados inline
import { 
  Play, 
  Pause, 
  Square, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Terminal,
  Database,
  Network,
  Server,
  Code,
  FileText,
  Download,
  Upload,
  Settings,
  Monitor,
  Zap,
  Shield,
  Users,
  BarChart3,
  TrendingUp,
  Cpu,
  HardDrive,
  Globe,
  Layers,
  Target,
  BookOpen,
  Lightbulb,
  Brain,
  Rocket
} from 'lucide-react'

const FunctionalLabs = () => {
  const [selectedLab, setSelectedLab] = useState('cluster-setup')
  const [labProgress, setLabProgress] = useState({})
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState([])
  const [userInput, setUserInput] = useState('')

  const labs = {
    'cluster-setup': {
      title: 'Lab 1: Configuração de Cluster Hadoop Multi-Node',
      difficulty: 'Intermediário',
      duration: '3-4 horas',
      icon: Server,
      description: 'Configure um cluster Hadoop completo com 3 nós virtuais',
      objectives: [
        'Configurar 3 VMs com Ubuntu 20.04',
        'Instalar e configurar Java 8/11',
        'Configurar SSH sem senha entre nós',
        'Instalar Hadoop 3.3.x em todos os nós',
        'Configurar NameNode, DataNodes e ResourceManager',
        'Inicializar e testar o cluster'
      ],
      prerequisites: [
        'Conhecimento básico de Linux',
        'Experiência com VirtualBox/VMware',
        '16GB RAM disponível',
        'Conexão de internet estável'
      ],
      steps: [
        {
          title: 'Preparação do Ambiente',
          description: 'Criar e configurar 3 máquinas virtuais',
          commands: [
            '# Criar VMs com as seguintes especificações:',
            '# VM1 (master): 4GB RAM, 50GB HD, Ubuntu 20.04',
            '# VM2 (worker1): 2GB RAM, 30GB HD, Ubuntu 20.04', 
            '# VM3 (worker2): 2GB RAM, 30GB HD, Ubuntu 20.04',
            '',
            '# Em cada VM, atualizar o sistema:',
            'sudo apt update && sudo apt upgrade -y',
            '',
            '# Configurar hostname em cada VM:',
            'sudo hostnamectl set-hostname master    # VM1',
            'sudo hostnamectl set-hostname worker1   # VM2',
            'sudo hostnamectl set-hostname worker2   # VM3',
            '',
            '# Adicionar entradas no /etc/hosts de todas as VMs:',
            'echo "192.168.1.100 master" | sudo tee -a /etc/hosts',
            'echo "192.168.1.101 worker1" | sudo tee -a /etc/hosts',
            'echo "192.168.1.102 worker2" | sudo tee -a /etc/hosts'
          ],
          validation: 'ping entre todos os nós deve funcionar',
          troubleshooting: [
            'Verificar configuração de rede das VMs',
            'Confirmar que IPs estão corretos',
            'Testar conectividade com ping'
          ]
        },
        {
          title: 'Instalação do Java',
          description: 'Instalar OpenJDK 8 em todos os nós',
          commands: [
            '# Instalar OpenJDK 8:',
            'sudo apt install openjdk-8-jdk -y',
            '',
            '# Verificar instalação:',
            'java -version',
            'javac -version',
            '',
            '# Configurar JAVA_HOME:',
            'echo "export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64" >> ~/.bashrc',
            'echo "export PATH=$PATH:$JAVA_HOME/bin" >> ~/.bashrc',
            'source ~/.bashrc',
            '',
            '# Verificar JAVA_HOME:',
            'echo $JAVA_HOME'
          ],
          validation: 'java -version deve mostrar OpenJDK 8',
          troubleshooting: [
            'Verificar se Java foi instalado corretamente',
            'Confirmar JAVA_HOME está definido',
            'Recarregar .bashrc se necessário'
          ]
        },
        {
          title: 'Configuração SSH',
          description: 'Configurar acesso SSH sem senha entre nós',
          commands: [
            '# No nó master, gerar chave SSH:',
            'ssh-keygen -t rsa -P "" -f ~/.ssh/id_rsa',
            '',
            '# Copiar chave pública para todos os nós:',
            'ssh-copy-id hadoop@master',
            'ssh-copy-id hadoop@worker1',
            'ssh-copy-id hadoop@worker2',
            '',
            '# Testar conexão SSH:',
            'ssh hadoop@worker1 "hostname"',
            'ssh hadoop@worker2 "hostname"',
            '',
            '# Configurar SSH config para facilitar conexões:',
            'cat >> ~/.ssh/config << EOF',
            'Host master',
            '    HostName 192.168.1.100',
            '    User hadoop',
            'Host worker1',
            '    HostName 192.168.1.101',
            '    User hadoop',
            'Host worker2',
            '    HostName 192.168.1.102',
            '    User hadoop',
            'EOF'
          ],
          validation: 'SSH sem senha deve funcionar para todos os nós',
          troubleshooting: [
            'Verificar permissões da pasta .ssh (700)',
            'Verificar permissões das chaves (600)',
            'Confirmar que serviço SSH está rodando'
          ]
        },
        {
          title: 'Download e Instalação do Hadoop',
          description: 'Baixar e instalar Hadoop 3.3.4 em todos os nós',
          commands: [
            '# Baixar Hadoop 3.3.4:',
            'cd /opt',
            'sudo wget https://archive.apache.org/dist/hadoop/common/hadoop-3.3.4/hadoop-3.3.4.tar.gz',
            '',
            '# Extrair e configurar permissões:',
            'sudo tar -xzf hadoop-3.3.4.tar.gz',
            'sudo mv hadoop-3.3.4 hadoop',
            'sudo chown -R hadoop:hadoop /opt/hadoop',
            '',
            '# Configurar variáveis de ambiente:',
            'echo "export HADOOP_HOME=/opt/hadoop" >> ~/.bashrc',
            'echo "export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop" >> ~/.bashrc',
            'echo "export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin" >> ~/.bashrc',
            'source ~/.bashrc',
            '',
            '# Verificar instalação:',
            'hadoop version'
          ],
          validation: 'hadoop version deve mostrar versão 3.3.4',
          troubleshooting: [
            'Verificar se download foi completo',
            'Confirmar permissões dos arquivos',
            'Verificar variáveis de ambiente'
          ]
        },
        {
          title: 'Configuração do Hadoop',
          description: 'Configurar arquivos de configuração do Hadoop',
          commands: [
            '# Configurar core-site.xml:',
            'cat > $HADOOP_CONF_DIR/core-site.xml << EOF',
            '<configuration>',
            '  <property>',
            '    <name>fs.defaultFS</name>',
            '    <value>hdfs://master:9000</value>',
            '  </property>',
            '  <property>',
            '    <name>hadoop.tmp.dir</name>',
            '    <value>/opt/hadoop/tmp</value>',
            '  </property>',
            '</configuration>',
            'EOF',
            '',
            '# Configurar hdfs-site.xml:',
            'cat > $HADOOP_CONF_DIR/hdfs-site.xml << EOF',
            '<configuration>',
            '  <property>',
            '    <name>dfs.replication</name>',
            '    <value>2</value>',
            '  </property>',
            '  <property>',
            '    <name>dfs.namenode.name.dir</name>',
            '    <value>/opt/hadoop/data/namenode</value>',
            '  </property>',
            '  <property>',
            '    <name>dfs.datanode.data.dir</name>',
            '    <value>/opt/hadoop/data/datanode</value>',
            '  </property>',
            '</configuration>',
            'EOF'
          ],
          validation: 'Arquivos XML devem estar bem formados',
          troubleshooting: [
            'Verificar sintaxe XML',
            'Confirmar caminhos dos diretórios',
            'Verificar permissões dos arquivos'
          ]
        },
        {
          title: 'Inicialização do Cluster',
          description: 'Formatar NameNode e iniciar serviços',
          commands: [
            '# Criar diretórios necessários:',
            'mkdir -p /opt/hadoop/data/namenode',
            'mkdir -p /opt/hadoop/data/datanode',
            'mkdir -p /opt/hadoop/tmp',
            '',
            '# Formatar NameNode (apenas no master):',
            'hdfs namenode -format -force',
            '',
            '# Iniciar serviços HDFS:',
            'start-dfs.sh',
            '',
            '# Iniciar serviços YARN:',
            'start-yarn.sh',
            '',
            '# Verificar serviços rodando:',
            'jps',
            '',
            '# Testar HDFS:',
            'hdfs dfs -mkdir /test',
            'hdfs dfs -ls /',
            '',
            '# Verificar web interfaces:',
            '# NameNode: http://master:9870',
            '# ResourceManager: http://master:8088'
          ],
          validation: 'jps deve mostrar NameNode, DataNode, ResourceManager, NodeManager',
          troubleshooting: [
            'Verificar logs em $HADOOP_HOME/logs',
            'Confirmar que portas não estão em uso',
            'Verificar conectividade de rede'
          ]
        }
      ],
      deliverables: [
        'Cluster Hadoop funcional com 3 nós',
        'Documentação da configuração',
        'Scripts de inicialização automatizada',
        'Relatório de testes de funcionalidade'
      ],
      resources: [
        'Guia oficial do Hadoop',
        'Troubleshooting comum',
        'Scripts de automação',
        'Checklist de validação'
      ]
    },
    'etl-pipeline': {
      title: 'Lab 2: Pipeline ETL com Spark e Hive',
      difficulty: 'Avançado',
      duration: '4-5 horas',
      icon: Database,
      description: 'Construir pipeline ETL completo para dados de e-commerce',
      objectives: [
        'Configurar Spark e Hive no cluster',
        'Criar data lake com diferentes formatos',
        'Implementar transformações complexas',
        'Construir data warehouse dimensional',
        'Criar dashboard de análise',
        'Automatizar pipeline com Airflow'
      ],
      prerequisites: [
        'Cluster Hadoop funcionando',
        'Conhecimento de SQL',
        'Conceitos de data warehousing',
        'Python básico'
      ],
      steps: [
        {
          title: 'Configuração do Spark',
          description: 'Instalar e configurar Apache Spark',
          commands: [
            '# Baixar Spark 3.4.0:',
            'cd /opt',
            'sudo wget https://archive.apache.org/dist/spark/spark-3.4.0/spark-3.4.0-bin-hadoop3.tgz',
            '',
            '# Extrair e configurar:',
            'sudo tar -xzf spark-3.4.0-bin-hadoop3.tgz',
            'sudo mv spark-3.4.0-bin-hadoop3 spark',
            'sudo chown -R hadoop:hadoop /opt/spark',
            '',
            '# Configurar variáveis de ambiente:',
            'echo "export SPARK_HOME=/opt/spark" >> ~/.bashrc',
            'echo "export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin" >> ~/.bashrc',
            'source ~/.bashrc',
            '',
            '# Configurar Spark para usar Hadoop:',
            'cp $SPARK_HOME/conf/spark-defaults.conf.template $SPARK_HOME/conf/spark-defaults.conf',
            'echo "spark.master yarn" >> $SPARK_HOME/conf/spark-defaults.conf',
            'echo "spark.eventLog.enabled true" >> $SPARK_HOME/conf/spark-defaults.conf',
            'echo "spark.eventLog.dir hdfs://master:9000/spark-logs" >> $SPARK_HOME/conf/spark-defaults.conf'
          ],
          validation: 'spark-shell deve iniciar sem erros',
          troubleshooting: [
            'Verificar compatibilidade Spark-Hadoop',
            'Confirmar JAVA_HOME está definido',
            'Verificar conectividade com YARN'
          ]
        },
        {
          title: 'Configuração do Hive',
          description: 'Instalar e configurar Apache Hive',
          commands: [
            '# Baixar Hive 3.1.3:',
            'cd /opt',
            'sudo wget https://archive.apache.org/dist/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz',
            '',
            '# Extrair e configurar:',
            'sudo tar -xzf apache-hive-3.1.3-bin.tar.gz',
            'sudo mv apache-hive-3.1.3-bin hive',
            'sudo chown -R hadoop:hadoop /opt/hive',
            '',
            '# Configurar variáveis de ambiente:',
            'echo "export HIVE_HOME=/opt/hive" >> ~/.bashrc',
            'echo "export PATH=$PATH:$HIVE_HOME/bin" >> ~/.bashrc',
            'source ~/.bashrc',
            '',
            '# Configurar Hive para usar Hadoop:',
            'cp $HIVE_HOME/conf/hive-default.xml.template $HIVE_HOME/conf/hive-site.xml',
            '',
            '# Inicializar schema do Hive:',
            'schematool -dbType derby -initSchema'
          ],
          validation: 'hive --version deve mostrar versão 3.1.3',
          troubleshooting: [
            'Verificar compatibilidade Hive-Hadoop',
            'Confirmar Derby database foi criado',
            'Verificar permissões HDFS'
          ]
        },
        {
          title: 'Preparação dos Dados',
          description: 'Gerar e carregar dados de exemplo de e-commerce',
          commands: [
            '# Criar diretórios no HDFS:',
            'hdfs dfs -mkdir -p /data/raw/orders',
            'hdfs dfs -mkdir -p /data/raw/customers',
            'hdfs dfs -mkdir -p /data/raw/products',
            '',
            '# Gerar dados de exemplo com Python:',
            'cat > generate_data.py << EOF',
            'import csv',
            'import random',
            'from datetime import datetime, timedelta',
            '',
            '# Gerar dados de clientes',
            'customers = []',
            'for i in range(10000):',
            '    customers.append([',
            '        i+1,',
            '        f"customer_{i+1}@email.com",',
            '        random.choice(["SP", "RJ", "MG", "RS", "PR"]),',
            '        random.choice(["M", "F"]),',
            '        random.randint(18, 80)',
            '    ])',
            '',
            'with open("customers.csv", "w", newline="") as f:',
            '    writer = csv.writer(f)',
            '    writer.writerow(["customer_id", "email", "state", "gender", "age"])',
            '    writer.writerows(customers)',
            'EOF',
            '',
            'python3 generate_data.py',
            '',
            '# Carregar dados no HDFS:',
            'hdfs dfs -put customers.csv /data/raw/customers/',
            'hdfs dfs -put orders.csv /data/raw/orders/',
            'hdfs dfs -put products.csv /data/raw/products/'
          ],
          validation: 'hdfs dfs -ls /data/raw deve mostrar os arquivos',
          troubleshooting: [
            'Verificar se Python3 está instalado',
            'Confirmar permissões HDFS',
            'Verificar tamanho dos arquivos gerados'
          ]
        }
      ],
      deliverables: [
        'Pipeline ETL funcional',
        'Data warehouse dimensional',
        'Dashboard de análise',
        'Documentação técnica',
        'Scripts de automação'
      ],
      resources: [
        'Documentação Spark SQL',
        'Guia Hive DDL/DML',
        'Padrões de ETL',
        'Otimização de performance'
      ]
    },
    'realtime-analytics': {
      title: 'Lab 3: Analytics Tempo Real com Kafka e Flink',
      difficulty: 'Avançado',
      duration: '5-6 horas',
      icon: Zap,
      description: 'Sistema de detecção de fraudes em tempo real',
      objectives: [
        'Configurar Apache Kafka cluster',
        'Instalar e configurar Apache Flink',
        'Implementar produtor de eventos',
        'Criar algoritmo de detecção de fraudes',
        'Construir dashboard em tempo real',
        'Configurar alertas automáticos'
      ],
      prerequisites: [
        'Cluster Hadoop funcionando',
        'Conhecimento de streaming',
        'Java/Scala básico',
        'Conceitos de machine learning'
      ],
      steps: [
        {
          title: 'Configuração do Kafka',
          description: 'Instalar e configurar Apache Kafka',
          commands: [
            '# Baixar Kafka 2.8.2:',
            'cd /opt',
            'sudo wget https://archive.apache.org/dist/kafka/2.8.2/kafka_2.13-2.8.2.tgz',
            '',
            '# Extrair e configurar:',
            'sudo tar -xzf kafka_2.13-2.8.2.tgz',
            'sudo mv kafka_2.13-2.8.2 kafka',
            'sudo chown -R hadoop:hadoop /opt/kafka',
            '',
            '# Configurar variáveis de ambiente:',
            'echo "export KAFKA_HOME=/opt/kafka" >> ~/.bashrc',
            'echo "export PATH=$PATH:$KAFKA_HOME/bin" >> ~/.bashrc',
            'source ~/.bashrc',
            '',
            '# Iniciar Zookeeper:',
            'kafka-server-start.sh -daemon $KAFKA_HOME/config/zookeeper.properties',
            '',
            '# Iniciar Kafka:',
            'kafka-server-start.sh -daemon $KAFKA_HOME/config/server.properties',
            '',
            '# Criar tópicos:',
            'kafka-topics.sh --create --topic transactions --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1',
            'kafka-topics.sh --create --topic fraud-alerts --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1'
          ],
          validation: 'kafka-topics.sh --list deve mostrar os tópicos criados',
          troubleshooting: [
            'Verificar se Zookeeper está rodando',
            'Confirmar portas 2181 e 9092 estão livres',
            'Verificar logs do Kafka'
          ]
        }
      ],
      deliverables: [
        'Sistema de streaming funcional',
        'Algoritmo de detecção de fraudes',
        'Dashboard tempo real',
        'Sistema de alertas',
        'Documentação operacional'
      ],
      resources: [
        'Kafka Streams documentation',
        'Flink programming guide',
        'Fraud detection patterns',
        'Real-time dashboard tools'
      ]
    }
  }

  const simulateLabExecution = async (labId, stepIndex) => {
    setIsRunning(true)
    setOutput([])
    
    const lab = labs[labId]
    const step = lab.steps[stepIndex]
    
    // Simulate command execution
    for (let i = 0; i < step.commands.length; i++) {
      const command = step.commands[i]
      
      // Skip comments and empty lines
      if (command.startsWith('#') || command.trim() === '') {
        setOutput(prev => [...prev, { type: 'comment', text: command }])
        await new Promise(resolve => setTimeout(resolve, 200))
        continue
      }
      
      // Simulate command execution
      setOutput(prev => [...prev, { type: 'command', text: `$ ${command}` }])
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Simulate output based on command type
      let simulatedOutput = ''
      if (command.includes('version')) {
        simulatedOutput = 'Version 3.3.4 installed successfully ✓'
      } else if (command.includes('jps')) {
        simulatedOutput = 'NameNode\nDataNode\nResourceManager\nNodeManager'
      } else if (command.includes('hdfs dfs -ls')) {
        simulatedOutput = 'Found 2 items\ndrwxr-xr-x   - hadoop supergroup          0 2024-01-15 10:30 /test'
      } else if (command.includes('ping')) {
        simulatedOutput = '64 bytes from master: icmp_seq=1 ttl=64 time=0.5ms'
      } else if (command.includes('wget') || command.includes('tar')) {
        simulatedOutput = 'Operation completed successfully ✓'
      } else {
        simulatedOutput = 'Command executed successfully ✓'
      }
      
      if (simulatedOutput) {
        setOutput(prev => [...prev, { type: 'output', text: simulatedOutput }])
        await new Promise(resolve => setTimeout(resolve, 300))
      }
    }
    
    // Update progress
    setLabProgress(prev => ({
      ...prev,
      [labId]: {
        ...prev[labId],
        completedSteps: Math.max((prev[labId]?.completedSteps || 0), stepIndex + 1),
        currentStep: stepIndex + 1
      }
    }))
    
    setIsRunning(false)
  }

  const resetLab = (labId) => {
    setLabProgress(prev => ({
      ...prev,
      [labId]: {
        completedSteps: 0,
        currentStep: 0
      }
    }))
    setCurrentStep(0)
    setOutput([])
  }

  const selectedLabData = labs[selectedLab]
  const progress = labProgress[selectedLab] || { completedSteps: 0, currentStep: 0 }
  const progressPercentage = (progress.completedSteps / selectedLabData.steps.length) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Rocket className="h-8 w-8" />
            Laboratórios Práticos Funcionais
          </CardTitle>
          <p className="text-purple-100 text-lg">
            Experimente configurações reais com simulações interativas e feedback em tempo real
          </p>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Lab Selection Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Laboratórios Disponíveis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(labs).map(([key, lab]) => {
                const Icon = lab.icon
                const labProgress = labProgress[key] || { completedSteps: 0 }
                const isCompleted = labProgress.completedSteps === lab.steps.length
                
                return (
                  <Button
                    key={key}
                    variant={selectedLab === key ? "default" : "outline"}
                    className="w-full h-auto p-4 flex flex-col items-start text-left"
                    onClick={() => {
                      setSelectedLab(key)
                      setCurrentStep(labProgress[key]?.currentStep || 0)
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5" />
                      <Badge variant={isCompleted ? "default" : "secondary"}>
                        {lab.difficulty}
                      </Badge>
                    </div>
                    <div className="font-semibold text-sm mb-1">{lab.title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {lab.duration}
                    </div>
                    <Progress 
                      value={(labProgress.completedSteps / lab.steps.length) * 100} 
                      className="w-full h-2"
                    />
                    <div className="text-xs mt-1">
                      {labProgress.completedSteps}/{lab.steps.length} passos
                    </div>
                  </Button>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Main Lab Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Lab Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <selectedLabData.icon className="h-8 w-8 text-indigo-600" />
                  <div>
                    <CardTitle className="text-xl">{selectedLabData.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline">{selectedLabData.difficulty}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        {selectedLabData.duration}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">
                    {Math.round(progressPercentage)}%
                  </div>
                  <div className="text-sm text-gray-600">Completo</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                {selectedLabData.description}
              </p>
              <Progress value={progressPercentage} className="mt-4" />
            </CardHeader>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="steps">Passos</TabsTrigger>
              <TabsTrigger value="simulator">Simulador</TabsTrigger>
              <TabsTrigger value="resources">Recursos</TabsTrigger>
              <TabsTrigger value="validation">Validação</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Objetivos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {selectedLabData.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      Pré-requisitos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {selectedLabData.prerequisites.map((prereq, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Entregáveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedLabData.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Download className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Steps Tab */}
            <TabsContent value="steps" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Passos do Laboratório</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => resetLab(selectedLab)}
                >
                  Reiniciar Lab
                </Button>
              </div>

              <div className="space-y-4">
                {selectedLabData.steps.map((step, idx) => {
                  const isCompleted = progress.completedSteps > idx
                  const isCurrent = progress.currentStep === idx
                  const isAvailable = progress.completedSteps >= idx

                  return (
                    <Card key={idx} className={`border-l-4 ${
                      isCompleted ? 'border-green-500' : 
                      isCurrent ? 'border-blue-500' : 
                      'border-gray-300'
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-3">
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
                            disabled={!isAvailable || isRunning}
                            onClick={() => {
                              setCurrentStep(idx)
                              simulateLabExecution(selectedLab, idx)
                            }}
                          >
                            {isRunning && isCurrent ? (
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
                        <p className="text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Comandos:</h4>
                            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-60 overflow-y-auto">
                              {step.commands.slice(0, 10).map((cmd, cmdIdx) => (
                                <div key={cmdIdx} className={cmd.startsWith('#') ? 'text-gray-500' : ''}>
                                  {cmd}
                                </div>
                              ))}
                              {step.commands.length > 10 && (
                                <div className="text-gray-500 mt-2">
                                  ... e mais {step.commands.length - 10} comandos
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-green-600">Validação:</h4>
                              <p className="text-sm bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                                {step.validation}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-orange-600">Troubleshooting:</h4>
                              <ul className="text-sm space-y-1">
                                {step.troubleshooting.map((tip, tipIdx) => (
                                  <li key={tipIdx} className="flex items-start gap-2">
                                    <Lightbulb className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Simulator Tab */}
            <TabsContent value="simulator" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-6 w-6 text-green-600" />
                    Simulador de Terminal
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    Execute comandos e veja o resultado em tempo real
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Terminal Output */}
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto">
                      {output.length === 0 ? (
                        <div className="text-gray-500">
                          Terminal pronto. Execute um passo para ver os comandos...
                        </div>
                      ) : (
                        output.map((line, idx) => (
                          <div key={idx} className={`mb-1 ${
                            line.type === 'command' ? 'text-yellow-400' :
                            line.type === 'comment' ? 'text-gray-500' :
                            'text-green-400'
                          }`}>
                            {line.text}
                          </div>
                        ))
                      )}
                      {isRunning && (
                        <div className="text-blue-400 animate-pulse">
                          Executando comandos...
                        </div>
                      )}
                    </div>

                    {/* Command Input */}
                    <div className="flex gap-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Digite um comando personalizado..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && userInput.trim()) {
                            setOutput(prev => [...prev, 
                              { type: 'command', text: `$ ${userInput}` },
                              { type: 'output', text: 'Comando personalizado executado ✓' }
                            ])
                            setUserInput('')
                          }
                        }}
                      />
                      <Button
                        onClick={() => {
                          if (userInput.trim()) {
                            setOutput(prev => [...prev, 
                              { type: 'command', text: `$ ${userInput}` },
                              { type: 'output', text: 'Comando personalizado executado ✓' }
                            ])
                            setUserInput('')
                          }
                        }}
                      >
                        Executar
                      </Button>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setOutput([])}
                      >
                        Limpar Terminal
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const currentStep = selectedLabData.steps[progress.currentStep]
                          if (currentStep) {
                            simulateLabExecution(selectedLab, progress.currentStep)
                          }
                        }}
                        disabled={isRunning}
                      >
                        Executar Passo Atual
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      Recursos de Aprendizado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {selectedLabData.resources.map((resource, idx) => (
                        <li key={idx} className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-green-600" />
                      Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Guia PDF do Laboratório
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Code className="h-4 w-4 mr-2" />
                        Scripts de Automação
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Database className="h-4 w-4 mr-2" />
                        Dados de Exemplo
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Arquivos de Configuração
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Validation Tab */}
            <TabsContent value="validation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Checklist de Validação
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    Verifique se cada componente está funcionando corretamente
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedLabData.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                        {progress.completedSteps > idx ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                        )}
                        <div className="flex-1">
                          <div className="font-semibold">{step.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {step.validation}
                          </div>
                        </div>
                        <Badge variant={progress.completedSteps > idx ? "default" : "secondary"}>
                          {progress.completedSteps > idx ? "Completo" : "Pendente"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default FunctionalLabs
