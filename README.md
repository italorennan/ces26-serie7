# CES-26: Serie de Exercicios 7 - React Native
Projeto para implementacao de uma calculadora em React Native.

### Tecnologias
Projeto desenvolvido com [React Native](https://reactnative.dev/), com a dependencia Redux.

### Execucao
O projeto pode ser também visualizado nesse [link](https://snack.expo.io/@italorennan/ces26-serie7).
Para executar no computador, deve ser rodado o script:

```bash
$ expo start
```

### Estrutura de arquivos principais
```js
- App.js
- Calculator.js
- reducer.js
- ReduxApp.js
- styles.js
```

### Arquivo App.js
Implementa a estrutura geral da pagina, com os componentes a serem renderizados na tela.

### Arquivo Calculator.js
Implementa os botoes da calculadora, indicados pela classe Calculator. Essa classe e exportada e usada em App.js.

### Arquivo reducer.js
Determina as funcoes do reducer, que sao chamadas nos respectivos botoes da calculadora.

### Arquivo ReduxApp.js
Define os elementos de props a serem passados para a classe Calculator, linkando ao Redux.

### Arquivo styles.js
Define a estrutura CSS, com os estilos a serem aplicados nos componentes da pagina.
