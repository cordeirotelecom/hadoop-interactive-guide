import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Progress } from "./ui/progress.jsx"
import { 
  BookOpen, 
  Users, 
  Video, 
  Code, 
  Globe,
  Star,
  Download,
  ExternalLink,
  Calendar,
  MessageCircle,
  Github,
  Youtube,
  Linkedin,
  Twitter,
  Award,
  TrendingUp,
  Clock,
  Target,
  CheckCircle,
  AlertTriangle,
  Heart,
  Share2,
  Search,
  Filter
} from 'lucide-react'

const ResourcesCommunity = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const learningResources = [
    {
      title: "Hadoop: The Definitive Guide",
      author: "Tom White",
      type: "Livro",
      level: "Intermediário",
      rating: 4.5,
      price: "Pago",
      description: "O guia mais completo sobre Hadoop, cobrindo HDFS, MapReduce, YARN e ecossistema",
      topics: ["HDFS", "MapReduce", "YARN", "Hive", "HBase", "Pig"],
      url: "https://www.oreilly.com/library/view/hadoop-the-definitive/9781491901687/",
      category: "books"
    },
    {
      title: "Learning Spark",
      author: "Holden Karau, Andy Konwinski",
      type: "Livro",
      level: "Intermediário",
      rating: 4.3,
      price: "Pago",
      description: "Guia prático para Apache Spark com exemplos em Scala, Java e Python",
      topics: ["Spark Core", "Spark SQL", "Streaming", "MLlib", "GraphX"],
      url: "https://www.oreilly.com/library/view/learning-spark/9781449359034/",
      category: "books"
    },
    {
      title: "Cloudera Hadoop Tutorial",
      author: "Cloudera",
      type: "Curso Online",
      level: "Iniciante",
      rating: 4.2,
      price: "Gratuito",
      description: "Tutorial oficial da Cloudera para começar com Hadoop",
      topics: ["Setup", "HDFS", "MapReduce", "Hive", "Impala"],
      url: "https://www.cloudera.com/tutorials.html",
      category: "courses"
    },
    {
      title: "Big Data Specialization",
      author: "UC San Diego (Coursera)",
      type: "Especialização",
      level: "Intermediário",
      rating: 4.4,
      price: "Pago",
      description: "Especialização completa em Big Data com foco em Hadoop e Spark",
      topics: ["Big Data", "Hadoop", "Spark", "Machine Learning", "Graph Analytics"],
      url: "https://www.coursera.org/specializations/big-data",
      category: "courses"
    },
    {
      title: "Apache Hadoop YouTube Channel",
      author: "Apache Software Foundation",
      type: "Vídeos",
      level: "Todos",
      rating: 4.1,
      price: "Gratuito",
      description: "Canal oficial com apresentações de conferências e tutoriais",
      topics: ["Conferências", "Tutoriais", "Case Studies", "Roadmap"],
      url: "https://www.youtube.com/user/HadoopSummit",
      category: "videos"
    },
    {
      title: "Hadoop Examples Repository",
      author: "Apache Hadoop",
      type: "Código",
      level: "Intermediário",
      rating: 4.0,
      price: "Gratuito",
      description: "Repositório oficial com exemplos de código para Hadoop",
      topics: ["MapReduce", "HDFS", "YARN", "Examples", "Best Practices"],
      url: "https://github.com/apache/hadoop",
      category: "code"
    }
  ]

  const communities = [
    {
      name: "Apache Hadoop Mailing Lists",
      type: "Fórum Oficial",
      members: "10k+",
      activity: "Alta",
      description: "Listas de discussão oficiais do projeto Apache Hadoop",
      topics: ["Desenvolvimento", "Usuários", "Commits", "Issues"],
      url: "https://hadoop.apache.org/mailing_lists.html",
      platform: "Email"
    },
    {
      name: "Hadoop Brasil",
      type: "Grupo Facebook",
      members: "15k+",
      activity: "Média",
      description: "Maior comunidade brasileira de Hadoop no Facebook",
      topics: ["Dúvidas", "Vagas", "Eventos", "Networking"],
      url: "https://www.facebook.com/groups/hadoopbrasil",
      platform: "Facebook"
    },
    {
      name: "r/hadoop",
      type: "Subreddit",
      members: "25k+",
      activity: "Média",
      description: "Comunidade Reddit dedicada ao Hadoop e Big Data",
      topics: ["Discussões", "Tutoriais", "News", "Help"],
      url: "https://www.reddit.com/r/hadoop/",
      platform: "Reddit"
    },
    {
      name: "Hadoop Stack Overflow",
      type: "Q&A",
      members: "100k+",
      activity: "Alta",
      description: "Tag Hadoop no Stack Overflow para perguntas técnicas",
      topics: ["Troubleshooting", "Code Help", "Best Practices", "Configuration"],
      url: "https://stackoverflow.com/questions/tagged/hadoop",
      platform: "Stack Overflow"
    },
    {
      name: "Big Data Brasil",
      type: "LinkedIn Group",
      members: "50k+",
      activity: "Alta",
      description: "Grupo LinkedIn para profissionais de Big Data no Brasil",
      topics: ["Networking", "Vagas", "Trends", "Case Studies"],
      url: "https://www.linkedin.com/groups/4402207/",
      platform: "LinkedIn"
    },
    {
      name: "Hadoop Discord",
      type: "Chat",
      members: "5k+",
      activity: "Média",
      description: "Servidor Discord para discussões em tempo real",
      topics: ["Chat", "Help", "Collaboration", "Events"],
      url: "https://discord.gg/hadoop",
      platform: "Discord"
    }
  ]

  const events = [
    {
      name: "Strata Data Conference",
      type: "Conferência",
      frequency: "Anual",
      location: "Global (Virtual/Presencial)",
      description: "Principal conferência de Big Data e AI",
      topics: ["Big Data", "AI/ML", "Data Engineering", "Analytics"],
      nextDate: "Março 2024",
      website: "https://conferences.oreilly.com/strata",
      cost: "Pago ($1,500-3,000)"
    },
    {
      name: "Hadoop Summit",
      type: "Conferência",
      frequency: "Anual",
      location: "San Jose, CA",
      description: "Conferência oficial do ecossistema Hadoop",
      topics: ["Hadoop", "Spark", "Kafka", "Cloud", "Enterprise"],
      nextDate: "Junho 2024",
      website: "https://hadoopsummit.org",
      cost: "Pago ($800-2,000)"
    },
    {
      name: "Big Data Brazil",
      type: "Conferência",
      frequency: "Anual",
      location: "São Paulo, Brasil",
      description: "Maior evento de Big Data do Brasil",
      topics: ["Big Data", "Analytics", "AI", "Cloud", "Cases Brasileiros"],
      nextDate: "Novembro 2024",
      website: "https://www.bigdatabrazil.com.br",
      cost: "Pago (R$ 500-1,500)"
    },
    {
      name: "Apache Spark Meetup SP",
      type: "Meetup",
      frequency: "Mensal",
      location: "São Paulo, Brasil",
      description: "Meetup mensal sobre Apache Spark",
      topics: ["Spark", "Streaming", "ML", "Performance", "Cases"],
      nextDate: "Todo mês",
      website: "https://www.meetup.com/spark-sao-paulo/",
      cost: "Gratuito"
    },
    {
      name: "Data Engineering Weekly",
      type: "Webinar",
      frequency: "Semanal",
      location: "Online",
      description: "Webinars semanais sobre engenharia de dados",
      topics: ["Data Engineering", "Tools", "Best Practices", "Trends"],
      nextDate: "Toda semana",
      website: "https://dataengineeringweekly.com",
      cost: "Gratuito"
    }
  ]

  const certifications = [
    {
      name: "Cloudera Certified Associate (CCA)",
      provider: "Cloudera",
      level: "Associado",
      duration: "2 horas",
      cost: "$295",
      validity: "3 anos",
      description: "Certificação prática em Hadoop com hands-on exercises",
      topics: ["HDFS", "MapReduce", "Hive", "Impala", "Sqoop", "Flume"],
      passRate: "65%",
      salaryImpact: "+15-25%",
      preparationTime: "2-3 meses",
      difficulty: "Médio"
    },
    {
      name: "Cloudera Certified Professional (CCP)",
      provider: "Cloudera",
      level: "Profissional",
      duration: "4 horas",
      cost: "$400",
      validity: "3 anos",
      description: "Certificação avançada com projetos complexos",
      topics: ["Data Engineering", "Advanced Analytics", "Security", "Performance"],
      passRate: "45%",
      salaryImpact: "+25-40%",
      preparationTime: "4-6 meses",
      difficulty: "Alto"
    },
    {
      name: "Hortonworks Certified Developer (HCD)",
      provider: "Hortonworks",
      level: "Desenvolvedor",
      duration: "2 horas",
      cost: "$250",
      validity: "2 anos",
      description: "Foco em desenvolvimento de aplicações Hadoop",
      topics: ["MapReduce", "Pig", "Hive", "HBase", "Spark"],
      passRate: "70%",
      salaryImpact: "+20-30%",
      preparationTime: "2-4 meses",
      difficulty: "Médio"
    },
    {
      name: "AWS Certified Big Data - Specialty",
      provider: "Amazon",
      level: "Especialista",
      duration: "3 horas",
      cost: "$300",
      validity: "3 anos",
      description: "Especialização em Big Data na AWS",
      topics: ["EMR", "Kinesis", "Redshift", "Glue", "Athena"],
      passRate: "55%",
      salaryImpact: "+30-50%",
      preparationTime: "3-5 meses",
      difficulty: "Alto"
    }
  ]

  const tools = [
    {
      name: "Hadoop Ecosystem Table",
      category: "Referência",
      description: "Tabela completa do ecossistema Hadoop",
      url: "https://hadoopecosystemtable.github.io/",
      type: "Website",
      free: true
    },
    {
      name: "BigData-Playground",
      category: "Ambiente",
      description: "Ambiente Docker para experimentar com Big Data",
      url: "https://github.com/marcelmittelstaedt/BigData-Playground",
      type: "Docker",
      free: true
    },
    {
      name: "Cloudera QuickStart VM",
      category: "Ambiente",
      description: "Máquina virtual com Hadoop pré-configurado",
      url: "https://www.cloudera.com/downloads/quickstart_vms.html",
      type: "VM",
      free: true
    },
    {
      name: "Hortonworks Sandbox",
      category: "Ambiente",
      description: "Sandbox para aprender Hadoop",
      url: "https://www.cloudera.com/downloads/hortonworks-sandbox.html",
      type: "VM/Docker",
      free: true
    },
    {
      name: "Apache Zeppelin",
      category: "Notebook",
      description: "Notebook web para análise de dados",
      url: "https://zeppelin.apache.org/",
      type: "Web App",
      free: true
    },
    {
      name: "Jupyter with PySpark",
      category: "Notebook",
      description: "Jupyter configurado para Spark",
      url: "https://jupyter.org/",
      type: "Notebook",
      free: true
    }
  ]

  const jobMarket = {
    trends: [
      {
        role: "Engenheiro de Dados",
        demand: "Muito Alta",
        growth: "+22%",
        salaryRange: "R$ 8k - 25k",
        skills: ["Hadoop", "Spark", "Python", "SQL", "Cloud"]
      },
      {
        role: "Arquiteto de Dados",
        demand: "Alta",
        growth: "+18%",
        salaryRange: "R$ 15k - 40k",
        skills: ["Hadoop", "Cloud", "Architecture", "Leadership", "Strategy"]
      },
      {
        role: "Cientista de Dados",
        demand: "Alta",
        growth: "+15%",
        salaryRange: "R$ 10k - 30k",
        skills: ["Python", "R", "ML", "Statistics", "Hadoop"]
      },
      {
        role: "Analista de Big Data",
        demand: "Média",
        growth: "+12%",
        salaryRange: "R$ 6k - 18k",
        skills: ["SQL", "Hive", "Tableau", "Python", "Statistics"]
      }
    ],
    companies: [
      "Nubank", "Itaú", "Bradesco", "Magazine Luiza", "Mercado Livre",
      "iFood", "Uber", "99", "Stone", "PagSeguro", "Globo", "Petrobras"
    ],
    skills: [
      { name: "Apache Spark", demand: 95 },
      { name: "Python", demand: 90 },
      { name: "SQL", demand: 88 },
      { name: "Hadoop", demand: 75 },
      { name: "Kafka", demand: 70 },
      { name: "AWS", demand: 85 },
      { name: "Docker", demand: 65 },
      { name: "Kubernetes", demand: 60 }
    ]
  }

  const filteredResources = learningResources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory
    const levelMatch = selectedLevel === 'all' || resource.level === selectedLevel
    return categoryMatch && levelMatch
  })

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Recursos e Comunidade Hadoop
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Conecte-se com a comunidade global, acesse recursos de aprendizado e mantenha-se atualizado com as últimas tendências
        </p>
      </div>

      <Tabs defaultValue="resources" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Recursos
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Comunidade
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Eventos
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Certificações
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Ferramentas
          </TabsTrigger>
          <TabsTrigger value="jobs" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Mercado
          </TabsTrigger>
        </TabsList>

        {/* Learning Resources */}
        <TabsContent value="resources" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recursos de Aprendizado</h2>
            <div className="flex gap-2">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">Todas Categorias</option>
                <option value="books">Livros</option>
                <option value="courses">Cursos</option>
                <option value="videos">Vídeos</option>
                <option value="code">Código</option>
              </select>
              <select 
                value={selectedLevel} 
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">Todos Níveis</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
          </div>
          
          <div className="grid gap-6">
            {filteredResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription>por {resource.author}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{resource.type}</Badge>
                      <Badge variant={resource.level === 'Iniciante' ? 'default' : resource.level === 'Intermediário' ? 'secondary' : 'destructive'}>
                        {resource.level}
                      </Badge>
                      <Badge variant={resource.price === 'Gratuito' ? 'default' : 'secondary'}>
                        {resource.price}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">{resource.description}</p>
                    <div>
                      <strong className="text-sm">Tópicos cobertos:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {resource.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(resource.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">{resource.rating}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Acessar Recurso
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Community */}
        <TabsContent value="community" className="space-y-6">
          <h2 className="text-2xl font-bold">Comunidades e Fóruns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {communities.map((community, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{community.name}</CardTitle>
                      <CardDescription>{community.type}</CardDescription>
                    </div>
                    <Badge variant="outline">{community.platform}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">{community.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Membros: <strong>{community.members}</strong></div>
                      <div>Atividade: <strong>{community.activity}</strong></div>
                    </div>
                    <div>
                      <strong className="text-sm">Tópicos principais:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {community.topics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Participar da Comunidade
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Events */}
        <TabsContent value="events" className="space-y-6">
          <h2 className="text-2xl font-bold">Eventos e Conferências</h2>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{event.name}</CardTitle>
                      <CardDescription>{event.location} • {event.frequency}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{event.nextDate}</Badge>
                      <p className="text-sm text-gray-600 mt-1">{event.cost}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">{event.description}</p>
                    <div>
                      <strong className="text-sm">Tópicos principais:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {event.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Adicionar ao Calendário
                      </Button>
                      <Button className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Visitar Website
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Certifications */}
        <TabsContent value="certifications" className="space-y-6">
          <h2 className="text-2xl font-bold">Certificações Profissionais</h2>
          
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{cert.name}</CardTitle>
                      <CardDescription>{cert.provider} • {cert.level}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant={cert.difficulty === 'Alto' ? 'destructive' : 'secondary'}>
                        {cert.difficulty}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-1">{cert.cost}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-gray-600">{cert.description}</p>
                      <div>
                        <strong className="text-sm">Tópicos cobertos:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {cert.topics.map((topic, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Duração: <strong>{cert.duration}</strong></div>
                        <div>Validade: <strong>{cert.validity}</strong></div>
                        <div>Taxa de Aprovação: <strong>{cert.passRate}</strong></div>
                        <div>Impacto Salarial: <strong>{cert.salaryImpact}</strong></div>
                      </div>
                      <div>
                        <strong className="text-sm">Tempo de Preparação:</strong>
                        <p className="text-sm text-gray-600">{cert.preparationTime}</p>
                      </div>
                      <Button className="w-full flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Iniciar Preparação
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tools */}
        <TabsContent value="tools" className="space-y-6">
          <h2 className="text-2xl font-bold">Ferramentas e Utilitários</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">{tool.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{tool.type}</Badge>
                      <Badge variant={tool.free ? 'default' : 'secondary'}>
                        {tool.free ? 'Gratuito' : 'Pago'}
                      </Badge>
                    </div>
                    <Button className="w-full flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Acessar Ferramenta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Job Market */}
        <TabsContent value="jobs" className="space-y-6">
          <h2 className="text-2xl font-bold">Mercado de Trabalho</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tendências de Carreira</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobMarket.trends.map((trend, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{trend.role}</h4>
                        <Badge variant={trend.demand === 'Muito Alta' ? 'default' : 'secondary'}>
                          {trend.demand}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Crescimento: <strong>{trend.growth}</strong></div>
                        <div>Salário: <strong>{trend.salaryRange}</strong></div>
                      </div>
                      <div className="mt-2">
                        <strong className="text-sm">Skills principais:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {trend.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Empresas que Contratam</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {jobMarket.companies.map((company, index) => (
                      <Badge key={index} variant="outline">{company}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills em Demanda</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {jobMarket.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.demand}%</span>
                        </div>
                        <Progress value={skill.demand} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ResourcesCommunity
