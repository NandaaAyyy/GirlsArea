import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TentangScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="information" size={50} color="#ff69b4" />
      <Text style={styles.text}>Tentang Aplikasi Ini</Text>
      <Text style={styles.description}>
        Aplikasi ini dirancang untuk membantu khalayak ramai untuk belajar tentang perempuan. 
        Di dalamnya terdapat berbagai informasi menarik dan edukatif yang dapat meningkatkan 
        pengetahuan dan wawasan mereka. 
      </Text>
      <Text style={styles.description}>
        Kami berharap aplikasi ini dapat memberikan kontribusi positif dalam perkembangan 
        anak-anak di era digital ini.
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

export default TentangScreen;
