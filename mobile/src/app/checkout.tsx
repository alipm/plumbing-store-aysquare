import { View, Text, StyleSheet, Pressable } from "react-native";
import { useCartStore } from "@/store/cartStore";
import { Platform, Alert } from "react-native";

export default function CheckoutScreen() {
  const { items } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>

      <Text style={styles.label}>Selected Address</Text>

      <View style={styles.card}>
        <Text>Flat 101, XYZ Apartments, Hyderabad</Text>
      </View>

      <Text style={styles.label}>Order Summary</Text>

      <View style={styles.card}>
        <Text>Total Items: {items.length}</Text>
        <Text>Total Amount: ₹{total}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          if (Platform.OS === "web") {
            window.alert("Order placed successfully");
          } else {
            Alert.alert(
              "Order Placed",
              "Your order has been placed successfully.",
            );
          }
        }}
      >
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
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

  label: {
    fontWeight: "700",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#0A2E6E",
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },
});
