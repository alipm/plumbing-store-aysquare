import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    category: "Taps",
    name: "Premium Basin Tap",
    image: require('../assets/images/products/basin-tap.jpeg'),
    price: 1499,
    description: "Chrome finish basin tap",
  },
  {
    id: "2",
    category: "Taps",
    name: "Kitchen Mixer Tap",
    image: require('../assets/images/products/luxury-faucet.jpeg'),
    price: 2999,
    description: "Hot and cold mixer tap",
  },
  {
    id: "3",
    category: "Faucets",
    name: "Luxury Faucet",
    image: require('../assets/images/products/kitchen-mixer.jpeg'),
    price: 3499,
    description: "Premium brass faucet",
  },
  {
    id: "4",
    category: "Pipes",
    name: "PVC Pipe",
    image: require('../assets/images/products/basin-tap.jpeg'),
    price: 899,
    description: "Durable PVC pipe",
  },
  {
    id: "5",
    category: "Showers",
    name: "Rain Shower",
    image: require('../assets/images/products/luxury-faucet.jpeg'),
    price: 2599,
    description: "Premium rain shower",
  },
  {
    id: "6",
    category: "Valves",
    name: "Brass Valve",
    image: require('../assets/images/products/kitchen-mixer.jpeg'),
    price: 699,
    description: "Heavy duty valve",
  },
];
