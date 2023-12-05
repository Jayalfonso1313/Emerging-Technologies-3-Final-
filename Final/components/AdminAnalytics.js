import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminAnalytics = ({ route }) => {
  const { userInfo } = route.params;
  const { name, age, gender } = userInfo || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics Page</Text>
      {name && age && gender ? (
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.header}>Age</Text>
            <Text style={styles.header}>Gender</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>{name}</Text>
            <Text style={styles.cell}>{age}</Text>
            <Text style={styles.cell}>{gender}</Text>
          </View>
        </View>
      ) : (
        <Text>No user information available.</Text>
      )}
      {/* Add your analytics content here */}
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
  table: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
});

export default AdminAnalytics;
