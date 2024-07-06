import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const KebiasaanScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="calendar-check-outline" size={50} color="#ff69b4" />
      <Text style={styles.text}>Kebiasaan Sehat</Text>
      <Text style={styles.description}>
        Mempertahankan kebiasaan sehat sangat penting untuk kesehatan secara keseluruhan. Beberapa kebiasaan sehat meliputi:
      </Text>
      <Text style={styles.description}>
        1. Olahraga secara teratur.
      </Text>
      <Text style={styles.description}>
        2. Makan makanan bergizi.
      </Text>
      <Text style={styles.description}>
        3. Tidur yang cukup.
      </Text>
      <Text style={styles.description}>
        4. Mengelola stres dengan baik.
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
});

export default KebiasaanScreen;
