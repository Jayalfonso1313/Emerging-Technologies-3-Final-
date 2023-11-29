import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const AdminInventory = () => {
  const [inventory, setInventory] = useState([
    { id: '1', name: 'Coffee Beans', quantity: 100 },
    { id: '2', name: 'Milk', quantity: 50 },
    { id: '3', name: 'Sugar', quantity: 30 },
    // Add more items as needed
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const addItem = () => {
    if (newItemName && newItemQuantity) {
      const existingItemIndex = inventory.findIndex(
        (item) => item.name.toLowerCase() === newItemName.toLowerCase()
      );

      if (existingItemIndex !== -1) {
        setInventory((prevInventory) => {
          const updatedInventory = [...prevInventory];
          updatedInventory[existingItemIndex].quantity +=
            parseInt(newItemQuantity);
          return updatedInventory;
        });
      } else {
        setInventory((prevInventory) => [
          ...prevInventory,
          {
            id: (prevInventory.length + 1).toString(),
            name: newItemName,
            quantity: parseInt(newItemQuantity),
          },
        ]);
      }

      setNewItemName('');
      setNewItemQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Management</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={newItemName}
          onChangeText={(text) => setNewItemName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={newItemQuantity}
          onChangeText={(text) => setNewItemQuantity(text)}
          keyboardType="numeric"
        />
        <Button title="Add Item" onPress={addItem} />
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Item Name</Text>
          <Text style={styles.columnHeader}>Quantity</Text>
        </View>

        <FlatList
          data={inventory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.column}>{item.name}</Text>
              <Text style={styles.column}>{item.quantity}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 10,
  },
  columnHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 10,
  },
  column: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
});

export default AdminInventory;
