import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  BookOpen, 
  Layers, 
  HardDrive,
  Network,
  Cpu,
  Server,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  FileText,
  Code,
  Settings,
  Target,
  Lightbulb,
  Brain,
  Clock,
  DollarSign
} from 'lucide-react'

const HadoopFundamentals = () => {
  const [selectedConcept, setSelectedConcept] = useState('big-data')
  const [currentExample, setCurrentExample] = useState(0)

  const fundamentalConcepts = {
    'big-data': {
      title: 'O que é Big Data?',
      icon: Database,
      description: 'Compreenda os fundamentos do Big Data e por que ele é crucial nos dias atuais',
      content: {
        definition: `Big Data refere-se a conjuntos de dados extremamente grandes e complexos que não podem ser processados eficientemente usando ferramentas tradicionais de processamento de dados. O termo engloba não apenas o volume dos dados, mas também sua velocidade de geração e variedade de formatos.`,
        characteristics: [
          {
            name: 'Volume',
            description: 'Quantidade massiva de dados gerados continuamente',
            examples: [
              'Facebook processa 4 petabytes de dados por dia',
              'Google processa 20+ petabytes por dia',
              'Netflix gera 1+ petabyte de dados diariamente',
              'WhatsApp processa 65 bilhões de mensagens por dia'
            ],
            impact: 'Requer infraestrutura distribuída para armazenamento e processamento'
          },
          {
            name: 'Velocidade',
            description: 'Rapidez com que os dados são gerados e precisam ser processados',
            examples: [
              'Twitter: 500 milhões de tweets por dia',
              'YouTube: 500 horas de vídeo por minuto',
              'Sensores IoT: milhões de leituras por segundo',
              'Transações financeiras: milhares por segundo'
            ],
            impact: 'Necessita processamento em tempo real ou quase real'
          },
          {
            name: 'Variedade',
            description: 'Diferentes tipos e formatos de dados',
            examples: [
              'Dados estruturados: bancos relacionais, planilhas',
              'Dados semi-estruturados: JSON, XML, logs',
              'Dados não estruturados: textos, imagens, vídeos',
              'Dados de streaming: sensores, redes sociais'
            ],
            impact: 'Exige flexibilidade no armazenamento e processamento'
          },
          {
            name: 'Veracidade',
            description: 'Qualidade e confiabilidade dos dados',
            examples: [
              'Dados incompletos ou com erros',
              'Informações conflitantes de diferentes fontes',
              'Dados desatualizados ou inconsistentes',
              'Ruído em dados de sensores'
            ],
            impact: 'Requer técnicas de limpeza e validação de dados'
          },
          {
            name: 'Valor',
            description: 'Capacidade de extrair insights úteis dos dados',
            examples: [
              'Recomendações personalizadas (Netflix, Amazon)',
              'Detecção de fraudes em tempo real',
              'Otimização de rotas (Uber, Waze)',
              'Previsão de demanda e estoque'
            ],
            impact: 'Objetivo final: transformar dados em valor de negócio'
          }
        ],
        challenges: [
          {
            challenge: 'Armazenamento',
            description: 'Como armazenar petabytes de dados de forma eficiente e econômica',
            solution: 'Sistemas distribuídos como HDFS que replicam dados em múltiplos servidores'
          },
          {
            challenge: 'Processamento',
            description: 'Como processar grandes volumes em tempo hábil',
            solution: 'Processamento paralelo e distribuído usando frameworks como MapReduce e Spark'
          },
          {
            challenge: 'Análise',
            description: 'Como extrair insights significativos de dados complexos',
            solution: 'Ferramentas de analytics e machine learning distribuído'
          },
          {
            challenge: 'Governança',
            description: 'Como garantir qualidade, segurança e compliance',
            solution: 'Ferramentas de catalogação, lineage e controle de acesso'
          }
        ],
        businessImpact: [
          {
            area: 'E-commerce',
            impact: 'Sistemas de recomendação aumentam vendas em 10-30%',
            example: 'Amazon: 35% das vendas vêm de recomendações'
          },
          {
            area: 'Saúde',
            impact: 'Análise preditiva reduz readmissões hospitalares em 25%',
            example: 'IBM Watson Health analisa milhões de registros médicos'
          },
          {
            area: 'Finanças',
            impact: 'Detecção de fraudes em tempo real economiza bilhões',
            example: 'PayPal previne $2B+ em fraudes anualmente'
          },
          {
            area: 'Transporte',
            impact: 'Otimização de rotas reduz custos em 15-20%',
            example: 'UPS economiza $400M/ano com otimização de rotas'
          }
        ]
      }
    },
    'hadoop-intro': {
      title: 'Introdução ao Apache Hadoop',
      icon: Server,
      description: 'História, evolução e importância do Hadoop no ecossistema Big Data',
      content: {
        history: {
          title: 'História e Evolução',
          timeline: [
            {
              year: '2003-2004',
              event: 'Google publica papers sobre GFS e MapReduce',
              impact: 'Estabelece fundamentos teóricos para processamento distribuído'
            },
            {
              year: '2005',
              event: 'Doug Cutting cria Hadoop no Yahoo!',
              impact: 'Primeira implementação open-source dos conceitos do Google'
            },
            {
              year: '2008',
              event: 'Hadoop se torna projeto Apache top-level',
              impact: 'Ganha suporte da comunidade e empresas'
            },
            {
              year: '2011',
              event: 'Introdução do YARN (Hadoop 2.0)',
              impact: 'Separa gerenciamento de recursos do processamento'
            },
            {
              year: '2017',
              event: 'Hadoop 3.0 com melhorias significativas',
              impact: 'Suporte a containers, erasure coding, múltiplos NameNodes'
            }
          ]
        },
        philosophy: {
          title: 'Filosofia e Princípios',
          principles: [
            {
              principle: 'Scale-out vs Scale-up',
              description: 'Usar muitos servidores comuns ao invés de poucos servidores caros',
              benefit: 'Reduz custos e aumenta flexibilidade',
              example: 'Cluster de 1000 servidores de $2k vs 10 servidores de $200k'
            },
            {
              principle: 'Mover Computação, não Dados',
              description: 'Processar dados onde eles estão armazenados',
              benefit: 'Reduz tráfego de rede e melhora performance',
              example: 'MapReduce executa tasks nos mesmos nós onde os dados estão'
            },
            {
              principle: 'Tolerância a Falhas',
              description: 'Assumir que falhas são normais e se preparar para elas',
              benefit: 'Sistema continua funcionando mesmo com falhas de hardware',
              example: 'HDFS replica dados 3x por padrão'
            },
            {
              principle: 'Simplicidade',
              description: 'Manter a arquitetura simples e robusta',
              benefit: 'Facilita manutenção e reduz pontos de falha',
              example: 'HDFS usa modelo simples de write-once, read-many'
            }
          ]
        },
        advantages: [
          {
            advantage: 'Custo-Efetivo',
            description: 'Usa hardware commodity ao invés de servidores especializados',
            savings: 'Redução de 60-80% nos custos de infraestrutura',
            details: [
              'Servidores x86 comuns custam 10x menos que mainframes',
              'Licenciamento open-source elimina custos de software',
              'Escalabilidade linear reduz over-provisioning'
            ]
          },
          {
            advantage: 'Escalabilidade Horizontal',
            description: 'Adiciona capacidade simplesmente adicionando mais nós',
            savings: 'Crescimento incremental conforme necessidade',
            details: [
              'Clusters podem crescer de 3 para 10.000+ nós',
              'Performance cresce linearmente com número de nós',
              'Não há limite teórico de escalabilidade'
            ]
          },
          {
            advantage: 'Flexibilidade de Dados',
            description: 'Processa qualquer tipo de dado sem schema pré-definido',
            savings: 'Reduz tempo de preparação de dados em 70%',
            details: [
              'Schema-on-read vs schema-on-write',
              'Suporta dados estruturados, semi e não estruturados',
              'Não requer transformação prévia dos dados'
            ]
          },
          {
            advantage: 'Tolerância a Falhas',
            description: 'Continua operando mesmo com falhas de hardware',
            savings: 'Reduz downtime e custos de manutenção',
            details: [
              'Replicação automática de dados',
              'Re-execução automática de tasks falhadas',
              'Detecção e isolamento de nós problemáticos'
            ]
          }
        ],
        useCases: [
          {
            category: 'Data Warehousing',
            description: 'Armazenamento e análise de grandes volumes históricos',
            companies: ['Walmart', 'eBay', 'LinkedIn'],
            benefits: ['Redução de custos em 90%', 'Capacidade 100x maior', 'Queries mais rápidas'],
            implementation: 'Hive para SQL, Parquet para storage otimizado'
          },
          {
            category: 'Log Processing',
            description: 'Análise de logs de aplicações e servidores',
            companies: ['Facebook', 'Twitter', 'Netflix'],
            benefits: ['Análise em tempo real', 'Detecção de anomalias', 'Troubleshooting'],
            implementation: 'Flume para ingestão, Spark para processamento'
          },
          {
            category: 'Machine Learning',
            description: 'Treinamento de modelos em grandes datasets',
            companies: ['Spotify', 'Uber', 'Airbnb'],
            benefits: ['Modelos mais precisos', 'Processamento paralelo', 'Feature engineering'],
            implementation: 'Spark MLlib, TensorFlow on Spark'
          },
          {
            category: 'ETL/ELT',
            description: 'Transformação e preparação de dados',
            companies: ['Bank of America', 'JPMorgan', 'Goldman Sachs'],
            benefits: ['Processamento batch eficiente', 'Transformações complexas', 'Data quality'],
            implementation: 'Spark, Hive, Pig para transformações'
          }
        ]
      }
    },
    'distributed-computing': {
      title: 'Computação Distribuída',
      icon: Network,
      description: 'Conceitos fundamentais de sistemas distribuídos aplicados ao Hadoop',
      content: {
        concepts: [
          {
            concept: 'Paralelização',
            description: 'Dividir trabalho entre múltiplos processadores simultaneamente',
            hadoopExample: 'MapReduce divide job em tasks paralelas',
            benefits: ['Reduz tempo de processamento', 'Utiliza recursos eficientemente'],
            challenges: ['Coordenação entre tasks', 'Balanceamento de carga'],
            realWorld: 'Processar 1TB de dados: 1 máquina = 10 horas, 100 máquinas = 6 minutos'
          },
          {
            concept: 'Distribuição',
            description: 'Espalhar dados e processamento por múltiplos nós',
            hadoopExample: 'HDFS distribui blocos por diferentes DataNodes',
            benefits: ['Elimina gargalos', 'Melhora disponibilidade'],
            challenges: ['Consistência de dados', 'Latência de rede'],
            realWorld: 'Netflix distribui conteúdo por 1000+ servidores globalmente'
          },
          {
            concept: 'Replicação',
            description: 'Manter múltiplas cópias dos dados para redundância',
            hadoopExample: 'HDFS replica cada bloco 3 vezes por padrão',
            benefits: ['Tolerância a falhas', 'Melhora performance de leitura'],
            challenges: ['Overhead de storage', 'Sincronização'],
            realWorld: 'Google replica dados em 3+ datacenters diferentes'
          },
          {
            concept: 'Particionamento',
            description: 'Dividir dados em partições menores e gerenciáveis',
            hadoopExample: 'HDFS divide arquivos em blocos de 128MB',
            benefits: ['Processamento paralelo', 'Balanceamento de carga'],
            challenges: ['Hotspots', 'Skew de dados'],
            realWorld: 'Uber particiona dados por cidade para otimizar queries'
          }
        ],
        challenges: [
          {
            challenge: 'Teorema CAP',
            description: 'Impossível ter Consistência, Disponibilidade e Tolerância a Partições simultaneamente',
            hadoopApproach: 'HDFS prioriza Consistência e Tolerância a Partições',
            tradeoffs: 'NameNode único pode ser ponto de falha (resolvido com HA)',
            solutions: ['NameNode HA', 'Federation', 'Backup NameNode']
          },
          {
            challenge: 'Consenso Distribuído',
            description: 'Como múltiplos nós concordam sobre o estado do sistema',
            hadoopApproach: 'NameNode como autoridade central para metadados',
            tradeoffs: 'Simplifica consenso mas cria gargalo',
            solutions: ['ZooKeeper para coordenação', 'Raft consensus', 'HDFS Federation']
          },
          {
            challenge: 'Detecção de Falhas',
            description: 'Identificar quando nós ou componentes falham',
            hadoopApproach: 'Heartbeats entre DataNodes e NameNode',
            tradeoffs: 'Pode haver falsos positivos/negativos',
            solutions: ['Múltiplos heartbeats', 'Health checks', 'Monitoring distribuído']
          }
        ],
        patterns: [
          {
            pattern: 'Master-Slave',
            description: 'Um nó coordenador (master) gerencia múltiplos workers (slaves)',
            hadoopExample: 'NameNode (master) coordena DataNodes (slaves)',
            pros: ['Coordenação centralizada', 'Simplicidade'],
            cons: ['Ponto único de falha', 'Gargalo de performance'],
            evolution: 'Hadoop 3.0 suporta múltiplos NameNodes'
          },
          {
            pattern: 'Map-Reduce',
            description: 'Dividir processamento em fases de mapeamento e redução',
            hadoopExample: 'MapReduce framework do Hadoop',
            pros: ['Paralelização automática', 'Tolerância a falhas'],
            cons: ['Overhead de I/O', 'Não ideal para iterações'],
            evolution: 'Spark oferece processamento in-memory'
          },
          {
            pattern: 'Shared-Nothing',
            description: 'Cada nó opera independentemente sem compartilhar recursos',
            hadoopExample: 'Cada DataNode gerencia seu próprio storage',
            pros: ['Escalabilidade linear', 'Isolamento de falhas'],
            cons: ['Complexidade de coordenação', 'Duplicação de dados'],
            evolution: 'Kubernetes para orquestração de containers'
          }
        ]
      }
    },
    'hdfs-deep': {
      title: 'HDFS - Sistema de Arquivos Distribuído',
      icon: HardDrive,
      description: 'Arquitetura detalhada e funcionamento interno do HDFS',
      content: {
        architecture: {
          namenode: {
            role: 'Gerencia metadados e namespace do sistema de arquivos',
            responsibilities: [
              'Manter árvore de diretórios e metadados de arquivos',
              'Mapear blocos para DataNodes',
              'Processar requisições de clientes',
              'Coordenar operações de replicação',
              'Gerenciar leases de arquivos'
            ],
            dataStructures: [
              'FSImage: snapshot do namespace',
              'EditLog: log de transações',
              'BlockMap: mapeamento bloco -> DataNodes',
              'LeaseManager: controle de acesso exclusivo'
            ],
            performance: 'Suporta 100M+ arquivos e 1000+ DataNodes',
            limitations: 'Gargalo para operações de metadados'
          },
          datanode: {
            role: 'Armazena blocos de dados e serve requisições de leitura/escrita',
            responsibilities: [
              'Armazenar blocos em sistema de arquivos local',
              'Servir requisições de leitura de clientes',
              'Executar operações de escrita coordenadas pelo NameNode',
              'Reportar status de blocos via heartbeat',
              'Participar de pipeline de replicação'
            ],
            storage: [
              'Blocos armazenados como arquivos no filesystem local',
              'Cada bloco tem arquivo de metadados associado',
              'Checksum para verificação de integridade',
              'Múltiplos diretórios para distribuir I/O'
            ],
            performance: 'Cada DataNode pode armazenar 10TB+ de dados',
            scalability: 'Clusters podem ter 10.000+ DataNodes'
          }
        },
        dataFlow: {
          write: {
            steps: [
              {
                step: 1,
                action: 'Cliente solicita criação de arquivo ao NameNode',
                details: 'NameNode verifica permissões e disponibilidade do namespace'
              },
              {
                step: 2,
                action: 'NameNode retorna lista de DataNodes para primeiro bloco',
                details: 'Seleção baseada em rack awareness e carga dos nós'
              },
              {
                step: 3,
                action: 'Cliente estabelece pipeline com DataNodes',
                details: 'Pipeline de replicação para garantir durabilidade'
              },
              {
                step: 4,
                action: 'Dados são escritos em pipeline',
                details: 'Cada DataNode escreve e repassa para próximo no pipeline'
              },
              {
                step: 5,
                action: 'Confirmação de escrita propagada de volta',
                details: 'ACK confirma que todas as réplicas foram escritas'
              }
            ],
            optimizations: [
              'Write pipelining para paralelizar replicação',
              'Rack awareness para otimizar placement',
              'Checksums para detectar corrupção',
              'Append support para logs e streaming'
            ]
          },
          read: {
            steps: [
              {
                step: 1,
                action: 'Cliente solicita localização de blocos ao NameNode',
                details: 'NameNode retorna lista de DataNodes para cada bloco'
              },
              {
                step: 2,
                action: 'Cliente conecta diretamente aos DataNodes',
                details: 'Bypass do NameNode para operações de dados'
              },
              {
                step: 3,
                action: 'DataNodes servem blocos solicitados',
                details: 'Leitura paralela de múltiplos blocos simultaneamente'
              },
              {
                step: 4,
                action: 'Cliente reconstrói arquivo original',
                details: 'Concatenação de blocos na ordem correta'
              }
            ],
            optimizations: [
              'Short-circuit reads para dados locais',
              'Hedged reads para reduzir latência',
              'Client-side caching de metadados',
              'Speculative execution para reads lentos'
            ]
          }
        },
        replication: {
          strategy: 'Política de replicação inteligente baseada em rack awareness',
          defaultPolicy: [
            'Primeira réplica: mesmo nó do cliente (se possível)',
            'Segunda réplica: nó diferente no mesmo rack',
            'Terceira réplica: nó em rack diferente'
          ],
          benefits: [
            'Tolerância a falhas de nó e rack',
            'Balanceamento de carga de leitura',
            'Otimização de largura de banda de rede',
            'Melhoria de localidade de dados'
          ],
          mechanisms: [
            'Replication Monitor detecta under-replicated blocks',
            'Excess Replication Monitor remove réplicas desnecessárias',
            'Block Scanner verifica integridade periodicamente',
            'Balancer redistribui dados entre DataNodes'
          ]
        },
        consistency: {
          model: 'Strong consistency para metadados, eventual consistency para dados',
          guarantees: [
            'Operações de metadados são atômicas',
            'Leituras sempre veem última versão commitada',
            'Escritas são visíveis após close() do arquivo',
            'Append operations são atômicas'
          ],
          challenges: [
            'Replica inconsistency durante falhas',
            'Split-brain scenarios com NameNode HA',
            'Clock skew entre nós do cluster',
            'Network partitions'
          ],
          solutions: [
            'Generation timestamps para detectar stale replicas',
            'Fencing mechanisms para prevent split-brain',
            'Checksums para detectar silent corruption',
            'Quorum-based decisions para HA'
          ]
        }
      }
    }
  }

  const practicalExamples = [
    {
      title: 'Exemplo Prático: Sistema de Logs de E-commerce',
      scenario: 'Uma empresa de e-commerce processa 10TB de logs diários',
      traditional: {
        approach: 'Servidor único com banco relacional',
        problems: [
          'Processamento leva 24+ horas',
          'Servidor custa $100k+ e tem limite de escala',
          'Falha do servidor para todo o sistema',
          'Queries complexas travam o sistema'
        ],
        cost: '$500k/ano em infraestrutura'
      },
      hadoop: {
        approach: 'Cluster Hadoop com 50 nós commodity',
        benefits: [
          'Processamento em 2-3 horas com paralelização',
          'Custo total $150k (50 servidores x $3k)',
          'Falha de 5-10 nós não afeta operação',
          'Múltiplas queries simultâneas'
        ],
        cost: '$150k/ano em infraestrutura',
        savings: '70% de redução de custos'
      },
      implementation: {
        ingestion: 'Flume coleta logs em tempo real',
        storage: 'HDFS armazena com replicação 3x',
        processing: 'Spark processa dados em paralelo',
        analysis: 'Hive permite queries SQL nos dados'
      }
    },
    {
      title: 'Exemplo Prático: Análise de Comportamento de Usuários',
      scenario: 'Startup analisa comportamento de 1M usuários',
      traditional: {
        approach: 'Data warehouse tradicional',
        problems: [
          'Licenças custam $1M+/ano',
          'Schema rígido dificulta mudanças',
          'Não processa dados não-estruturados',
          'Escalabilidade limitada'
        ],
        cost: '$2M/ano total'
      },
      hadoop: {
        approach: 'Data Lake com Hadoop ecosystem',
        benefits: [
          'Open source elimina custos de licença',
          'Schema-on-read permite flexibilidade',
          'Processa logs, JSONs, imagens, vídeos',
          'Escala conforme crescimento da startup'
        ],
        cost: '$200k/ano total',
        savings: '90% de redução de custos'
      },
      implementation: {
        ingestion: 'Kafka streams dados em tempo real',
        storage: 'HDFS + HBase para dados estruturados',
        processing: 'Spark ML para análise comportamental',
        visualization: 'Tableau conectado via Spark SQL'
      }
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Brain className="h-8 w-8" />
            Fundamentos Detalhados do Hadoop
          </CardTitle>
          <p className="text-indigo-100 text-lg">
            Compreensão profunda dos conceitos, arquitetura e funcionamento interno do ecossistema Hadoop
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="concepts" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="concepts">Conceitos Fundamentais</TabsTrigger>
          <TabsTrigger value="examples">Exemplos Práticos</TabsTrigger>
          <TabsTrigger value="deep-dive">Análise Técnica</TabsTrigger>
          <TabsTrigger value="comparison">Comparações</TabsTrigger>
        </TabsList>

        {/* Concepts Tab */}
        <TabsContent value="concepts" className="space-y-6">
          {/* Concept Selection */}
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(fundamentalConcepts).map(([key, concept]) => {
              const Icon = concept.icon
              return (
                <Button
                  key={key}
                  variant={selectedConcept === key ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col items-center text-center"
                  onClick={() => setSelectedConcept(key)}
                >
                  <Icon className="h-8 w-8 mb-2" />
                  <div className="font-semibold text-sm">{concept.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {concept.description}
                  </div>
                </Button>
              )
            })}
          </div>

          {/* Selected Concept Details */}
          {selectedConcept && (() => {
            const concept = fundamentalConcepts[selectedConcept]
            const Icon = concept.icon
            
            return (
              <Card className="border-indigo-200 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-indigo-600" />
                    {concept.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">{concept.description}</p>
                </CardHeader>
                <CardContent>
                  {selectedConcept === 'big-data' && (
                    <div className="space-y-8">
                      {/* Definition */}
                      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">
                          Definição Completa
                        </h3>
                        <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                          {concept.content.definition}
                        </p>
                      </div>

                      {/* 5 V's */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Os 5 V's do Big Data</h3>
                        <div className="space-y-6">
                          {concept.content.characteristics.map((char, idx) => (
                            <Card key={idx} className="border-l-4 border-indigo-500">
                              <CardHeader>
                                <CardTitle className="text-lg text-indigo-600">
                                  {char.name}
                                </CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {char.description}
                                </p>
                              </CardHeader>
                              <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="font-semibold mb-3">Exemplos Reais:</h4>
                                    <ul className="space-y-2">
                                      {char.examples.map((example, exIdx) => (
                                        <li key={exIdx} className="flex items-start gap-2">
                                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                          <span className="text-sm">{example}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-3">Impacto Técnico:</h4>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                      <p className="text-sm">{char.impact}</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Desafios e Soluções</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {concept.content.challenges.map((challenge, idx) => (
                            <Card key={idx}>
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <AlertCircle className="h-5 w-5 text-orange-500" />
                                  {challenge.challenge}
                                </CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {challenge.description}
                                </p>
                              </CardHeader>
                              <CardContent>
                                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                                    Solução Hadoop:
                                  </h4>
                                  <p className="text-green-700 dark:text-green-300 text-sm">
                                    {challenge.solution}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Business Impact */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Impacto nos Negócios</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {concept.content.businessImpact.map((impact, idx) => (
                            <Card key={idx}>
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <TrendingUp className="h-5 w-5 text-green-500" />
                                  {impact.area}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <div className="bg-green-100 dark:bg-green-900 rounded-lg p-3">
                                    <p className="font-semibold text-green-800 dark:text-green-200">
                                      {impact.impact}
                                    </p>
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Exemplo:</strong> {impact.example}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedConcept === 'hadoop-intro' && (
                    <div className="space-y-8">
                      {/* Timeline */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Linha do Tempo</h3>
                        <div className="space-y-4">
                          {concept.content.history.timeline.map((event, idx) => (
                            <div key={idx} className="flex gap-4">
                              <div className="flex-shrink-0 w-20 text-center">
                                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                                  {event.year}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold mb-2">{event.event}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                  {event.impact}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Philosophy */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Filosofia e Princípios</h3>
                        <div className="space-y-6">
                          {concept.content.philosophy.principles.map((principle, idx) => (
                            <Card key={idx} className="border-l-4 border-purple-500">
                              <CardHeader>
                                <CardTitle className="text-lg text-purple-600">
                                  {principle.principle}
                                </CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {principle.description}
                                </p>
                              </CardHeader>
                              <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold mb-2 text-green-600">Benefício:</h4>
                                    <p className="text-sm">{principle.benefit}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2 text-blue-600">Exemplo:</h4>
                                    <p className="text-sm">{principle.example}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Advantages */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Vantagens Detalhadas</h3>
                        <div className="space-y-6">
                          {concept.content.advantages.map((adv, idx) => (
                            <Card key={idx}>
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <DollarSign className="h-5 w-5 text-green-500" />
                                  {adv.advantage}
                                </CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {adv.description}
                                </p>
                                <div className="bg-green-100 dark:bg-green-900 rounded-lg p-3 mt-3">
                                  <p className="font-semibold text-green-800 dark:text-green-200">
                                    💰 {adv.savings}
                                  </p>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <h4 className="font-semibold mb-3">Detalhes:</h4>
                                <ul className="space-y-2">
                                  {adv.details.map((detail, detIdx) => (
                                    <li key={detIdx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h3 className="font-bold text-xl mb-6">Casos de Uso Principais</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {concept.content.useCases.map((useCase, idx) => (
                            <Card key={idx}>
                              <CardHeader>
                                <CardTitle className="text-lg">{useCase.category}</CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {useCase.description}
                                </p>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Empresas:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {useCase.companies.map((company, compIdx) => (
                                      <Badge key={compIdx} variant="outline">
                                        {company}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Benefícios:</h4>
                                  <ul className="space-y-1">
                                    {useCase.benefits.map((benefit, benIdx) => (
                                      <li key={benIdx} className="text-sm flex items-center gap-2">
                                        <CheckCircle className="h-3 w-3 text-green-500" />
                                        {benefit}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Implementação:</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {useCase.implementation}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add similar detailed content for other concepts */}
                </CardContent>
              </Card>
            )
          })()}
        </TabsContent>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Exemplos Práticos Detalhados</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentExample(Math.max(0, currentExample - 1))}
                disabled={currentExample === 0}
              >
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentExample(Math.min(practicalExamples.length - 1, currentExample + 1))}
                disabled={currentExample === practicalExamples.length - 1}
              >
                Próximo
              </Button>
            </div>
          </div>

          {practicalExamples[currentExample] && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  {practicalExamples[currentExample].title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  {practicalExamples[currentExample].scenario}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Traditional Approach */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-red-600">
                      ❌ Abordagem Tradicional
                    </h3>
                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="p-4">
                        <p className="font-semibold mb-3">
                          {practicalExamples[currentExample].traditional.approach}
                        </p>
                        <h4 className="font-semibold mb-2">Problemas:</h4>
                        <ul className="space-y-2 mb-4">
                          {practicalExamples[currentExample].traditional.problems.map((problem, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              {problem}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-red-100 dark:bg-red-900 rounded-lg p-3">
                          <p className="font-bold text-red-800 dark:text-red-200">
                            💸 Custo: {practicalExamples[currentExample].traditional.cost}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Hadoop Approach */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-green-600">
                      ✅ Solução Hadoop
                    </h3>
                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="p-4">
                        <p className="font-semibold mb-3">
                          {practicalExamples[currentExample].hadoop.approach}
                        </p>
                        <h4 className="font-semibold mb-2">Benefícios:</h4>
                        <ul className="space-y-2 mb-4">
                          {practicalExamples[currentExample].hadoop.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-green-100 dark:bg-green-900 rounded-lg p-3 mb-3">
                          <p className="font-bold text-green-800 dark:text-green-200">
                            💰 Custo: {practicalExamples[currentExample].hadoop.cost}
                          </p>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
                          <p className="font-bold text-blue-800 dark:text-blue-200">
                            📈 Economia: {practicalExamples[currentExample].hadoop.savings}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Implementação Técnica</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(practicalExamples[currentExample].implementation).map(([key, value]) => (
                      <Card key={key}>
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold capitalize mb-2">{key}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-center">
            <div className="flex gap-2">
              {practicalExamples.map((_, idx) => (
                <Button
                  key={idx}
                  variant={currentExample === idx ? "default" : "outline"}
                  size="sm"
                  className="w-8 h-8 p-0"
                  onClick={() => setCurrentExample(idx)}
                >
                  {idx + 1}
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Deep Dive Tab */}
        <TabsContent value="deep-dive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise Técnica Profunda</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                Detalhes técnicos avançados sobre arquitetura e funcionamento interno
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Conteúdo técnico avançado em desenvolvimento...
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comparison Tab */}
        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comparações Detalhadas</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                Hadoop vs outras tecnologias e abordagens
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Comparações detalhadas em desenvolvimento...
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default HadoopFundamentals
