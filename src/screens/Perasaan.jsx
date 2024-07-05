import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PerasaanScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="emoticon-outline" size={50} color="#ff69b4" />
      <Text style={styles.text}>Perasaan dan Mood Perempuan</Text>
      <Text style={styles.description}>
        Perasaan atau mood adalah respons alami terhadap peristiwa atau situasi dalam kehidupan sehari-hari.
      </Text>
      <Text style={styles.description}>
        Mood perempuan dapat bervariasi dari sukacita, sedih, marah, hingga rasa takut, dan memiliki pengaruh besar terhadap kesejahteraan mental dan fisik.
      </Text>
      <Text style={styles.description}>
        Memahami dan mengelola perasaan dengan baik membantu dalam menjaga kesehatan mental dan hubungan sosial.
      </Text>
      <Text style={styles.deskripsi}>
        But, To Be a Peka Boyfriend Guysss heheeeee
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff0f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#ff69b4',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
    lineHeight: 24,
  },
  deskripsi: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  }
});

export default PerasaanScreen;
