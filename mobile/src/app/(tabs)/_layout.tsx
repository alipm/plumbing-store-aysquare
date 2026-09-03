import { Tabs } from "expo-router";
import { useCartStore } from "@/store/cartStore";

export default function TabsLayout() {
  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />

      <Tabs.Screen name="categories" options={{ title: "Categories" }} />

      <Tabs.Screen name="search" options={{ title: "Search" }} />

      <Tabs.Screen name="cart" options={{ title: `Cart (${cartCount})` }} />

      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
