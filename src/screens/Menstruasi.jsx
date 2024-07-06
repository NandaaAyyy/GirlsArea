import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const menstruasiTopics = [
  { id: '1', name: 'Gejala Menstruasi', icon: 'alert-circle-outline', screen: 'GejalaMenstruasi' },
  { id: '2', name: 'Perawatan Saat Menstruasi', icon: 'heart-outline', screen: 'PerawatanMenstruasi' },
  { id: '3', name: 'Siklus Menstruasi', icon: 'calendar-outline', screen: 'SiklusMenstruasi' },
];

const MenstruasiScreen = ({ navigation }) => {
  const renderTopic = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(item.screen)}>
      <MaterialCommunityIcons name={item.icon} size={30} color="white" />
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <MaterialCommunityIcons name="bottle-tonic-plus" size={30} color="#ff69b4" />
        <Text style={styles.text}>Tentang Menstruasi</Text>
      </View>
      <FlatList
        data={menstruasiTopics}
        renderItem={renderTopic}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff0f5',
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
    padding: 20,
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
  listContainer: {
    alignItems: 'center',
  },
});

export default MenstruasiScreen;
