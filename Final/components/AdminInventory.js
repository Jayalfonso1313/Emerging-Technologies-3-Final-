import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AdminInventory = () => {
  const [inventory, setInventory] = useState([
    { id: '1', name: 'Coffee Beans', quantity: 100 },
    { id: '2', name: 'Milk', quantity: 50 },
    { id: '3', name: 'Sugar', quantity: 30 },
    // Add more items as needed
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = () => {
    if (newItemName && newItemQuantity) {
      const existingItemIndex = inventory.findIndex(
        (item) => item.name.toLowerCase() === newItemName.toLowerCase()
      );

      if (existingItemIndex !== -1) {
        setInventory((prevInventory) => {
          const updatedInventory = [...prevInventory];
          updatedInventory[existingItemIndex].quantity += parseInt(newItemQuantity);
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

  const deleteItem = (itemId) => {
    setInventory((prevInventory) => prevInventory.filter((item) => item.id !== itemId));
    setSelectedItem(null); // Reset selected item after deletion
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
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.columnHeader, styles.itemColumn]}>Item Name</Text>
          <Text style={[styles.columnHeader, styles.quantityColumn]}>Quantity</Text>
        </View>

        <FlatList
          data={inventory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tableRow, selectedItem === item.id && styles.selectedItem]}
              onPress={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
            >
              <Text style={[styles.column, styles.itemColumn]}>{item.name}</Text>
              <Text style={[styles.column, styles.quantityColumn]}>{item.quantity}</Text>
              {selectedItem === item.id && (
                <TouchableOpacity
                  style={styles.deleteButtonContainer}
                  onPress={() => deleteItem(item.id)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  formContainer: {
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 40,
    shadowRadius: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'auto',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  column: {
    flex: 1,
  },
  itemColumn: {
    paddingLeft: 8,
  },
  quantityColumn: {
    textAlign: 'auto',
  },
  deleteButtonContainer: {
    backgroundColor: '#ff5555',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: 'white',
  },
  selectedItem: {
    backgroundColor: '#e6f7ff', // Light blue for selected items
  },
});

export default AdminInventory;