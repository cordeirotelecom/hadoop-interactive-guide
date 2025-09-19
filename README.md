# 🚀 Guia Interativo do Apache Hadoop

Um guia interativo e educacional para aprender Apache Hadoop, MapReduce e o ecossistema Big Data.

## ✅ Status do Projeto

O projeto foi **CORRIGIDO** e está pronto para deploy! Todos os erros foram resolvidos:

- ✅ Estrutura de arquivos organizados
- ✅ Componentes React funcionais
- ✅ Build bem-sucedido
- ✅ Configuração do GitHub Pages
- ✅ Configuração do Netlify

## 🚀 Deploy Imediato

### GitHub Pages

1. **Crie um repositório no GitHub** com o nome `hadoop-interactive-guide`
2. **Adicione este projeto ao repositório:**

```bash
git remote add origin https://github.com/SEU-USUARIO/hadoop-interactive-guide.git
git push -u origin master
```

3. **Ative GitHub Pages:**
   - Vá em Settings → Pages
   - Source: GitHub Actions
   - O deploy será automático via GitHub Actions

### Netlify

1. **Deploy direto via drag & drop:**
   - Vá para [netlify.com](https://netlify.com)
   - Arraste a pasta `dist` para o painel
   - Ou conecte seu repositório GitHub

2. **Deploy via Git:**
   - Conecte seu repositório GitHub no Netlify
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Fazer build para produção
npm run build
```

## 📁 Estrutura Final

```
projeto/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes UI (shadcn/ui)
│   │   └── *.jsx           # Componentes específicos do Hadoop
│   ├── lib/
│   │   └── utils.js        # Utilitários
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entrada do React
│   └── index.css           # Estilos Tailwind
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions
├── dist/                   # Build de produção
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
└── netlify.toml
```

## 🔧 Correções Realizadas

1. **Estrutura de Arquivos:**
   - Movidos componentes para `src/components/`
   - Criada estrutura `src/components/ui/`
   - Organizado imports corretamente

2. **Configuração de Build:**
   - Corrigido `package.json` com dependências
   - Configurado Vite.js corretamente
   - Resolvido problema com Tailwind CSS

3. **Componentes UI:**
   - Criados todos os componentes shadcn/ui necessários
   - Implementado sistema de utilidades CSS
   - Corrigidos imports e caminhos

4. **Deploy:**
   - Configurado GitHub Actions
   - Configurado Netlify
   - Base path correto para produção

## 🌐 URLs de Deploy

Após o deploy, o projeto estará disponível em:

- **GitHub Pages:** `https://SEU-USUARIO.github.io/hadoop-interactive-guide/`
- **Netlify:** URL automática fornecida pelo Netlify

## 🎯 Próximos Passos

O projeto está **100% funcional**. Para fazer o deploy:

1. **Suba para o GitHub:**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/hadoop-interactive-guide.git
   git push -u origin master
   ```

2. **Ative GitHub Pages** nas configurações do repositório

3. **Ou faça deploy no Netlify** conectando o repositório

**O projeto está pronto para produção!** 🎉