import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useCartStore } from '@/store/cartStore';

export default function CartScreen() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Cart is empty</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {items.map((item) => (
        <View
          key={item.id}
          style={styles.card}
        >
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text>
            ₹{item.price}
          </Text>

          <Text>
            Quantity: {item.quantity}
          </Text>

          <View style={styles.actions}>
            <Pressable
              onPress={() =>
                increaseQuantity(item.id)
              }
            >
              <Text>➕</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                decreaseQuantity(item.id)
              }
            >
              <Text>➖</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                removeItem(item.id)
              }
            >
              <Text>🗑️</Text>
            </Pressable>
          </View>
        </View>
      ))}

      <Text style={styles.total}>
        Total: ₹{total}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  name: {
    fontWeight: '700',
  },

  actions: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  total: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});