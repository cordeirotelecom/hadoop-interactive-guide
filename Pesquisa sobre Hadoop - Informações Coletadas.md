# Pesquisa sobre Hadoop - Informações Coletadas

## Sistema de Arquivos Distribuídos do Hadoop (HDFS)

### Definição e Propósito
O HDFS é o principal sistema de armazenamento do Hadoop, projetado para armazenar de forma confiável grandes quantidades de dados em um cluster de máquinas. Sua arquitetura é otimizada para:
- Tolerância a falhas
- Escalabilidade
- Localidade de dados

### Arquitetura e Componentes

#### Modelo Mestre-Escravo
- **NameNode**: Gerencia os metadados (árvore de diretórios e informações de localização dos arquivos). Não armazena os dados reais.
- **DataNodes**: Gerenciam o armazenamento anexado aos nós e atendem às solicitações de leitura/gravação dos clientes. Reportam-se regularmente ao NameNode.
- **Secondary NameNode**: Faz checkpoints periódicos dos metadados do NameNode para reduzir tempo de inicialização e sobrecarga de memória.

### Como os Dados são Armazenados

#### Divisão em Blocos
- Arquivos são divididos em blocos de tamanho fixo (64 MB)
- Cada bloco é distribuído entre diferentes DataNodes
- Suporte ao paralelismo durante acesso aos dados
- Aumenta tolerância a falhas

#### Replicação
- Cada bloco é replicado (padrão: 3 cópias)
- Distribuído pelo cluster
- Leituras extraem dados da réplica mais próxima
- Gravações propagam-se para todas as réplicas

#### Escalabilidade Horizontal
- Novos nós podem ser adicionados ao cluster
- Sistema reequilibra dados automaticamente

### Tolerância a Falhas
- Falhas de nós são esperadas em sistemas distribuídos
- Mecanismo de replicação garante disponibilidade
- NameNode detecta falhas através de heartbeats perdidos
- Replicação automática de blocos perdidos
- Monitoramento constante da integridade dos blocos
- Nenhum ponto único de falha

## Componentes Principais do Hadoop (Visão Geral)
1. **HDFS** - Sistema de armazenamento distribuído
2. **MapReduce** - Framework de processamento
3. **YARN** - Gerenciamento de recursos
4. **Hadoop Common** - Utilitários essenciais


## Módulos Principais do Hadoop

O Hadoop consiste em quatro módulos básicos:

### 1. HDFS (Sistema de Arquivos Distribuídos do Hadoop)
- Sistema de armazenamento distribuído
- Divide arquivos em blocos e os distribui em um cluster

### 2. MapReduce
- Modelo de programação para processamento de dados em paralelo entre nós

### 3. YARN (Yet Another Resource Negotiator)
- Gerencia os recursos e agenda os trabalhos no cluster

### 4. Hadoop Common
- Conjunto de bibliotecas e utilitários compartilhados
- Oferece suporte a outros módulos

### Funcionamento Integrado
Esses módulos trabalham juntos para criar um ambiente de computação distribuída capaz de lidar com petabytes de dados.

## Estrutura de MapReduce

### Definição
O MapReduce é o mecanismo de processamento do Hadoop que permite computação distribuída em grandes conjuntos de dados, dividindo as tarefas em operações menores e independentes que podem ser executadas em paralelo.

### Modelo de Programação
O MapReduce segue um modelo de programação de duas fases:

#### 1. Fase de Mapeamento (Map)
- Conjunto de dados de entrada é dividido em partes menores
- Cada parte é processada para produzir pares de valores-chave
- Resultados intermediários são embaralhados e classificados
- Passados para a fase de redução

#### 2. Fase de Redução (Reduce)
- Dados agrupados são transformados em resultados finais
- Lógica de agregação é aplicada

### Eficácia
- Altamente eficaz para tarefas como:
  - Contagem de frequências de palavras
  - Filtragem de registros
  - União de conjuntos de dados em escala

### Implementação
- Desenvolvedores implementam lógica personalizada através das funções map() e reduce()
- A estrutura orquestra em todo o cluster

### Fluxo de Execução
1. **Divisão em Blocos**: Dados de entrada são divididos em blocos
2. **Distribuição**: ResourceManager (ou JobTracker nas versões habilitadas para YARN) coordena a distribuição dos blocos entre TaskTrackers ou NodeManagers
3. **Execução Map**: Tarefas Map são executadas em paralelo nos nós
4. **Embaralhamento**: Pares de valores-chave intermediários são embaralhados e classificados automaticamente
5. **Execução Reduce**: Tarefas de redução extraem dados agrupados e aplicam lógica de agregação
6. **Resultado Final**: Processo completo localiza dados distribuídos e produz resultado de saída

## YARN: Yet Another Resource Negotiator

### Definição e Função
O YARN funciona como a camada de gerenciamento de recursos do Hadoop. Ele separa o agendamento de tarefas e a alocação de recursos do modelo de processamento, ajudando o Hadoop a oferecer suporte a vários mecanismos de processamento de dados além do MapReduce.

### Função na Arquitetura do Hadoop
- Atua como plataforma central para gerenciar recursos de computação em todo o cluster
- Aloca recursos disponíveis do sistema para várias aplicações
- Coordena a execução
- Permite que o Hadoop seja dimensionado com eficiência
- Abre portas para suporte a outras estruturas como Apache Spark, Hive e Tez

### Componentes Principais do YARN

#### 1. ResourceManager
- Daemon mestre (programa em segundo plano)
- Gerencia todos os recursos e agenda aplicativos

#### 2. NodeManager
- Agente por nó que monitora o uso de recursos
- Envia relatórios para o ResourceManager

#### 3. ApplicationMaster
- Operação específica do trabalho
- Usa recursos do ResourceManager
- Coordena a execução com os NodeManagers

### Isolamento de Falhas
Cada aplicativo (como um trabalho de MapReduce) tem seu próprio ApplicationMaster, o que permite melhor isolamento de falhas e rastreamento de trabalhos.

### Processo de Gerenciamento de Recursos YARN
1. **Submissão**: Usuário envia um trabalho
2. **Aceitação**: ResourceManager aceita o trabalho e atribui um contêiner para iniciar o ApplicationMaster
3. **Solicitação**: ApplicationMaster solicita mais contêineres para executar tarefas, com base na carga de trabalho
4. **Alocação**: Recursos são alocados dinamicamente conforme necessário

## Guia de Instalação do Hadoop no Ubuntu

### Pré-requisitos
1. **Ubuntu instalado** e funcionando
2. **Java instalado** (JDK 8 ou superior)

### Parte 1: Download e Instalação do Hadoop

#### Passo 1: Adicionar Usuário do Sistema Hadoop
```bash
sudo addgroup hadoop_
sudo adduser --ingroup hadoop_ hduser_
```
- Digite senha, nome e outros detalhes
- Se houver erro de permissão: `sudo adduser hduser_ sudo`

#### Passo 2: Configurar SSH
```bash
# Trocar para usuário hduser
su - hduser_

# Criar nova chave SSH
ssh-keygen -t rsa -P ""

# Habilitar acesso SSH à máquina local
cat $HOME/.ssh/id_rsa.pub >> $HOME/.ssh/authorized_keys

# Testar configuração SSH
ssh localhost
```

**Resolução de problemas SSH:**
```bash
# Se SSH não estiver disponível
sudo apt-get purge openssh-server
sudo apt-get install openssh-server
```

#### Passo 3: Download do Hadoop
1. Acessar site oficial do Apache Hadoop
2. Selecionar versão estável
3. Baixar arquivo tar.gz (não o arquivo com src)
4. Extrair e configurar:

```bash
sudo tar xzf hadoop-2.2.0.tar.gz
sudo mv hadoop-2.2.0 hadoop
sudo chown -R hduser_:hadoop_ hadoop
```

### Parte 2: Configuração do Hadoop

#### Passo 1: Modificar ~/.bashrc
Adicionar ao final do arquivo ~/.bashrc:
```bash
#Set HADOOP_HOME
export HADOOP_HOME=<Installation Directory of Hadoop>
#Set JAVA_HOME
export JAVA_HOME=<Installation Directory of Java>
# Add bin/ directory of Hadoop to PATH
export PATH=$PATH:$HADOOP_HOME/bin
```

Aplicar configurações:
```bash
. ~/.bashrc
```

#### Passo 2: Configurações HDFS

**Configurar JAVA_HOME em hadoop-env.sh:**
```bash
sudo gedit $HADOOP_HOME/etc/hadoop/hadoop-env.sh
```

**Configurar core-site.xml:**
```bash
sudo gedit $HADOOP_HOME/etc/hadoop/core-site.xml
```

Adicionar entre as tags `<configuration>`:
```xml
<property>
<name>hadoop.tmp.dir</name>
<value>/app/hadoop/tmp</value>
<description>Parent directory for other temporary directories.</description>
</property>
<property>
<name>fs.defaultFS</name>
<value>hdfs://localhost:54310</value>
<description>The name of the default file system.</description>
</property>
```

**Criar diretórios e definir permissões:**
```bash
sudo mkdir -p /app/hadoop/tmp
sudo chown -R hduser_:hadoop_ /app/hadoop/tmp
sudo chmod 750 /app/hadoop/tmp
```

#### Passo 3: Configuração MapReduce

**Definir HADOOP_HOME globalmente:**
```bash
sudo gedit /etc/profile.d/hadoop.sh
```
Adicionar: `export HADOOP_HOME=/home/guru99/Downloads/Hadoop`

```bash
sudo chmod +x /etc/profile.d/hadoop.sh
```

**Configurar mapred-site.xml:**
```bash
sudo cp $HADOOP_HOME/etc/hadoop/mapred-site.xml.template $HADOOP_HOME/etc/hadoop/mapred-site.xml
sudo gedit $HADOOP_HOME/etc/hadoop/mapred-site.xml
```

Adicionar:
```xml
<property>
<name>mapreduce.jobtracker.address</name>
<value>localhost:54311</value>
<description>MapReduce job tracker runs at this host and port.</description>
</property>
```

**Configurar hdfs-site.xml:**
```bash
sudo gedit $HADOOP_HOME/etc/hadoop/hdfs-site.xml
```

Adicionar:
```xml
<property>
<name>dfs.replication</name>
<value>1</value>
<description>Default block replication.</description>
</property>
<property>
<name>dfs.datanode.data.dir</name>
<value>/home/hduser_/hdfs</value>
</property>
```

**Criar diretórios HDFS:**
```bash
sudo mkdir -p /home/hduser_/hdfs
sudo chown -R hduser_:hadoop_ /home/hduser_/hdfs
sudo chmod 750 /home/hduser_/hdfs
```

#### Passo 4: Formatar HDFS
```bash
$HADOOP_HOME/bin/hdfs namenode -format
```

#### Passo 5: Iniciar Hadoop
```bash
# Iniciar DFS
$HADOOP_HOME/sbin/start-dfs.sh

# Iniciar YARN
$HADOOP_HOME/sbin/start-yarn.sh

# Verificar processos em execução
jps
```

**Saída esperada do jps:**
- NameNode
- NodeManager
- ResourceManager
- SecondaryNameNode
- DataNode

#### Passo 6: Parar Hadoop
```bash
$HADOOP_HOME/sbin/stop-dfs.sh
$HADOOP_HOME/sbin/stop-yarn.sh
```
