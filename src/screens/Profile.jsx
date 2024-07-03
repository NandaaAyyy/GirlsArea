import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>
      <Text style={styles.text}>Nama: Jane Doe</Text>
      <Text style={styles.text}>Usia: 25 tahun</Text>
      <Text style={styles.text}>Email: jane.doe@example.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4', // Background color changed to pink
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF', // Text color changed to white
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFF', // Text color changed to white
  },
});

export default ProfileScreen;
