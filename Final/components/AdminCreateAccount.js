import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';

const AdminCreateAccount = ({ route, navigation }) => {
  const { adminName } = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const createAdminAccount = () => {
    // Basic validation
    if (!validateFields()) {
      return;
    }

    console.log('Admin Create Account Details:', {
      firstName,
      lastName,
      username,
      password,
      email,
      number,
    });

    // For now, just log the adminName

    // Navigate back to Admin.js
    navigation.navigate('Admin', { adminName: username });
  };

  const validateFields = () => {
    // Basic validation, you can customize this based on your requirements
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      alert('Invalid First Name');
      return false;
    }

    if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
      alert('Invalid Last Name');
      return false;
    }

    if (!username || !/^[a-z0-9]+$/.test(username)) {
      alert('Invalid Username. Use lowercase characters and numbers only.');
      return false;
    }

    if (!password) {
      alert('Password is required');
      return false;
    }

    if (password !== verifyPassword) {
      alert('Passwords do not match');
      return false;
    }

    if (!number || !/^[0-9]+$/.test(number)) {
      alert('Invalid Number. Use numbers only.');
      return false;
    }

    // Add more validation for email if needed

    return true;
  };

  const cancelCreateAccount = () => {
    // Navigate back to AdminLogin.js
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../assets/Ice.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text>Create an Admin Account.</Text>
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
            placeholder="Verify Password"
            value={verifyPassword}
            onChangeText={(text) => setVerifyPassword(text)}
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
            <Button title="Cancel" onPress={cancelCreateAccount} color="#6F4E37" />
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

export default AdminCreateAccount;