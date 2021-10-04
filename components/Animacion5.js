import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Animacion5 = () => {

  const [animacion] = useState(new Animated.Value(1));

  const presionarBtn = () => {
      Animated.spring(animacion, { 
          toValue: .8,
      }).start();
  };

  const soltarBtn = () => {
        Animated.spring(animacion, { 
            toValue: 1,
            friction: 4, // Cuanto mas grande, mas lento
            tension: 60, // Cuanto mas grande, mas rápido
        }).start();
  };

  const estiloAnimacion = {
      transform: [{ scale: animacion }]
  }

  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 26,
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animacion5;
