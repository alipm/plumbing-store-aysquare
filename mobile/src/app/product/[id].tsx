import { useLocalSearchParams } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import { products } from '@/data/products';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find(
    p => p.id === id
  );

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text>Product Image</Text>
      </View>

      <Text style={styles.title}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        ₹{product.price}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <Text style={styles.sectionTitle}>
        Features
      </Text>

      <Text>• Brass Body</Text>
      <Text>• Leak Resistant</Text>
      <Text>• Easy Installation</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Add To Cart
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },

  imagePlaceholder: {
    height: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E88E5',
    marginVertical: 12,
  },

  description: {
    color: '#666',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#0A2E6E',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});