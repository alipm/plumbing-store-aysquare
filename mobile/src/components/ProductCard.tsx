import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { useCartStore } from "@/store/cartStore";
import { Image } from "react-native";

type Props = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: any;
};

export default function ProductCard({ id, name, price, description, image }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        console.log("PRODUCT CLICKED", id);
        router.push(`/product/${id}`);
      }}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.price}>₹{price}</Text>

      <Pressable
        style={styles.button}
        onPress={(e) => {
          e.stopPropagation();

          addItem({
            id,
            name,
            price,
          });
        }}
      >
        <Text style={styles.buttonText}>Add To Cart</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  description: {
    marginTop: 8,
    color: "#666",
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E88E5",
    marginTop: 12,
  },

  button: {
    backgroundColor: "#0A2E6E",
    marginTop: 12,
    borderRadius: 10,
    padding: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
