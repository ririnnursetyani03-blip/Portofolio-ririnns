
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
