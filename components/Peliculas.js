import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Peliculas() {
  return (
    <View>
      <View style={styles.imagen}>
        <Image style={styles.logo} source={require('../assets/cine.png')} />
      </View>
        <View style={styles.peliculas}>
          <Text style={styles.tipo}>Comedia</Text>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/peli1.jpg')} />
          </Card>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/Peli2.jpg')} />
          </Card>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/Peli3.jpg')} />
          </Card>
        </View>

        <View style={styles.peliculas}>
          <Text style={styles.tipo}>Romance</Text>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/Peli4.jpg')} /></Card>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/Peli5.jpg')} />
          </Card>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/Peli6.jpg')} />
          </Card>
        </View>

        <View style={styles.peliculas}>
          <Text style={styles.tipo}>Acción</Text>
          <Card style={styles.tarjeta}>
             <Image style={styles.pelis} source={require('../Peliculas/Peli7.jpg')} />
          </Card>
          <Card style={styles.tarjeta}>
           <Image style={styles.pelis} source={require('../Peliculas/Peli8.png')} />
           </Card>
          <Card style={styles.tarjeta}>
            <Image style={styles.pelis} source={require('../Peliculas/Peli9.jpg')} />
          </Card>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagen:{
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    height: 135,
    width: 135,
  },
  peliculas:{
    width: '100%',
    height: 145,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 5,
  },
  tipo:{
    position: 'absolute',
    top: 0,
    left: 10,
    color: 'black',
    fontSize: 18,
  },
  tarjeta:{
    width: 100,
    height: 100,
  },
  pelis: {
    width: '100%',
    height: '100%',
  },
});
