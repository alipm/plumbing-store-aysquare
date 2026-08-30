import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />

      <Tabs.Screen
        name="categories"
        options={{ title: 'Categories' }}
      />

      <Tabs.Screen
        name="search"
        options={{ title: 'Search' }}
      />

      <Tabs.Screen
        name="cart"
        options={{ title: 'Cart' }}
      />

      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile' }}
      />
    </Tabs>
  );
};