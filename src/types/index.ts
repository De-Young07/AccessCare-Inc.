export type ServicePillarId = 'emergency' | 'mobile' | 'telehealth' | 'suredose';

export interface ServicePillar {
  id: ServicePillarId;
  name: string;
  tagline: string;
  description: string;
  shortDesc: string;
  iconName: string;
  colorTheme: {
    primary: string;
    light: string;
    border: string;
    badge: string;
    text: string;
    accent: string;
    gradient: string;
  };
  features: string[];
  stats: { label: string; value: string }[];
  route: string;
  actionLabel: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  image: string;
  department: 'Leadership' | 'Clinical' | 'Outreach' | 'Operations';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  community: string;
  quote: string;
  type: 'patient' | 'volunteer' | 'community_leader';
  rating?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category: 'Prevention' | 'Cardiology' | 'Diabetes' | 'Public Health';
  readTime: string;
  author: string;
  date: string;
  image: string;
}

export interface EmergencyRequest {
  patientName: string;
  contactPhone: string;
  alternatePhone?: string;
  locationAddress: string;
  cityOrState: string;
  emergencyType: 'trauma' | 'cardiac' | 'respiratory' | 'maternal' | 'pediatric' | 'general';
  severity: 'critical' | 'urgent' | 'standard';
  notes?: string;
  requiresAmbulance: boolean;
}

export interface TelehealthBooking {
  patientName: string;
  email: string;
  phone: string;
  specialty: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  consultationType: 'video' | 'phone' | 'chat';
}

export interface VolunteerSubmission {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  state: string;
  skills: string[];
  availability: string;
  notes: string;
}

export interface PartnerSubmission {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  partnershipType: 'sponsorship' | 'supplies' | 'clinical' | 'logistics' | 'advocacy';
  outreachLocation?: string;
  message: string;
}

