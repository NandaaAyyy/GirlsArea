import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dataOlahraga = [
  { id: '1', title: 'Jalan Kaki', description: 'Olahraga jalan kaki adalah definisi yang mengacu pada aktivitas fisik yang melibatkan berjalan kaki sebagai bentuk latihan fisik yang dapat membantu meningkatkan kesehatan fisik dan mental. ' },
  { id: '2', title: 'Yoga', description: 'Yoga untuk perempuan adalah definisi yang mengacu pada bentuk latihan fisik yang melibatkan gerakan tubuh yang terintegrasi dengan pernapasan dan meditasi untuk meningkatkan kesehatan fisik, mental, dan spiritual. Yoga untuk perempuan adalah bentuk latihan fisik yang melibatkan gerakan tubuh yang terintegrasi dengan pernapasan dan meditasi untuk meningkatkan kesehatan fisik, mental, dan spiritual. Yoga ini dapat membantu meningkatkan kesehatan reproduksi, mengurangi stres, dan meningkatkan kualitas hidup.' },
  { id: '3', title: 'Renang', description: 'Renang untuk perempuan adalah definisi yang mengacu pada aktivitas fisik yang melibatkan berenang sebagai bentuk latihan fisik yang dapat membantu meningkatkan kesehatan fisik, mental, dan spiritual.Renang untuk perempuan adalah bentuk latihan fisik yang melibatkan berenang sebagai cara untuk meningkatkan kesehatan fisik, mental, dan spiritual. Renang dapat membantu meningkatkan kesehatan jantung, mengurangi berat badan, dan meningkatkan kualitas hidup.' },
];

const Olahraga = ({ navigation }) => {

  const navigateToDetail = (item) => {
    // Implement navigation to detail screen
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
        data={dataOlahraga}
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
});

export default Olahraga;
