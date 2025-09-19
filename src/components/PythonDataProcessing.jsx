import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { Badge } from "./ui/badge.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx"
import { Textarea } from "./ui/textarea.jsx"
import { Input } from "./ui/input.jsx"
import { 
  FileSpreadsheet, 
  Filter, 
  Download, 
  Upload,
  Play,
  Code,
  Database,
  BarChart3,
  CheckCircle,
  Copy,
  FileText,
  Zap,
  Settings,
  Target,
  TrendingUp,
  AlertCircle,
  Info
} from 'lucide-react'

const PythonDataProcessing = () => {
  const [selectedExample, setSelectedExample] = useState('basic-filtering')
  const [csvData, setCsvData] = useState('')
  const [filterResult, setFilterResult] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const examples = {
    'basic-filtering': {
      title: 'Filtragem Básica de CSV',
      description: 'Filtrar dados de vendas por região e valor',
      code: `import pandas as pd
import numpy as np

# Carregar dados do CSV
df = pd.read_csv('vendas.csv')

# Visualizar estrutura dos dados
print("Primeiras 5 linhas:")
print(df.head())
print("\\nInformações do dataset:")
print(df.info())

# Filtragem básica - vendas acima de R$ 1000
vendas_altas = df[df['valor'] > 1000]

# Filtrar por região específica
vendas_sudeste = df[df['regiao'] == 'Sudeste']

# Filtros combinados
vendas_filtradas = df[
    (df['valor'] > 1000) & 
    (df['regiao'].isin(['Sudeste', 'Sul']))
]

print(f"Total de registros: {len(df)}")
print(f"Vendas altas: {len(vendas_altas)}")
print(f"Vendas filtradas: {len(vendas_filtradas)}")`,
      sampleData: `produto,valor,regiao,vendedor,data
Notebook,2500.00,Sudeste,João Silva,2024-01-15
Mouse,45.90,Norte,Maria Santos,2024-01-16
Teclado,120.00,Sul,Pedro Costa,2024-01-17
Monitor,899.99,Nordeste,Ana Lima,2024-01-18
Smartphone,1200.00,Sudeste,Carlos Oliveira,2024-01-19`,
      output: `Primeiras 5 linhas:
    produto     valor    regiao       vendedor        data
0   Notebook   2500.00   Sudeste    João Silva   2024-01-15
1   Mouse        45.90   Norte      Maria Santos 2024-01-16
2   Teclado     120.00   Sul        Pedro Costa  2024-01-17
3   Monitor     899.99   Nordeste   Ana Lima     2024-01-18
4   Smartphone 1200.00   Sudeste    Carlos Oliveira 2024-01-19

Total de registros: 5
Vendas altas: 2
Vendas filtradas: 2`
    },
    'excel-processing': {
      title: 'Processamento de Excel Avançado',
      description: 'Trabalhar com múltiplas planilhas e formatação',
      code: `import pandas as pd
import openpyxl
from openpyxl.styles import Font, PatternFill
from openpyxl.utils.dataframe import dataframe_to_rows

# Ler múltiplas abas do Excel
excel_file = 'relatorio_vendas.xlsx'
vendas_2023 = pd.read_excel(excel_file, sheet_name='2023')
vendas_2024 = pd.read_excel(excel_file, sheet_name='2024')

# Combinar dados de diferentes anos
vendas_completas = pd.concat([vendas_2023, vendas_2024], ignore_index=True)

# Análise por período
vendas_completas['data'] = pd.to_datetime(vendas_completas['data'])
vendas_completas['ano'] = vendas_completas['data'].dt.year
vendas_completas['mes'] = vendas_completas['data'].dt.month

# Agrupamento e análise
resumo_mensal = vendas_completas.groupby(['ano', 'mes']).agg({
    'valor': ['sum', 'mean', 'count'],
    'produto': 'nunique'
}).round(2)

# Criar novo Excel com formatação
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Resumo Vendas"

# Adicionar dados formatados
for r in dataframe_to_rows(resumo_mensal, index=True, header=True):
    ws.append(r)

# Aplicar formatação
header_font = Font(bold=True, color="FFFFFF")
header_fill = PatternFill(start_color="366092", end_color="366092", fill_type="solid")

for cell in ws[1]:
    cell.font = header_font
    cell.fill = header_fill

# Salvar arquivo processado
wb.save('vendas_processadas.xlsx')
print("Arquivo processado salvo com sucesso!")`,
      sampleData: `# Estrutura do Excel:
# Aba "2023": produto, valor, regiao, data
# Aba "2024": produto, valor, regiao, data

# Exemplo de dados 2023:
Notebook,2500.00,Sudeste,2023-12-15
Mouse,45.90,Norte,2023-11-16

# Exemplo de dados 2024:
Tablet,1800.00,Sul,2024-01-10
Teclado,120.00,Nordeste,2024-02-05`,
      output: `Resumo Mensal Gerado:
ano  mes  valor_sum  valor_mean  valor_count  produto_nunique
2023  11     45.90      45.90           1              1
2023  12   2500.00    2500.00           1              1
2024   1   1800.00    1800.00           1              1
2024   2    120.00     120.00           1              1

Arquivo processado salvo com sucesso!`
    },
    'data-cleaning': {
      title: 'Limpeza e Transformação de Dados',
      description: 'Tratar dados faltantes, duplicados e inconsistentes',
      code: `import pandas as pd
import numpy as np
from datetime import datetime

# Carregar dados com problemas
df = pd.read_csv('dados_sujos.csv')

print("=== ANÁLISE INICIAL ===")
print(f"Shape original: {df.shape}")
print(f"Valores nulos por coluna:")
print(df.isnull().sum())
print(f"\\nDuplicatas: {df.duplicated().sum()}")

# 1. Remover duplicatas
df_clean = df.drop_duplicates()
print(f"\\nApós remover duplicatas: {df_clean.shape}")

# 2. Tratar valores nulos
# Preencher valores numéricos com mediana
df_clean['valor'].fillna(df_clean['valor'].median(), inplace=True)

# Preencher categóricos com moda
df_clean['regiao'].fillna(df_clean['regiao'].mode()[0], inplace=True)

# Remover linhas com muitos nulos
df_clean = df_clean.dropna(thresh=len(df_clean.columns) * 0.7)

# 3. Padronizar dados
# Converter texto para maiúsculo
df_clean['regiao'] = df_clean['regiao'].str.upper().str.strip()

# Padronizar datas
df_clean['data'] = pd.to_datetime(df_clean['data'], errors='coerce')

# 4. Detectar e tratar outliers
Q1 = df_clean['valor'].quantile(0.25)
Q3 = df_clean['valor'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Remover outliers extremos
df_clean = df_clean[
    (df_clean['valor'] >= lower_bound) & 
    (df_clean['valor'] <= upper_bound)
]

# 5. Criar novas features
df_clean['valor_categoria'] = pd.cut(
    df_clean['valor'], 
    bins=[0, 100, 500, 1000, float('inf')], 
    labels=['Baixo', 'Médio', 'Alto', 'Premium']
)

print("\\n=== RESULTADO FINAL ===")
print(f"Shape final: {df_clean.shape}")
print(f"Valores nulos restantes: {df_clean.isnull().sum().sum()}")
print(f"\\nResumo por categoria:")
print(df_clean['valor_categoria'].value_counts())

# Salvar dados limpos
df_clean.to_csv('dados_limpos.csv', index=False)
print("\\nDados limpos salvos em 'dados_limpos.csv'")`,
      sampleData: `# Dados com problemas:
produto,valor,regiao,data,vendedor
Notebook,2500.00,sudeste,2024-01-15,João
Mouse,,norte,15/01/2024,Maria
Teclado,120.00, sul ,2024-01-17,Pedro
Notebook,2500.00,sudeste,2024-01-15,João  # Duplicata
Monitor,50000.00,nordeste,invalid_date,Ana  # Outlier
,899.99,SUDESTE,2024-01-19,Carlos  # Produto vazio`,
      output: `=== ANÁLISE INICIAL ===
Shape original: (6, 5)
Valores nulos por coluna:
produto     1
valor       1
regiao      0
data        0
vendedor    0

Duplicatas: 1

Após remover duplicatas: (5, 5)

=== RESULTADO FINAL ===
Shape final: (4, 6)
Valores nulos restantes: 0

Resumo por categoria:
valor_categoria
Médio     2
Alto      1
Baixo     1
Name: count, dtype: int64

Dados limpos salvos em 'dados_limpos.csv'`
    },
    'hadoop-integration': {
      title: 'Integração Python + Hadoop',
      description: 'Conectar Python com HDFS e processar dados',
      code: `import pandas as pd
from hdfs import InsecureClient
import subprocess
import os

# 1. Configurar conexão com HDFS
hdfs_client = InsecureClient('http://localhost:9870', user='hadoop')

# 2. Função para upload de arquivo para HDFS
def upload_to_hdfs(local_path, hdfs_path):
    try:
        hdfs_client.upload(hdfs_path, local_path, overwrite=True)
        print(f"Arquivo {local_path} enviado para {hdfs_path}")
        return True
    except Exception as e:
        print(f"Erro no upload: {e}")
        return False

# 3. Função para download do HDFS
def download_from_hdfs(hdfs_path, local_path):
    try:
        hdfs_client.download(hdfs_path, local_path, overwrite=True)
        print(f"Arquivo {hdfs_path} baixado para {local_path}")
        return True
    except Exception as e:
        print(f"Erro no download: {e}")
        return False

# 4. Processar dados localmente
def process_sales_data(input_file):
    # Carregar dados
    df = pd.read_csv(input_file)
    
    # Análise de vendas
    summary = df.groupby('regiao').agg({
        'valor': ['sum', 'mean', 'count'],
        'produto': 'nunique'
    }).round(2)
    
    # Salvar resultado
    output_file = 'vendas_summary.csv'
    summary.to_csv(output_file)
    
    return output_file, summary

# 5. Pipeline completo
def hadoop_python_pipeline():
    print("=== PIPELINE PYTHON + HADOOP ===")
    
    # Preparar dados locais
    local_input = 'vendas_raw.csv'
    hdfs_input = '/user/data/vendas_raw.csv'
    hdfs_output = '/user/results/vendas_summary.csv'
    
    # Upload para HDFS
    if upload_to_hdfs(local_input, hdfs_input):
        print("✓ Dados enviados para HDFS")
    
    # Listar arquivos no HDFS
    files = hdfs_client.list('/user/data/')
    print(f"Arquivos no HDFS: {files}")
    
    # Download para processamento
    temp_file = 'temp_vendas.csv'
    if download_from_hdfs(hdfs_input, temp_file):
        print("✓ Dados baixados do HDFS")
    
    # Processar dados
    output_file, summary = process_sales_data(temp_file)
    print("✓ Dados processados")
    print(summary)
    
    # Upload resultado para HDFS
    if upload_to_hdfs(output_file, hdfs_output):
        print("✓ Resultado salvo no HDFS")
    
    # Limpeza
    os.remove(temp_file)
    print("✓ Pipeline concluído")

# 6. Executar MapReduce via Python
def run_mapreduce_job(input_path, output_path, mapper, reducer):
    cmd = f"""
    hadoop jar $HADOOP_HOME/share/hadoop/tools/lib/hadoop-streaming-*.jar \\
    -files {mapper},{reducer} \\
    -mapper {mapper} \\
    -reducer {reducer} \\
    -input {input_path} \\
    -output {output_path}
    """
    
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            print("✓ Job MapReduce executado com sucesso")
            return True
        else:
            print(f"Erro no MapReduce: {result.stderr}")
            return False
    except Exception as e:
        print(f"Erro ao executar MapReduce: {e}")
        return False

# Executar pipeline
if __name__ == "__main__":
    hadoop_python_pipeline()`,
      sampleData: `# Arquivo vendas_raw.csv:
produto,valor,regiao,vendedor,data
Notebook,2500.00,Sudeste,João,2024-01-15
Mouse,45.90,Norte,Maria,2024-01-16
Teclado,120.00,Sul,Pedro,2024-01-17
Monitor,899.99,Nordeste,Ana,2024-01-18
Smartphone,1200.00,Sudeste,Carlos,2024-01-19`,
      output: `=== PIPELINE PYTHON + HADOOP ===
✓ Dados enviados para HDFS
Arquivos no HDFS: ['vendas_raw.csv']
✓ Dados baixados do HDFS
✓ Dados processados

Resumo por região:
regiao    valor_sum  valor_mean  valor_count  produto_nunique
Nordeste    899.99     899.99           1              1
Norte        45.90      45.90           1              1
Sudeste    3700.00    1850.00           2              2
Sul         120.00     120.00           1              1

✓ Resultado salvo no HDFS
✓ Pipeline concluído`
    }
  }

  const libraries = [
    {
      name: 'pandas',
      description: 'Manipulação e análise de dados',
      install: 'pip install pandas',
      usage: 'Leitura de CSV/Excel, filtragem, agrupamento',
      icon: FileSpreadsheet
    },
    {
      name: 'openpyxl',
      description: 'Trabalhar com arquivos Excel',
      install: 'pip install openpyxl',
      usage: 'Ler/escrever Excel, formatação, múltiplas abas',
      icon: FileText
    },
    {
      name: 'hdfs3',
      description: 'Cliente Python para HDFS',
      install: 'pip install hdfs3',
      usage: 'Upload/download arquivos, integração Hadoop',
      icon: Database
    },
    {
      name: 'pyspark',
      description: 'Interface Python para Spark',
      install: 'pip install pyspark',
      usage: 'Processamento distribuído, ML, streaming',
      icon: Zap
    }
  ]

  const bestPractices = [
    {
      title: 'Validação de Dados',
      description: 'Sempre validar tipos e formatos antes do processamento',
      code: `# Validar tipos de dados
df['valor'] = pd.to_numeric(df['valor'], errors='coerce')
df['data'] = pd.to_datetime(df['data'], errors='coerce')

# Verificar valores válidos
assert df['valor'].notna().all(), "Valores inválidos encontrados"`,
      icon: CheckCircle
    },
    {
      title: 'Tratamento de Memória',
      description: 'Otimizar uso de memória para grandes datasets',
      code: `# Ler arquivo em chunks
chunk_size = 10000
for chunk in pd.read_csv('big_file.csv', chunksize=chunk_size):
    processed_chunk = process_data(chunk)
    save_chunk(processed_chunk)`,
      icon: Settings
    },
    {
      title: 'Logging e Monitoramento',
      description: 'Implementar logs detalhados para debugging',
      code: `import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info(f"Processando {len(df)} registros")
logger.warning(f"Encontrados {df.isnull().sum().sum()} valores nulos")`,
      icon: Info
    }
  ]

  const simulateProcessing = () => {
    setIsProcessing(true)
    
    // Simular processamento
    setTimeout(() => {
      const lines = csvData.split('\n').filter(line => line.trim())
      if (lines.length > 1) {
        const result = `Dados processados com sucesso!
        
Registros encontrados: ${lines.length - 1}
Colunas: ${lines[0].split(',').length}

Exemplo de filtragem aplicada:
- Removidas linhas vazias
- Validados tipos de dados
- Aplicados filtros personalizados

Resultado salvo em: dados_filtrados.csv`
        
        setFilterResult(result)
      } else {
        setFilterResult('Por favor, insira dados CSV válidos para processar.')
      }
      setIsProcessing(false)
    }, 2000)
  }

  const copyCode = (code) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Code className="h-8 w-8" />
            Processamento de Dados com Python
          </CardTitle>
          <p className="text-green-100 text-lg">
            Filtragem, limpeza e análise de planilhas Excel e CSV com integração Hadoop
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="examples" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="examples">Exemplos Práticos</TabsTrigger>
          <TabsTrigger value="libraries">Bibliotecas</TabsTrigger>
          <TabsTrigger value="simulator">Simulador</TabsTrigger>
          <TabsTrigger value="best-practices">Boas Práticas</TabsTrigger>
          <TabsTrigger value="integration">Integração</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(examples).map(([key, example]) => (
              <Button
                key={key}
                variant={selectedExample === key ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-start text-left"
                onClick={() => setSelectedExample(key)}
              >
                <div className="font-semibold text-sm mb-1">{example.title}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {example.description}
                </div>
              </Button>
            ))}
          </div>

          {selectedExample && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {examples[selectedExample].title}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(examples[selectedExample].code)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar Código
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="code" className="w-full">
                  <TabsList>
                    <TabsTrigger value="code">Código Python</TabsTrigger>
                    <TabsTrigger value="data">Dados de Exemplo</TabsTrigger>
                    <TabsTrigger value="output">Saída Esperada</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="code">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{examples[selectedExample].code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="data">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <pre className="text-sm">
                        <code>{examples[selectedExample].sampleData}</code>
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="output">
                    <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                      <pre className="text-sm text-blue-800 dark:text-blue-200">
                        <code>{examples[selectedExample].output}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Libraries Tab */}
        <TabsContent value="libraries" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {libraries.map((lib, index) => {
              const Icon = lib.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                      {lib.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{lib.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Instalação:</h4>
                      <div className="bg-gray-900 rounded p-2">
                        <code className="text-green-400 text-sm">{lib.install}</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Uso Principal:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lib.usage}</p>
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
                <Play className="h-6 w-6 text-green-600" />
                Simulador de Processamento de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cole seus dados CSV aqui:
                </label>
                <Textarea
                  placeholder="produto,valor,regiao,vendedor
Notebook,2500.00,Sudeste,João
Mouse,45.90,Norte,Maria
Teclado,120.00,Sul,Pedro"
                  value={csvData}
                  onChange={(e) => setCsvData(e.target.value)}
                  className="h-32"
                />
              </div>
              
              <Button 
                onClick={simulateProcessing}
                disabled={isProcessing || !csvData.trim()}
                className="w-full"
              >
                {isProcessing ? (
                  <>
                    <Settings className="h-4 w-4 mr-2 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    <Filter className="h-4 w-4 mr-2" />
                    Processar Dados
                  </>
                )}
              </Button>
              
              {filterResult && (
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <pre className="text-sm text-green-800 dark:text-green-200 whitespace-pre-wrap">
                    {filterResult}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Best Practices Tab */}
        <TabsContent value="best-practices" className="space-y-6">
          <div className="space-y-6">
            {bestPractices.map((practice, index) => {
              const Icon = practice.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-green-600" />
                      {practice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{practice.description}</p>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
                        <code>{practice.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* Integration Tab */}
        <TabsContent value="integration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-6 w-6 text-blue-600" />
                Pipeline Completo: Python + Hadoop
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="text-center p-4">
                  <Upload className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">1. Upload</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Enviar dados para HDFS
                  </p>
                </Card>
                
                <Card className="text-center p-4">
                  <Filter className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">2. Processar</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Filtrar e limpar dados
                  </p>
                </Card>
                
                <Card className="text-center p-4">
                  <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">3. Analisar</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Gerar insights e métricas
                  </p>
                </Card>
                
                <Card className="text-center p-4">
                  <Download className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold">4. Exportar</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Salvar resultados
                  </p>
                </Card>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                      Vantagens da Integração Python + Hadoop
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                      <li>• Facilidade de desenvolvimento com Python</li>
                      <li>• Escalabilidade do Hadoop para grandes volumes</li>
                      <li>• Reutilização de código existente</li>
                      <li>• Flexibilidade para diferentes formatos de dados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PythonDataProcessing
