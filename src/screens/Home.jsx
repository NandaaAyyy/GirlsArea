import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const topics = [
  { id: '1', name: 'Tentang Menstruasi', icon: 'account-heart', screen: 'Menstruasi' },
  { id: '2', name: 'Tentang Kesehatan', icon: 'information', screen: 'Kesehatan' },
  { id: '3', name: 'Tentang Perasaan', icon: 'image', screen: 'Perasaan' },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(topics);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = topics.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTopics(filteredData);
    } else {
      setFilteredTopics(topics);
    }
  };

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
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={28} color="#6495E4" />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari topik..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.labelContainer}>
        <MaterialCommunityIcons name="home" size={30} color="#6495E4" />
        <Text style={styles.text}>Selamat datang di Girls Area</Text>
      </View>
      <View style={styles.labelContainer}>
        <MaterialCommunityIcons name="book-open-page-variant" size={30} color="#6495ED" />
        <Text style={styles.text}>Disini kita akan belajar tentang perempuan</Text>
      </View>
      <FlatList
        data={filteredTopics}
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
    backgroundColor: '#f0f8ff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: '#6495E4',
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

export default HomeScreen;
