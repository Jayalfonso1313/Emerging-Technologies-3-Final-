import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminAnalytics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics Page</Text>
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
});

export default AdminAnalytics;