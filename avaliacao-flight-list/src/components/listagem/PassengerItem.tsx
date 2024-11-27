import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { Passenger } from '../../helpers';

type PassengerItemProps = {
  passenger: Passenger;
};

export default function PassengerItem({ passenger }: PassengerItemProps) {

  const handlePassengerPress = (passenger: Passenger) => {
    Alert.alert(
      'Passageiro',
      `Nome: ${passenger.passenger_name}\nOrigem: ${passenger.origin}\nDestino: ${passenger.destination}`
    );
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => handlePassengerPress(passenger)}>
      <Image source={{ uri: passenger.passenger_avatar }} style={styles.avatar} />
      <Text style={styles.itemText}>{passenger.passenger_name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
