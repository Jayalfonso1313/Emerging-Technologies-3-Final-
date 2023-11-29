import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const AdminHome = ({ navigation }) => {
  const navigateToInventory = () => {
    // Handle navigation to Inventory screen
    console.log('Navigating to Inventory');
    navigation.navigate('AdminInventory');
  };

  const navigateToAnalytics = () => {
    // Handle navigation to Analytics screen
    console.log('Navigating to Analytics');
    navigation.navigate('AdminAnalytics');
  };

  return (
    <ImageBackground
      source={require('../assets/Ice.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Image source={require('../assets/C.png')} style={styles.coffeeIcon} />
          <Text style={styles.welcomeText}>Welcome, Admin!</Text>
          <TouchableOpacity style={styles.button} onPress={navigateToInventory}>
            <Text style={styles.buttonText}>Inventory</Text>
          </TouchableOpacity>
          <View style={styles.buttonSpacing} />
          <TouchableOpacity style={styles.button} onPress={navigateToAnalytics}>
            <Text style={styles.buttonText}>Analytics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coffeeIcon: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#6F4E37',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonSpacing: {
    height: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default AdminHome;
