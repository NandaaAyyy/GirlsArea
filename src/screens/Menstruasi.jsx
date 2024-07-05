import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenstruasiScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="bottle-tonic-plus" size={50} color="#ff69b4" />
      <Text style={styles.text}>Tentang Menstruasi</Text>
      <Text style={styles.description}>
        Menstruasi adalah proses alami bulanan pada tubuh perempuan yang dimulai pada masa pubertas dan berlangsung hingga menopause.
      </Text>
      <Text style={styles.description}>
        Siklus menstruasi melibatkan perubahan hormonal yang mengarah pada pelepasan telur dari ovarium, diikuti dengan pengeluaran darah dan jaringan dari rahim jika tidak ada pembuahan.
      </Text>
      <Text style={styles.description}>
        Mengetahui siklus menstruasi dan merawatnya dengan baik penting untuk kesehatan reproduksi dan umum.
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

export default MenstruasiScreen;
