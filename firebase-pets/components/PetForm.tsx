import Pet from "@/types/Pet";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";

type PetFormProps = {
  form: Pet;
  onSubmit: (fields: Pet) => void;
  onDelete?: () => void;
  submitButtonText: string;
};

export default function PetForm({
  form,
  onSubmit,
  onDelete,
  submitButtonText,
}: PetFormProps) {
  const [name, setName] = useState(form.name);
  const [type, setType] = useState(form.type);
  const [age, setAge] = useState(form.age);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!name && !!type && age > 0);
  }, [name, type, age]);

  const handleSubmit = () => {
    onSubmit({ name, type, age });
  };

  const handleAgeChange = (age: string) => {
    let parsedAge = parseInt(age);
    if (isNaN(parsedAge)) {
      parsedAge = 0;
    }

    setAge(parsedAge);
  };

  const handleDelete = () => {
    if (onDelete) {
      Alert.alert(
        "Confirmar Exclusão",
        "Tem certeza de que deseja excluir este pet?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Excluir", style: "destructive", onPress: onDelete },
        ]
      );
    }
  };

  return (
    <View>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Espécie</Text>
      <TextInput style={styles.input} value={type} onChangeText={setType} />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        value={age.toString()}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[styles.submitButton, !isValid && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        <Text style={styles.submitButtonText}>{submitButtonText}</Text>
      </TouchableOpacity>

      {onDelete && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Excluir</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  submitButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  deleteButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
