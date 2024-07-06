import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SiklusMenstruasiScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="calendar-outline" size={50} color="#ff69b4" />
      <Text style={styles.text}>Siklus Menstruasi</Text>
      <Text style={styles.description}>
        Siklus menstruasi adalah rangkaian perubahan yang dialami tubuh perempuan setiap bulan sebagai persiapan untuk kemungkinan kehamilan. Siklus ini terdiri dari beberapa fase:
      </Text>
      <Text style={styles.description}>
        1. Fase Menstruasi: Hari pertama menstruasi hingga hari ke-5-7.
      </Text>
      <Text style={styles.description}>
        2. Fase Folikular: Setelah menstruasi hingga ovulasi (sekitar hari ke-14).
      </Text>
      <Text style={styles.description}>
        3. Fase Ovulasi: Pelepasan sel telur dari ovarium (sekitar hari ke-14).
      </Text>
      <Text style={styles.description}>
        4. Fase Luteal: Setelah ovulasi hingga menstruasi berikutnya.
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

export default SiklusMenstruasiScreen;
