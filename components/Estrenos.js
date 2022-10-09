import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Estrenos() {
  return (
    <View style={styles.contenedor}>
      <Card style={styles.tarjeta}>
        <Image style={styles.img} source={require('../Estrenos/Estreno1.jpeg')} />
      </Card>
      <Text style={styles.datos}>Titulo</Text>
      <Text>Jamie Lee Curtis regresa de nuevo en 'Halloween Ends' para enfrentarse una vez más a uno de los asesinos más míticos</Text>
      <Text>Fecha de estreno: 14 de octubre</Text>

      <Card style={styles.tarjeta}>
        <Image style={styles.img} source={require('../Estrenos/Estreno2.png')} />
      </Card>
      <Text style={styles.datos}>Titulo</Text>
      <Text>La repentina muerte de Chadwick Boseman sembró la duda sobre el futuro de la saga 'Black Panther'.</Text>
      <Text>Fecha de estreno: 11 de noviembre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    paddingTop: 10,
  },
  tarjeta: {
    width: '90%',
    height: 200,
  },
  datos: {
    fontWeight: '700',
  },
  img: {
    width: '100%',
    height: '100%',
  }
});