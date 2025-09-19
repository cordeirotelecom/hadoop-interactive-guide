import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { 
  Building2, 
  Users, 
  Database, 
  TrendingUp, 
  Globe,
  Smartphone,
  Car,
  Music,
  ShoppingCart,
  CreditCard,
  Heart,
  Tv,
  Search,
  MessageSquare,
  BarChart3,
  Zap,
  Clock,
  DollarSign,
  Target,
  Award,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const RealWorldCases = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  const companies = [
    {
      id: 'netflix',
      name: 'Netflix',
      industry: 'streaming',
      logo: Tv,
      description: 'Plataforma de streaming global com 260+ milhões de assinantes',
      dataVolume: '1+ PB/dia',
      hadoopUsage: 'HDFS, Spark, Kafka, Hive',
      challenges: [
        'Recomendações personalizadas em tempo real',
        'Análise de comportamento de visualização',
        'Otimização de qualidade de streaming',
        'A/B testing em escala global'
      ],
      solutions: [
        'Sistema de recomendação baseado em ML com Spark',
        'Pipeline de dados em tempo real com Kafka',
        'Data lake no HDFS para análise histórica',
        'Processamento de logs de 1+ bilhão de eventos/dia'
      ],
      results: [
        '80% do conteúdo assistido vem de recomendações',
        'Redução de 35% no churn de usuários',
        'Economia de $1B+ em custos de conteúdo',
        'Tempo de resposta < 100ms para recomendações'
      ],
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Cassandra', 'Elasticsearch'],
      metrics: {
        dataProcessed: '500+ TB/dia',
        users: '260M+',
        countries: '190+',
        savings: '$1B+'
      }
    },
    {
      id: 'uber',
      name: 'Uber',
      industry: 'transportation',
      logo: Car,
      description: 'Plataforma de mobilidade urbana presente em 70+ países',
      dataVolume: '100+ TB/dia',
      hadoopUsage: 'HDFS, Spark, Kafka, Hive, HBase',
      challenges: [
        'Matching em tempo real entre motoristas e passageiros',
        'Previsão de demanda e preços dinâmicos',
        'Otimização de rotas e ETAs',
        'Detecção de fraudes e segurança'
      ],
      solutions: [
        'Sistema de matching com latência < 1 segundo',
        'ML para previsão de demanda usando Spark MLlib',
        'Processamento de GPS em tempo real com Kafka',
        'Data warehouse no Hive para análises históricas'
      ],
      results: [
        'Redução de 20% no tempo de espera',
        'Aumento de 15% na eficiência de rotas',
        'Detecção de 99.9% das tentativas de fraude',
        'Economia de $500M+ em custos operacionais'
      ],
      technologies: ['Hadoop', 'Spark', 'Kafka', 'HBase', 'Presto'],
      metrics: {
        dataProcessed: '100+ TB/dia',
        rides: '23M+/dia',
        cities: '10,000+',
        drivers: '5M+'
      }
    },
    {
      id: 'airbnb',
      name: 'Airbnb',
      industry: 'hospitality',
      logo: Building2,
      description: 'Marketplace global de hospedagem com 4M+ anfitriões',
      dataVolume: '50+ TB/dia',
      hadoopUsage: 'HDFS, Spark, Hive, Airflow',
      challenges: [
        'Algoritmo de busca e ranking de propriedades',
        'Previsão de preços dinâmicos',
        'Detecção de conteúdo fraudulento',
        'Análise de sentimentos de reviews'
      ],
      solutions: [
        'Sistema de ranking com 100+ features usando Spark',
        'Pipeline de ML para precificação inteligente',
        'Processamento de imagens com deep learning',
        'ETL automatizado com Airflow'
      ],
      results: [
        'Aumento de 25% na taxa de conversão',
        'Melhoria de 30% na satisfação do usuário',
        'Redução de 40% em listagens fraudulentas',
        'Crescimento de 300% em reservas'
      ],
      technologies: ['Hadoop', 'Spark', 'Hive', 'Airflow', 'Druid'],
      metrics: {
        dataProcessed: '50+ TB/dia',
        listings: '7M+',
        countries: '220+',
        bookings: '1B+'
      }
    },
    {
      id: 'spotify',
      name: 'Spotify',
      industry: 'music',
      logo: Music,
      description: 'Plataforma de streaming de música com 500M+ usuários',
      dataVolume: '200+ TB/dia',
      hadoopUsage: 'HDFS, Spark, Kafka, Storm',
      challenges: [
        'Recomendações musicais personalizadas',
        'Análise de tendências musicais globais',
        'Otimização de qualidade de áudio',
        'Descoberta de novos artistas'
      ],
      solutions: [
        'Sistema de recomendação com collaborative filtering',
        'Análise de audio features com ML',
        'Processamento de eventos de streaming em tempo real',
        'Data lake para análise de comportamento musical'
      ],
      results: [
        '31% do tempo de escuta vem de recomendações',
        'Descoberta de 40,000+ novos artistas/mês',
        'Redução de 25% no skip rate',
        'Aumento de 50% no engagement'
      ],
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Storm', 'Cassandra'],
      metrics: {
        dataProcessed: '200+ TB/dia',
        users: '500M+',
        tracks: '100M+',
        playlists: '5B+'
      }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      industry: 'social',
      logo: Users,
      description: 'Rede social profissional com 900M+ membros',
      dataVolume: '300+ TB/dia',
      hadoopUsage: 'HDFS, Spark, Kafka, Voldemort',
      challenges: [
        'Feed personalizado para cada membro',
        'Recomendações de conexões e empregos',
        'Análise de skills e tendências de mercado',
        'Detecção de spam e conteúdo inadequado'
      ],
      solutions: [
        'Sistema de ranking de feed com deep learning',
        'Graph processing para recomendações de rede',
        'NLP para análise de perfis e vagas',
        'Real-time feature store com Kafka'
      ],
      results: [
        'Aumento de 40% no engagement do feed',
        'Melhoria de 60% na qualidade das recomendações',
        'Redução de 80% em spam',
        'Crescimento de 200% em aplicações de emprego'
      ],
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Voldemort', 'Pinot'],
      metrics: {
        dataProcessed: '300+ TB/dia',
        members: '900M+',
        companies: '58M+',
        jobs: '25M+'
      }
    },
    {
      id: 'paypal',
      name: 'PayPal',
      industry: 'fintech',
      logo: CreditCard,
      description: 'Plataforma de pagamentos digitais com 400M+ contas',
      dataVolume: '150+ TB/dia',
      hadoopUsage: 'HDFS, Spark, Kafka, HBase',
      challenges: [
        'Detecção de fraudes em tempo real',
        'Análise de risco de transações',
        'Compliance regulatório global',
        'Otimização de taxas de conversão'
      ],
      solutions: [
        'Sistema de ML para detecção de fraudes < 100ms',
        'Análise de padrões comportamentais com graph analytics',
        'Pipeline de compliance automatizado',
        'A/B testing para otimização de checkout'
      ],
      results: [
        'Redução de 50% em fraudes',
        'Melhoria de 99.9% na precisão de detecção',
        'Economia de $2B+ em perdas por fraude',
        'Aumento de 20% na taxa de conversão'
      ],
      technologies: ['Hadoop', 'Spark', 'Kafka', 'HBase', 'Elasticsearch'],
      metrics: {
        dataProcessed: '150+ TB/dia',
        accounts: '400M+',
        transactions: '22B+/ano',
        merchants: '35M+'
      }
    }
  ]

  const industries = [
    { id: 'all', name: 'Todas as Indústrias', icon: Globe },
    { id: 'streaming', name: 'Streaming & Mídia', icon: Tv },
    { id: 'transportation', name: 'Transporte & Logística', icon: Car },
    { id: 'hospitality', name: 'Hospitalidade & Turismo', icon: Building2 },
    { id: 'music', name: 'Música & Entretenimento', icon: Music },
    { id: 'social', name: 'Redes Sociais', icon: Users },
    { id: 'fintech', name: 'Fintech & Pagamentos', icon: CreditCard }
  ]

  const filteredCompanies = selectedIndustry === 'all' 
    ? companies 
    : companies.filter(company => company.industry === selectedIndustry)

  const getIndustryColor = (industry) => {
    const colors = {
      streaming: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      transportation: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      hospitality: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      music: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      social: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      fintech: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    }
    return colors[industry] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  return (
    <div className="space-y-8">
      {/* Industry Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            Casos de Uso Reais por Indústria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Button
                  key={industry.id}
                  variant={selectedIndustry === industry.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {industry.name}
                </Button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.map((company) => {
              const Logo = company.logo
              const isSelected = selectedCompany === company.id
              return (
                <Card 
                  key={company.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' : ''
                  }`}
                  onClick={() => setSelectedCompany(isSelected ? null : company.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Logo className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{company.name}</h4>
                          <Badge className={`text-xs ${getIndustryColor(company.industry)}`}>
                            {company.industry}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {company.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Volume de dados:</span>
                          <span className="font-semibold text-blue-600">{company.dataVolume}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Company Details */}
      {selectedCompany && (() => {
        const company = companies.find(c => c.id === selectedCompany)
        const Logo = company.logo
        
        return (
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Logo className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {company.name}
                    <Badge className={getIndustryColor(company.industry)}>
                      {company.industry}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                    {company.description}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(company.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <Tabs defaultValue="challenges" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="challenges">Desafios</TabsTrigger>
                  <TabsTrigger value="solutions">Soluções</TabsTrigger>
                  <TabsTrigger value="results">Resultados</TabsTrigger>
                  <TabsTrigger value="tech">Tecnologias</TabsTrigger>
                </TabsList>
                
                <TabsContent value="challenges" className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-600" />
                    Principais Desafios
                  </h4>
                  <div className="grid gap-3">
                    {company.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="solutions" className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Soluções Implementadas
                  </h4>
                  <div className="grid gap-3">
                    {company.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="results" className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    Resultados Alcançados
                  </h4>
                  <div className="grid gap-3">
                    {company.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          ✓
                        </div>
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="tech" className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Database className="h-5 w-5 text-purple-600" />
                    Stack Tecnológico
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Ferramentas Hadoop Utilizadas:
                      </span>
                      <p className="text-sm mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                        {company.hadoopUsage}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Tecnologias Complementares:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {company.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )
      })()}

      {/* Industry Statistics */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-purple-600" />
            Estatísticas do Mercado por Indústria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600">Streaming & Mídia</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Crescimento anual:</span>
                  <span className="font-semibold">+15.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Investimento em Big Data:</span>
                  <span className="font-semibold">$12.5B</span>
                </div>
                <div className="flex justify-between">
                  <span>Dados processados/dia:</span>
                  <span className="font-semibold">2.5+ PB</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Transporte & Logística</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Crescimento anual:</span>
                  <span className="font-semibold">+22.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Investimento em Big Data:</span>
                  <span className="font-semibold">$8.3B</span>
                </div>
                <div className="flex justify-between">
                  <span>Dados de GPS/dia:</span>
                  <span className="font-semibold">500+ TB</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-600">Fintech & Pagamentos</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Crescimento anual:</span>
                  <span className="font-semibold">+18.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Investimento em Big Data:</span>
                  <span className="font-semibold">$15.7B</span>
                </div>
                <div className="flex justify-between">
                  <span>Transações/segundo:</span>
                  <span className="font-semibold">65,000+</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Factors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-gold-600" />
            Fatores Críticos de Sucesso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Estratégias Vencedoras</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Arquitetura Escalável</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Design para crescimento exponencial desde o início
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Real-time Processing</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Latência baixa para experiências responsivas
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Machine Learning Integration</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ML como diferencial competitivo principal
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Data-Driven Culture</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Decisões baseadas em dados em todos os níveis
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600">Armadilhas Comuns</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Subestimar Complexidade</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Não planejar para escala e manutenção
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Falta de Governança</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Ausência de políticas de qualidade de dados
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Vendor Lock-in</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Dependência excessiva de soluções proprietárias
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">Negligenciar Segurança</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Não implementar controles adequados desde o início
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RealWorldCases
