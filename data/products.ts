export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  discount: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "mobile-charger",
    name: "Fast Mobile Charger",
    category: "Chargers",
    price: "Rs. 250",
    originalPrice: "Rs. 399",
    discount: "37% off",
    description: "High quality fast charging adapter compatible with most smartphones.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&q=80",
    rating: 4.4,
    reviews: 128,
    features: ["Fast Charging", "Overheat Protection", "Compatible with Android and iPhone"]
  },
  {
    slug: "headphones",
    name: "Wired Headphones",
    category: "Headphones",
    price: "Rs. 199",
    originalPrice: "Rs. 349",
    discount: "42% off",
    description: "Clear sound quality headphones for music and calls.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
    rating: 4.2,
    reviews: 94,
    features: ["High Bass Sound", "Comfortable Fit", "3.5mm Jack"]
  },
  {
    slug: "mobile-battery",
    name: "Mobile Battery",
    category: "Batteries",
    price: "Rs. 499",
    originalPrice: "Rs. 699",
    discount: "29% off",
    description: "Reliable replacement battery for daily long-hour smartphone use.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&q=80",
    rating: 4.1,
    reviews: 61,
    features: ["Long Backup", "Stable Performance", "Safe Charging Cycle"]
  },
  {
    slug: "usb-cable",
    name: "USB Cable",
    category: "Cables",
    price: "Rs. 120",
    originalPrice: "Rs. 220",
    discount: "45% off",
    description: "Durable cable for fast charging and stable data transfer.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop&q=80",
    rating: 4.3,
    reviews: 210,
    features: ["Fast Data Sync", "Strong Build", "Universal USB Support"]
  },
  {
    slug: "power-adapter",
    name: "Power Adapter",
    category: "Adapters",
    price: "Rs. 349",
    originalPrice: "Rs. 499",
    discount: "30% off",
    description: "Compact power adapter suitable for phones and small accessories.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop&q=80",
    rating: 4,
    reviews: 73,
    features: ["Compact Design", "Short Circuit Protection", "Energy Efficient"]
  },
  {
    slug: "memory-card",
    name: "Memory Card",
    category: "Storage",
    price: "Rs. 299",
    originalPrice: "Rs. 449",
    discount: "33% off",
    description: "High-speed memory card for photos, videos, and apps.",
    image: "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=400&h=400&fit=crop&q=80",
    rating: 4.5,
    reviews: 188,
    features: ["High Read Speed", "Reliable Storage", "Water Resistant"]
  }
];

export type Category = {
  name: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: "Chargers",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&h=200&fit=crop&q=80"
  },
  {
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80"
  },
  {
    name: "Batteries",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop&q=80"
  },
  {
    name: "Cables",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop&q=80"
  },
  {
    name: "Adapters",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200&h=200&fit=crop&q=80"
  },
  {
    name: "Storage",
    image: "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=200&h=200&fit=crop&q=80"
  }
];
