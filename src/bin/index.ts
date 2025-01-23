#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

// Caminho correto para a pasta de origem dos arquivos SCSS
const sourceDir: string = path.join(__dirname, '../sass');

// Caminho onde os arquivos serão copiados (no projeto de destino)
const projectSrcDir: string = path.resolve(process.cwd(), './src');
const targetDir: string = path.join(projectSrcDir, 'sass');

/**
 * Função para copiar arquivos e diretórios recursivamente.
 * @param srcDir Diretório de origem
 * @param destDir Diretório de destino
 */
function copyFiles(srcDir: string, destDir: string): void {
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Diretório de origem não encontrado: ${srcDir}`);
    process.exit(1); // Sai do processo com erro
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true }); // Cria o diretório se não existir
  }

  fs.readdirSync(srcDir).forEach((file: string) => {
    const srcPath: string = path.join(srcDir, file);
    const destPath: string = path.join(destDir, file);

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
if (!fs.existsSync(projectSrcDir)) {
  console.error(`❌ A pasta 'src' não foi encontrada no diretório atual: ${process.cwd()}`);
  process.exit(1); // Sai do processo com erro
}

console.log('📂 Copiando arquivos SCSS para a pasta src/styles...');
copyFiles(sourceDir, targetDir);
console.log('✅ Arquivos SCSS copiados com sucesso!');
