import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  Award, 
  TrendingUp, 
  DollarSign, 
  Users,
  BookOpen,
  Target,
  Clock,
  Star,
  Building2,
  Globe,
  Zap,
  Database,
  BarChart3,
  Code,
  Shield,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Briefcase,
  GraduationCap
} from 'lucide-react'

const CareerCertifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null)
  const [selectedCareerPath, setSelectedCareerPath] = useState('data-engineer')

  const certifications = [
    {
      id: 'cloudera-cca',
      name: 'Cloudera Certified Associate (CCA)',
      provider: 'Cloudera',
      level: 'Associate',
      duration: '120 minutos',
      cost: '$295',
      difficulty: 'Intermediário',
      popularity: 85,
      marketValue: 'Alto',
      description: 'Certificação fundamental para profissionais Hadoop',
      skills: [
        'HDFS Operations',
        'Hive Queries',
        'Pig Scripts',
        'Sqoop Data Import/Export',
        'Flume Configuration',
        'Oozie Workflows'
      ],
      prerequisites: [
        '6+ meses experiência com Hadoop',
        'Conhecimento básico de Linux',
        'SQL fundamentals',
        'Programação básica (Java/Python)'
      ],
      examTopics: [
        { topic: 'Data Ingest (25%)', weight: 25 },
        { topic: 'Transform, Stage, Store (30%)', weight: 30 },
        { topic: 'Data Analysis (25%)', weight: 25 },
        { topic: 'Configuration & Troubleshooting (20%)', weight: 20 }
      ],
      salaryImpact: '+15-25%',
      companies: ['Cloudera', 'Hortonworks', 'MapR', 'IBM', 'Microsoft'],
      studyTime: '2-3 meses',
      renewalPeriod: '3 anos',
      icon: Database
    },
    {
      id: 'hdp-certified',
      name: 'Hortonworks Data Platform Certified',
      provider: 'Cloudera (ex-Hortonworks)',
      level: 'Professional',
      duration: '120 minutos',
      cost: '$250',
      difficulty: 'Intermediário',
      popularity: 75,
      marketValue: 'Alto',
      description: 'Certificação focada na plataforma HDP',
      skills: [
        'HDP Architecture',
        'Ambari Management',
        'Spark Development',
        'Kafka Streaming',
        'Security Implementation',
        'Performance Tuning'
      ],
      prerequisites: [
        '1+ ano experiência HDP',
        'Conhecimento Spark',
        'Experiência com Ambari',
        'Linux administration'
      ],
      examTopics: [
        { topic: 'Platform Architecture (20%)', weight: 20 },
        { topic: 'Data Processing (35%)', weight: 35 },
        { topic: 'Security & Governance (25%)', weight: 25 },
        { topic: 'Operations & Monitoring (20%)', weight: 20 }
      ],
      salaryImpact: '+20-30%',
      companies: ['Cloudera', 'Accenture', 'Deloitte', 'Capgemini'],
      studyTime: '3-4 meses',
      renewalPeriod: '3 anos',
      icon: Shield
    },
    {
      id: 'databricks-certified',
      name: 'Databricks Certified Data Engineer',
      provider: 'Databricks',
      level: 'Associate',
      duration: '90 minutos',
      cost: '$200',
      difficulty: 'Intermediário',
      popularity: 90,
      marketValue: 'Muito Alto',
      description: 'Certificação moderna para engenheiros de dados',
      skills: [
        'Apache Spark',
        'Delta Lake',
        'Databricks Platform',
        'ETL Pipelines',
        'Data Lakehouse',
        'MLOps Basics'
      ],
      prerequisites: [
        'Experiência com Spark',
        'Python ou Scala',
        'SQL avançado',
        'Conceitos de Data Engineering'
      ],
      examTopics: [
        { topic: 'Databricks Lakehouse Platform (25%)', weight: 25 },
        { topic: 'ELT with Spark SQL and Python (40%)', weight: 40 },
        { topic: 'Incremental Data Processing (20%)', weight: 20 },
        { topic: 'Production Pipelines (15%)', weight: 15 }
      ],
      salaryImpact: '+25-40%',
      companies: ['Databricks', 'Netflix', 'Comcast', 'Shell', 'ABN AMRO'],
      studyTime: '2-3 meses',
      renewalPeriod: '2 anos',
      icon: Zap
    },
    {
      id: 'aws-big-data',
      name: 'AWS Certified Big Data - Specialty',
      provider: 'Amazon Web Services',
      level: 'Specialty',
      duration: '170 minutos',
      cost: '$300',
      difficulty: 'Avançado',
      popularity: 95,
      marketValue: 'Muito Alto',
      description: 'Certificação premium para Big Data na AWS',
      skills: [
        'EMR (Elastic MapReduce)',
        'Redshift',
        'Kinesis',
        'Glue',
        'Athena',
        'QuickSight'
      ],
      prerequisites: [
        'AWS Solutions Architect Associate',
        '2+ anos experiência AWS',
        'Conhecimento profundo Big Data',
        'Experiência com serviços AWS'
      ],
      examTopics: [
        { topic: 'Collection (18%)', weight: 18 },
        { topic: 'Storage (22%)', weight: 22 },
        { topic: 'Processing (24%)', weight: 24 },
        { topic: 'Analysis (18%)', weight: 18 },
        { topic: 'Visualization (12%)', weight: 12 },
        { topic: 'Security (6%)', weight: 6 }
      ],
      salaryImpact: '+30-50%',
      companies: ['Amazon', 'Netflix', 'Airbnb', 'Spotify', 'Capital One'],
      studyTime: '4-6 meses',
      renewalPeriod: '3 anos',
      icon: Globe
    },
    {
      id: 'google-data-engineer',
      name: 'Google Cloud Professional Data Engineer',
      provider: 'Google Cloud',
      level: 'Professional',
      duration: '120 minutos',
      cost: '$200',
      difficulty: 'Avançado',
      popularity: 88,
      marketValue: 'Muito Alto',
      description: 'Certificação para engenheiros de dados no GCP',
      skills: [
        'BigQuery',
        'Dataflow',
        'Dataproc',
        'Pub/Sub',
        'Cloud Storage',
        'Data Studio'
      ],
      prerequisites: [
        'Experiência com GCP',
        'Conhecimento SQL avançado',
        'Python ou Java',
        'Conceitos ML básicos'
      ],
      examTopics: [
        { topic: 'Designing data processing systems (22%)', weight: 22 },
        { topic: 'Building and operationalizing data processing systems (25%)', weight: 25 },
        { topic: 'Operationalizing machine learning models (23%)', weight: 23 },
        { topic: 'Ensuring solution quality (30%)', weight: 30 }
      ],
      salaryImpact: '+25-45%',
      companies: ['Google', 'Spotify', 'Twitter', 'Snapchat', 'PayPal'],
      studyTime: '3-5 meses',
      renewalPeriod: '2 anos',
      icon: BarChart3
    }
  ]

  const careerPaths = {
    'data-engineer': {
      title: 'Engenheiro de Dados',
      description: 'Projetar e manter pipelines de dados escaláveis',
      averageSalary: {
        junior: 'R$ 8.000 - R$ 12.000',
        mid: 'R$ 12.000 - R$ 18.000',
        senior: 'R$ 18.000 - R$ 30.000',
        lead: 'R$ 25.000 - R$ 40.000'
      },
      skills: [
        'Apache Spark',
        'Hadoop Ecosystem',
        'Python/Scala',
        'SQL Avançado',
        'Apache Kafka',
        'Docker/Kubernetes',
        'Cloud Platforms (AWS/GCP/Azure)',
        'Apache Airflow'
      ],
      responsibilities: [
        'Desenvolver pipelines ETL/ELT',
        'Otimizar performance de queries',
        'Implementar data lakes e warehouses',
        'Monitorar qualidade dos dados',
        'Automatizar processos de dados',
        'Colaborar com cientistas de dados'
      ],
      certifications: ['databricks-certified', 'aws-big-data', 'google-data-engineer'],
      companies: ['Netflix', 'Uber', 'Airbnb', 'Spotify', 'iFood', 'Nubank'],
      growth: '+22% até 2030',
      icon: Database
    },
    'data-architect': {
      title: 'Arquiteto de Dados',
      description: 'Projetar arquiteturas de dados empresariais',
      averageSalary: {
        junior: 'R$ 15.000 - R$ 20.000',
        mid: 'R$ 20.000 - R$ 28.000',
        senior: 'R$ 25.000 - R$ 40.000',
        lead: 'R$ 35.000 - R$ 60.000'
      },
      skills: [
        'Data Modeling',
        'Enterprise Architecture',
        'Big Data Technologies',
        'Cloud Architecture',
        'Data Governance',
        'Security & Compliance',
        'Business Intelligence',
        'Microservices'
      ],
      responsibilities: [
        'Definir estratégia de dados',
        'Projetar arquiteturas escaláveis',
        'Estabelecer padrões e governança',
        'Avaliar novas tecnologias',
        'Liderar equipes técnicas',
        'Alinhar TI com negócios'
      ],
      certifications: ['aws-big-data', 'google-data-engineer', 'cloudera-cca'],
      companies: ['IBM', 'Accenture', 'Deloitte', 'Microsoft', 'Oracle'],
      growth: '+19% até 2030',
      icon: Building2
    },
    'hadoop-admin': {
      title: 'Administrador Hadoop',
      description: 'Gerenciar e manter clusters Hadoop',
      averageSalary: {
        junior: 'R$ 7.000 - R$ 10.000',
        mid: 'R$ 10.000 - R$ 15.000',
        senior: 'R$ 15.000 - R$ 25.000',
        lead: 'R$ 20.000 - R$ 35.000'
      },
      skills: [
        'Hadoop Administration',
        'Linux System Administration',
        'Cluster Management',
        'Performance Tuning',
        'Security Configuration',
        'Monitoring & Alerting',
        'Backup & Recovery',
        'Capacity Planning'
      ],
      responsibilities: [
        'Instalar e configurar clusters',
        'Monitorar performance do sistema',
        'Implementar políticas de segurança',
        'Gerenciar usuários e permissões',
        'Planejar capacidade e crescimento',
        'Resolver problemas operacionais'
      ],
      certifications: ['cloudera-cca', 'hdp-certified'],
      companies: ['Cloudera', 'Hortonworks', 'IBM', 'Teradata', 'SAS'],
      growth: '+15% até 2030',
      icon: Shield
    },
    'big-data-developer': {
      title: 'Desenvolvedor Big Data',
      description: 'Desenvolver aplicações para processamento de big data',
      averageSalary: {
        junior: 'R$ 6.000 - R$ 9.000',
        mid: 'R$ 9.000 - R$ 14.000',
        senior: 'R$ 14.000 - R$ 22.000',
        lead: 'R$ 18.000 - R$ 30.000'
      },
      skills: [
        'Java/Scala/Python',
        'MapReduce Programming',
        'Spark Development',
        'Hive/Pig Scripting',
        'NoSQL Databases',
        'Stream Processing',
        'API Development',
        'Version Control (Git)'
      ],
      responsibilities: [
        'Desenvolver jobs MapReduce',
        'Criar aplicações Spark',
        'Implementar pipelines de streaming',
        'Otimizar código para performance',
        'Integrar diferentes fontes de dados',
        'Documentar soluções técnicas'
      ],
      certifications: ['databricks-certified', 'cloudera-cca', 'hdp-certified'],
      companies: ['Thoughtworks', 'CI&T', 'Globo', 'Magazine Luiza', 'B3'],
      growth: '+25% até 2030',
      icon: Code
    }
  }

  const studyPlan = {
    beginner: {
      title: 'Iniciante (0-6 meses)',
      duration: '6 meses',
      goals: 'Fundamentos sólidos em Big Data e Hadoop',
      modules: [
        {
          week: '1-2',
          topic: 'Fundamentos de Big Data',
          content: ['Conceitos básicos', 'Hadoop ecosystem', 'HDFS basics'],
          resources: ['Documentação oficial', 'Tutoriais online', 'Videos YouTube']
        },
        {
          week: '3-6',
          topic: 'Linux e Linha de Comando',
          content: ['Comandos básicos', 'Shell scripting', 'Administração básica'],
          resources: ['Linux Academy', 'Hands-on labs', 'Prática diária']
        },
        {
          week: '7-12',
          topic: 'Hadoop Core',
          content: ['HDFS', 'MapReduce', 'YARN'],
          resources: ['Cloudera tutorials', 'Hortonworks sandbox', 'Projetos práticos']
        },
        {
          week: '13-18',
          topic: 'Ferramentas Básicas',
          content: ['Hive', 'Pig', 'Sqoop'],
          resources: ['Documentação oficial', 'Exercícios práticos', 'Projetos reais']
        },
        {
          week: '19-24',
          topic: 'Projeto Final',
          content: ['Pipeline completo', 'Análise de dados', 'Apresentação'],
          resources: ['Mentoria', 'Code review', 'Portfolio']
        }
      ]
    },
    intermediate: {
      title: 'Intermediário (6-18 meses)',
      duration: '12 meses',
      goals: 'Especialização e certificações',
      modules: [
        {
          week: '1-4',
          topic: 'Apache Spark',
          content: ['Spark Core', 'Spark SQL', 'Streaming'],
          resources: ['Databricks Academy', 'Spark documentation', 'Hands-on projects']
        },
        {
          week: '5-8',
          topic: 'Advanced Hadoop',
          content: ['Security', 'Performance tuning', 'Troubleshooting'],
          resources: ['Advanced courses', 'Real-world scenarios', 'Best practices']
        },
        {
          week: '9-16',
          topic: 'Cloud Platforms',
          content: ['AWS EMR', 'Google Dataproc', 'Azure HDInsight'],
          resources: ['Cloud provider training', 'Certification paths', 'Hands-on labs']
        },
        {
          week: '17-24',
          topic: 'Streaming & Real-time',
          content: ['Kafka', 'Flink', 'Storm'],
          resources: ['Confluent training', 'Apache documentation', 'Use cases']
        },
        {
          week: '25-32',
          topic: 'Machine Learning',
          content: ['MLlib', 'TensorFlow on Spark', 'ML pipelines'],
          resources: ['ML courses', 'Kaggle competitions', 'Research papers']
        },
        {
          week: '33-48',
          topic: 'Certificação',
          content: ['Exam prep', 'Practice tests', 'Mock interviews'],
          resources: ['Official study guides', 'Practice exams', 'Study groups']
        }
      ]
    },
    advanced: {
      title: 'Avançado (18+ meses)',
      duration: '18+ meses',
      goals: 'Liderança técnica e especialização',
      modules: [
        {
          week: '1-8',
          topic: 'Architecture & Design',
          content: ['System design', 'Scalability patterns', 'Best practices'],
          resources: ['Architecture books', 'Case studies', 'Design reviews']
        },
        {
          week: '9-16',
          topic: 'Advanced Analytics',
          content: ['Graph processing', 'Time series', 'Complex event processing'],
          resources: ['Research papers', 'Advanced courses', 'Open source contributions']
        },
        {
          week: '17-24',
          topic: 'Leadership Skills',
          content: ['Team management', 'Technical mentoring', 'Project leadership'],
          resources: ['Leadership courses', 'Mentoring programs', 'Speaking opportunities']
        },
        {
          week: '25-32',
          topic: 'Innovation & Research',
          content: ['Emerging technologies', 'Research projects', 'Patent applications'],
          resources: ['Academic partnerships', 'Innovation labs', 'Conference presentations']
        },
        {
          week: '33+',
          topic: 'Thought Leadership',
          content: ['Technical writing', 'Conference speaking', 'Community building'],
          resources: ['Blog writing', 'Conference submissions', 'Open source leadership']
        }
      ]
    }
  }

  const marketTrends = [
    {
      trend: 'Cloud Migration',
      growth: '+35%',
      description: 'Migração de workloads Hadoop para cloud',
      impact: 'Alto',
      timeframe: '2024-2026',
      skills: ['AWS EMR', 'Google Dataproc', 'Azure HDInsight']
    },
    {
      trend: 'Real-time Analytics',
      growth: '+45%',
      description: 'Demanda por processamento em tempo real',
      impact: 'Muito Alto',
      timeframe: '2024-2025',
      skills: ['Apache Kafka', 'Apache Flink', 'Spark Streaming']
    },
    {
      trend: 'MLOps Integration',
      growth: '+60%',
      description: 'Integração de ML com pipelines de dados',
      impact: 'Muito Alto',
      timeframe: '2024-2027',
      skills: ['MLflow', 'Kubeflow', 'Databricks MLR']
    },
    {
      trend: 'Data Mesh',
      growth: '+25%',
      description: 'Arquitetura descentralizada de dados',
      impact: 'Médio',
      timeframe: '2025-2028',
      skills: ['Domain-driven design', 'API management', 'Data contracts']
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <GraduationCap className="h-8 w-8" />
            Certificações e Carreira em Big Data
          </CardTitle>
          <p className="text-purple-100 text-lg">
            Guia completo para construir uma carreira sólida em Big Data e Hadoop
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="certifications" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="certifications">Certificações</TabsTrigger>
          <TabsTrigger value="careers">Carreiras</TabsTrigger>
          <TabsTrigger value="study-plan">Plano de Estudos</TabsTrigger>
          <TabsTrigger value="market-trends">Tendências</TabsTrigger>
          <TabsTrigger value="salary-guide">Salários</TabsTrigger>
        </TabsList>

        {/* Certifications Tab */}
        <TabsContent value="certifications" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <Card 
                  key={cert.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedCertification === cert.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' : ''
                  }`}
                  onClick={() => setSelectedCertification(selectedCertification === cert.id ? null : cert.id)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Icon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <CardTitle className="text-sm mb-2">{cert.name}</CardTitle>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">{cert.level}</Badge>
                          <Badge variant="outline" className="text-xs">{cert.difficulty}</Badge>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Custo:</span>
                        <span className="font-semibold">{cert.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duração:</span>
                        <span className="font-semibold">{cert.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Impacto Salarial:</span>
                        <span className="font-semibold text-green-600">{cert.salaryImpact}</span>
                      </div>
                      <div>
                        <span>Popularidade:</span>
                        <Progress value={cert.popularity} className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {selectedCertification && (() => {
            const cert = certifications.find(c => c.id === selectedCertification)
            const Icon = cert.icon
            
            return (
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    {cert.name}
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {cert.provider}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                      <TabsTrigger value="topics">Tópicos</TabsTrigger>
                      <TabsTrigger value="preparation">Preparação</TabsTrigger>
                      <TabsTrigger value="companies">Empresas</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Habilidades Avaliadas</h4>
                          <div className="space-y-2">
                            {cert.skills.map((skill, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Pré-requisitos</h4>
                          <div className="space-y-2">
                            {cert.prerequisites.map((prereq, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-blue-500" />
                                <span className="text-sm">{prereq}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="topics" className="space-y-4">
                      <h4 className="font-semibold">Distribuição de Tópicos no Exame</h4>
                      <div className="space-y-3">
                        {cert.examTopics.map((topic, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{topic.topic}</span>
                              <span className="text-sm text-gray-600">{topic.weight}%</span>
                            </div>
                            <Progress value={topic.weight} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="preparation" className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-semibold">Tempo de Estudo</div>
                            <div className="text-sm text-gray-600">{cert.studyTime}</div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4 text-center">
                            <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="font-semibold">Validade</div>
                            <div className="text-sm text-gray-600">{cert.renewalPeriod}</div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4 text-center">
                            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <div className="font-semibold">ROI Salarial</div>
                            <div className="text-sm text-green-600 font-semibold">{cert.salaryImpact}</div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="companies" className="space-y-4">
                      <h4 className="font-semibold">Empresas que Valorizam esta Certificação</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {cert.companies.map((company, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <Building2 className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">{company}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          })()}
        </TabsContent>

        {/* Careers Tab */}
        <TabsContent value="careers" className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(careerPaths).map(([key, career]) => {
              const Icon = career.icon
              return (
                <Button
                  key={key}
                  variant={selectedCareerPath === key ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col items-center text-center"
                  onClick={() => setSelectedCareerPath(key)}
                >
                  <Icon className="h-8 w-8 mb-2" />
                  <div className="font-semibold text-sm">{career.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {career.growth}
                  </div>
                </Button>
              )
            })}
          </div>

          {selectedCareerPath && (() => {
            const career = careerPaths[selectedCareerPath]
            const Icon = career.icon
            
            return (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    {career.title}
                    <Badge variant="outline" className="text-green-600">
                      {career.growth}
                    </Badge>
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">{career.description}</p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                      <TabsTrigger value="skills">Habilidades</TabsTrigger>
                      <TabsTrigger value="responsibilities">Responsabilidades</TabsTrigger>
                      <TabsTrigger value="salary">Salários</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Certificações Recomendadas</h4>
                          <div className="space-y-2">
                            {career.certifications.map((certId, idx) => {
                              const cert = certifications.find(c => c.id === certId)
                              return (
                                <div key={idx} className="flex items-center gap-2">
                                  <Award className="h-4 w-4 text-gold-500" />
                                  <span className="text-sm">{cert?.name}</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Principais Empresas</h4>
                          <div className="space-y-2">
                            {career.companies.map((company, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-blue-500" />
                                <span className="text-sm">{company}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="skills" className="space-y-4">
                      <h4 className="font-semibold">Habilidades Técnicas Essenciais</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {career.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950 rounded">
                            <Code className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="responsibilities" className="space-y-4">
                      <h4 className="font-semibold">Principais Responsabilidades</h4>
                      <div className="space-y-3">
                        {career.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-sm">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="salary" className="space-y-4">
                      <h4 className="font-semibold">Faixas Salariais (Brasil - 2024)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(career.averageSalary).map(([level, salary]) => (
                          <Card key={level}>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-semibold capitalize">{level.replace('_', ' ')}</div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {level === 'junior' && '0-2 anos'}
                                    {level === 'mid' && '2-5 anos'}
                                    {level === 'senior' && '5-8 anos'}
                                    {level === 'lead' && '8+ anos'}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-green-600">{salary}</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          })()}
        </TabsContent>

        {/* Study Plan Tab */}
        <TabsContent value="study-plan" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(studyPlan).map(([level, plan]) => (
              <Card key={level} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{plan.title}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{plan.goals}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Duração: {plan.duration}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.modules.slice(0, 3).map((module, idx) => (
                      <div key={idx} className="border-l-2 border-blue-200 pl-3">
                        <div className="font-semibold text-sm">{module.topic}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Semanas {module.week}
                        </div>
                        <div className="text-xs mt-1">
                          {module.content.slice(0, 2).join(', ')}...
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Plano Completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Market Trends Tab */}
        <TabsContent value="market-trends" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {marketTrends.map((trend, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {trend.trend}
                    <Badge variant="outline" className="text-green-600">
                      {trend.growth}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">{trend.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Impacto:</span>
                      <div className={`inline-block ml-2 px-2 py-1 rounded text-xs ${
                        trend.impact === 'Muito Alto' ? 'bg-red-100 text-red-800' :
                        trend.impact === 'Alto' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {trend.impact}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Período:</span>
                      <span className="ml-2">{trend.timeframe}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Habilidades em Demanda:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trend.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Salary Guide Tab */}
        <TabsContent value="salary-guide" className="space-y-6">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                Guia Salarial Big Data - Brasil 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">R$ 15.2k</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Salário Médio</div>
                  <div className="text-xs text-gray-500">Engenheiro de Dados</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">+28%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Crescimento</div>
                  <div className="text-xs text-gray-500">Últimos 2 anos</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfação</div>
                  <div className="text-xs text-gray-500">Profissionais</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">12k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Vagas Abertas</div>
                  <div className="text-xs text-gray-500">Mercado atual</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CareerCertifications
