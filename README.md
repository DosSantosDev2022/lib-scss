# Lib-SCSS

Uma pequena biblioteca de configurações em SCSS que facilita o início de um projeto fornecendo um conjunto pré-configurado de variáveis, mixins, funções e outros recursos úteis. O objetivo é economizar tempo e padronizar o estilo de escrita de códigos SCSS em diversos projetos.

## Instalação

Para instalar a biblioteca, você precisa apenas rodar o seguinte comando na raiz do seu projeto:

```bash
npx lib-scss
```

Esse comando criará automaticamente uma pasta chamada `sass` no diretório do seu projeto contendo todos os arquivos necessários.

## Estrutura da Pasta `sass`

A pasta `sass` será criada com a seguinte estrutura:

```
sass/
|-- components
  |-- layout
  |-- pages
  |-- ui
|-- configs
  |-- autoload
  |-- common
  |-- core
|-- App.scss
```

- **autoload**: Contém arquivos de estilização externos, como fontes personalizadas ou bibliotecas CSS de terceiros.

- **common**: Inclui arquivos de estilização base, como variáveis globais, tipografia, cores e outros estilos compartilhados.

- **components**: Contém arquivos de estilização para componentes reutilizáveis da aplicação, como botões, cards, modais, etc.

- **core**: Conjunto de funções e mixins úteis para manipulação de valores, como cores, tamanhos, cálculos, etc.

- **layout**: Estilização dos layouts principais da aplicação, como cabeçalhos, rodapés e outras estruturas globais.

- **pages**: Contém arquivos de estilização específicos para as páginas ou seções da aplicação.

- **App.scss**: Arquivo principal que importa todos os arquivos SCSS e serve como ponto de entrada para compilar os estilos.

## Uso

Após a instalação, você pode importar o arquivo principal `App.scss` em seu projeto:

```scss
@import './sass/App.scss';
```

Agora você tem acesso a todos os recursos fornecidos pela biblioteca.

### Exemplo de Uso

#### Variáveis

No arquivo variables você encontrará diversas configurações de variáves scss já prontas para utilizar em
seu projeto:

```scss
// Váriaveis de cores seguindo um padrão específico.
$primary: #fff
$secondary: #0000
```

#### Mixins

Mixins reutilizáveis estão na pasta mixins

```scss
// mixin que centraliza qualquer elemento.
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
// função para calcular px em rem.
@function rem($pixels) {
  @return $pixels / 16 * 1rem;
}

// Uso em outro arquivo
body {
  font-size: rem(18); // 1.125rem
}
```

## Personalização

Você pode editar os arquivos na pasta `sass` para atender às necessidades do seu projeto. As configurações são pensadas para serem um ponto de partida e podem ser ajustadas facilmente.

## Contribuições

Contribuições são bem-vindas! Se você tiver ideias de melhorias, abra uma issue ou envie um pull request no repositório do projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
