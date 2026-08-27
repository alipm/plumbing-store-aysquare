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
      <ScrollView>
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

        <Text style={styles.sectionTitle}>
          Categories
        </Text>

        <View style={styles.grid}>
          <View style={styles.categoryCard}>
            <Text>🚰 Faucets</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text>🔧 Taps</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text>🚿 Showers</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text>🛠 Pipes</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text>⚙️ Valves</Text>
          </View>

          <View style={styles.categoryCard}>
            <Text>🧰 Accessories</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Featured Products
        </Text>

        <View style={styles.productCard}>
          <Text style={styles.productName}>Premium Basin Tap</Text>
          <Text style={styles.price}>₹1,499</Text>
        </View>

        <View style={styles.productCard}>
          <Text style={styles.productName}>Kitchen Mixer Tap</Text>
          <Text style={styles.price}>₹2,999</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 14,
    borderRadius: 12,
  },

  banner: {
    margin: 20,
    backgroundColor: '#0A2E6E',
    padding: 20,
    borderRadius: 16,
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  bannerSubtitle: {
    color: '#fff',
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },

  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  productCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    color: '#1E88E5',
    fontWeight: '700',
    marginTop: 8,
  },
});