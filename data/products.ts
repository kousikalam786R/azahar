export type Product = {
  slug: string;
  name: string;
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
    price: "Rs. 250",
    originalPrice: "Rs. 399",
    discount: "37% off",
    description: "High quality fast charging adapter compatible with most smartphones.",
    image: "/products/charger.jpg",
    rating: 4.4,
    reviews: 128,
    features: ["Fast Charging", "Overheat Protection", "Compatible with Android and iPhone"]
  },
  {
    slug: "headphones",
    name: "Wired Headphones",
    price: "Rs. 199",
    originalPrice: "Rs. 349",
    discount: "42% off",
    description: "Clear sound quality headphones for music and calls.",
    image: "/products/headphones.jpg",
    rating: 4.2,
    reviews: 94,
    features: ["High Bass Sound", "Comfortable Fit", "3.5mm Jack"]
  },
  {
    slug: "mobile-battery",
    name: "Mobile Battery",
    price: "Rs. 499",
    originalPrice: "Rs. 699",
    discount: "29% off",
    description: "Reliable replacement battery for daily long-hour smartphone use.",
    image: "/products/battery.jpg",
    rating: 4.1,
    reviews: 61,
    features: ["Long Backup", "Stable Performance", "Safe Charging Cycle"]
  },
  {
    slug: "usb-cable",
    name: "USB Cable",
    price: "Rs. 120",
    originalPrice: "Rs. 220",
    discount: "45% off",
    description: "Durable cable for fast charging and stable data transfer.",
    image: "/products/cable.jpg",
    rating: 4.3,
    reviews: 210,
    features: ["Fast Data Sync", "Strong Build", "Universal USB Support"]
  },
  {
    slug: "power-adapter",
    name: "Power Adapter",
    price: "Rs. 349",
    originalPrice: "Rs. 499",
    discount: "30% off",
    description: "Compact power adapter suitable for phones and small accessories.",
    image: "/products/adapter.jpg",
    rating: 4,
    reviews: 73,
    features: ["Compact Design", "Short Circuit Protection", "Energy Efficient"]
  },
  {
    slug: "memory-card",
    name: "Memory Card",
    price: "Rs. 299",
    originalPrice: "Rs. 449",
    discount: "33% off",
    description: "High-speed memory card for photos, videos, and apps.",
    image: "/products/memory-card.jpg",
    rating: 4.5,
    reviews: 188,
    features: ["High Read Speed", "Reliable Storage", "Water Resistant"]
  }
];
