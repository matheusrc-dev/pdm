import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTokenContext } from "../../../src/contexts/userContext";
import api from "../../../src/services/api";
import { Car } from "../../../src/types/Car";

export default function EditCar() {
  const router = useRouter();
  const { token } = useTokenContext();
  const { id } = useLocalSearchParams();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [hp, setHp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCar();
  }, []);

  const loadCar = async () => {
    try {
      const response = await api.get(`/api/collections/cars/records/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const car = response.data;
      setBrand(car.brand);
      setModel(car.model);
      setHp(car.hp.toString());
      setLoading(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados do carro");
      router.back();
    }
  };

  const handleUpdate = async () => {
    if (!brand || !model || !hp) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    const data = {
      model,
      brand,
      hp: parseInt(hp),
    };

    try {
      await api.patch(`/api/collections/cars/records/${id}`, data, {
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
      });

      Alert.alert("Sucesso", "Carro atualizado com sucesso!");
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o carro");
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Editar Carro</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          value={brand}
          onChangeText={setBrand}
          placeholder="Ex: Toyota"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Modelo</Text>
        <TextInput
          style={styles.input}
          value={model}
          onChangeText={setModel}
          placeholder="Ex: Corolla"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Potência (HP)</Text>
        <TextInput
          style={styles.input}
          value={hp}
          onChangeText={(text) => setHp(text.replace(/[^0-9]/g, ""))}
          placeholder="Ex: 170"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleUpdate}>
            <Text style={styles.submitButtonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fe6364",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#fe6364",
    borderRadius: 8,
    padding: 15,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 15,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
});
