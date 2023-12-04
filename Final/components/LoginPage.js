import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text, Image, Picker } from 'react-native';
import CoffeeShopLogo from '../assets/coffee_shop_logo.png';

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const proceedToHomePage = () => {
    if (name && age && gender) {
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
      <View style={styles.logoContainer}>
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
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
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
    borderRadius: 8, 
    overflow: 'hidden',
    padding: 20,
    backgroundColor: 'white', 
    elevation: 5,
    margin: 10,
    width: 260,
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
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    padding: 10,
    width: 200,
    color: '#6F4E37',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -150,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  pickerContainer: {
    borderColor: '#6F4E37',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    width: 200,
    backgroundColor: 'white', 
  },
  picker: {
    height: 40,
    color: '#6F4E37',
  },
});

export default LoginPage;
