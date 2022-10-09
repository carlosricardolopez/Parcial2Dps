import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Series() {
  return (
    <View style={styles.container}>
      <View style={styles.imagen}>
        <Image style={styles.logo} source={require('../assets/series.jpg')} />
      </View>
      <Text style={styles.texto}>Comedia</Text>

        <View style={styles.series}>
          <Card style={styles.tarjeta}>
            <Image style={styles.seriesimg} source={require('../Series/Serie1.jpg')} />
          </Card>
          <Text>The Big Bang Theory</Text>
          <Text>12 Temporadas</Text>
        </View>

      <View style={styles.series}>
        <Card style={styles.tarjeta}>
          <Image style={styles.seriesimg} source={require('../Series/Serie2.jpg')} />
        </Card>
        <Text>Supernatural</Text>
        <Text>15 Temporadas</Text>
      </View>

      <View style={styles.series}>
        <Card style={styles.tarjeta}>
          <Image style={styles.seriesimg} source={require('../Series/Serie3.jpg')} />
        </Card>
        <Text>Happy Days</Text>
        <Text>11 Temporadas</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  texto:{
    fontSize: 20,
    marginBottom: 5,
  },
  imagen:{
    width: '100%',
    height: '25%',
    alignItems: 'center',
  },
  logo:{
    marginTop: 10,
    height: 135,
    width: 200,
  },
  series: {
    width: '100%',
    height: 140,
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tarjeta: {
    position: 'absolute',
    left: 10,
    width: 110,
    height: 110,
  },
  seriesimg:{
    width: '100%',
    height: '100%',
  }
});
