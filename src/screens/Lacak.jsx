import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const MenstruasiLacak = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [nextPeriod, setNextPeriod] = useState('');

  const calculateNextPeriod = () => {
    if (lastPeriod && cycleLength) {
      const lastDate = new Date(lastPeriod);
      const nextDate = new Date(lastDate.setDate(lastDate.getDate() + parseInt(cycleLength)));
  
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const locale = 'id-ID';
      const formatter = new Intl.DateTimeFormat(locale, options);
      const formattedDate = formatter.format(nextDate);
  
      setNextPeriod(formattedDate);
    }
  };
  

  const saveData = () => {
    Alert.alert('Data Tersimpan', 'Data menstruasi telah disimpan.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pelacak Menstruasi</Text>
      <TextInput
        style={styles.input}
        placeholder="Tanggal Menstruasi Terakhir (YYYY-MM-DD)"
        value={lastPeriod}
        onChangeText={setLastPeriod}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Panjang Siklus (hari)"
        value={cycleLength}
        onChangeText={setCycleLength}
        keyboardType="numeric"
      />
      <Button title="Hitung Periode Berikutnya" onPress={calculateNextPeriod} />
      {nextPeriod ? <Text style={styles.result}>Periode Berikutnya: {nextPeriod}</Text> : null}
      <Button title="Simpan Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff69b4',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#6495ed',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'pink',
    width: '100%',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#ff69b4',
  },
});

export default MenstruasiLacak;
