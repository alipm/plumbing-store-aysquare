import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function CategoriesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Products
      </Text>

      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
});