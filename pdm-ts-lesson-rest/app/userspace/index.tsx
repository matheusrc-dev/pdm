import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTokenContext } from "../../src/contexts/userContext";
import api from "../../src/services/api";
import { Car } from "../../src/types/Car";
import { CarFavorite } from "../../src/types/CarFavorite";
import { FontAwesome } from '@expo/vector-icons';

export default function Home() {
  const { token, userId, clearAuth } = useTokenContext();
  const [cars, setCars] = useState<Car[]>([]);
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<CarFavorite[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadCars();
    loadFavorites();
  }, []);

  useEffect(() => {
    let filtered = allCars;
    
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(car =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (showOnlyFavorites) {
      const favoriteCarIds = favorites.map(f => f.car_id);
      filtered = filtered.filter(car => favoriteCarIds.includes(car.id));
    }

    setCars(filtered);
  }, [searchTerm, allCars, showOnlyFavorites, favorites]);

  const loadCars = async () => {
    try {
      const response = await api.get("/api/collections/cars/records", {
        headers: {
          Authorization: token,
        },
      });
      const items = response.data.items;
      setAllCars(items);
      setCars(items);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os carros");
    }
  };

  const loadFavorites = async () => {
    try {
      const response = await api.get("/api/collections/car_favorites/records", {
        headers: {
          Authorization: token,
        },
      });
      setFavorites(response.data.items);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os favoritos");
    }
  };

  const toggleFavorite = async (car: Car) => {
    try {
      const existingFavorite = favorites.find(f => f.car_id === car.id);
      
      if (existingFavorite) {
        await api.delete(`/api/collections/car_favorites/records/${existingFavorite.id}`, {
          headers: {
            Authorization: token,
          },
        });
        setFavorites(favorites.filter(f => f.id !== existingFavorite.id));
      } else {
        const response = await api.post("/api/collections/car_favorites/records", {
          user_id: userId,
          car_id: car.id,
        }, {
          headers: {
            Authorization: token,
          },
        });
        setFavorites([...favorites, response.data]);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar os favoritos");
    }
  };

  const isFavorite = (car: Car) => {
    return favorites.some(f => f.car_id === car.id);
  };

  const handleDelete = async (id: string) => {
    Alert.alert(
      "Confirmar",
      "Tem certeza que deseja excluir este carro?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await api.delete(`/api/collections/cars/records/${id}`, {
                headers: {
                  Authorization: token,
                },
              });
              Alert.alert("Sucesso", "Carro excluído com sucesso!");
              loadCars();
            } catch (error) {
              Alert.alert("Erro", "Não foi possível excluir o carro");
            }
          },
        },
      ]
    );
  };

  const handleLogout = () => {
    clearAuth();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Carros</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por marca..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={[styles.filterButton, showOnlyFavorites && styles.filterButtonActive]}
          onPress={() => setShowOnlyFavorites(!showOnlyFavorites)}
        >
          <FontAwesome 
            name="star" 
            size={20} 
            color={showOnlyFavorites ? "#FFD700" : "#666"} 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => router.push("/userspace/create_car")}>
        <Text style={styles.addButtonText}>Adicionar Novo Carro</Text>
      </TouchableOpacity>

      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.brandText}>{item.brand}</Text>
                <Text style={styles.modelText}>{item.model}</Text>
              </View>
              <TouchableOpacity
                onPress={() => toggleFavorite(item)}
                style={styles.favoriteButton}
              >
                <FontAwesome 
                  name={isFavorite(item) ? "star" : "star-o"} 
                  size={24} 
                  color={isFavorite(item) ? "#FFD700" : "#666"} 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.powerText}>{item.hp} HP</Text>
              <View style={styles.cardActions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => router.push(`/userspace/edit_car/${item.id}`)}>
                  <Text style={styles.actionButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => handleDelete(item.id)}>
                  <Text style={styles.actionButtonText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(car) => car.id}
        style={styles.flatlist}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {searchTerm.trim() !== "" 
                ? "Nenhum carro encontrado para esta marca"
                : "Nenhum carro cadastrado ainda"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#e0e0e0',
  },
  favoriteButton: {
    padding: 5,
  },
  cardTitleContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fe6364",
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#fff"
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#fe6364",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  flatlist: {
    flex: 1,
  },
  listContent: {
    padding: 20,
    paddingTop: 0,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fe6364",
  },
  modelText: {
    fontSize: 18,
    color: "#333",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  powerText: {
    fontSize: 16,
    color: "#666",
  },
  cardActions: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#fe6364",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
});
