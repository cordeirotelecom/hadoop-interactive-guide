# 🚀 Script de Deploy Automático - Hadoop Interactive Guide
# PowerShell Script para deploy rápido no Netlify

Write-Host "🚀 Hadoop Interactive Guide - Deploy Script" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se estamos no diretório correto
if (!(Test-Path "package.json")) {
    Write-Host "❌ Erro: package.json não encontrado!" -ForegroundColor Red
    Write-Host "Execute este script no diretório raiz do projeto." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Diretório do projeto encontrado" -ForegroundColor Green

# Executar build
Write-Host ""
Write-Host "🔨 Executando build de produção..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Build executado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro no build!" -ForegroundColor Red
    exit 1
}

# Verificar se a pasta dist foi criada
if (!(Test-Path "dist")) {
    Write-Host "❌ Erro: Pasta dist não foi criada!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Pasta dist criada com sucesso" -ForegroundColor Green

# Mostrar informações do build
Write-Host ""
Write-Host "📊 Informações do Build:" -ForegroundColor Cyan
Write-Host "------------------------" -ForegroundColor Cyan

$distSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "📦 Tamanho total: $([math]::Round($distSize, 2)) MB" -ForegroundColor White

$jsFiles = Get-ChildItem -Path "dist\assets" -Filter "*.js" | Measure-Object -Property Length -Sum
Write-Host "📜 Arquivos JS: $($jsFiles.Count) files ($([math]::Round($jsFiles.Sum / 1KB, 2)) KB)" -ForegroundColor White

$cssFiles = Get-ChildItem -Path "dist\assets" -Filter "*.css" | Measure-Object -Property Length -Sum  
Write-Host "🎨 Arquivos CSS: $($cssFiles.Count) files ($([math]::Round($cssFiles.Sum / 1KB, 2)) KB)" -ForegroundColor White

Write-Host ""
Write-Host "🌐 Opções de Deploy:" -ForegroundColor Cyan
Write-Host "1. 📁 Abrir pasta dist (para drag e drop no Netlify)" -ForegroundColor White
Write-Host "2. 🌍 Abrir Netlify Drop (netlify.com/drop)" -ForegroundColor White
Write-Host "3. 📋 Mostrar instruções detalhadas" -ForegroundColor White
Write-Host "4. 🚪 Sair" -ForegroundColor White
Write-Host ""

do {
    $choice = Read-Host "Escolha uma opção (1-4)"
    
    switch ($choice) {
        "1" {
            Write-Host "📁 Abrindo pasta dist..." -ForegroundColor Yellow
            Invoke-Item "dist"
            Write-Host "✅ Pasta aberta! Arraste a pasta dist para netlify.com/drop" -ForegroundColor Green
        }
        "2" {
            Write-Host "🌍 Abrindo Netlify Drop..." -ForegroundColor Yellow
            Start-Process "https://app.netlify.com/drop"
            Write-Host "✅ Netlify aberto! Arraste a pasta dist para fazer deploy" -ForegroundColor Green
        }
        "3" {
            Write-Host ""
            Write-Host "📋 Instruções de Deploy:" -ForegroundColor Cyan
            Write-Host "========================" -ForegroundColor Cyan
            Write-Host ""
            Write-Host "🎯 Opção 1 - Drag & Drop (Mais Fácil):" -ForegroundColor Yellow
            Write-Host "1. Acesse: https://app.netlify.com/drop" -ForegroundColor White
            Write-Host "2. Arraste a pasta 'dist' para a área de upload" -ForegroundColor White
            Write-Host "3. Aguarde o deploy finalizar" -ForegroundColor White
            Write-Host "4. Seu site estará online!" -ForegroundColor White
            Write-Host ""
            Write-Host "🎯 Opção 2 - Via CLI (Automático):" -ForegroundColor Yellow
            Write-Host "1. npm install -g netlify-cli" -ForegroundColor White
            Write-Host "2. netlify login" -ForegroundColor White
            Write-Host "3. netlify deploy --prod --dir=dist" -ForegroundColor White
            Write-Host ""
            Write-Host "🎯 Opção 3 - Git + Netlify (CI/CD):" -ForegroundColor Yellow
            Write-Host "1. git init && git add . && git commit -m 'Deploy'" -ForegroundColor White
            Write-Host "2. Crie repositório no GitHub" -ForegroundColor White
            Write-Host "3. git push origin main" -ForegroundColor White
            Write-Host "4. Conecte repositório no Netlify" -ForegroundColor White
            Write-Host ""
        }
        "4" {
            Write-Host "👋 Deploy finalizado!" -ForegroundColor Cyan
            Write-Host ""
            Write-Host "🎉 Sua aplicação está pronta para o mundo!" -ForegroundColor Green
            Write-Host "📊 Performance: Excelente (build otimizado)" -ForegroundColor Green
            Write-Host "🎨 UX: Moderna com animações suaves" -ForegroundColor Green
            Write-Host "📱 Responsivo: Desktop, tablet e mobile" -ForegroundColor Green
            Write-Host "⚡ Velocidade: Code splitting + lazy loading" -ForegroundColor Green
            Write-Host ""
            Write-Host "🚀 Vamos fazer esse deploy acontecer!" -ForegroundColor Cyan
            break
        }
        default {
            Write-Host "❌ Opção inválida! Escolha entre 1-4." -ForegroundColor Red
        }
    }
    
    if ($choice -ne "4") {
        Write-Host ""
        Write-Host "Pressione qualquer tecla para continuar..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        Write-Host ""
    }
    
} while ($choice -ne "4")