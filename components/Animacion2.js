import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, NativeModules} from 'react-native';

const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450, // al valor fina
      duration: 1000, // duracion
    }).start(); // inicia la animacion
  }, []);
  return (
    <>
      <Animated.View
        style={[
          styles.caja,
          {width: animacion, height: animacion},
        ]}></Animated.View>
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

export default Animacion2;
