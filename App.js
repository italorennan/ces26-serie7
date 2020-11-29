import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calculator from './reducer';
import ReduxApp from './ReduxApp';

var store = createStore(calculator);

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.h1}>CES-26: Série de Exercícios 7</Text>
        <Text style={styles.h2}>Ítalo Rennan Lima Silva</Text>
        <Text style={styles.h2}>COMP-21 {`\n`}</Text>

        <Text style={styles.p}>A calculadora abaixo pode ser utilizada de modo convencional para a resolução de expressões envolvendo as quatro operações aritméticas básicas.</Text>

        <Text style={styles.h2}>{`\n`}Calculadora{`\n`}</Text>

        <Provider store={store}>
          <ReduxApp />
        </Provider>
      </View>
    </ScrollView>
  );
}
