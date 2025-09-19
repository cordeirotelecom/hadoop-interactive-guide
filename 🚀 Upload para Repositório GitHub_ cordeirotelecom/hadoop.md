# 🚀 Upload para Repositório GitHub: cordeirotelecom/hadoop

## 📋 Instruções Específicas

O projeto está **100% pronto** e configurado para o repositório `https://github.com/cordeirotelecom/hadoop.git`

### 🎯 **Opção 1: Upload via Interface Web (Mais Fácil)**

1. **Extrair o projeto:**
   ```bash
   unzip hadoop-tutorial-for-hadoop-repo.zip
   cd hadoop-tutorial
   ```

2. **Acessar o repositório:**
   - Vá para: https://github.com/cordeirotelecom/hadoop
   - Clique em "uploading an existing file" ou "Add file" → "Upload files"

3. **Fazer upload:**
   - Arraste todos os arquivos da pasta `hadoop-tutorial/` 
   - **OU** selecione todos os arquivos e pastas
   - Adicione commit message: `Add complete Hadoop interactive tutorial platform`
   - Clique em "Commit changes"

### 🎯 **Opção 2: Via Git (Recomendado)**

1. **Extrair e configurar:**
   ```bash
   unzip hadoop-tutorial-for-hadoop-repo.zip
   cd hadoop-tutorial
   
   # Instalar dependências
   pnpm install
   # ou
   npm install
   ```

2. **Configurar Git com suas credenciais:**
   ```bash
   git config user.name "cordeirotelecom"
   git config user.email "seu-email@exemplo.com"
   ```

3. **Fazer push:**
   ```bash
   # Verificar remote (já está configurado)
   git remote -v
   
   # Push para o repositório
   git push -u origin main
   ```
   - Digite seu **username**: `cordeirotelecom`
   - Digite seu **token** do GitHub (não a senha)

### 🔑 **Como Criar Token do GitHub:**

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" → "Generate new token (classic)"
3. Selecione scopes: `repo` (full control)
4. Copie o token gerado
5. Use o token como senha no git push

### 🎯 **Opção 3: GitHub CLI (Alternativa)**

```bash
# Instalar GitHub CLI
# No Ubuntu/Linux:
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# Fazer login
gh auth login

# Push do projeto
cd hadoop-tutorial
gh repo sync cordeirotelecom/hadoop --source .
```

## 🚀 **Deploy no Netlify (Após Upload)**

1. **Acessar Netlify:**
   - Vá para: https://netlify.com
   - Faça login

2. **Conectar repositório:**
   - "New site from Git" → "GitHub"
   - Selecione: `cordeirotelecom/hadoop`

3. **Configurar build:**
   - **Branch to deploy**: `main`
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`

4. **Deploy:**
   - Clique em "Deploy site"
   - Aguarde 2-3 minutos
   - Site estará disponível em: `https://NOME-ALEATORIO.netlify.app`

## ✅ **Verificações Finais**

Após o upload, verifique se estão no repositório:

- ✅ `README.md` - Documentação completa
- ✅ `package.json` - Dependências do projeto
- ✅ `src/` - Código fonte completo
- ✅ `netlify.toml` - Configuração de deploy
- ✅ `.gitignore` - Arquivos ignorados
- ✅ `DEPLOY_INSTRUCTIONS.md` - Instruções detalhadas

## 🎉 **Resultado Final**

Após completar o processo, você terá:

- ✅ **Código no GitHub**: `https://github.com/cordeirotelecom/hadoop`
- ✅ **Site no Netlify**: `https://seu-site.netlify.app`
- ✅ **Deploy Automático**: Push → Build → Deploy
- ✅ **12 Seções Completas**: Fundamentos até casos reais
- ✅ **Labs Funcionais**: Simuladores interativos
- ✅ **Interface Premium**: Responsiva e otimizada

## 📞 **Suporte**

Se tiver problemas:
1. Verifique se todos os arquivos foram enviados
2. Confirme as configurações do Netlify
3. Verifique os logs de build no Netlify
4. Teste localmente com `pnpm run dev`

**O projeto está 100% funcional e pronto para produção!** 🚀
