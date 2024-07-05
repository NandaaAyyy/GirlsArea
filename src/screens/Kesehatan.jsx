import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TentangKesehatan = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigateTo('KesehatanReproduksi')}>
        <MaterialCommunityIcons name="baby-bottle-outline" size={50} color="#ff69b4" />
        <Text style={styles.cardText}>Kesehatan Reproduksi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigateTo('KesehatanTubuh')}>
        <MaterialCommunityIcons name="weight-kilogram" size={50} color="#ff69b4" />
        <Text style={styles.cardText}>Kesehatan Tubuh</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigateTo('Olahraga')}>
        <MaterialCommunityIcons name="run-fast" size={50} color="#ff69b4" />
        <Text style={styles.cardText}>Olahraga</Text>
      </TouchableOpacity>
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
  card: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#ff69b4',
  },
});

export default TentangKesehatan;
