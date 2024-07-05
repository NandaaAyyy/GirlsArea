import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dataKesehatanTubuh = [
  { id: '1', title: 'Nutrisi Seimbang', description: 'Nutrisi seimbang adalah asupan makanan yang mengandung zat gizi dalam jumlah yang sesuai dengan kebutuhan tubuh. Gizi seimbang adalah asupan makanan yang jumlah zat gizinya sesuai dengan kebutuhan. Gizi seimbang sangat penting untuk menjaga kesehatan tubuh dan mencegah berbagai penyakit' },
  { id: '2', title: 'Tidur Cukup', description: 'idur cukup berkualitas adalah definisi yang mengacu pada kualitas tidur yang memadai dan memungkinkan tubuh untuk mendapatkan istirahat yang cukup.Tidur cukup berkualitas adalah tidur yang memungkinkan tubuh untuk mendapatkan istirahat yang cukup dan memadai. Tidur seperti ini sangat penting untuk menjaga kesehatan fisik dan mental.' },
  { id: '3', title: 'Kebersihan Tubuh', description: 'Kebersihan tubuh perempuan adalah definisi yang mengacu pada kualitas dan kuantitas perawatan tubuh yang dilakukan oleh perempuan untuk menjaga kesehatan dan kebersihan tubuhnya.Kebersihan tubuh perempuan adalah proses yang dilakukan oleh perempuan untuk menjaga kesehatan dan kebersihan tubuhnya, termasuk mencuci tangan, mandi teratur, menjaga kebersihan rambut, kulit, dan organ reproduksi, serta menghindari penyebaran penyakit melalui kebiasaan sehari-hari yang seimbang dan sehat' },
];

const KesehatanTubuh = ({ navigation }) => {

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
        data={dataKesehatanTubuh}
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

export default KesehatanTubuh;
