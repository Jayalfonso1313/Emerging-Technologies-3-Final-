import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminHome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Admin Home!</Text>
      {/* Add your Admin Home content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdminHome;
