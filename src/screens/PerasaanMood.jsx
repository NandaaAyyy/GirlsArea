import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PerasaanMoodScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="emoticon-happy-outline" size={50} color="#ff69b4" />
      <Text style={styles.text}>Perasaan dan Mood Perempuan</Text>
      <Text style={styles.description}>
        Perasaan dan mood perempuan dapat berubah-ubah sepanjang siklus menstruasi. Penting untuk memahami dan menerima perasaan tersebut. Beberapa tips untuk menjaga mood yang baik bagi seorang pria pada wanita yakni:
      </Text>
      <Text style={styles.description}>
        1. Dengarkan dia berbicara sesekali omelan nya.
      </Text>
      <Text style={styles.description}>
        2. Belikan dia makanan dan minuman kesukaannya. 
      </Text>
      <Text style={styles.description}>
        3. Bila perempuan mu bilang gapapa, sebagai pria diharap lebih peka dan mengerti. 
      </Text>
      <Text style={styles.description}>
        4. Jangan menjawab omelannya jika tidak ingin terjadi perang dunia
      </Text>
      <Text style={styles.description}>
       Cukup sekian, semoga membantu
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

export default PerasaanMoodScreen;
