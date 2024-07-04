import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: '../assets/images/1.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.text}>Profil Pengguna</Text>
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="account" size={24} color="#ff69b4" />
        <Text style={styles.teks}>Nama: Nanda Ayu Primadiani</Text>
      </View>
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="calendar" size={24} color="#ff69b4" />
        <Text style={styles.teks}>Usia: 20 tahun</Text>
      </View>
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="email" size={24} color="#ff69b4" />
        <Text style={styles.teks}>Email: nandaayu@gmail.com</Text>
      </View>
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  teks: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 10,
    color: 'black',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffe4e1',
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
});

export default ProfileScreen;
