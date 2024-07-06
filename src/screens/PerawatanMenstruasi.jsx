import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PerawatanMenstruasiScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="heart-outline" size={50} color="#ff69b4" />
      <Text style={styles.text}>Perawatan Saat Menstruasi</Text>
      <Text style={styles.description}>
        Perawatan yang baik selama menstruasi dapat membantu mengurangi ketidaknyamanan dan menjaga kesehatan tubuh. Beberapa tips perawatan meliputi:
      </Text>
      <Text style={styles.description}>
        1. Menjaga kebersihan area intim.
      </Text>
      <Text style={styles.description}>
        2. Mengganti pembalut atau tampon secara teratur.
      </Text>
      <Text style={styles.description}>
        3. Mengonsumsi makanan sehat dan cukup air.
      </Text>
      <Text style={styles.description}>
        4. Beristirahat yang cukup dan mengelola stres.
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

export default PerawatanMenstruasiScreen;
