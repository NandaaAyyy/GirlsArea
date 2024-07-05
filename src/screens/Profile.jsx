import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from './UserContext';

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/1.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.text}>Profil Pengguna</Text>
      {user && (
        <>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="account" size={24} color="#ff69b4" />
            <Text style={styles.teks}>Nama: {user.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="email" size={24} color="#ff69b4" />
            <Text style={styles.teks}>Email: {user.email}</Text>
          </View>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.buttonText}>Register</Text>
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
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff69b4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
