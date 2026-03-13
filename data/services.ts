export type Service = {
  slug: string;
  title: string;
  description: string;
  price: string;
  time: string;
  documents: string[];
};

export const services: Service[] = [
  {
    slug: "fino-banking",
    title: "Fino Payment Bank BC",
    description: "Cash deposit, withdrawal, account opening and banking support.",
    price: "₹50-₹200",
    time: "Same Day",
    documents: ["Aadhaar Card", "PAN Card", "Mobile Number"]
  },
  {
    slug: "pan-card",
    title: "PAN Card Application",
    description: "We help you apply for a new PAN card quickly and easily.",
    price: "₹120",
    time: "7-10 Working Days",
    documents: ["Aadhaar Card", "Passport Size Photo", "Mobile Number"]
  },
  {
    slug: "driving-licence",
    title: "Driving Licence Service",
    description: "Assistance for applying or updating your driving licence.",
    price: "₹300",
    time: "10-15 Working Days",
    documents: ["Aadhaar Card", "Learner Licence", "Passport Photo"]
  },
  {
    slug: "aadhaar-services",
    title: "Aadhaar Related Services",
    description: "Aadhaar update guidance, linking and document support.",
    price: "₹100",
    time: "3-7 Working Days",
    documents: ["Aadhaar Card", "Mobile Number", "Address Proof"]
  },
  {
    slug: "online-form",
    title: "Online Form Fillup",
    description: "Fast and accurate online application form submission.",
    price: "₹50",
    time: "Same Day",
    documents: ["Valid ID Proof", "Required Form Details", "Mobile Number"]
  },
  {
    slug: "money-transfer",
    title: "Money Transfer Service",
    description: "Send money instantly across India with secure transfer.",
    price: "₹50 per transaction",
    time: "Instant",
    documents: ["Aadhaar Card", "Mobile Number"]
  },
  {
    slug: "insurance",
    title: "Insurance Services",
    description: "Insurance premium support and policy assistance.",
    price: "As per policy",
    time: "1-3 Working Days",
    documents: ["Aadhaar Card", "PAN Card", "Existing Policy (if any)"]
  },
  {
    slug: "electricity-bill",
    title: "Electricity Bill Payment",
    description: "Quick electricity and utility bill payment support.",
    price: "₹20 per bill",
    time: "Instant",
    documents: ["Consumer Number", "Mobile Number"]
  }
];
