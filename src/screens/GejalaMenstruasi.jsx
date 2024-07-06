import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dataGejalaMenstruasi = [
  { id: '1', title: 'Gejala PraMenstruasi', description: 'Sakit Kepala, Payudara terasa nyeri dan bengkak, Jerawat muncul karena peningkatan kadar hormon progesteron, Perut kembung yang disebabkan oleh perubahan hormon, Perubahan suasana hati.' },
  { id: '2', title: 'Gejala Pasca Menstruasi', description: 'Nyeri di Perut: Nyeri di bagian perut, pinggul, punggung bawah, dan paha bagian dalam, sakit kepala dapat berlangsung selama 1-3 hari, mual, diare, lemas' },
  { id: '3', title: 'Gangguan Menstruasi ', description: 'Telat Menstruasi, darah yang keluar berlebihan, Pendarahan yang berlangsung lama'},
]
const GejalaMenstruasi = ({ navigation }) => {

  const navigateToDetail = (item) => {
    console.log('Navigating to detail:', item.title);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToDetail(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataGejalaMenstruasi}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
});

export default GejalaMenstruasi;
