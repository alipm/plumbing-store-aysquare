import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";

import { addresses } from "@/data/addresses";

export default function AddressesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Addresses</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add New Address</Text>
      </Pressable>

      {addresses.map((address) => (
        <View key={address.id} style={styles.card}>
          <Text style={styles.title}>{address.name}</Text>

          <Text>{address.address}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  button: {
    backgroundColor: "#0A2E6E",
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  title: {
    fontWeight: "700",
    marginBottom: 4,
  },
});
