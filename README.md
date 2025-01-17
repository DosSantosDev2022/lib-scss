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

Na pasta variables você encontrará diversas configurações de variáves scss já prontas para utilizar em
seu projeto:

```scss
// _colors.scss
$primary: #fff
$secondary: #0000
```

#### Mixins

Mixins reutilizáveis estão na pasta mixins

```scss
// _display.scss
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

Funções estão na pasta functions e é usada para criarmos funções para manipulação de valores em scss.

```scss
// _calculate.scss
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
