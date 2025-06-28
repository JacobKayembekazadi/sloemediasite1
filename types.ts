
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ClientDetails {
  title: string;
  goal: string;
  painPoint: string;
  focus: string[];
  metrics: string[];
}

export type ClientType = 'product' | 'service';
