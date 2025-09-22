import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { Input } from "./ui/input.jsx"
import { 
  Terminal, 
  Play, 
  CheckCircle, 
  ChevronRight, 
  Book, 
  Lightbulb,
  Copy,
  RotateCcw,
  FileText,
  Folder,
  Server,
  Database,
  Network,
  Users,
  Shield,
  Monitor,
  Settings,
  HardDrive,
  Cpu,
  Activity,
  Target,
  Brain
} from 'lucide-react'

const LinuxCommandGuide = () => {
  const [currentCategory, setCurrentCategory] = useState('basics')
  const [currentCommand, setCurrentCommand] = useState(0)
  const [terminalOutput, setTerminalOutput] = useState([])
  const [userInput, setUserInput] = useState('')
  const [commandsExecuted, setCommandsExecuted] = useState({})
  const [showExplanation, setShowExplanation] = useState(true)

  const commandCategories = {
    basics: {
      title: 'Comandos Básicos do Linux',
      icon: Terminal,
      description: 'Comandos fundamentais para navegação e manipulação de arquivos',
      commands: [
        {
          command: 'pwd',
          description: 'Mostra o diretório atual (Print Working Directory)',
          explanation: 'Este comando mostra onde você está no sistema de arquivos. É muito útil para orientação.',
          example: 'pwd',
          expectedOutput: '/home/usuario',
          syntax: 'pwd',
          options: [],
          useCase: 'Verificar localização atual no sistema de arquivos'
        },
        {
          command: 'ls',
          description: 'Lista arquivos e diretórios',
          explanation: 'Lista o conteúdo do diretório atual. Com opções, pode mostrar detalhes como permissões, tamanho e data.',
          example: 'ls -la',
          expectedOutput: 'drwxr-xr-x 2 user user 4096 Jan 01 12:00 Documents\n-rw-r--r-- 1 user user 1024 Jan 01 12:00 file.txt',
          syntax: 'ls [opções] [diretório]',
          options: [
            '-l: formato longo (detalhado)',
            '-a: mostra arquivos ocultos',
            '-h: tamanhos legíveis por humanos',
            '-t: ordena por data de modificação',
            '-r: ordem reversa'
          ],
          useCase: 'Explorar conteúdo de diretórios e verificar arquivos'
        },
        {
          command: 'cd',
          description: 'Muda de diretório (Change Directory)',
          explanation: 'Navega entre diretórios. Use "cd .." para voltar um nível, "cd ~" para ir para home.',
          example: 'cd /opt/hadoop',
          expectedOutput: '[sem saída - muda para o diretório especificado]',
          syntax: 'cd [diretório]',
          options: [
            '.: diretório atual',
            '..: diretório pai',
            '~: diretório home do usuário',
            '-: diretório anterior',
            '/: diretório raiz'
          ],
          useCase: 'Navegar pela estrutura de diretórios do sistema'
        },
        {
          command: 'mkdir',
          description: 'Cria diretórios',
          explanation: 'Cria novos diretórios. Use -p para criar diretórios pais se não existirem.',
          example: 'mkdir -p /tmp/hadoop/logs',
          expectedOutput: '[cria a estrutura de diretórios]',
          syntax: 'mkdir [opções] diretório...',
          options: [
            '-p: cria diretórios pais se necessário',
            '-m: define permissões do diretório',
            '-v: modo verboso (mostra o que está sendo criado)'
          ],
          useCase: 'Criar estrutura de diretórios para projetos Hadoop'
        },
        {
          command: 'cp',
          description: 'Copia arquivos e diretórios',
          explanation: 'Copia arquivos ou diretórios. Use -r para copiar diretórios recursivamente.',
          example: 'cp -r /opt/hadoop/conf /backup/',
          expectedOutput: '[copia arquivos/diretórios para o destino]',
          syntax: 'cp [opções] origem destino',
          options: [
            '-r: copia diretórios recursivamente',
            '-p: preserva atributos (permissões, timestamps)',
            '-v: modo verboso',
            '-i: pergunta antes de sobrescrever',
            '-u: copia apenas se origem for mais nova'
          ],
          useCase: 'Backup de configurações e dados do Hadoop'
        },
        {
          command: 'mv',
          description: 'Move/renomeia arquivos e diretórios',
          explanation: 'Move arquivos ou diretórios, ou renomeia se origem e destino estão no mesmo diretório.',
          example: 'mv hadoop-3.3.6 /opt/hadoop',
          expectedOutput: '[move/renomeia o arquivo/diretório]',
          syntax: 'mv [opções] origem destino',
          options: [
            '-i: pergunta antes de sobrescrever',
            '-v: modo verboso',
            '-n: não sobrescreve arquivos existentes',
            '-f: força a operação sem perguntar'
          ],
          useCase: 'Organizar arquivos de instalação do Hadoop'
        },
        {
          command: 'rm',
          description: 'Remove arquivos e diretórios',
          explanation: 'Remove arquivos. Use -r para diretórios e CUIDADO com -f que força sem perguntar.',
          example: 'rm -rf /tmp/hadoop-temp',
          expectedOutput: '[remove arquivos/diretórios especificados]',
          syntax: 'rm [opções] arquivo...',
          options: [
            '-r: remove diretórios recursivamente',
            '-f: força remoção sem perguntar',
            '-i: pergunta antes de cada remoção',
            '-v: modo verboso'
          ],
          useCase: 'Limpar arquivos temporários e logs antigos'
        },
        {
          command: 'find',
          description: 'Busca arquivos e diretórios',
          explanation: 'Ferramenta poderosa para localizar arquivos por nome, tipo, tamanho, data, etc.',
          example: 'find /opt/hadoop -name "*.xml" -type f',
          expectedOutput: '/opt/hadoop/etc/hadoop/core-site.xml\n/opt/hadoop/etc/hadoop/hdfs-site.xml',
          syntax: 'find [caminho] [critérios] [ações]',
          options: [
            '-name: busca por nome (usar aspas)',
            '-type f: apenas arquivos',
            '-type d: apenas diretórios',
            '-size: busca por tamanho',
            '-mtime: busca por data de modificação',
            '-exec: executa comando nos resultados'
          ],
          useCase: 'Localizar arquivos de configuração do Hadoop'
        }
      ]
    },
    files: {
      title: 'Manipulação de Arquivos',
      icon: FileText,
      description: 'Comandos para edição, visualização e manipulação de arquivos',
      commands: [
        {
          command: 'cat',
          description: 'Exibe conteúdo de arquivos',
          explanation: 'Mostra todo o conteúdo de um arquivo. Para arquivos grandes, use less ou head/tail.',
          example: 'cat /opt/hadoop/etc/hadoop/core-site.xml',
          expectedOutput: '[conteúdo completo do arquivo XML]',
          syntax: 'cat [arquivo...]',
          options: [
            '-n: numera as linhas',
            '-b: numera apenas linhas não vazias',
            '-s: suprime linhas vazias repetidas',
            '-T: mostra tabs como ^I',
            '-E: mostra fim de linha como $'
          ],
          useCase: 'Verificar configurações de arquivos XML do Hadoop'
        },
        {
          command: 'less',
          description: 'Visualiza arquivos página por página',
          explanation: 'Permite navegar por arquivos grandes. Use setas, Page Up/Down, q para sair, / para buscar.',
          example: 'less /opt/hadoop/logs/hadoop-user-namenode-hostname.log',
          expectedOutput: '[visualização paginada do log]',
          syntax: 'less [arquivo]',
          options: [
            '+F: modo follow (como tail -f)',
            '+G: vai para o final do arquivo',
            '-N: mostra números de linha',
            '-S: não quebra linhas longas',
            '-i: busca case-insensitive'
          ],
          useCase: 'Analisar logs do Hadoop de forma eficiente'
        },
        {
          command: 'head',
          description: 'Mostra primeiras linhas de um arquivo',
          explanation: 'Por padrão mostra 10 primeiras linhas. Útil para ver início de logs ou arquivos.',
          example: 'head -20 /opt/hadoop/logs/hadoop.log',
          expectedOutput: '[primeiras 20 linhas do log]',
          syntax: 'head [opções] [arquivo...]',
          options: [
            '-n NUM: mostra NUM linhas',
            '-c NUM: mostra NUM bytes',
            '-q: não mostra cabeçalhos dos arquivos',
            '-v: sempre mostra cabeçalhos',
            '-f: segue o arquivo (como tail -f)'
          ],
          useCase: 'Verificar início de logs de startup do Hadoop'
        },
        {
          command: 'tail',
          description: 'Mostra últimas linhas de um arquivo',
          explanation: 'Por padrão mostra 10 últimas linhas. Com -f, acompanha mudanças em tempo real.',
          example: 'tail -f /opt/hadoop/logs/hadoop.log',
          expectedOutput: '[últimas linhas + acompanhamento em tempo real]',
          syntax: 'tail [opções] [arquivo...]',
          options: [
            '-n NUM: mostra NUM linhas',
            '-f: acompanha o arquivo (follow)',
            '-F: como -f mas recria arquivo se deletado',
            '-c NUM: mostra NUM bytes',
            '--pid=PID: termina quando processo PID morre'
          ],
          useCase: 'Monitorar logs do Hadoop em tempo real'
        },
        {
          command: 'grep',
          description: 'Busca texto em arquivos',
          explanation: 'Ferramenta poderosa para filtrar linhas que contêm padrões específicos. Suporta regex.',
          example: 'grep -i "error" /opt/hadoop/logs/*.log',
          expectedOutput: '[linhas contendo "error" (case-insensitive)]',
          syntax: 'grep [opções] padrão [arquivo...]',
          options: [
            '-i: case-insensitive',
            '-r: busca recursiva em diretórios',
            '-n: mostra números das linhas',
            '-v: inverte busca (linhas que NÃO contêm)',
            '-E: regex estendida',
            '-A NUM: mostra NUM linhas após',
            '-B NUM: mostra NUM linhas antes',
            '-C NUM: mostra NUM linhas antes e depois'
          ],
          useCase: 'Buscar erros específicos em logs do Hadoop'
        },
        {
          command: 'awk',
          description: 'Processamento avançado de texto',
          explanation: 'Linguagem de programação para manipulação de texto. Excelente para extrair campos específicos.',
          example: 'awk \'{print $1, $4}\' /var/log/access.log',
          expectedOutput: '[primeira e quarta coluna de cada linha]',
          syntax: 'awk \'programa\' [arquivo...]',
          options: [
            '-F: define separador de campo',
            '-v var=val: define variável',
            'NR: número da linha atual',
            'NF: número de campos na linha',
            '$1, $2...: campos da linha',
            'BEGIN{}: executa antes de processar',
            'END{}: executa após processar'
          ],
          useCase: 'Extrair informações específicas de logs do Hadoop'
        },
        {
          command: 'sed',
          description: 'Editor de stream para filtrar e transformar texto',
          explanation: 'Permite editar arquivos via linha de comando. Muito usado para substituições e filtragens.',
          example: 'sed -i \'s/localhost/master/g\' core-site.xml',
          expectedOutput: '[substitui todas as ocorrências de localhost por master]',
          syntax: 'sed [opções] \'comando\' [arquivo...]',
          options: [
            '-i: edita arquivo in-place',
            '-n: suprime saída automática',
            's/old/new/g: substitui old por new (global)',
            '/pattern/d: deleta linhas com pattern',
            '/pattern/p: imprime linhas com pattern',
            'NUM,NUMp: imprime linhas do intervalo'
          ],
          useCase: 'Modificar configurações XML do Hadoop automaticamente'
        },
        {
          command: 'sort',
          description: 'Ordena linhas de texto',
          explanation: 'Ordena linhas de arquivos. Útil para organizar dados antes de processamento.',
          example: 'sort -k2,2nr /tmp/hadoop-metrics.txt',
          expectedOutput: '[linhas ordenadas pela 2ª coluna, numericamente, ordem reversa]',
          syntax: 'sort [opções] [arquivo...]',
          options: [
            '-n: ordenação numérica',
            '-r: ordem reversa',
            '-k COL: ordena pela coluna COL',
            '-t CHAR: usa CHAR como separador',
            '-u: remove duplicatas',
            '-f: ignora case'
          ],
          useCase: 'Organizar métricas e logs do Hadoop para análise'
        }
      ]
    },
    permissions: {
      title: 'Permissões e Usuários',
      icon: Shield,
      description: 'Gerenciamento de permissões, usuários e grupos',
      commands: [
        {
          command: 'chmod',
          description: 'Altera permissões de arquivos e diretórios',
          explanation: 'Controla quem pode ler, escrever e executar arquivos. Usa notação octal (755) ou simbólica (u+x).',
          example: 'chmod 755 /opt/hadoop/bin/*',
          expectedOutput: '[altera permissões dos executáveis do Hadoop]',
          syntax: 'chmod [opções] modo arquivo...',
          options: [
            '755: rwxr-xr-x (proprietário: todas, grupo/outros: ler+exec)',
            '644: rw-r--r-- (proprietário: ler+escrever, outros: ler)',
            '+x: adiciona permissão de execução',
            '-w: remove permissão de escrita',
            'u+x: adiciona exec para usuário',
            'g-w: remove escrita para grupo',
            'o=r: define apenas leitura para outros'
          ],
          useCase: 'Configurar permissões corretas para instalação do Hadoop'
        },
        {
          command: 'chown',
          description: 'Altera proprietário e grupo de arquivos',
          explanation: 'Muda o dono e/ou grupo de arquivos. Necessário para configurar ambiente multi-usuário.',
          example: 'chown -R hadoop:hadoop /opt/hadoop',
          expectedOutput: '[altera proprietário recursivamente]',
          syntax: 'chown [opções] proprietário[:grupo] arquivo...',
          options: [
            '-R: recursivo (inclui subdiretórios)',
            'user: muda apenas o proprietário',
            ':group: muda apenas o grupo',
            'user:group: muda ambos',
            '--reference=ARQ: usa proprietário/grupo de ARQ como modelo'
          ],
          useCase: 'Definir proprietário correto dos arquivos do Hadoop'
        },
        {
          command: 'su',
          description: 'Muda para outro usuário',
          explanation: 'Permite trocar de usuário. Use "su -" para carregar ambiente completo do usuário.',
          example: 'su - hadoop',
          expectedOutput: '[muda para usuário hadoop com seu ambiente]',
          syntax: 'su [opções] [usuário]',
          options: [
            '-: carrega ambiente completo do usuário',
            '-c comando: executa comando como usuário',
            '-s shell: usa shell específico',
            '-l: como "-", carrega ambiente completo'
          ],
          useCase: 'Executar comandos Hadoop como usuário específico'
        },
        {
          command: 'sudo',
          description: 'Executa comandos como outro usuário (geralmente root)',
          explanation: 'Permite executar comandos com privilégios de outro usuário temporariamente.',
          example: 'sudo systemctl start hadoop-namenode',
          expectedOutput: '[executa comando como root]',
          syntax: 'sudo [opções] comando',
          options: [
            '-u user: executa como usuário específico',
            '-i: login interativo como root',
            '-s: abre shell como root',
            '-l: lista comandos permitidos',
            '-v: valida credenciais',
            '-k: invalida credenciais em cache'
          ],
          useCase: 'Instalar Hadoop e gerenciar serviços do sistema'
        },
        {
          command: 'whoami',
          description: 'Mostra o usuário atual',
          explanation: 'Comando simples que mostra qual usuário você está usando no momento.',
          example: 'whoami',
          expectedOutput: 'hadoop',
          syntax: 'whoami',
          options: [],
          useCase: 'Verificar se está executando como usuário correto'
        },
        {
          command: 'id',
          description: 'Mostra informações do usuário (ID, grupos)',
          explanation: 'Exibe ID numérico do usuário e grupos aos quais pertence.',
          example: 'id hadoop',
          expectedOutput: 'uid=1001(hadoop) gid=1001(hadoop) groups=1001(hadoop),27(sudo)',
          syntax: 'id [usuário]',
          options: [
            '-u: mostra apenas UID',
            '-g: mostra apenas GID primário',
            '-G: mostra todos os GIDs',
            '-n: mostra nomes em vez de números'
          ],
          useCase: 'Verificar configuração de usuário para Hadoop'
        }
      ]
    },
    processes: {
      title: 'Processos e Serviços',
      icon: Activity,
      description: 'Monitoramento e gerenciamento de processos',
      commands: [
        {
          command: 'ps',
          description: 'Lista processos em execução',
          explanation: 'Mostra processos ativos no sistema. Útil para verificar se serviços Hadoop estão rodando.',
          example: 'ps aux | grep java',
          expectedOutput: '[processos Java em execução, incluindo Hadoop]',
          syntax: 'ps [opções]',
          options: [
            'aux: todos os processos de todos os usuários',
            '-ef: formato completo',
            '-eo pid,ppid,cmd: colunas personalizadas',
            '--forest: mostra árvore de processos',
            '-u user: processos de usuário específico'
          ],
          useCase: 'Verificar se NameNode, DataNode e ResourceManager estão rodando'
        },
        {
          command: 'top',
          description: 'Monitor de processos em tempo real',
          explanation: 'Mostra processos ordenados por uso de CPU. Pressione q para sair, 1 para mostrar todos os CPUs.',
          example: 'top',
          expectedOutput: '[lista dinâmica de processos por uso de CPU]',
          syntax: 'top [opções]',
          options: [
            '-u user: mostra apenas processos do usuário',
            '-p PID: monitora processo específico',
            '-d segundos: intervalo de atualização',
            '-n NUM: roda NUM iterações e sai',
            '-b: modo batch (não interativo)'
          ],
          useCase: 'Monitorar performance dos processos Hadoop'
        },
        {
          command: 'htop',
          description: 'Monitor de processos melhorado',
          explanation: 'Versão mais amigável do top, com cores e interface interativa. Pode precisar instalar.',
          example: 'htop',
          expectedOutput: '[interface colorida e interativa de processos]',
          syntax: 'htop [opções]',
          options: [
            '-u user: filtra por usuário',
            '-p PID: monitora PID específico',
            '-s coluna: ordena por coluna',
            '-t: mostra árvore de processos'
          ],
          useCase: 'Interface amigável para monitorar Hadoop'
        },
        {
          command: 'kill',
          description: 'Termina processos pelo PID',
          explanation: 'Envia sinais para processos. SIGTERM (15) pede para parar, SIGKILL (9) força parada.',
          example: 'kill -15 1234',
          expectedOutput: '[envia sinal SIGTERM para processo 1234]',
          syntax: 'kill [sinal] PID...',
          options: [
            '-9: SIGKILL (força parada imediata)',
            '-15: SIGTERM (parada elegante) - padrão',
            '-1: SIGHUP (recarrega configuração)',
            '-l: lista todos os sinais disponíveis'
          ],
          useCase: 'Parar serviços Hadoop que não respondem'
        },
        {
          command: 'killall',
          description: 'Termina processos pelo nome',
          explanation: 'Similar ao kill, mas usa nome do processo em vez de PID.',
          example: 'killall -9 java',
          expectedOutput: '[termina todos os processos Java]',
          syntax: 'killall [opções] nome...',
          options: [
            '-9: força parada',
            '-15: parada elegante',
            '-u user: apenas processos do usuário',
            '-v: modo verboso',
            '-i: pergunta antes de matar cada processo'
          ],
          useCase: 'Parar todos os processos Java/Hadoop de uma vez'
        },
        {
          command: 'nohup',
          description: 'Executa comando que continua após logout',
          explanation: 'Permite que processos continuem rodando mesmo após desconectar da sessão.',
          example: 'nohup start-dfs.sh > /dev/null 2>&1 &',
          expectedOutput: '[inicia HDFS em background, imune a logout]',
          syntax: 'nohup comando [argumentos] &',
          options: [
            '&: executa em background',
            '> arquivo: redireciona saída',
            '2>&1: redireciona erros para saída',
            '< /dev/null: ignora entrada'
          ],
          useCase: 'Iniciar serviços Hadoop que devem continuar rodando'
        },
        {
          command: 'jobs',
          description: 'Lista jobs em background da sessão atual',
          explanation: 'Mostra processos que estão rodando em background na sessão atual.',
          example: 'jobs',
          expectedOutput: '[1]+ Running start-dfs.sh',
          syntax: 'jobs [opções]',
          options: [
            '-l: mostra PIDs',
            '-p: mostra apenas PIDs',
            '-r: apenas jobs rodando',
            '-s: apenas jobs parados'
          ],
          useCase: 'Verificar status de scripts Hadoop em background'
        },
        {
          command: 'systemctl',
          description: 'Gerencia serviços do sistema (systemd)',
          explanation: 'Controla serviços do sistema em distribuições modernas do Linux.',
          example: 'systemctl status hadoop-namenode',
          expectedOutput: '[status do serviço NameNode]',
          syntax: 'systemctl [comando] [serviço]',
          options: [
            'start: inicia serviço',
            'stop: para serviço',
            'restart: reinicia serviço',
            'status: mostra status',
            'enable: habilita inicialização automática',
            'disable: desabilita inicialização automática',
            'is-active: verifica se está ativo',
            'is-enabled: verifica se está habilitado'
          ],
          useCase: 'Gerenciar serviços Hadoop como serviços do sistema'
        }
      ]
    },
    network: {
      title: 'Rede e Conectividade',
      icon: Network,
      description: 'Comandos para diagnóstico e configuração de rede',
      commands: [
        {
          command: 'ping',
          description: 'Testa conectividade de rede',
          explanation: 'Verifica se um host está acessível pela rede. Útil para testar conectividade entre nós do cluster.',
          example: 'ping -c 4 worker1',
          expectedOutput: 'PING worker1 (192.168.1.101): 64 bytes from 192.168.1.101: time=0.5ms',
          syntax: 'ping [opções] destino',
          options: [
            '-c NUM: envia NUM pacotes e para',
            '-i segundos: intervalo entre pacotes',
            '-s tamanho: tamanho do pacote',
            '-t TTL: define TTL (time to live)',
            '-4: força IPv4',
            '-6: força IPv6'
          ],
          useCase: 'Verificar conectividade entre nós do cluster Hadoop'
        },
        {
          command: 'netstat',
          description: 'Mostra conexões de rede e portas',
          explanation: 'Lista portas abertas e conexões ativas. Essencial para verificar se serviços Hadoop estão escutando.',
          example: 'netstat -tulpn | grep :9000',
          expectedOutput: 'tcp 0 0 0.0.0.0:9000 0.0.0.0:* LISTEN 1234/java',
          syntax: 'netstat [opções]',
          options: [
            '-t: conexões TCP',
            '-u: conexões UDP',
            '-l: apenas portas escutando',
            '-p: mostra PID/nome do processo',
            '-n: mostra números em vez de nomes',
            '-a: todas as conexões',
            '-r: tabela de roteamento'
          ],
          useCase: 'Verificar se portas do Hadoop (9000, 9870, 8088) estão abertas'
        },
        {
          command: 'ss',
          description: 'Versão moderna do netstat',
          explanation: 'Ferramenta mais rápida e eficiente para mostrar informações de socket.',
          example: 'ss -tulpn | grep :8088',
          expectedOutput: 'tcp LISTEN 0 50 *:8088 *:* users:(("java",pid=1234,fd=123))',
          syntax: 'ss [opções]',
          options: [
            '-t: sockets TCP',
            '-u: sockets UDP',
            '-l: apenas sockets escutando',
            '-p: mostra processos',
            '-n: não resolve nomes',
            '-a: todos os sockets',
            '-4: apenas IPv4',
            '-6: apenas IPv6'
          ],
          useCase: 'Monitorar conexões de rede dos serviços Hadoop'
        },
        {
          command: 'wget',
          description: 'Baixa arquivos da internet',
          explanation: 'Ferramenta para download de arquivos via HTTP, HTTPS, FTP. Muito usada para baixar Hadoop.',
          example: 'wget https://downloads.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz',
          expectedOutput: '[progresso do download do Hadoop]',
          syntax: 'wget [opções] URL',
          options: [
            '-O arquivo: salva com nome específico',
            '-c: continua download interrompido',
            '-t NUM: número máximo de tentativas',
            '-T segundos: timeout',
            '--progress=bar: mostra barra de progresso',
            '-q: modo silencioso',
            '--no-check-certificate: ignora certificados SSL'
          ],
          useCase: 'Baixar distribuição do Hadoop e componentes do ecossistema'
        },
        {
          command: 'curl',
          description: 'Cliente HTTP versátil',
          explanation: 'Ferramenta para transferir dados com servidores. Útil para APIs REST do Hadoop.',
          example: 'curl -X GET "http://namenode:9870/webhdfs/v1/?op=LISTSTATUS"',
          expectedOutput: '[resposta JSON da API WebHDFS]',
          syntax: 'curl [opções] URL',
          options: [
            '-X método: especifica método HTTP (GET, POST, etc)',
            '-H header: adiciona cabeçalho HTTP',
            '-d dados: envia dados POST',
            '-o arquivo: salva resposta em arquivo',
            '-i: inclui cabeçalhos na saída',
            '-v: modo verboso',
            '-k: ignora certificados SSL',
            '-L: segue redirecionamentos'
          ],
          useCase: 'Interagir com APIs REST do Hadoop (WebHDFS, ResourceManager)'
        },
        {
          command: 'scp',
          description: 'Copia arquivos via SSH',
          explanation: 'Transfere arquivos entre hosts usando SSH. Essencial para distribuir configurações no cluster.',
          example: 'scp core-site.xml worker1:/opt/hadoop/etc/hadoop/',
          expectedOutput: 'core-site.xml 100% 1024 1.0MB/s 00:00',
          syntax: 'scp [opções] origem destino',
          options: [
            '-r: copia diretórios recursivamente',
            '-p: preserva timestamps e permissões',
            '-v: modo verboso',
            '-C: comprime dados durante transferência',
            '-i chave: usa chave SSH específica',
            '-P porta: usa porta SSH específica'
          ],
          useCase: 'Distribuir configurações do Hadoop para todos os nós'
        },
        {
          command: 'rsync',
          description: 'Sincronização eficiente de arquivos',
          explanation: 'Sincroniza arquivos e diretórios de forma incremental. Mais eficiente que cp para grandes volumes.',
          example: 'rsync -avz /opt/hadoop/logs/ backup-server:/backup/hadoop-logs/',
          expectedOutput: '[sincronização incremental com progresso]',
          syntax: 'rsync [opções] origem destino',
          options: [
            '-a: modo arquivo (preserva tudo)',
            '-v: modo verboso',
            '-z: comprime durante transferência',
            '-r: recursivo',
            '--delete: deleta arquivos não existentes na origem',
            '--progress: mostra progresso',
            '--dry-run: simula sem executar',
            '-e ssh: usa SSH para transferência'
          ],
          useCase: 'Backup incremental de dados e logs do Hadoop'
        }
      ]
    },
    monitoring: {
      title: 'Monitoramento do Sistema',
      icon: Monitor,
      description: 'Comandos para monitorar recursos e performance',
      commands: [
        {
          command: 'df',
          description: 'Mostra uso de espaço em disco',
          explanation: 'Exibe espaço usado e disponível em sistemas de arquivos montados.',
          example: 'df -h',
          expectedOutput: 'Filesystem Size Used Avail Use% Mounted on\n/dev/sda1 100G 45G 50G 48% /',
          syntax: 'df [opções] [filesystem...]',
          options: [
            '-h: formato legível por humanos (KB, MB, GB)',
            '-T: mostra tipo de sistema de arquivos',
            '-i: mostra informações de inodes',
            '-a: inclui sistemas de arquivos com 0 blocos',
            '--total: mostra total geral'
          ],
          useCase: 'Monitorar espaço disponível para dados do HDFS'
        },
        {
          command: 'du',
          description: 'Mostra uso de espaço por diretório',
          explanation: 'Calcula espaço usado por diretórios e arquivos específicos.',
          example: 'du -sh /opt/hadoop/logs/*',
          expectedOutput: '45M /opt/hadoop/logs/hadoop.log\n12M /opt/hadoop/logs/yarn.log',
          syntax: 'du [opções] [diretório...]',
          options: [
            '-h: formato legível por humanos',
            '-s: mostra apenas total (sumário)',
            '-a: inclui arquivos individuais',
            '-c: mostra total geral',
            '--max-depth=N: limita profundidade',
            '-x: fica no mesmo sistema de arquivos'
          ],
          useCase: 'Verificar tamanho dos logs e dados do Hadoop'
        },
        {
          command: 'free',
          description: 'Mostra uso de memória RAM e swap',
          explanation: 'Exibe memória total, usada, livre e swap. Crucial para dimensionar cluster Hadoop.',
          example: 'free -h',
          expectedOutput: 'total used free shared buff/cache available\nMem: 16Gi 8.2Gi 2.1Gi 1.0Gi 5.7Gi 6.8Gi',
          syntax: 'free [opções]',
          options: [
            '-h: formato legível por humanos',
            '-m: mostra em megabytes',
            '-g: mostra em gigabytes',
            '-s segundos: atualiza a cada N segundos',
            '-t: mostra linha de total',
            '-w: formato wide (separação de buffer e cache)'
          ],
          useCase: 'Monitorar uso de memória pelos processos Hadoop'
        },
        {
          command: 'iostat',
          description: 'Estatísticas de I/O de disco',
          explanation: 'Monitora entrada/saída de disco. Importante para performance do HDFS.',
          example: 'iostat -x 1',
          expectedOutput: '[estatísticas detalhadas de I/O atualizadas a cada segundo]',
          syntax: 'iostat [opções] [intervalo] [contagem]',
          options: [
            '-x: estatísticas estendidas',
            '-h: formato legível por humanos',
            '-k: valores em kilobytes',
            '-m: valores em megabytes',
            '-d: apenas dispositivos',
            '-c: apenas CPU'
          ],
          useCase: 'Monitorar performance de I/O dos DataNodes'
        },
        {
          command: 'vmstat',
          description: 'Estatísticas de memória virtual e sistema',
          explanation: 'Mostra informações sobre processos, memória, swap, I/O e CPU.',
          example: 'vmstat 1 10',
          expectedOutput: '[estatísticas do sistema atualizadas a cada segundo, 10 vezes]',
          syntax: 'vmstat [opções] [intervalo] [contagem]',
          options: [
            '-a: mostra memória ativa/inativa',
            '-S unidade: define unidade (k, K, m, M)',
            '-d: estatísticas de disco',
            '-p partição: estatísticas de partição específica',
            '-s: mostra contadores de memória'
          ],
          useCase: 'Monitorar performance geral do sistema durante processamento Hadoop'
        },
        {
          command: 'sar',
          description: 'Relatórios de atividade do sistema',
          explanation: 'Coleta, reporta e salva informações de atividade do sistema.',
          example: 'sar -u 1 10',
          expectedOutput: '[uso de CPU a cada segundo, 10 amostras]',
          syntax: 'sar [opções] [intervalo] [contagem]',
          options: [
            '-u: uso de CPU',
            '-r: uso de memória',
            '-d: atividade de disco',
            '-n rede: estatísticas de rede',
            '-A: todas as estatísticas',
            '-f arquivo: lê dados de arquivo'
          ],
          useCase: 'Gerar relatórios detalhados de performance do cluster'
        },
        {
          command: 'uptime',
          description: 'Mostra há quanto tempo o sistema está rodando',
          explanation: 'Exibe tempo de atividade e carga média do sistema.',
          example: 'uptime',
          expectedOutput: '14:23:45 up 7 days, 2:15, 3 users, load average: 0.15, 0.12, 0.18',
          syntax: 'uptime',
          options: [
            '-p: formato pretty (mais legível)',
            '-s: mostra desde quando está rodando'
          ],
          useCase: 'Verificar estabilidade e carga dos nós do cluster'
        },
        {
          command: 'lscpu',
          description: 'Informações detalhadas da CPU',
          explanation: 'Mostra arquitetura, número de cores, cache e outros detalhes da CPU.',
          example: 'lscpu',
          expectedOutput: 'Architecture: x86_64\nCPU(s): 8\nModel name: Intel Core i7-8550U',
          syntax: 'lscpu [opções]',
          options: [
            '-a: mostra CPUs online e offline',
            '-b: mostra apenas CPUs online',
            '-e: formato estendido',
            '-p: formato parseable'
          ],
          useCase: 'Verificar recursos de processamento disponíveis para Hadoop'
        }
      ]
    }
  }

  const executeCommand = (command) => {
    const timestamp = new Date().toLocaleTimeString()
    const newOutput = `[${timestamp}] $ ${command}\n${commandCategories[currentCategory].commands[currentCommand].expectedOutput}\n`
    setTerminalOutput(prev => [...prev, newOutput])
    
    // Mark command as executed
    const commandKey = `${currentCategory}-${currentCommand}`
    setCommandsExecuted(prev => ({ ...prev, [commandKey]: true }))
  }

  const copyCommand = (command) => {
    navigator.clipboard.writeText(command)
  }

  const resetTerminal = () => {
    setTerminalOutput([])
  }

  const nextCommand = () => {
    const maxCommands = commandCategories[currentCategory].commands.length
    if (currentCommand < maxCommands - 1) {
      setCurrentCommand(currentCommand + 1)
    }
  }

  const prevCommand = () => {
    if (currentCommand > 0) {
      setCurrentCommand(currentCommand - 1)
    }
  }

  const currentCommandData = commandCategories[currentCategory].commands[currentCommand]
  const progress = ((currentCommand + 1) / commandCategories[currentCategory].commands.length) * 100
  const commandKey = `${currentCategory}-${currentCommand}`
  const isExecuted = commandsExecuted[commandKey]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Terminal className="h-8 w-8" />
            Guia Completo de Comandos Linux para Hadoop
          </CardTitle>
          <p className="text-green-100">
            Aprenda comandos Linux essenciais com exemplos práticos focados em Big Data
          </p>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Category Selector */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Categorias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(commandCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <Button
                    key={key}
                    variant={currentCategory === key ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => {
                      setCurrentCategory(key)
                      setCurrentCommand(0)
                    }}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.title}
                  </Button>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Category Info */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {React.createElement(commandCategories[currentCategory].icon, { className: "h-6 w-6 text-blue-600" })}
                  <div>
                    <CardTitle>{commandCategories[currentCategory].title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {commandCategories[currentCategory].description}
                    </p>
                  </div>
                </div>
                <Badge variant="outline">
                  {currentCommand + 1} de {commandCategories[currentCategory].commands.length}
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progresso na categoria</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>

          {/* Command Details */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">
                    {currentCommandData.command}
                  </code>
                  {isExecuted && <CheckCircle className="h-5 w-5 text-green-600" />}
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCommand(currentCommandData.example)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => executeCommand(currentCommandData.example)}
                  >
                    <Play className="h-4 w-4" />
                    Executar
                  </Button>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {currentCommandData.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Explanation */}
              {showExplanation && (
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Como funciona:
                      </h4>
                      <p className="text-blue-700 dark:text-blue-300">
                        {currentCommandData.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Syntax */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Sintaxe:
                </h4>
                <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
                  {currentCommandData.syntax}
                </code>
              </div>

              {/* Example */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Exemplo prático:
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  $ {currentCommandData.example}
                </div>
              </div>

              {/* Options */}
              {currentCommandData.options.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Opções principais:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {currentCommandData.options.map((option, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-3 w-3 mt-1 text-gray-400 flex-shrink-0" />
                        <code className="text-blue-600">{option}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Use Case */}
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Uso no contexto Hadoop:
                </h4>
                <p className="text-green-700 dark:text-green-300">
                  {currentCommandData.useCase}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={prevCommand}
                  disabled={currentCommand === 0}
                >
                  ← Anterior
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowExplanation(!showExplanation)}
                >
                  {showExplanation ? 'Ocultar' : 'Mostrar'} explicação
                </Button>

                <Button
                  variant="outline"
                  onClick={nextCommand}
                  disabled={currentCommand === commandCategories[currentCategory].commands.length - 1}
                >
                  Próximo →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Terminal Output */}
          {terminalOutput.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Saída do Terminal
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetTerminal}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Limpar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto max-h-64 overflow-y-auto">
                  {terminalOutput.join('\n')}
                </pre>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default LinuxCommandGuide