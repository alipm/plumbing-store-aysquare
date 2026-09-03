import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { orders } from '@/data/orders';

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>

      {orders.map(order => (
        <View key={order.id} style={styles.card}>
          <Text>Order: {order.id}</Text>
          <Text>Date: {order.date}</Text>
          <Text>Amount: ₹{order.amount}</Text>
          <Text>Status: {order.status}</Text>
        </View>
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

  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
});