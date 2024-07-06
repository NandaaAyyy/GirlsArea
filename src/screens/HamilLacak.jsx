import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const KehamilanScreen = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [dueDate, setDueDate] = useState('');

  const calculateDueDate = () => {
    if (lastPeriod) {
      const lastDate = new Date(lastPeriod);
      const dueDate = new Date(lastDate.setDate(lastDate.getDate() + 280)); // 280 hari untuk kehamilan
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const locale = 'id-ID';
      const formatter = new Intl.DateTimeFormat(locale, options);
      const formattedDate = formatter.format(dueDate);
  
      setDueDate(formattedDate);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pelacak Kehamilan</Text>
      <TextInput
        style={styles.input}
        placeholder="Tanggal Menstruasi Terakhir (YYYY-MM-DD)"
        value={lastPeriod}
        onChangeText={setLastPeriod}
        keyboardType="numeric"
      />
      <Button title="Hitung Tanggal Lahir" onPress={calculateDueDate} />
      {dueDate ? <Text style={styles.result}>Tanggal Lahir: {dueDate}</Text> : null}
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

export default KehamilanScreen;
