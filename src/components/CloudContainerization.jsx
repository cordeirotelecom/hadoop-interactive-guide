import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Cloud, 
  Container, 
  Server, 
  Zap, 
  DollarSign,
  TrendingUp,
  Shield,
  Globe,
  Database,
  Network,
  Settings,
  CheckCircle,
  AlertTriangle,
  Code,
  Play,
  Download,
  Cpu,
  HardDrive,
  BarChart3,
  Users,
  Clock
} from 'lucide-react'

const CloudContainerization = () => {
  const [selectedProvider, setSelectedProvider] = useState('aws')
  const [deploymentType, setDeploymentType] = useState('kubernetes')

  const cloudProviders = {
    aws: {
      name: "Amazon Web Services",
      services: {
        compute: "EC2, EMR, EKS, Fargate",
        storage: "S3, EBS, EFS",
        database: "RDS, DynamoDB, Redshift",
        analytics: "EMR, Glue, Athena, Kinesis",
        ml: "SageMaker, Comprehend, Rekognition"
      },
      hadoopServices: [
        {
          name: "Amazon EMR",
          description: "Managed Hadoop framework",
          pricing: "$0.27/hour por m5.xlarge",
          features: ["Auto-scaling", "Spot instances", "Notebooks", "Security"],
          useCases: ["Big data processing", "ML workflows", "ETL jobs"]
        },
        {
          name: "Amazon EKS",
          description: "Managed Kubernetes para containers",
          pricing: "$0.10/hour cluster + nodes",
          features: ["Fargate support", "Auto-scaling", "Security", "Monitoring"],
          useCases: ["Hadoop on Kubernetes", "Microservices", "CI/CD"]
        }
      ],
      advantages: [
        "Maior ecossistema de serviços",
        "Integração nativa entre serviços",
        "Global infrastructure",
        "Mature security model"
      ],
      disadvantages: [
        "Vendor lock-in",
        "Complexidade de pricing",
        "Learning curve steep",
        "Costs can escalate"
      ],
      marketShare: "32%",
      enterprises: ["Netflix", "Airbnb", "Spotify"]
    },
    azure: {
      name: "Microsoft Azure",
      services: {
        compute: "VMs, AKS, Container Instances",
        storage: "Blob Storage, Data Lake",
        database: "SQL Database, Cosmos DB",
        analytics: "HDInsight, Synapse, Data Factory",
        ml: "Machine Learning, Cognitive Services"
      },
      hadoopServices: [
        {
          name: "Azure HDInsight",
          description: "Managed Hadoop, Spark, Kafka",
          pricing: "$0.32/hour por D3v2",
          features: ["Enterprise security", "Hybrid connectivity", "Integration", "Monitoring"],
          useCases: ["Enterprise analytics", "Real-time processing", "Data lakes"]
        },
        {
          name: "Azure Kubernetes Service",
          description: "Managed Kubernetes",
          pricing: "Free cluster + $0.096/hour nodes",
          features: ["Azure AD integration", "Virtual nodes", "Dev Spaces", "GitOps"],
          useCases: ["Container orchestration", "Microservices", "DevOps"]
        }
      ],
      advantages: [
        "Strong enterprise integration",
        "Hybrid cloud capabilities",
        "Microsoft ecosystem synergy",
        "Competitive pricing"
      ],
      disadvantages: [
        "Smaller service ecosystem",
        "Less mature than AWS",
        "Regional availability",
        "Learning curve for non-MS shops"
      ],
      marketShare: "20%",
      enterprises: ["Walmart", "H&M", "Progressive"]
    },
    gcp: {
      name: "Google Cloud Platform",
      services: {
        compute: "Compute Engine, GKE, Cloud Run",
        storage: "Cloud Storage, Persistent Disk",
        database: "Cloud SQL, Firestore, BigQuery",
        analytics: "Dataproc, Dataflow, BigQuery",
        ml: "AI Platform, AutoML, TensorFlow"
      },
      hadoopServices: [
        {
          name: "Google Dataproc",
          description: "Fast, managed Hadoop/Spark",
          pricing: "$0.01/vCPU/hour + Compute Engine",
          features: ["90-second clusters", "Preemptible instances", "Auto-scaling", "Jupyter"],
          useCases: ["Batch processing", "Machine learning", "Data migration"]
        },
        {
          name: "Google Kubernetes Engine",
          description: "Managed Kubernetes",
          pricing: "$0.10/hour cluster + nodes",
          features: ["Autopilot mode", "Binary authorization", "Istio service mesh", "Anthos"],
          useCases: ["Cloud-native apps", "Hybrid deployments", "ML pipelines"]
        }
      ],
      advantages: [
        "Superior data analytics",
        "Strong ML/AI capabilities",
        "Innovative technologies",
        "Competitive pricing"
      ],
      disadvantages: [
        "Smaller enterprise presence",
        "Limited enterprise features",
        "Fewer regions",
        "Less third-party integrations"
      ],
      marketShare: "9%",
      enterprises: ["Spotify", "Twitter", "Snapchat"]
    }
  }

  const containerizationOptions = {
    kubernetes: {
      name: "Kubernetes",
      description: "Container orchestration platform",
      complexity: "Alto",
      adoption: "78%",
      components: [
        {
          name: "Hadoop on K8s Operator",
          description: "Operator para gerenciar clusters Hadoop",
          features: ["Declarative config", "Auto-healing", "Scaling", "Upgrades"],
          maturity: "Beta"
        },
        {
          name: "Spark on Kubernetes",
          description: "Spark nativo no Kubernetes",
          features: ["Dynamic allocation", "Resource isolation", "Multi-tenancy", "Security"],
          maturity: "Stable"
        },
        {
          name: "Kafka on K8s",
          description: "Kafka usando Strimzi operator",
          features: ["Rolling updates", "Monitoring", "Security", "Multi-cluster"],
          maturity: "Stable"
        }
      ],
      benefits: [
        "Resource efficiency",
        "Auto-scaling",
        "Multi-tenancy",
        "Cloud portability",
        "DevOps integration"
      ],
      challenges: [
        "Complexity overhead",
        "Storage persistence",
        "Network performance",
        "Monitoring complexity"
      ]
    },
    docker: {
      name: "Docker Containers",
      description: "Containerização básica",
      complexity: "Médio",
      adoption: "85%",
      components: [
        {
          name: "Hadoop Docker Images",
          description: "Containers oficiais do Hadoop",
          features: ["Multi-arch support", "Security scanning", "Minimal images", "Documentation"],
          maturity: "Stable"
        },
        {
          name: "Docker Compose",
          description: "Multi-container applications",
          features: ["Service definition", "Networking", "Volumes", "Environment"],
          maturity: "Stable"
        }
      ],
      benefits: [
        "Simplicity",
        "Fast deployment",
        "Development consistency",
        "Resource isolation"
      ],
      challenges: [
        "Limited orchestration",
        "Manual scaling",
        "No high availability",
        "Production limitations"
      ]
    },
    openshift: {
      name: "Red Hat OpenShift",
      description: "Enterprise Kubernetes platform",
      complexity: "Alto",
      adoption: "25%",
      components: [
        {
          name: "OpenShift Data Foundation",
          description: "Storage para aplicações stateful",
          features: ["Persistent storage", "Backup/restore", "Disaster recovery", "Multi-cloud"],
          maturity: "Stable"
        },
        {
          name: "OpenShift Pipelines",
          description: "CI/CD nativo",
          features: ["Tekton-based", "GitOps", "Security scanning", "Multi-cluster"],
          maturity: "Stable"
        }
      ],
      benefits: [
        "Enterprise security",
        "Developer experience",
        "Hybrid cloud",
        "Support included"
      ],
      challenges: [
        "Higher costs",
        "Vendor lock-in",
        "Resource overhead",
        "Learning curve"
      ]
    }
  }

  const migrationStrategies = [
    {
      strategy: "Lift and Shift",
      description: "Migrar aplicações existentes sem modificações",
      effort: "Baixo",
      timeframe: "2-4 semanas",
      cost: "Baixo",
      benefits: ["Rápido", "Baixo risco", "Mínimas mudanças"],
      drawbacks: ["Não otimizado", "Custos altos", "Limitações"],
      bestFor: ["Proof of concept", "Migração rápida", "Aplicações legadas"],
      steps: [
        "Containerizar aplicações existentes",
        "Configurar networking básico",
        "Migrar dados",
        "Testar funcionalidade",
        "Cutover production"
      ]
    },
    {
      strategy: "Re-platforming",
      description: "Modificações mínimas para otimizar para cloud",
      effort: "Médio",
      timeframe: "1-3 meses",
      cost: "Médio",
      benefits: ["Melhor performance", "Custos otimizados", "Escalabilidade"],
      drawbacks: ["Mais complexo", "Tempo maior", "Riscos técnicos"],
      bestFor: ["Aplicações críticas", "Otimização de custos", "Escalabilidade"],
      steps: [
        "Análise de dependências",
        "Refatoração de configurações",
        "Implementar auto-scaling",
        "Otimizar storage",
        "Validação de performance"
      ]
    },
    {
      strategy: "Re-architecting",
      description: "Redesign completo para cloud-native",
      effort: "Alto",
      timeframe: "6-12 meses",
      cost: "Alto",
      benefits: ["Máxima otimização", "Cloud-native", "Inovação"],
      drawbacks: ["Alto risco", "Tempo longo", "Custos altos"],
      bestFor: ["Transformação digital", "Aplicações novas", "Vantagem competitiva"],
      steps: [
        "Design de arquitetura cloud-native",
        "Implementar microservices",
        "Serverless components",
        "Event-driven architecture",
        "Continuous deployment"
      ]
    }
  ]

  const costOptimization = {
    strategies: [
      {
        name: "Right-sizing",
        description: "Ajustar recursos às necessidades reais",
        savings: "20-30%",
        implementation: [
          "Monitorar utilização de recursos",
          "Analisar padrões de uso",
          "Ajustar instance types",
          "Implementar auto-scaling"
        ]
      },
      {
        name: "Spot/Preemptible Instances",
        description: "Usar instâncias com desconto",
        savings: "50-90%",
        implementation: [
          "Identificar workloads tolerantes a interrupção",
          "Implementar checkpointing",
          "Mixed instance types",
          "Fault-tolerant design"
        ]
      },
      {
        name: "Reserved Instances",
        description: "Compromisso de longo prazo",
        savings: "30-60%",
        implementation: [
          "Analisar padrões de uso",
          "Planejar capacidade",
          "Comprar reservas",
          "Monitorar utilização"
        ]
      }
    ],
    tools: [
      "AWS Cost Explorer",
      "Azure Cost Management",
      "Google Cloud Billing",
      "CloudHealth",
      "Cloudability"
    ]
  }

  const securityBestPractices = [
    {
      area: "Identity and Access Management",
      practices: [
        "Implementar RBAC (Role-Based Access Control)",
        "Usar service accounts para aplicações",
        "Implementar least privilege principle",
        "Regular access reviews"
      ]
    },
    {
      area: "Network Security",
      practices: [
        "Implementar network policies",
        "Usar private subnets",
        "Configurar firewalls",
        "Implementar VPN/Private connectivity"
      ]
    },
    {
      area: "Data Protection",
      practices: [
        "Encryption at rest e in transit",
        "Backup e disaster recovery",
        "Data classification",
        "Compliance monitoring"
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Cloud e Containerização Hadoop
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Modernize seus clusters Hadoop com cloud computing e containerização para máxima eficiência e escalabilidade
        </p>
      </div>

      <Tabs defaultValue="cloud" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="cloud" className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            Cloud Providers
          </TabsTrigger>
          <TabsTrigger value="containers" className="flex items-center gap-2">
            <Container className="h-4 w-4" />
            Containerização
          </TabsTrigger>
          <TabsTrigger value="migration" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Migração
          </TabsTrigger>
          <TabsTrigger value="costs" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Otimização
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Segurança
          </TabsTrigger>
        </TabsList>

        {/* Cloud Providers */}
        <TabsContent value="cloud" className="space-y-6">
          <h2 className="text-2xl font-bold">Provedores de Cloud</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {Object.entries(cloudProviders).map(([key, provider]) => (
              <Button
                key={key}
                variant={selectedProvider === key ? "default" : "outline"}
                onClick={() => setSelectedProvider(key)}
                className="h-auto p-4 flex flex-col items-center"
              >
                <div className="font-semibold">{provider.name}</div>
                <div className="text-xs mt-1">Market Share: {provider.marketShare}</div>
              </Button>
            ))}
          </div>

          {selectedProvider && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{cloudProviders[selectedProvider].name}</CardTitle>
                  <CardDescription>
                    Market Share: {cloudProviders[selectedProvider].marketShare} | 
                    Usado por: {cloudProviders[selectedProvider].enterprises.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Principais Serviços:</h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(cloudProviders[selectedProvider].services).map(([category, services]) => (
                          <div key={category}>
                            <strong className="capitalize">{category}:</strong> {services}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Vantagens:</h4>
                        <ul className="space-y-1">
                          {cloudProviders[selectedProvider].advantages.map((advantage, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              {advantage}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Desvantagens:</h4>
                        <ul className="space-y-1">
                          {cloudProviders[selectedProvider].disadvantages.map((disadvantage, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-3 w-3 text-orange-600" />
                              {disadvantage}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <h3 className="text-xl font-bold">Serviços Hadoop Gerenciados</h3>
                {cloudProviders[selectedProvider].hadoopServices.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                        <Badge variant="outline">{service.pricing}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Principais Features:</h5>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{feature}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Casos de Uso:</h5>
                          <ul className="space-y-1">
                            {service.useCases.map((useCase, idx) => (
                              <li key={idx} className="text-sm flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-blue-600" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        {/* Containerization */}
        <TabsContent value="containers" className="space-y-6">
          <h2 className="text-2xl font-bold">Estratégias de Containerização</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {Object.entries(containerizationOptions).map(([key, option]) => (
              <Button
                key={key}
                variant={deploymentType === key ? "default" : "outline"}
                onClick={() => setDeploymentType(key)}
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">{option.name}</div>
                <div className="text-xs mt-1">{option.description}</div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">{option.complexity}</Badge>
                  <Badge variant="outline">Adoção: {option.adoption}</Badge>
                </div>
              </Button>
            ))}
          </div>

          {deploymentType && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{containerizationOptions[deploymentType].name}</CardTitle>
                  <CardDescription>{containerizationOptions[deploymentType].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Benefícios:</h4>
                      <ul className="space-y-1">
                        {containerizationOptions[deploymentType].benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Desafios:</h4>
                      <ul className="space-y-1">
                        {containerizationOptions[deploymentType].challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <AlertTriangle className="h-3 w-3 text-orange-600" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Componentes e Ferramentas</h3>
                {containerizationOptions[deploymentType].components.map((component, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{component.name}</CardTitle>
                          <CardDescription>{component.description}</CardDescription>
                        </div>
                        <Badge variant={component.maturity === 'Stable' ? 'default' : 'secondary'}>
                          {component.maturity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {component.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        {/* Migration Strategies */}
        <TabsContent value="migration" className="space-y-6">
          <h2 className="text-2xl font-bold">Estratégias de Migração</h2>
          
          <div className="space-y-6">
            {migrationStrategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{strategy.strategy}</CardTitle>
                      <CardDescription className="text-base">{strategy.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={strategy.effort === 'Baixo' ? 'default' : strategy.effort === 'Médio' ? 'secondary' : 'destructive'}>
                        Esforço: {strategy.effort}
                      </Badge>
                      <Badge variant="outline">{strategy.timeframe}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Benefícios:</h4>
                        <ul className="space-y-1">
                          {strategy.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Desvantagens:</h4>
                        <ul className="space-y-1">
                          {strategy.drawbacks.map((drawback, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-3 w-3 text-orange-600" />
                              {drawback}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Melhor Para:</h4>
                        <ul className="space-y-1">
                          {strategy.bestFor.map((scenario, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-blue-600" />
                              {scenario}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Passos Principais:</h4>
                        <ol className="space-y-1">
                          {strategy.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Cost Optimization */}
        <TabsContent value="costs" className="space-y-6">
          <h2 className="text-2xl font-bold">Otimização de Custos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costOptimization.strategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    <Badge variant="default">{strategy.savings} economia</Badge>
                  </div>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h5 className="font-semibold mb-2">Implementação:</h5>
                    <ul className="space-y-1">
                      {strategy.implementation.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ferramentas de Monitoramento de Custos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {costOptimization.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <h2 className="text-2xl font-bold">Segurança em Cloud</h2>
          
          <div className="space-y-6">
            {securityBestPractices.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Modelo de Responsabilidade Compartilhada</CardTitle>
              <CardDescription>Entenda as responsabilidades entre você e o provedor de cloud</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Responsabilidade do Provedor:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Segurança física dos data centers</li>
                    <li>• Segurança da infraestrutura de rede</li>
                    <li>• Segurança do hypervisor</li>
                    <li>• Patches de segurança da plataforma</li>
                    <li>• Compliance da infraestrutura</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Sua Responsabilidade:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Configuração de segurança das aplicações</li>
                    <li>• Gerenciamento de identidades e acessos</li>
                    <li>• Criptografia de dados</li>
                    <li>• Configuração de rede e firewall</li>
                    <li>• Patches do sistema operacional</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CloudContainerization
