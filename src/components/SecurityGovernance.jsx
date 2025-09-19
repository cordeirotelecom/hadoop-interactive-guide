import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  UserCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  Database,
  Network,
  Server,
  Users,
  Settings,
  Zap,
  Globe,
  Building2
} from 'lucide-react'

const SecurityGovernance = () => {
  const [selectedFramework, setSelectedFramework] = useState('kerberos')

  const securityFrameworks = {
    kerberos: {
      name: "Kerberos Authentication",
      description: "Protocolo de autenticação de rede baseado em tickets",
      complexity: "Alto",
      adoption: "85%",
      components: ["KDC", "TGT", "Service Tickets", "Principals"],
      pros: ["Autenticação forte", "Single Sign-On", "Mutual authentication", "Padrão da indústria"],
      cons: ["Complexidade de configuração", "Dependência de sincronização de tempo", "Single point of failure"],
      useCases: ["Clusters corporativos", "Ambientes multi-tenant", "Compliance SOX/HIPAA"]
    },
    ranger: {
      name: "Apache Ranger",
      description: "Framework centralizado de segurança para ecossistema Hadoop",
      complexity: "Médio",
      adoption: "72%",
      components: ["Policy Admin", "Policy Engine", "User Sync", "Audit"],
      pros: ["Interface web intuitiva", "Políticas centralizadas", "Auditoria completa", "Integração nativa"],
      cons: ["Overhead de performance", "Curva de aprendizado", "Configuração inicial complexa"],
      useCases: ["Controle de acesso granular", "Compliance", "Multi-tenant environments"]
    },
    knox: {
      name: "Apache Knox",
      description: "Gateway de segurança para serviços REST/HTTP do Hadoop",
      complexity: "Médio",
      adoption: "58%",
      components: ["Gateway", "Topology", "Providers", "Services"],
      pros: ["Ponto único de acesso", "SSL termination", "Authentication delegation", "Load balancing"],
      cons: ["Latência adicional", "Single point of failure", "Limitado a HTTP/REST"],
      useCases: ["Acesso externo seguro", "API gateway", "Perimeter security"]
    },
    sentry: {
      name: "Apache Sentry",
      description: "Sistema de autorização granular para dados Hadoop",
      complexity: "Alto",
      adoption: "45%",
      components: ["Policy Engine", "Privilege Model", "Binding", "Provider"],
      pros: ["Autorização granular", "Role-based access", "SQL-like policies", "Integração Hive/Impala"],
      cons: ["Descontinuado", "Complexidade alta", "Performance impact"],
      useCases: ["Controle de acesso a dados", "SQL-based authorization", "Legacy systems"]
    }
  }

  const complianceStandards = [
    {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "União Europeia",
      focus: "Proteção de dados pessoais",
      requirements: [
        "Consentimento explícito para processamento",
        "Direito ao esquecimento (right to be forgotten)",
        "Portabilidade de dados",
        "Notificação de violações em 72h",
        "Privacy by design"
      ],
      hadoopImplementation: [
        "Criptografia em repouso e em trânsito",
        "Pseudonimização de dados pessoais",
        "Logs de auditoria detalhados",
        "Controles de acesso granulares",
        "Procedimentos de data deletion"
      ],
      penalties: "Até 4% do faturamento anual global",
      tools: ["Apache Ranger", "Apache Atlas", "Encryption zones"]
    },
    {
      name: "HIPAA",
      fullName: "Health Insurance Portability and Accountability Act",
      region: "Estados Unidos",
      focus: "Proteção de informações de saúde",
      requirements: [
        "Controles de acesso físico e lógico",
        "Criptografia de dados sensíveis",
        "Logs de auditoria completos",
        "Backup e recovery procedures",
        "Training de funcionários"
      ],
      hadoopImplementation: [
        "Kerberos authentication",
        "HDFS encryption zones",
        "Ranger audit logs",
        "Network segmentation",
        "Regular security assessments"
      ],
      penalties: "$100 - $50,000 por violação",
      tools: ["Cloudera Navigator", "Apache Knox", "Kerberos"]
    },
    {
      name: "SOX",
      fullName: "Sarbanes-Oxley Act",
      region: "Estados Unidos",
      focus: "Transparência financeira corporativa",
      requirements: [
        "Controles internos sobre relatórios financeiros",
        "Retenção de documentos por 7 anos",
        "Auditoria independente",
        "Certificação executiva",
        "Proteção de whistleblowers"
      ],
      hadoopImplementation: [
        "Immutable audit trails",
        "Data lineage tracking",
        "Access controls para dados financeiros",
        "Automated compliance reporting",
        "Change management processes"
      ],
      penalties: "Até $5M de multa + prisão",
      tools: ["Apache Atlas", "Apache Ranger", "Cloudera Navigator"]
    },
    {
      name: "PCI DSS",
      fullName: "Payment Card Industry Data Security Standard",
      region: "Global",
      focus: "Proteção de dados de cartão de crédito",
      requirements: [
        "Firewall configuration",
        "Não armazenar dados de autenticação",
        "Criptografia de dados transmitidos",
        "Antivírus atualizado",
        "Testes de segurança regulares"
      ],
      hadoopImplementation: [
        "Network isolation",
        "Data masking/tokenization",
        "TLS/SSL encryption",
        "Regular vulnerability scans",
        "Penetration testing"
      ],
      penalties: "$5,000 - $100,000 por mês",
      tools: ["Apache Knox", "Encryption zones", "Network policies"]
    }
  ]

  const securityBestPractices = [
    {
      category: "Autenticação e Autorização",
      practices: [
        {
          title: "Implementar Kerberos",
          description: "Configurar autenticação forte para todos os serviços",
          priority: "Crítico",
          effort: "Alto",
          impact: "Muito Alto",
          steps: [
            "Instalar e configurar KDC (Key Distribution Center)",
            "Criar principals para todos os serviços",
            "Configurar keytabs para autenticação automática",
            "Habilitar Kerberos em todos os componentes",
            "Testar autenticação end-to-end"
          ]
        },
        {
          title: "Controle de Acesso Granular",
          description: "Implementar políticas de acesso baseadas em roles",
          priority: "Alto",
          effort: "Médio",
          impact: "Alto",
          steps: [
            "Definir roles e responsabilidades",
            "Configurar Apache Ranger",
            "Criar políticas de acesso por dataset",
            "Implementar aprovação de acesso",
            "Revisar permissões regularmente"
          ]
        }
      ]
    },
    {
      category: "Criptografia",
      practices: [
        {
          title: "Encryption at Rest",
          description: "Criptografar dados armazenados no HDFS",
          priority: "Crítico",
          effort: "Médio",
          impact: "Muito Alto",
          steps: [
            "Configurar HDFS Encryption Zones",
            "Gerenciar chaves com Hadoop KMS",
            "Criptografar dados sensíveis",
            "Implementar key rotation",
            "Monitorar performance impact"
          ]
        },
        {
          title: "Encryption in Transit",
          description: "Criptografar comunicação entre componentes",
          priority: "Alto",
          effort: "Médio",
          impact: "Alto",
          steps: [
            "Configurar TLS/SSL para todos os serviços",
            "Implementar certificate management",
            "Habilitar SASL encryption",
            "Configurar wire encryption",
            "Validar configurações"
          ]
        }
      ]
    },
    {
      category: "Auditoria e Monitoramento",
      practices: [
        {
          title: "Audit Logging",
          description: "Implementar logs de auditoria abrangentes",
          priority: "Alto",
          effort: "Baixo",
          impact: "Alto",
          steps: [
            "Habilitar audit logs em todos os componentes",
            "Configurar log aggregation",
            "Implementar log retention policies",
            "Criar alertas para atividades suspeitas",
            "Regular log analysis"
          ]
        }
      ]
    }
  ]

  const threatLandscape = [
    {
      threat: "Insider Threats",
      probability: "Médio",
      impact: "Alto",
      description: "Funcionários ou contractors com acesso privilegiado",
      mitigation: [
        "Princípio do menor privilégio",
        "Segregação de funções",
        "Monitoramento de atividades",
        "Background checks",
        "Regular access reviews"
      ],
      realCases: [
        "Edward Snowden (NSA) - 2013",
        "Tesla insider data theft - 2018",
        "Capital One breach - 2019"
      ]
    },
    {
      threat: "Advanced Persistent Threats (APT)",
      probability: "Baixo",
      impact: "Muito Alto",
      description: "Ataques sofisticados e prolongados por grupos organizados",
      mitigation: [
        "Network segmentation",
        "Endpoint detection and response",
        "Threat intelligence",
        "Regular penetration testing",
        "Incident response plan"
      ],
      realCases: [
        "APT1 (China) - Multiple targets",
        "Lazarus Group (North Korea)",
        "Cozy Bear (Russia)"
      ]
    },
    {
      threat: "Data Exfiltration",
      probability: "Médio",
      impact: "Alto",
      description: "Roubo não autorizado de dados sensíveis",
      mitigation: [
        "Data Loss Prevention (DLP)",
        "Network monitoring",
        "Encryption",
        "Access controls",
        "Data classification"
      ],
      realCases: [
        "Equifax breach - 2017",
        "Yahoo data breaches - 2013-2014",
        "Marriott breach - 2018"
      ]
    },
    {
      threat: "Ransomware",
      probability: "Alto",
      impact: "Alto",
      description: "Malware que criptografa dados e exige resgate",
      mitigation: [
        "Regular backups",
        "Network isolation",
        "Endpoint protection",
        "User training",
        "Incident response"
      ],
      realCases: [
        "WannaCry - 2017",
        "NotPetya - 2017",
        "Kaseya supply chain attack - 2021"
      ]
    }
  ]

  const governanceFramework = {
    dataGovernance: {
      title: "Governança de Dados",
      components: [
        {
          name: "Data Catalog",
          description: "Inventário centralizado de todos os datasets",
          tools: ["Apache Atlas", "Cloudera Navigator", "Collibra"],
          benefits: ["Descoberta de dados", "Lineage tracking", "Metadata management"]
        },
        {
          name: "Data Quality",
          description: "Monitoramento e melhoria da qualidade dos dados",
          tools: ["Apache Griffin", "Deequ", "Great Expectations"],
          benefits: ["Detecção de anomalias", "Validação automática", "Métricas de qualidade"]
        },
        {
          name: "Data Lineage",
          description: "Rastreamento da origem e transformações dos dados",
          tools: ["Apache Atlas", "DataHub", "Spline"],
          benefits: ["Impact analysis", "Compliance", "Root cause analysis"]
        }
      ]
    },
    privacyEngineering: {
      title: "Privacy Engineering",
      components: [
        {
          name: "Data Minimization",
          description: "Coletar apenas dados necessários",
          tools: ["Custom policies", "Apache Ranger", "Data retention"],
          benefits: ["Redução de risco", "Compliance", "Storage optimization"]
        },
        {
          name: "Anonymization",
          description: "Remover ou mascarar informações identificáveis",
          tools: ["Apache Ranger", "Custom UDFs", "Differential privacy"],
          benefits: ["Privacy protection", "Analytics enablement", "Risk reduction"]
        },
        {
          name: "Consent Management",
          description: "Gerenciar consentimentos de uso de dados",
          tools: ["Custom applications", "Consent APIs", "Blockchain"],
          benefits: ["GDPR compliance", "User trust", "Legal protection"]
        }
      ]
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
          Segurança e Governança Hadoop
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Implementação completa de segurança, compliance e governança de dados em ambientes Hadoop corporativos
        </p>
      </div>

      <Tabs defaultValue="security" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="frameworks" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Frameworks
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="threats" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Ameaças
          </TabsTrigger>
          <TabsTrigger value="governance" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Governança
          </TabsTrigger>
          <TabsTrigger value="bestpractices" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Melhores Práticas
          </TabsTrigger>
        </TabsList>

        {/* Security Overview */}
        <TabsContent value="security" className="space-y-6">
          <h2 className="text-2xl font-bold">Visão Geral de Segurança</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Score</CardTitle>
                <Shield className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <Progress value={87} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">Acima da média da indústria</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-600 mt-1">2 Medium, 1 Low</p>
                <p className="text-xs text-green-600">-5 desde último mês</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance</CardTitle>
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <Progress value={94} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">GDPR, HIPAA, SOX</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Incidents</CardTitle>
                <Eye className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-gray-600 mt-1">Últimos 30 dias</p>
                <p className="text-xs text-green-600">Nenhum incidente crítico</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pilares de Segurança Hadoop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Authentication</h4>
                      <p className="text-sm text-gray-600">Verificação de identidade (Kerberos)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Key className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">Authorization</h4>
                      <p className="text-sm text-gray-600">Controle de acesso (Ranger, Sentry)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="font-semibold">Auditing</h4>
                      <p className="text-sm text-gray-600">Rastreamento de atividades</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-orange-600" />
                    <div>
                      <h4 className="font-semibold">Encryption</h4>
                      <p className="text-sm text-gray-600">Proteção de dados em repouso e trânsito</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status dos Componentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      HDFS Encryption
                    </span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4" />
                      Kerberos Auth
                    </span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Ranger Policies
                    </span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Network className="h-4 w-4" />
                      Knox Gateway
                    </span>
                    <Badge variant="secondary">Configurando</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Audit Logging
                    </span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Frameworks */}
        <TabsContent value="frameworks" className="space-y-6">
          <h2 className="text-2xl font-bold">Frameworks de Segurança</h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {Object.entries(securityFrameworks).map(([key, framework]) => (
              <Button
                key={key}
                variant={selectedFramework === key ? "default" : "outline"}
                onClick={() => setSelectedFramework(key)}
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">{framework.name}</div>
                <div className="text-xs text-left mt-1">{framework.description}</div>
              </Button>
            ))}
          </div>

          {selectedFramework && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{securityFrameworks[selectedFramework].name}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {securityFrameworks[selectedFramework].description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">
                      Adoção: {securityFrameworks[selectedFramework].adoption}
                    </Badge>
                    <br />
                    <Badge variant={securityFrameworks[selectedFramework].complexity === 'Alto' ? 'destructive' : 'secondary'}>
                      {securityFrameworks[selectedFramework].complexity}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Componentes Principais:</h4>
                      <div className="flex flex-wrap gap-2">
                        {securityFrameworks[selectedFramework].components.map((component, idx) => (
                          <Badge key={idx} variant="outline">{component}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Vantagens:</h4>
                      <ul className="space-y-1">
                        {securityFrameworks[selectedFramework].pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Desvantagens:</h4>
                      <ul className="space-y-1">
                        {securityFrameworks[selectedFramework].cons.map((con, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <AlertTriangle className="h-3 w-3 text-orange-600" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                      <ul className="space-y-1">
                        {securityFrameworks[selectedFramework].useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Building2 className="h-3 w-3 text-blue-600" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Compliance */}
        <TabsContent value="compliance" className="space-y-6">
          <h2 className="text-2xl font-bold">Padrões de Compliance</h2>
          
          <div className="space-y-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{standard.name}</CardTitle>
                      <CardDescription className="text-base">{standard.fullName}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{standard.region}</Badge>
                      <p className="text-sm text-gray-600 mt-1">{standard.focus}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Principais Requisitos:</h4>
                        <ul className="space-y-1">
                          {standard.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <FileText className="h-3 w-3 text-blue-600 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ferramentas Hadoop:</h4>
                        <div className="flex flex-wrap gap-2">
                          {standard.tools.map((tool, idx) => (
                            <Badge key={idx} variant="secondary">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Implementação no Hadoop:</h4>
                        <ul className="space-y-1">
                          {standard.hadoopImplementation.map((impl, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Settings className="h-3 w-3 text-green-600 mt-0.5" />
                              {impl}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-1">Penalidades:</h4>
                        <p className="text-sm text-red-700">{standard.penalties}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Threat Landscape */}
        <TabsContent value="threats" className="space-y-6">
          <h2 className="text-2xl font-bold">Panorama de Ameaças</h2>
          
          <div className="space-y-6">
            {threatLandscape.map((threat, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{threat.threat}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={threat.probability === 'Alto' ? 'destructive' : threat.probability === 'Médio' ? 'secondary' : 'outline'}>
                        Probabilidade: {threat.probability}
                      </Badge>
                      <Badge variant={threat.impact === 'Muito Alto' ? 'destructive' : 'secondary'}>
                        Impacto: {threat.impact}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{threat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Estratégias de Mitigação:</h4>
                      <ul className="space-y-1">
                        {threat.mitigation.map((strategy, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Shield className="h-3 w-3 text-green-600" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Casos Reais:</h4>
                      <ul className="space-y-1">
                        {threat.realCases.map((case_, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <AlertTriangle className="h-3 w-3 text-red-600" />
                            {case_}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Governance */}
        <TabsContent value="governance" className="space-y-6">
          <h2 className="text-2xl font-bold">Framework de Governança</h2>
          
          <div className="space-y-6">
            {Object.entries(governanceFramework).map(([key, framework]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="text-xl">{framework.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {framework.components.map((component, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{component.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{component.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <strong className="text-sm">Ferramentas:</strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {component.tools.map((tool, toolIdx) => (
                                <Badge key={toolIdx} variant="outline" className="text-xs">{tool}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <strong className="text-sm">Benefícios:</strong>
                            <ul className="mt-1">
                              {component.benefits.map((benefit, benefitIdx) => (
                                <li key={benefitIdx} className="text-xs flex items-center gap-1">
                                  <CheckCircle className="h-2 w-2 text-green-600" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
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

        {/* Best Practices */}
        <TabsContent value="bestpractices" className="space-y-6">
          <h2 className="text-2xl font-bold">Melhores Práticas de Segurança</h2>
          
          <div className="space-y-6">
            {securityBestPractices.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.practices.map((practice, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold">{practice.title}</h4>
                          <div className="flex gap-2">
                            <Badge variant={practice.priority === 'Crítico' ? 'destructive' : 'secondary'}>
                              {practice.priority}
                            </Badge>
                            <Badge variant="outline">Esforço: {practice.effort}</Badge>
                            <Badge variant="outline">Impacto: {practice.impact}</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{practice.description}</p>
                        <div>
                          <h5 className="font-semibold mb-2">Passos de Implementação:</h5>
                          <ol className="space-y-1">
                            {practice.steps.map((step, stepIdx) => (
                              <li key={stepIdx} className="flex items-start gap-2 text-sm">
                                <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                                  {stepIdx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SecurityGovernance
