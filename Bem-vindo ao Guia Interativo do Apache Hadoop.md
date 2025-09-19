# Bem-vindo ao Guia Interativo do Apache Hadoop

## O que é Hadoop e por que ele é importante?

O Apache Hadoop é um framework de código aberto que revolucionou a forma como lidamos com **Big Data**. Em um mundo onde a quantidade de dados gerados cresce exponencialmente, ferramentas tradicionais de processamento e armazenamento se tornam insuficientes. O Hadoop surge como uma solução robusta, econômica e escalável, permitindo o processamento distribuído de grandes conjuntos de dados em clusters de computadores comuns.

Sua importância reside em três pilares:

1.  **Escalabilidade**: Adicionar mais nós de processamento ao cluster é um processo simples, permitindo que o sistema cresça junto com o volume de dados.
2.  **Tolerância a Falhas**: O Hadoop foi projetado para detectar e lidar com falhas de hardware automaticamente, garantindo alta disponibilidade e confiabilidade.
3.  **Processamento Paralelo**: Através do modelo MapReduce, o Hadoop divide tarefas complexas em partes menores que são executadas simultaneamente em vários nós, acelerando drasticamente a análise.

## Arquitetura e Componentes Principais

A arquitetura do Hadoop é modular e composta por quatro componentes essenciais que trabalham em conjunto.

### HDFS (Hadoop Distributed File System)

O HDFS é a base do armazenamento no Hadoop. É um sistema de arquivos distribuído que armazena os dados em blocos, replicando-os através do cluster para garantir a tolerância a falhas.

-   **NameNode**: O cérebro do HDFS. Gerencia os metadados do sistema de arquivos, como a estrutura de diretórios e a localização de cada bloco de dados.
-   **DataNode**: Os trabalhadores do HDFS. Armazenam os blocos de dados e executam as operações de leitura e escrita solicitadas pelo NameNode.

### YARN (Yet Another Resource Negotiator)

O YARN é o responsável por gerenciar os recursos do cluster (CPU, memória) e agendar a execução das tarefas.

-   **ResourceManager**: O mestre do YARN. Gerencia o uso de recursos em todo o cluster.
-   **NodeManager**: Agente que roda em cada nó do cluster, monitorando o uso de recursos e reportando ao ResourceManager.
-   **ApplicationMaster**: Gerencia o ciclo de vida de uma aplicação específica, negociando recursos com o ResourceManager e coordenando a execução com os NodeManagers.

### MapReduce

MapReduce é o modelo de programação original do Hadoop para processamento de dados em paralelo. Um trabalho MapReduce é dividido em duas fases principais:

-   **Fase Map**: A tarefa de entrada é dividida em problemas menores. Os dados são lidos, processados e transformados em pares de chave-valor.
-   **Fase Reduce**: Os resultados da fase Map são agregados e combinados para produzir o resultado final.

## Guia de Instalação Passo a Passo (Ubuntu)

Este guia detalha a instalação do Hadoop em modo pseudo-distribuído em um sistema Ubuntu.

### Pré-requisitos

-   Ubuntu Linux instalado.
-   Java Development Kit (JDK) 8 ou superior instalado.

### 1. Criar um Usuário Dedicado para o Hadoop

```bash
sudo addgroup hadoop
sudo adduser --ingroup hadoop hduser
# Conceda privilégios de administrador, se necessário
sudo adduser hduser sudo
```

### 2. Configurar Acesso SSH

O Hadoop usa SSH para gerenciar seus nós. É necessário configurar um acesso sem senha.

```bash
# Mude para o usuário recém-criado
su - hduser

# Gere uma nova chave SSH
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa

# Adicione a chave gerada às chaves autorizadas
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# Defina as permissões corretas
chmod 0600 ~/.ssh/authorized_keys

# Teste a conexão
ssh localhost
```

### 3. Baixar e Instalar o Hadoop

Visite o [site oficial do Apache Hadoop](https://hadoop.apache.org/releases.html) para baixar uma versão estável. Substitua `3.3.1` pela versão que você baixou.

```bash
wget https://archive.apache.org/dist/hadoop/common/hadoop-3.3.1/hadoop-3.3.1.tar.gz
tar -xvf hadoop-3.3.1.tar.gz
sudo mv hadoop-3.3.1 /usr/local/hadoop
sudo chown -R hduser:hadoop /usr/local/hadoop
```

### 4. Configurar Variáveis de Ambiente

Edite o arquivo `.bashrc` do seu usuário `hduser` (`nano ~/.bashrc`) e adicione o seguinte ao final:

```bash
export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which javac))))
export HADOOP_HOME=/usr/local/hadoop
export HADOOP_INSTALL=$HADOOP_HOME
export HADOOP_MAPRED_HOME=$HADOOP_HOME
export HADOOP_COMMON_HOME=$HADOOP_HOME
export HADOOP_HDFS_HOME=$HADOOP_HOME
export YARN_HOME=$HADOOP_HOME
export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_HOME/lib/native
export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin
export HADOOP_OPTS="-Djava.library.path=$HADOOP_HOME/lib/native"
```

### 5. Configurar os Arquivos do Hadoop

Navegue até `/usr/local/hadoop/etc/hadoop` e edite os seguintes arquivos:

**core-site.xml:**
```xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
</configuration>
```

**hdfs-site.xml:**
```xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>1</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///usr/local/hadoop/data/hdfs/namenode</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///usr/local/hadoop/data/hdfs/datanode</value>
    </property>
</configuration>
```

**mapred-site.xml:**
```xml
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

**yarn-site.xml:**
```xml
<configuration>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
</configuration>
```

### 6. Formatar e Iniciar o Hadoop

```bash
# Formate o NameNode (execute apenas na primeira vez!)
hdfs namenode -format

# Inicie os daemons do HDFS e YARN
start-dfs.sh
start-yarn.sh

# Verifique os processos em execução com o comando 'jps'
jps
```

## Exemplo Prático: O Clássico "WordCount"

O "WordCount" é o "Olá, Mundo!" do MapReduce. Ele conta a ocorrência de cada palavra em um conjunto de arquivos de texto.

### Código Java do WordCount

**WordCountMapper.java**
```java
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;
import java.io.IOException;
import java.util.StringTokenizer;

public class WordCountMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();

    public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        StringTokenizer itr = new StringTokenizer(value.toString());
        while (itr.hasMoreTokens()) {
            word.set(itr.nextToken());
            context.write(word, one);
        }
    }
}
```

**WordCountReducer.java**
```java
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;
import java.io.IOException;

public class WordCountReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
    private IntWritable result = new IntWritable();

    public void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
        int sum = 0;
        for (IntWritable val : values) {
            sum += val.get();
        }
        result.set(sum);
        context.write(key, result);
    }
}
```

**WordCount.java (Driver)**
```java
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class WordCount {
    public static void main(String[] args) throws Exception {
        if (args.length != 2) {
            System.err.println("Usage: WordCount <input path> <output path>");
            System.exit(-1);
        }

        Job job = Job.getInstance();
        job.setJarByClass(WordCount.class);
        job.setJobName("Word Count");

        FileInputFormat.addInputPath(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, new Path(args[1]));

        job.setMapperClass(WordCountMapper.class);
        job.setReducerClass(WordCountReducer.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}
```

### Executando o Job

1.  Compile os arquivos Java e crie um arquivo JAR (`wordcount.jar`).
2.  Crie um diretório de entrada no HDFS e copie alguns arquivos de texto para ele.

    ```bash
    hdfs dfs -mkdir /input
    hdfs dfs -put /caminho/para/seus/textos/*.txt /input
    ```

3.  Execute o job MapReduce.

    ```bash
    hadoop jar wordcount.jar WordCount /input /output
    ```

4.  Verifique o resultado.

    ```bash
    hdfs dfs -cat /output/part-r-00000
    ```

## Conclusão

Este guia forneceu uma visão geral do Apache Hadoop, desde seus conceitos fundamentais e arquitetura até um guia prático de instalação e um exemplo de execução. O Hadoop é uma ferramenta poderosa e essencial no ecossistema de Big Data, e dominar seus princípios é um passo crucial para qualquer profissional de dados.

