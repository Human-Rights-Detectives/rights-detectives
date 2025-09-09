export interface Mission {
  id: number;
  description: string;
  correctAnswer: string;
  explanation: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  missions: Mission[];
}
