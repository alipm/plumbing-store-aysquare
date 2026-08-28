import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          PLUMBING Store by AY Square
        </Text>

        <TextInput
          placeholder="Search taps, faucets, pipes..."
          style={styles.search}
        />

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            Premium Plumbing Solutions
          </Text>

          <Text style={styles.bannerSubtitle}>
            Up to 30% Off
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.grid}>
          <CategoryCard title="🚰 Faucets" />
          <CategoryCard title="🔧 Taps" />
          <CategoryCard title="🚿 Showers" />
          <CategoryCard title="🛠 Pipes" />
          <CategoryCard title="⚙️ Valves" />
          <CategoryCard title="🧰 Accessories" />
        </View>

        <Text style={styles.sectionTitle}>
          Featured Products
        </Text>

        <ProductCard
          name="Premium Basin Tap"
          price="₹1,499"
        />

        <ProductCard
          name="Kitchen Mixer Tap"
          price="₹2,999"
        />

        <ProductCard
          name="Luxury Faucet"
          price="₹3,499"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryCard({ title }: { title: string }) {
  return (
    <View style={styles.categoryCard}>
      <Text>{title}</Text>
    </View>
  );
}

function ProductCard({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
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
    backgroundColor: '#F8FAFC',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    color: '#0A2E6E',
  },

  search: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 14,
    borderRadius: 12,
  },

  banner: {
    backgroundColor: '#0A2E6E',
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  bannerSubtitle: {
    color: '#FFFFFF',
    marginTop: 8,
  },

  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },

  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
  },

  productName: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    marginTop: 8,
    color: '#1E88E5',
    fontWeight: '700',
  },
});