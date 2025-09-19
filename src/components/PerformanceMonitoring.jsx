import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Activity, 
  BarChart3, 
  Cpu, 
  HardDrive, 
  Network, 
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Server,
  TrendingUp,
  Eye,
  Settings,
  RefreshCw
} from 'lucide-react'

const PerformanceMonitoring = () => {
  const [activeMetrics, setActiveMetrics] = useState(true)
  const [selectedCluster, setSelectedCluster] = useState('production')

  // Simulação de métricas em tempo real
  const [metrics, setMetrics] = useState({
    cpu: 67,
    memory: 82,
    disk: 45,
    network: 23,
    hdfs: 78,
    yarn: 91
  })

  useEffect(() => {
    if (activeMetrics) {
      const interval = setInterval(() => {
        setMetrics(prev => ({
          cpu: Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 10)),
          memory: Math.max(30, Math.min(98, prev.memory + (Math.random() - 0.5) * 8)),
          disk: Math.max(10, Math.min(90, prev.disk + (Math.random() - 0.5) * 5)),
          network: Math.max(5, Math.min(80, prev.network + (Math.random() - 0.5) * 15)),
          hdfs: Math.max(40, Math.min(95, prev.hdfs + (Math.random() - 0.5) * 6)),
          yarn: Math.max(50, Math.min(99, prev.yarn + (Math.random() - 0.5) * 4))
        }))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [activeMetrics])

  const clusters = {
    production: {
      name: "Cluster Produção",
      nodes: 24,
      status: "healthy",
      uptime: "99.97%",
      jobs: 1247
    },
    staging: {
      name: "Cluster Staging", 
      nodes: 8,
      status: "warning",
      uptime: "98.45%",
      jobs: 89
    },
    development: {
      name: "Cluster Desenvolvimento",
      nodes: 4,
      status: "healthy", 
      uptime: "97.23%",
      jobs: 23
    }
  }

  const performanceTools = [
    {
      name: "Ambari",
      category: "Monitoramento",
      description: "Interface web para provisionamento, gerenciamento e monitoramento de clusters Hadoop",
      features: ["Dashboard visual", "Alertas automáticos", "Configuração centralizada", "Métricas históricas"],
      usage: "Usado por 78% das empresas",
      complexity: "Médio",
      cost: "Gratuito (Apache)",
      companies: ["Hortonworks", "IBM", "Microsoft"]
    },
    {
      name: "Cloudera Manager",
      category: "Gestão Enterprise",
      description: "Plataforma completa para gerenciamento de clusters Hadoop em ambiente corporativo",
      features: ["Auto-scaling", "Backup automático", "Security center", "Performance tuning"],
      usage: "Usado por 65% das empresas Fortune 500",
      complexity: "Alto",
      cost: "Licenciado ($15k-50k/ano)",
      companies: ["Netflix", "Airbnb", "Toyota"]
    },
    {
      name: "Ganglia",
      category: "Métricas",
      description: "Sistema de monitoramento distribuído para clusters de alta performance",
      features: ["Métricas em tempo real", "Gráficos históricos", "API REST", "Alertas customizáveis"],
      usage: "Usado por 45% dos clusters",
      complexity: "Baixo",
      cost: "Gratuito (Open Source)",
      companies: ["UC Berkeley", "NASA", "CERN"]
    },
    {
      name: "Nagios",
      category: "Alertas",
      description: "Sistema de monitoramento de infraestrutura com foco em disponibilidade",
      features: ["Monitoramento 24/7", "Notificações múltiplas", "Plugins extensivos", "Relatórios SLA"],
      usage: "Usado por 52% das organizações",
      complexity: "Médio",
      cost: "Freemium ($1,995-7,995/ano)",
      companies: ["eBay", "Fedex", "Siemens"]
    }
  ]

  const optimizationTechniques = [
    {
      area: "HDFS Performance",
      techniques: [
        {
          name: "Block Size Optimization",
          description: "Ajustar tamanho dos blocos HDFS baseado no tipo de workload",
          impact: "15-30% melhoria I/O",
          implementation: "hdfs-site.xml: dfs.blocksize=268435456 (256MB para big files)",
          when: "Arquivos > 1GB: 256MB-1GB blocks"
        },
        {
          name: "Replication Factor Tuning", 
          description: "Balancear durabilidade vs performance ajustando fator de replicação",
          impact: "20-40% redução storage, 10-15% melhoria write",
          implementation: "hdfs-site.xml: dfs.replication=2 (para dados temporários)",
          when: "Dados críticos: 3, Temporários: 2, Archive: 1"
        },
        {
          name: "Short Circuit Reads",
          description: "Permitir leitura direta de arquivos locais sem passar pelo DataNode",
          impact: "25-50% melhoria read performance",
          implementation: "hdfs-site.xml: dfs.client.read.shortcircuit=true",
          when: "Sempre ativar em clusters co-localizados"
        }
      ]
    },
    {
      area: "MapReduce Tuning",
      techniques: [
        {
          name: "Memory Configuration",
          description: "Otimizar heap size para mappers e reducers",
          impact: "30-60% redução tempo execução",
          implementation: "mapred-site.xml: mapreduce.map.memory.mb=2048",
          when: "Baseado em RAM disponível por container"
        },
        {
          name: "Combiner Usage",
          description: "Implementar combiners para reduzir dados transferidos",
          impact: "40-80% redução network I/O",
          implementation: "job.setCombinerClass(MyCombiner.class)",
          when: "Operações associativas e comutativas"
        },
        {
          name: "Compression",
          description: "Usar compressão para intermediate e output data",
          impact: "50-70% redução I/O, 20-30% speedup",
          implementation: "mapred-site.xml: mapreduce.map.output.compress=true",
          when: "Sempre, exceto dados já comprimidos"
        }
      ]
    },
    {
      area: "YARN Optimization",
      techniques: [
        {
          name: "Resource Allocation",
          description: "Configurar memory e CPU allocation adequadamente",
          impact: "25-45% melhor utilização cluster",
          implementation: "yarn-site.xml: yarn.scheduler.maximum-allocation-mb=8192",
          when: "Baseado em workload patterns"
        },
        {
          name: "Queue Configuration",
          description: "Configurar filas para diferentes tipos de jobs",
          impact: "30-50% melhoria SLA",
          implementation: "capacity-scheduler.xml: multiple queues",
          when: "Ambientes multi-tenant"
        }
      ]
    }
  ]

  const troubleshootingGuide = [
    {
      problem: "Cluster Lento",
      symptoms: ["Jobs demoram muito", "High CPU usage", "Memory pressure"],
      causes: [
        "Configuração inadequada de memória",
        "Muitos small files no HDFS", 
        "Network bottlenecks",
        "Disk I/O saturation"
      ],
      solutions: [
        "Aumentar heap size dos containers",
        "Consolidar small files com HAR ou SequenceFiles",
        "Verificar network topology",
        "Adicionar mais discos ou usar SSDs"
      ],
      commands: [
        "yarn top # Ver jobs ativos",
        "hdfs dfsadmin -report # Status HDFS",
        "iostat -x 1 # Monitor disk I/O",
        "iftop # Monitor network"
      ]
    },
    {
      problem: "HDFS Corruption",
      symptoms: ["Missing blocks", "Corrupt files", "DataNode failures"],
      causes: [
        "Hardware failures",
        "Network issues",
        "Improper shutdown",
        "Disk space full"
      ],
      solutions: [
        "Executar fsck para verificar integridade",
        "Reparar blocos corrompidos",
        "Adicionar mais DataNodes",
        "Implementar backup strategy"
      ],
      commands: [
        "hdfs fsck / -files -blocks -locations",
        "hdfs dfsadmin -safemode enter",
        "hdfs namenode -recover",
        "hdfs balancer -threshold 10"
      ]
    },
    {
      problem: "Memory Errors",
      symptoms: ["OutOfMemoryError", "GC overhead", "Container killed"],
      causes: [
        "Heap size insuficiente",
        "Memory leaks",
        "Large objects",
        "Inadequate GC settings"
      ],
      solutions: [
        "Aumentar Xmx settings",
        "Usar G1GC para large heaps",
        "Implementar object pooling",
        "Monitor com JProfiler"
      ],
      commands: [
        "jstat -gc <pid> # GC statistics",
        "jmap -histo <pid> # Heap histogram", 
        "jstack <pid> # Thread dump",
        "yarn logs -applicationId <app_id>"
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Performance e Monitoramento Hadoop
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Domine as técnicas avançadas de monitoramento, otimização e troubleshooting para clusters Hadoop em produção
        </p>
      </div>

      <Tabs defaultValue="monitoring" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="monitoring" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Monitoramento
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Métricas
          </TabsTrigger>
          <TabsTrigger value="optimization" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Otimização
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Ferramentas
          </TabsTrigger>
          <TabsTrigger value="troubleshooting" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Troubleshooting
          </TabsTrigger>
        </TabsList>

        {/* Monitoramento em Tempo Real */}
        <TabsContent value="monitoring" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Dashboard de Monitoramento</h2>
            <div className="flex gap-2">
              <Button
                variant={activeMetrics ? "default" : "outline"}
                onClick={() => setActiveMetrics(!activeMetrics)}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${activeMetrics ? 'animate-spin' : ''}`} />
                {activeMetrics ? 'Pausar' : 'Iniciar'} Métricas
              </Button>
            </div>
          </div>

          {/* Seletor de Cluster */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(clusters).map(([key, cluster]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all ${selectedCluster === key ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedCluster(key)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{cluster.name}</CardTitle>
                    <Badge variant={cluster.status === 'healthy' ? 'default' : 'destructive'}>
                      {cluster.status === 'healthy' ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
                      {cluster.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Nodes: <strong>{cluster.nodes}</strong></div>
                    <div>Uptime: <strong>{cluster.uptime}</strong></div>
                    <div>Jobs: <strong>{cluster.jobs}</strong></div>
                    <div>Status: <strong className={cluster.status === 'healthy' ? 'text-green-600' : 'text-orange-600'}>
                      {cluster.status === 'healthy' ? 'Saudável' : 'Atenção'}
                    </strong></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Métricas em Tempo Real */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
                <Cpu className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.cpu.toFixed(1)}%</div>
                <Progress value={metrics.cpu} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {metrics.cpu > 80 ? 'Alto uso' : metrics.cpu > 60 ? 'Uso moderado' : 'Uso normal'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
                <Database className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.memory.toFixed(1)}%</div>
                <Progress value={metrics.memory} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {metrics.memory > 90 ? 'Crítico' : metrics.memory > 75 ? 'Alto' : 'Normal'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Disk Usage</CardTitle>
                <HardDrive className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.disk.toFixed(1)}%</div>
                <Progress value={metrics.disk} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {metrics.disk > 85 ? 'Quase cheio' : 'Espaço disponível'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Network I/O</CardTitle>
                <Network className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.network.toFixed(1)}%</div>
                <Progress value={metrics.network} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {metrics.network > 70 ? 'Alto tráfego' : 'Tráfego normal'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">HDFS Usage</CardTitle>
                <Server className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.hdfs.toFixed(1)}%</div>
                <Progress value={metrics.hdfs} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {metrics.hdfs > 85 ? 'Expandir storage' : 'Capacidade OK'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">YARN Usage</CardTitle>
                <Zap className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.yarn.toFixed(1)}%</div>
                <Progress value={metrics.yarn} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {metrics.yarn > 95 ? 'Saturado' : 'Recursos disponíveis'}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Ferramentas de Monitoramento */}
        <TabsContent value="tools" className="space-y-6">
          <h2 className="text-2xl font-bold">Ferramentas de Monitoramento</h2>
          
          <div className="grid gap-6">
            {performanceTools.map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-base mt-1">{tool.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{tool.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Principais Funcionalidades:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Adoção no Mercado:</span>
                        <span className="text-sm">{tool.usage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Complexidade:</span>
                        <Badge variant={tool.complexity === 'Baixo' ? 'default' : tool.complexity === 'Médio' ? 'secondary' : 'destructive'}>
                          {tool.complexity}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Custo:</span>
                        <span className="text-sm">{tool.cost}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Usado por:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {tool.companies.map((company, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{company}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Otimização de Performance */}
        <TabsContent value="optimization" className="space-y-6">
          <h2 className="text-2xl font-bold">Técnicas de Otimização</h2>
          
          <div className="space-y-6">
            {optimizationTechniques.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {area.techniques.map((technique, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{technique.name}</h4>
                          <Badge variant="secondary">{technique.impact}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{technique.description}</p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <strong>Implementação:</strong>
                            <code className="block bg-gray-100 p-2 rounded mt-1 text-xs">
                              {technique.implementation}
                            </code>
                          </div>
                          <div>
                            <strong>Quando usar:</strong>
                            <p className="mt-1">{technique.when}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Troubleshooting */}
        <TabsContent value="troubleshooting" className="space-y-6">
          <h2 className="text-2xl font-bold">Guia de Troubleshooting</h2>
          
          <div className="space-y-6">
            {troubleshootingGuide.map((issue, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    {issue.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Sintomas:</h4>
                        <ul className="space-y-1">
                          {issue.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <Eye className="h-3 w-3 text-red-600" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Possíveis Causas:</h4>
                        <ul className="space-y-1">
                          {issue.causes.map((cause, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-3 w-3 text-orange-600" />
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Soluções:</h4>
                        <ul className="space-y-1">
                          {issue.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Comandos Úteis:</h4>
                        <div className="space-y-2">
                          {issue.commands.map((command, idx) => (
                            <code key={idx} className="block bg-gray-100 p-2 rounded text-xs">
                              {command}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Métricas Detalhadas */}
        <TabsContent value="metrics" className="space-y-6">
          <h2 className="text-2xl font-bold">Métricas e KPIs Essenciais</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Métricas de Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Job Completion Time</span>
                    <Badge>2.3 min avg</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Throughput (jobs/hour)</span>
                    <Badge>847 jobs</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data Processing Rate</span>
                    <Badge>1.2 TB/hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Resource Utilization</span>
                    <Badge>78.5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de Disponibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Cluster Uptime</span>
                    <Badge variant="default">99.97%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>HDFS Availability</span>
                    <Badge variant="default">99.99%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>YARN Availability</span>
                    <Badge variant="default">99.95%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mean Time to Recovery</span>
                    <Badge>4.2 min</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PerformanceMonitoring
