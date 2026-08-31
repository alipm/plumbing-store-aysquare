import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import CategoryCard from "@/components/CategoryCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>PLUMBING Store by AY Square</Text>

        <TextInput
          placeholder="Search taps, faucets, pipes..."
          style={styles.search}
          onFocus={() => router.push('/search')}
        />

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Premium Plumbing Solutions</Text>

          <Text style={styles.bannerSubtitle}>Up to 30% Off</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.grid}>
          <CategoryCard
            title="Faucets"
            icon="🚰"
            onPress={() => router.push("/categories")}
          />
          <CategoryCard
            title="Taps"
            icon="🔧"
            onPress={() => router.push("/categories")}
          />
          <CategoryCard
            title="Showers"
            icon="🚿"
            onPress={() => router.push("/categories")}
          />
          <CategoryCard
            title="Pipes"
            icon="🛠"
            onPress={() => router.push("/categories")}
          />
          <CategoryCard
            title="Valves"
            icon="⚙️"
            onPress={() => router.push("/categories")}
          />
          <CategoryCard
            title="Accessories"
            icon="🧰"
            onPress={() => router.push("/categories")}
          />
        </View>

        <Text style={styles.sectionTitle}>Featured Products</Text>

        <ProductCard name="Premium Basin Tap" price="₹1,499" />

        <ProductCard name="Kitchen Mixer Tap" price="₹2,999" />

        <ProductCard name="Luxury Faucet" price="₹3,499" />
      </ScrollView>
    </SafeAreaView>
  );
}

function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    margin: 20,
    color: "#0A2E6E",
  },

  search: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    padding: 14,
    borderRadius: 12,
  },

  banner: {
    backgroundColor: "#0A2E6E",
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  bannerSubtitle: {
    color: "#FFFFFF",
    marginTop: 8,
  },

  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  productCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
  },

  productName: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    marginTop: 8,
    color: "#1E88E5",
    fontWeight: "700",
  },
});
