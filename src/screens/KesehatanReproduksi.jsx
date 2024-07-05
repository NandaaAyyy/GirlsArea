import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dataKesehatanReproduksi = [
  { id: '1', title: 'Menstruasi', description: 'Menstruasi adalah proses alami di mana darah dan sel-sel tubuh dari dinding rahim wanita keluar melalui vagina. Siklus menstruasi terdiri dari empat fase: fase folikuler, fase ovulasi, fase luteal, dan fase menstruasi. Fase menstruasi terjadi ketika endometrium yang telah dipersiapkan untuk kehamilan tidak terjadi dan luluh bersama darah.' },
  { id: '2', title: 'Kontrasepsi', description: 'Kontrasepsi adalah penggunaan obat-obatan, alat, atau prosedur pembedahan untuk mencegah kehamilan. Tujuan utamanya adalah untuk mengendalikan jumlah kelahiran dan memungkinkan pasangan untuk merencanakan kehamilan secara efekti' },
  { id: '3', title: 'Kehamilan', description: 'kehamilan adalah proses alami yang penting dalam siklus reproduksi wanita. Penting untuk memahami gejala dan cara mengatasi gangguan yang mungkin terjadi. Berdiskusi dengan dokter dan pasangan serta menjaga kesehatan tubuh dapat membantu menjalani kehamilan dengan lebih baik.' },
];

const KesehatanReproduksi = ({ navigation }) => {

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
        data={dataKesehatanReproduksi}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 50 }}
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
    marginBottom: 10,
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

export default KesehatanReproduksi;
