export interface MenuItem {
  icon: React.FC<{ size?: number }>;
  label: string;
  active?: boolean;
}

export interface IndustryData {
  name: string;
  value: number;
  color: string;
}

export interface PortfolioItem {
  asset: string;
  industry: string;
  country: string;
  tev: string;
  equityValue: string;
  ltmRevenue: string;
  ltmEbitda: string;
  totalDebt: string;
  netDebt: string;
}

export interface MapViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

export interface Deal {
  id?: string;
  userId: string;
  name: string;
  stage: string;
  status: string;
  lastActivity: string;
  dealQuality?: string;
  dealType?: string;
  industry?: string;
  subIndustry?: string;
  dealSize?: number;
  ebitda?: number;
  revenue?: number;
  description?: string;
  headquarters?: string;
  foundedYear?: string;
  employees?: number;
  website?: string;
  contactName?: string;
  contactEmail?: string;
  tev?: number;
  tevEbitda?: number;
  criteria?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id?: string;
  userId: string;
  dealId: string;
  date: string;
  type: string;
  participants: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}