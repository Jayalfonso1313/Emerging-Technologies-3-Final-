import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminAnalytics = () => {
  // Sample data (replace this with your actual data)
  const malePercentage = 60; // Example: 60% male buyers
  const femalePercentage = 40; // Example: 40% female buyers
  const ageDistribution = {
    '18-24': 20,
    '25-34': 30,
    '35-44': 25,
    '45+': 25,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics Page</Text>

      <Text style={styles.analyticsText}>Male Buyers: {malePercentage}%</Text>
      <Text style={styles.analyticsText}>Female Buyers: {femalePercentage}%</Text>

      <Text style={styles.analyticsText}>Age Distribution:</Text>
      {Object.entries(ageDistribution).map(([ageRange, percentage]) => (
        <Text key={ageRange} style={styles.analyticsText}>
          {`${ageRange}: ${percentage}%`}
        </Text>
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
  analyticsText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AdminAnalytics;
