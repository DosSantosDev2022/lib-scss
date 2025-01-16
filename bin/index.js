#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, '../styles')
const targetDir = path.resolve(process.cwd(), './src/styles')


function copyFiles(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true }); // Cria o diretório se não existir
  }

  fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    const stat = fs.statSync(srcPath); // Verifica se é arquivo ou diretório
    if (stat.isDirectory()) {
      // Se for diretório, chama recursivamente
      copyFiles(srcPath, destPath);
    } else {
      // Se for arquivo, copia
      fs.copyFileSync(srcPath, destPath);
      console.log(`✔️  Copiado: ${file}`);
    }
  });
}
// Executa a cópia
console.log('📂 Copiando arquivos SCSS para a pasta styles...');
copyFiles(sourceDir, targetDir);
console.log('✅ Arquivos SCSS copiados com sucesso!');