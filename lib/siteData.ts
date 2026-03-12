export const business = {
  name: "Ashique Digital Service Center",
  phoneDisplay: "+91 919521117176",
  phoneRaw: "919521117176",
  whatsappNumber: "919521117176",
  address: "Main Road, Near Bus Stand, Your City, India",
  facebookUrl: "https://facebook.com/",
  instagramUrl: "https://instagram.com/",
  mapEmbedUrl:
    "https://www.google.com/maps?q=22.5726,88.3639&z=15&output=embed"
};

export const serviceList = [
  {
    title: "Fino Payment Bank BC",
    description: "Cash deposit, withdrawal, account opening and banking support.",
    whatsappMessage: "I want information about Fino Payment Bank BC service."
  },
  {
    title: "PAN Card Application",
    description: "New PAN application, correction and status assistance.",
    whatsappMessage: "I want information about PAN Card service."
  },
  {
    title: "Driving Licence Services",
    description: "Learner and permanent licence support with form assistance.",
    whatsappMessage: "I want information about Driving Licence service."
  },
  {
    title: "Aadhaar Related Services",
    description: "Aadhaar update guidance, linking and document support.",
    whatsappMessage: "I want information about Aadhaar related service."
  },
  {
    title: "Online Form Fillup",
    description: "Fast and accurate online application form submission.",
    whatsappMessage: "I want information about Online Form Fillup service."
  },
  {
    title: "Money Transfer",
    description: "Secure domestic money transfer with instant processing.",
    whatsappMessage: "I want information about Money Transfer service."
  },
  {
    title: "Insurance Services",
    description: "Insurance premium support and policy assistance.",
    whatsappMessage: "I want information about Insurance service."
  },
  {
    title: "Electricity Bill Payment",
    description: "Quick electricity and utility bill payment support.",
    whatsappMessage: "I want information about Electricity Bill Payment service."
  }
];

export const whatsappUrl = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
