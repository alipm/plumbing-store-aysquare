import { View, Text, StyleSheet } from "react-native";
import { user } from "@/data/user";
import { router } from "expo-router";
import { Pressable } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>

      <View style={styles.card}>
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
      </View>

      <Pressable style={styles.card} onPress={() => router.push("/orders")}>
        <Text>My Orders</Text>
      </Pressable>

      <View style={styles.card}>
        <Text>Manage Addresses</Text>
      </View>

      <View style={styles.card}>
        <Text>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
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
});
``;
