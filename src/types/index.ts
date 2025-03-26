
export type UserRole = 'admin' | 'aliado' | 'escuela';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileComplete: boolean;
  createdAt: string;
}

export interface AdminProfile extends User {
  role: 'admin';
}

export interface AliadoProfile extends User {
  role: 'aliado';
  sector?: string;
  supportType?: string[];
  institutionalDocs?: string[];
  active?: boolean;
}

export interface EscuelaProfile extends User {
  role: 'escuela';
  cct?: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  educationLevel?: string;
}

export type NeedStatus = 'pendiente' | 'en_proceso' | 'atendida';

export interface Need {
  id: string;
  escuelaId: string;
  title: string;
  description: string;
  supportType: string[];
  priority: number;
  evidence?: string[];
  status: NeedStatus;
  createdAt: string;
}

export type SupportStatus = 'planeacion' | 'en_proceso' | 'concluido';

export interface Support {
  id: string;
  needId: string;
  aliadoId: string;
  escuelaId: string;
  timeline?: {
    startDate: string;
    endDate: string;
    milestones: {
      date: string;
      description: string;
    }[];
  };
  impact?: string;
  evidence?: string[];
  status: SupportStatus;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}
