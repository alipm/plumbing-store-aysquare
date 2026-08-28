import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
  name: string;
  price: number;
  description: string;
};

export default function ProductCard({
  name,
  price,
  description,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.price}>
        ₹{price}
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Add To Cart
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  description: {
    marginTop: 8,
    color: '#666',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E88E5',
    marginTop: 12,
  },

  button: {
    backgroundColor: '#0A2E6E',
    marginTop: 12,
    borderRadius: 10,
    padding: 12,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});