# Lib-SCSS

Uma pequena biblioteca de configurações em SCSS que facilita o início de um projeto fornecendo um conjunto pré-configurado de variáveis, mixins, funções e outros recursos úteis. O objetivo é economizar tempo e padronizar o estilo de escrita de códigos SCSS em diversos projetos.

## Instalação

Para instalar a biblioteca, você precisa apenas rodar o seguinte comando na raiz do seu projeto:

```bash
npx lib-scss
```

Esse comando criará automaticamente uma pasta chamada `styles` no diretório do seu projeto contendo todos os arquivos necessários.

## Estrutura da Pasta `styles`

A pasta `styles` será criada com a seguinte estrutura:

```
styles/
|-- variables
|-- mixins
|-- functions
|-- base.scss
|-- main.scss
```

- **_variables.scss**: Contém variáveis globais, como cores, espaçamentos e tamanhos de fonte.
- **_mixins.scss**: Inclui mixins reutilizáveis para media queries, animações e outros.
- **_functions.scss**: Conjunto de funções úteis para manipulação de valores, como cores e tamanhos.
- **_base.scss**: Define estilos globais básicos, como resets e estilizações padrão.
- **main.scss**: Ponto de entrada principal que importa todos os arquivos acima.

## Uso

Após a instalação, você pode importar o arquivo principal `main.scss` em seu projeto:

```scss
@import './styles/main';
```

Agora você tem acesso a todos os recursos fornecidos pela biblioteca.

### Exemplo de Uso

#### Variáveis

No arquivo `_variables.scss`, você pode definir e usar variáveis globais como cores:

```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

#### Mixins

Mixins reutilizáveis estão no arquivo `_mixins.scss`:

```scss
// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Uso em outro arquivo
.container {
  @include flex-center;
  height: 100vh;
}
```

#### Funções

Funções estão no arquivo `_functions.scss` para manipulação de valores:

```scss
// _functions.scss
@function rem($pixels) {
  @return $pixels / 16 * 1rem;
}

// Uso em outro arquivo
body {
  font-size: rem(18); // 1.125rem
}
```

## Personalização

Você pode editar os arquivos na pasta `styles` para atender às necessidades do seu projeto. As configurações são pensadas para serem um ponto de partida e podem ser ajustadas facilmente.

## Contribuições

Contribuições são bem-vindas! Se você tiver ideias de melhorias, abra uma issue ou envie um pull request no repositório do projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
