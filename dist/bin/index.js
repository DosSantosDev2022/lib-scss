#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Caminho correto para a pasta de origem dos arquivos SCSS
const sourceDir = path.join(__dirname, '../styles');
// Caminho onde os arquivos serão copiados (no projeto de destino)
const projectSrcDir = path.resolve(process.cwd(), './src');
const targetDir = path.join(projectSrcDir, 'styles');
/**
 * Função para copiar arquivos e diretórios recursivamente.
 * @param srcDir Diretório de origem
 * @param destDir Diretório de destino
 */
function copyFiles(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) {
        console.error(`❌ Diretório de origem não encontrado: ${srcDir}`);
        process.exit(1); // Sai do processo com erro
    }
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true }); // Cria o diretório se não existir
    }
    fs.readdirSync(srcDir).forEach((file) => {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file);
        const stat = fs.statSync(srcPath); // Verifica se é arquivo ou diretório
        if (stat.isDirectory()) {
            // Se for diretório, chama recursivamente
            copyFiles(srcPath, destPath);
        }
        else {
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
