
export interface ExperienceSession {
  id: number;
  date: string;
  availablePlaces: number;
}

export interface Experience {
  id: number;
  title: string;
  description: string;
  category: string;
  audience: string;
  level: string;
  icon: string;
  duration: number;
  price: number;
  image: string;
  longDescription?: string;
  highlights?: string[];
  sessions: ExperienceSession[];
}
