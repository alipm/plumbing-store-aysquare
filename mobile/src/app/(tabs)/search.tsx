import { useState } from 'react';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
      />

      {query.length > 0 &&
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}

      {query.length > 0 &&
        filteredProducts.length === 0 && (
          <Text style={styles.emptyText}>
            No products found
          </Text>
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },

  searchInput: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#666',
  },
});