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
};
