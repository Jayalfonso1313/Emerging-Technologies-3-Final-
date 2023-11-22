import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';

const Admin = ({ route }) => {
  const { adminName } = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const createAdminAccount = () => {
    // You can perform any validation or save logic here

    // For simplicity, let's just log the entered details
    console.log('Admin Details:', {
      firstName,
      lastName,
      username,
      password,
      email,
      number,
    });
  };

  const loginAsAdmin = () => {
    // You can perform login authentication logic here
    // For simplicity, let's just log the adminName
    console.log('Logged in as:', adminName);
  };

  return (
    <ImageBackground
      source={require('../assets/Ice.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text>Create your account.</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Number"
            value={number}
            onChangeText={(text) => setNumber(text)}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <Button title="Create" onPress={createAdminAccount} color="#6F4E37" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={loginAsAdmin} color="#6F4E37" />
          </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.10)', // White background with 80% opacity
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 200,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8, // Adjust the value to change the button's rounded rectangle shape
    overflow: 'hidden', // This ensures the content inside the button stays within the rounded borders
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default Admin;
