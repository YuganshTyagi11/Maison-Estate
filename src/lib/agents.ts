export type Agent = {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  sales: string;
  languages: string[];
  email: string;
  phone: string;
  specialization: string;
};

export const agents: Agent[] = [
  {
    id: "rajesh-sharma",
    name: "Rajesh Sharma",
    title: "Senior Partner, North India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face",
    bio: "With 20 years of experience in ultra-luxury real estate across Delhi NCR, Jaipur, and Chandigarh, Rajesh has facilitated over ₹3,200 Cr in private transactions. His network of industrialists and business families is unmatched.",
    sales: "₹3,200 Cr+ closed",
    languages: ["Hindi", "English", "Punjabi"],
    email: "rajesh@maisonestate.in",
    phone: "+91 98101 23456",
    specialization: "Lutyens Delhi, Gurugram Ultra-Luxury",
  },
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    title: "Managing Director, West India",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=750&fit=crop&crop=face",
    bio: "Priya leads our Mumbai and Pune practice, specializing in sea-facing penthouses, heritage bungalows, and luxury developments in South Mumbai. Former investment banker at Goldman Sachs.",
    sales: "₹4,500 Cr+ closed",
    languages: ["Hindi", "English", "Marathi", "Gujarati"],
    email: "priya@maisonestate.in",
    phone: "+91 98200 34567",
    specialization: "South Mumbai, Bandra, Juhu",
  },
  {
    id: "arjun-kapoor",
    name: "Arjun Kapoor",
    title: "Director, South India & Goa",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face",
    bio: "Arjun manages our Bangalore, Hyderabad, Chennai, and Goa portfolios. A trusted advisor to tech founders and NRIs, he specializes in heritage properties and modern smart homes.",
    sales: "₹2,800 Cr+ closed",
    languages: ["Hindi", "English", "Kannada", "Tamil"],
    email: "arjun@maisonestate.in",
    phone: "+91 98450 45678",
    specialization: "Bangalore, Goa Heritage, Hyderabad",
  },
];
