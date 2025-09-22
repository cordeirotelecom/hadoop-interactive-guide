import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Terminal, Play, Copy, Folder, FileText, Users, Network, Settings, Activity } from 'lucide-react'

const LinuxCommandGuide = () => {
  const [activeCategory, setActiveCategory] = useState('navigation')
  const [output, setOutput] = useState([])
  const [isExecuting, setIsExecuting] = useState(false)

  const categories = {
    navigation: {
      title: 'Navegação e Diretórios',
      icon: Folder,
      color: 'bg-blue-500',
      commands: [
        {
          name: 'pwd',
          description: 'Mostra o diretório atual',
          syntax: 'pwd',
          example: 'pwd',
          output: '/home/hadoop/workspace',
          explanation: 'O comando pwd (print working directory) exibe o caminho completo do diretório onde você está localizado atualmente no sistema de arquivos.'
        },
        {
          name: 'ls',
          description: 'Lista arquivos e diretórios',
          syntax: 'ls [opções] [diretório]',
          example: 'ls -la',
          output: 'drwxr-xr-x 3 hadoop hadoop 4096 Sep 22 10:30 .\ndrwxr-xr-x 5 hadoop hadoop 4096 Sep 22 10:25 ..\n-rw-r--r-- 1 hadoop hadoop  220 Sep 22 10:25 .bash_logout',
          explanation: 'Lista arquivos e diretórios. Opções: -l (detalhes), -a (arquivos ocultos), -h (tamanhos legíveis)'
        },
        {
          name: 'cd',
          description: 'Muda de diretório',
          syntax: 'cd [diretório]',
          example: 'cd /opt/hadoop',
          output: '',
          explanation: 'Navega para o diretório especificado. Use "cd .." para voltar, "cd ~" para home, "cd /" para raiz'
        },
        {
          name: 'mkdir',
          description: 'Cria diretórios',
          syntax: 'mkdir [opções] diretório',
          example: 'mkdir -p /opt/hadoop/logs',
          output: '',
          explanation: 'Cria novos diretórios. A opção -p cria diretórios pais se não existirem'
        }
      ]
    },
    files: {
      title: 'Manipulação de Arquivos',
      icon: FileText,
      color: 'bg-green-500',
      commands: [
        {
          name: 'cat',
          description: 'Exibe conteúdo de arquivos',
          syntax: 'cat arquivo',
          example: 'cat /opt/hadoop/etc/hadoop/core-site.xml',
          output: '<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  <property>\n    <name>fs.defaultFS</name>\n    <value>hdfs://localhost:9000</value>\n  </property>\n</configuration>',
          explanation: 'Mostra o conteúdo completo de um arquivo. Útil para arquivos pequenos e de configuração'
        },
        {
          name: 'grep',
          description: 'Busca padrões em arquivos',
          syntax: 'grep [opções] padrão arquivo',
          example: 'grep -r "defaultFS" /opt/hadoop/etc/',
          output: '/opt/hadoop/etc/hadoop/core-site.xml:    <name>fs.defaultFS</name>',
          explanation: 'Procura por padrões de texto. Opções: -r (recursivo), -i (ignorar case), -n (números das linhas)'
        },
        {
          name: 'find',
          description: 'Encontra arquivos e diretórios',
          syntax: 'find [diretório] [critérios]',
          example: 'find /opt/hadoop -name "*.xml"',
          output: '/opt/hadoop/etc/hadoop/core-site.xml\n/opt/hadoop/etc/hadoop/hdfs-site.xml\n/opt/hadoop/etc/hadoop/yarn-site.xml',
          explanation: 'Busca arquivos por nome, tipo, tamanho, data. Muito poderoso para localizar arquivos específicos'
        },
        {
          name: 'cp',
          description: 'Copia arquivos e diretórios',
          syntax: 'cp [opções] origem destino',
          example: 'cp -r /opt/hadoop/conf /backup/',
          output: '',
          explanation: 'Copia arquivos ou diretórios. Use -r para diretórios, -p para preservar permissões'
        }
      ]
    },
    processes: {
      title: 'Processos e Sistema',
      icon: Activity,
      color: 'bg-purple-500',
      commands: [
        {
          name: 'ps',
          description: 'Lista processos em execução',
          syntax: 'ps [opções]',
          example: 'ps aux | grep hadoop',
          output: 'hadoop   1234  0.5  2.1 2048576 87364 ?      Sl   10:30   0:05 java -Dproc_namenode',
          explanation: 'Mostra processos ativos. Use "aux" para todos os processos, pipe com grep para filtrar'
        },
        {
          name: 'top',
          description: 'Monitor de processos em tempo real',
          syntax: 'top',
          example: 'top',
          output: 'PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND\n1234 hadoop    20   0 2048576  87364  23456 S   5.2  2.1   0:05.43 java',
          explanation: 'Monitor interativo de processos. Mostra uso de CPU, memória em tempo real. Pressione q para sair'
        },
        {
          name: 'kill',
          description: 'Encerra processos',
          syntax: 'kill [sinal] PID',
          example: 'kill -9 1234',
          output: '',
          explanation: 'Termina processos pelo PID. Use -9 para forçar, -15 para terminar graciosamente'
        },
        {
          name: 'nohup',
          description: 'Executa comandos em background',
          syntax: 'nohup comando &',
          example: 'nohup start-dfs.sh &',
          output: 'nohup: appending output to \'nohup.out\'',
          explanation: 'Executa comandos que continuam rodando após logout. Útil para serviços do Hadoop'
        }
      ]
    },
    network: {
      title: 'Rede e Conectividade',
      icon: Network,
      color: 'bg-orange-500',
      commands: [
        {
          name: 'netstat',
          description: 'Mostra conexões de rede',
          syntax: 'netstat [opções]',
          example: 'netstat -tulpn | grep :9000',
          output: 'tcp        0      0 0.0.0.0:9000            0.0.0.0:*               LISTEN      1234/java',
          explanation: 'Lista conexões, portas abertas. Útil para verificar se serviços Hadoop estão rodando'
        },
        {
          name: 'ss',
          description: 'Substituto moderno do netstat',
          syntax: 'ss [opções]',
          example: 'ss -tulpn | grep :8088',
          output: 'tcp   LISTEN 0   128  *:8088   *:*   users:(("java",pid=5678,fd=123))',
          explanation: 'Versão mais rápida e moderna do netstat. Mostra sockets e conexões ativas'
        },
        {
          name: 'curl',
          description: 'Cliente HTTP para APIs',
          syntax: 'curl [opções] URL',
          example: 'curl http://localhost:8088/ws/v1/cluster/info',
          output: '{"clusterInfo":{"id":1442252748,"startedOn":1442252748,"state":"STARTED"}}',
          explanation: 'Testa APIs REST do Hadoop. Útil para verificar status do cluster via web services'
        },
        {
          name: 'wget',
          description: 'Download de arquivos',
          syntax: 'wget [opções] URL',
          example: 'wget https://downloads.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz',
          output: 'Saving to: hadoop-3.3.6.tar.gz',
          explanation: 'Baixa arquivos da internet. Muito usado para download de distribuições do Hadoop'
        }
      ]
    },
    permissions: {
      title: 'Permissões e Usuários',
      icon: Users,
      color: 'bg-red-500',
      commands: [
        {
          name: 'chmod',
          description: 'Altera permissões de arquivos',
          syntax: 'chmod [permissões] arquivo',
          example: 'chmod 755 /opt/hadoop/bin/hadoop',
          output: '',
          explanation: 'Modifica permissões. 755 = rwxr-xr-x (dono: ler/escrever/executar, outros: ler/executar)'
        },
        {
          name: 'chown',
          description: 'Altera proprietário',
          syntax: 'chown [usuário:grupo] arquivo',
          example: 'chown hadoop:hadoop /opt/hadoop',
          output: '',
          explanation: 'Muda o dono e grupo de arquivos. Importante para que o usuário hadoop tenha acesso'
        },
        {
          name: 'su',
          description: 'Troca de usuário',
          syntax: 'su [usuário]',
          example: 'su - hadoop',
          output: '',
          explanation: 'Muda para outro usuário. Use "su -" para carregar ambiente completo do usuário'
        },
        {
          name: 'sudo',
          description: 'Executa comandos como admin',
          syntax: 'sudo comando',
          example: 'sudo systemctl start hadoop-namenode',
          output: '',
          explanation: 'Executa comandos com privilégios administrativos. Necessário para instalações e configurações'
        }
      ]
    },
    system: {
      title: 'Sistema e Monitoramento',
      icon: Settings,
      color: 'bg-indigo-500',
      commands: [
        {
          name: 'df',
          description: 'Espaço em disco',
          syntax: 'df [opções]',
          example: 'df -h',
          output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G   15G  4.2G  79% /',
          explanation: 'Mostra uso de espaço em disco. Importante monitorar para HDFS não ficar sem espaço'
        },
        {
          name: 'free',
          description: 'Uso de memória',
          syntax: 'free [opções]',
          example: 'free -h',
          output: '               total        used        free      shared  buff/cache   available\nMem:            7.7G        2.1G        1.2G        123M        4.4G        5.2G',
          explanation: 'Exibe uso de RAM. Crucial para dimensionar heap da JVM do Hadoop adequadamente'
        },
        {
          name: 'iostat',
          description: 'Estatísticas de I/O',
          syntax: 'iostat [interval]',
          example: 'iostat 2',
          output: 'Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn\nsda              45.12       234.56       567.89    1234567    2345678',
          explanation: 'Monitora performance de I/O dos discos. Importante para otimizar performance do HDFS'
        },
        {
          name: 'systemctl',
          description: 'Gerencia serviços do sistema',
          syntax: 'systemctl [ação] [serviço]',
          example: 'systemctl status hadoop-namenode',
          output: '● hadoop-namenode.service - Hadoop NameNode\n   Loaded: loaded\n   Active: active (running)',
          explanation: 'Controla serviços do sistema. Útil para gerenciar serviços do Hadoop como daemon'
        }
      ]
    }
  }

  const executeCommand = async (command) => {
    setIsExecuting(true)
    setOutput(prev => [...prev, `$ ${command.example}`])
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (command.output) {
      setOutput(prev => [...prev, command.output])
    } else {
      setOutput(prev => [...prev, '[Comando executado com sucesso]'])
    }
    
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsExecuting(false)
  }

  const clearTerminal = () => {
    setOutput([])
  }

  const copyCommand = (command) => {
    navigator.clipboard.writeText(command.example)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Terminal className="h-8 w-8" />
            Guia Interativo de Comandos Linux para Big Data
          </CardTitle>
          <p className="text-slate-300">
            Comandos essenciais para administração de clusters Hadoop e Big Data
          </p>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Sidebar com categorias */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Categorias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(categories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <Button
                    key={key}
                    variant={activeCategory === key ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory(key)}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.title}
                  </Button>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Conteúdo principal */}
        <div className="lg:col-span-9 space-y-6">
          {/* Info da categoria */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${categories[activeCategory].color}`}>
                  {(() => {
                    const Icon = categories[activeCategory].icon
                    return <Icon className="h-6 w-6 text-white" />
                  })()}
                </div>
                <CardTitle>{categories[activeCategory].title}</CardTitle>
              </div>
            </CardHeader>
          </Card>

          {/* Lista de comandos */}
          <div className="grid gap-4">
            {categories[activeCategory].commands.map((command, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        {command.name}
                      </Badge>
                      <span className="font-semibold">{command.description}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyCommand(command)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => executeCommand(command)}
                        disabled={isExecuting}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Sintaxe:</h4>
                    <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-sm">
                      {command.syntax}
                    </code>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Exemplo:</h4>
                    <code className="block bg-blue-50 dark:bg-blue-900/20 p-2 rounded font-mono text-sm">
                      {command.example}
                    </code>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Explicação:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {command.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Terminal de output */}
          {output.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Terminal Output
                  </CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={clearTerminal}
                  >
                    Limpar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
                  {output.map((line, idx) => (
                    <div key={idx} className={line.startsWith('$') ? 'text-yellow-400 mb-2' : 'text-green-400 mb-1'}>
                      {line}
                    </div>
                  ))}
                  {isExecuting && (
                    <div className="text-blue-400 animate-pulse">
                      Executando...
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default LinuxCommandGuide