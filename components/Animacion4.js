import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, View } from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // al valor final
      duration: 500, // duracion
    }).start(); // inicia la animacion
  }, []);

  const interpolacion = animacion.interpolate({ 
      inputRange: [0, 360], // rango de valores
      outputRange: ['0deg', '360deg'] // valores de salida
  });

  const estiloAnimacion = {
      transform : [{ rotate: interpolacion }]
  }

  return (
    <>
      <View>
        <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion4;
