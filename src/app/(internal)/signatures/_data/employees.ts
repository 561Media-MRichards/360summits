export interface Employee {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export const employees: Record<string, Employee> = {
  "michael-richards": {
    slug: "michael-richards",
    name: "Michael Richards",
    title: "Chief Revenue Officer",
    phone: "786.554.6481",
    email: "michael@360summits.com",
  },
  "george-shephard": {
    slug: "george-shephard",
    name: "George Shephard",
    title: "Founder",
    phone: "310.908.6961",
    email: "george@360summits.com",
  },
  "daniel-giordano": {
    slug: "daniel-giordano",
    name: "Daniel Giordano",
    title: "Chief Executive Officer",
    phone: "561.703.7604",
    email: "dan@360summits.com",
  },
};
