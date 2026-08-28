import { Pressable, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  icon: string;
  onPress: () => void;
};

export default function CategoryCard({
  title,
  icon,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}>
      <Text>
        {icon} {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
});