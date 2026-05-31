import a1 from "@/assets/agent-1.jpg";
import a2 from "@/assets/agent-2.jpg";
import a3 from "@/assets/agent-3.jpg";

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
};

export const agents: Agent[] = [
  {
    id: "isabella-moreau",
    name: "Isabella Moreau",
    title: "Senior Partner, Europe",
    image: a1,
    bio: "With 18 years brokering trophy estates from the Côte d'Azur to Lake Como, Isabella has closed over $1.4B in private transactions.",
    sales: "$1.4B+ closed",
    languages: ["English", "French", "Italian"],
    email: "isabella@maison.estate",
    phone: "+33 1 42 60 30 30",
  },
  {
    id: "alexander-hayes",
    name: "Alexander Hayes",
    title: "Managing Director, Americas",
    image: a2,
    bio: "Alexander leads our North American practice, specializing in ultra-prime new development and architecturally significant residences.",
    sales: "$980M+ closed",
    languages: ["English", "Spanish"],
    email: "alexander@maison.estate",
    phone: "+1 310 555 0142",
  },
  {
    id: "sofia-castellan",
    name: "Sofia Castellan",
    title: "Director, Private Clients",
    image: a3,
    bio: "A trusted advisor to family offices and private collectors, Sofia curates discreet acquisitions across the most sought-after enclaves worldwide.",
    sales: "$760M+ closed",
    languages: ["English", "Italian", "Portuguese"],
    email: "sofia@maison.estate",
    phone: "+39 02 8050 5050",
  },
];
