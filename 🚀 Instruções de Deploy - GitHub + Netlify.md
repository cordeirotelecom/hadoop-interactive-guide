# 🚀 Instruções de Deploy - GitHub + Netlify

## 📋 Passo a Passo Completo

### 1️⃣ **Criar Repositório no GitHub**

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em "New repository" (botão verde)
3. Configure o repositório:
   - **Repository name**: `hadoop-tutorial` (ou nome de sua escolha)
   - **Description**: `Plataforma educacional interativa completa sobre Apache Hadoop`
   - **Visibility**: Public (recomendado para Netlify gratuito)
   - ✅ **Add a README file**: DESMARQUE (já temos um)
   - ✅ **Add .gitignore**: DESMARQUE (já temos um)
   - ✅ **Choose a license**: MIT License (opcional)

4. Clique em "Create repository"

### 2️⃣ **Conectar Projeto Local ao GitHub**

Execute os comandos no terminal (dentro da pasta do projeto):

```bash
# Adicionar remote origin
git remote add origin https://github.com/cordeirotelecom/hadoop.git

# Renomear branch para main (padrão atual do GitHub)
git branch -M main

# Fazer push inicial
git push -u origin main
```

### 3️⃣ **Deploy no Netlify**

#### Opção A: Via Interface Web (Recomendado)

1. Acesse [Netlify.com](https://netlify.com) e faça login
2. Clique em "New site from Git"
3. Escolha "GitHub" como provider
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `hadoop-tutorial`
6. Configure as opções de build:
   - **Branch to deploy**: `main`
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
7. Clique em "Deploy site"

#### Opção B: Via Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login no Netlify
netlify login

# Build do projeto
pnpm run build

# Deploy inicial
netlify deploy --prod --dir=dist

# Para deploys futuros
netlify deploy --prod --dir=dist
```

### 4️⃣ **Configurações Avançadas do Netlify**

1. **Custom Domain** (opcional):
   - No dashboard do Netlify, vá em "Domain settings"
   - Clique em "Add custom domain"
   - Configure seu domínio personalizado

2. **Environment Variables** (se necessário):
   - Vá em "Site settings" > "Environment variables"
   - Adicione variáveis se o projeto precisar

3. **Build Hooks** (para rebuild automático):
   - Vá em "Site settings" > "Build & deploy" > "Build hooks"
   - Crie um webhook para rebuild manual se necessário

### 5️⃣ **Atualizações Futuras**

Para atualizar o site após mudanças:

```bash
# Fazer mudanças no código
# Commit das mudanças
git add .
git commit -m "Descrição das mudanças"

# Push para GitHub
git push origin main

# O Netlify fará deploy automático!
```

### 6️⃣ **URLs Finais**

Após o deploy, você terá:
- **GitHub Repository**: `https://github.com/cordeirotelecom/hadoop`
- **Netlify Site**: `https://NOME_ALEATORIO.netlify.app` (pode customizar)

### 🔧 **Troubleshooting**

**Erro de Build no Netlify:**
- Verifique se o `netlify.toml` está na raiz do projeto
- Confirme que `pnpm` está sendo usado (ou mude para `npm run build`)

**Erro 404 em rotas:**
- O arquivo `netlify.toml` já está configurado com redirects
- Verifique se o arquivo está na raiz do projeto

**Build muito lento:**
- O projeto é otimizado, mas pode demorar 2-3 minutos no primeiro deploy
- Deploys subsequentes são mais rápidos (cache)

### 📊 **Métricas Esperadas**

- **Build Time**: 2-4 minutos
- **Bundle Size**: ~441KB (123KB gzipped)
- **Performance Score**: 90+ no Lighthouse
- **Deploy Time**: 30-60 segundos

### 🎉 **Pronto!**

Seu projeto estará disponível mundialmente com:
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Deploy automático via Git
- ✅ Performance otimizada
- ✅ Interface responsiva

**Exemplo de URL final**: `https://hadoop-tutorial-amazing.netlify.app`
