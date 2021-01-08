import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.title, styles.titleCenter]}>
            ¿Qué hacer en Paris?
          </Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={[styles.title, styles.titleCenter]}>
            Los mejores alojamientos
          </Text>
          <View>
            <View>
              <Image
                style={styles.target}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.target}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.target}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>
          <Text style={[styles.title, styles.titleCenter]}>Alojamientos chidos en L.A.</Text>
          <View style={styles.lodgingContainer}>
            <View style={styles.lodgingitem}>
              <Image
                style={styles.lodgingImage}
                source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>
            <View style={styles.lodgingitem}>
              <Image
                style={styles.lodgingImage}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.lodgingitem}>
              <Image
                style={styles.lodgingImage}
                source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.lodgingitem}>
              <Image
                style={styles.lodgingImage}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default App;
