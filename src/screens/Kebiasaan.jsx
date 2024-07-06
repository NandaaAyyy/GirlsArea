import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const KebiasaanScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="calendar-check-outline" size={50} color="#ff69b4" />
      <Text style={styles.text}>Kebiasaan Perempuan saat Menstruasi</Text>
      <Text style={styles.description}>
    Perlu dipahami bahwa saat menstruasi kebiasaan seorang perempuan menjadi agak aneh. Beberapa kebiasaan saat menstruasi dan menjelang menstruasi meliputi:
      </Text>
      <Text style={styles.description}>
        1. Marah-Marah atau Menangis tanpa alasan.
      </Text>
      <Text style={styles.description}>
        2. Ingin makan makanan yang manis.
      </Text>
      <Text style={styles.description}>
        3. Sakit Peru dan Sakit Pinggang.
      </Text>
      <Text style={styles.description}>
        4. Overthinking dan memikirkan suatu hal secara berlebihan. 
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
