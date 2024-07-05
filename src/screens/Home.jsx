import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <MaterialCommunityIcons name="home" size={30} color="#6495E4" />
        <Text style={styles.text}>Selamat datang di Girls Area</Text>
      </View>
      <View style={styles.labelContainer}>
        <MaterialCommunityIcons name="book-open-page-variant" size={30} color="#6495ED" />
        <Text style={styles.text}>Disini kita akan belajar tentang perempuan</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menstruasi')}>
        <MaterialCommunityIcons name="account-heart" size={30} color="white" />
        <Text style={styles.buttonText}>Tentang Menstruasi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Kesehatan')}>
        <MaterialCommunityIcons name="information" size={20} color="white" />
        <Text style={styles.buttonText}>Tentang Kesehatan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Perasaan')}>
        <MaterialCommunityIcons name="image" size={20} color="white" />
        <Text style={styles.buttonText}>Tentang Perasaan</Text>
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
    backgroundColor: '#f0f8ff',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#ffe4e1',
    padding: 25,
    borderRadius: 5,
    width: '95%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'center',
    color: '#ff69b4',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff69b4',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default HomeScreen;
