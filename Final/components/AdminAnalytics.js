import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const AdminAnalytics = () => {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSaveData = () => {
    const newUser = { name, age, gender };
    setUserData((prevUserData) => [...prevUserData, newUser]);
    // You can also save the data to a database or other storage mechanism here
    // For simplicity, we're just storing it in the component state
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setAge('');
    setGender('');
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.tableCell}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.tableCell}>
        <Text>{item.age}</Text>
      </View>
      <View style={styles.tableCell}>
        <Text>{item.gender}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics Page</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
        <Button title="Save Data" onPress={handleSaveData} />
      </View>
      {/* User Data Table */}
      <Text style={styles.subtitle}>User Data:</Text>
      <View style={styles.tableHeader}>
        <View style={styles.tableCell}>
          <Text>Name</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Age</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Gender</Text>
        </View>
      </View>
      {/* Display entered user data immediately */}
      {userData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>{item.age}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>{item.gender}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AdminAnalytics;
