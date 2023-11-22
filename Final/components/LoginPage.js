// Import necessary components from 'react-native'
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text, Image } from 'react-native';

// Import your coffee shop logo image (replace '../assets/coffee_shop_logo.png' with the correct path)
import CoffeeShopLogo from '../assets/coffee_shop_logo.png';

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const proceedToHomePage = () => {
    // Validate that all fields are filled before navigating
    if (name && age && gender) {
      // You can perform any additional validation before navigating to the next page
      navigation.navigate('HomePage', { name, age, gender });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background_image.png')}
      style={styles.backgroundImage}
    >
      {/* New View for Coffee Shop Logo */}
      <View style={styles.logoContainer}>
        {/* Add your coffee shop logo image here */}
        <Image
          source={CoffeeShopLogo}
          style={styles.logo}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.title}>Coffee Shop Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#6F4E37"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Age"
            placeholderTextColor="#6F4E37"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Your Gender (e.g., male or female)"
            placeholderTextColor="#6F4E37"
            value={gender}
            onChangeText={(text) => setGender(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Enter" onPress={proceedToHomePage} color="#6F4E37" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6F4E37',
  },
  input: {
    height: 40,
    borderColor: '#6F4E37',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 200,
    color: '#6F4E37',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  // New styles for the logo container and logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: -150,
  },
  logo: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    resizeMode: 'contain', // or 'cover' depending on your logo dimensions
  },
});

export default LoginPage;
