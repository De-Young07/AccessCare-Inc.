import { ServicePillar } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'emergency',
    name: 'Emergency Response & Ambulance',
    tagline: 'Rapid Medical Intervention When Seconds Count',
    shortDesc: 'Connecting patients to emergency medical assistance, rapid ambulance transport, and trauma-ready healthcare facilities.',
    description: 'When urgent medical emergencies strike, AccessCare coordinates rapid on-scene triage, BLS/ALS-equipped ambulance dispatch, and streamlined transfer to accredited regional hospitals and trauma centres.',
    iconName: 'Ambulance',
    colorTheme: {
      primary: '#dc2626',
      light: '#fef2f2',
      border: '#fecaca',
      badge: 'bg-red-50 text-red-700 border-red-200',
      text: 'text-red-600',
      accent: 'border-l-red-500',
      gradient: 'from-red-600 to-rose-600'
    },
    features: [
      '24/7 Dedicated Emergency Dispatch Hotline',
      'GPS-Enabled Rapid Ambulance Coordination',
      'Advanced Life Support (ALS) & Basic Life Support (BLS)',
      'Pre-Hospital Trauma Triage & Hospital Notification',
      'Direct Direct-to-ER Clinical Handover Protocols'
    ],
    stats: [
      { label: 'Coverage', value: '24/7 Response' },
      { label: 'Service', value: 'Ambulance Coordination' },
      { label: 'Scope', value: 'Nationwide' }
    ],
    route: '/emergency',
    actionLabel: 'Request Emergency Dispatch'
  },
  {
    id: 'mobile',
    name: 'Mobile Healthcare & Outreaches',
    tagline: 'Bringing Quality Care Directly to Communities',
    shortDesc: 'Medical outreach programmes, community health screenings, disease prevention, and grassroots clinical care.',
    description: 'Carrying forward the pioneering work of the Accesscare Healthcare Foundation, our mobile clinics travel into rural, peri-urban, and underserved communities to deliver free diagnostics, preventative education, and essential treatment.',
    iconName: 'HeartHandshake',
    colorTheme: {
      primary: '#059669',
      light: '#ecfdf5',
      border: '#a7f3d0',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      text: 'text-emerald-600',
      accent: 'border-l-emerald-500',
      gradient: 'from-emerald-600 to-teal-600'
    },
    features: [
      'Free Community Health Screenings (BP, Blood Glucose, Malaria)',
      'Preventative Education & Sanitation Workshops',
      'Maternal & Child Health Grassroots Outreaches',
      'Free Prescription Medication Dispensing',
      'Referral Pathways for Chronic & Complex Conditions'
    ],
    stats: [
      { label: 'People Reached', value: '10,000+' },
      { label: 'Outreaches', value: '25+' },
      { label: 'Communities', value: '20+' }
    ],
    route: '/mobile-health',
    actionLabel: 'Explore Outreach Programs'
  },
  {
    id: 'telehealth',
    name: 'Telehealth Consultations',
    tagline: 'Qualified Doctors in the Palm of Your Hand',
    shortDesc: 'Connecting patients with board-certified healthcare professionals via secure video, audio, and asynchronous consultations.',
    description: 'Bridge the healthcare distance with certified general practitioners, paediatricians, cardiologists, and mental health counsellors without waiting rooms or travel burdens.',
    iconName: 'Video',
    colorTheme: {
      primary: '#0284c7',
      light: '#f0f9ff',
      border: '#bae6fd',
      badge: 'bg-sky-50 text-sky-700 border-sky-200',
      text: 'text-sky-600',
      accent: 'border-l-sky-500',
      gradient: 'from-sky-600 to-blue-600'
    },
    features: [
      'Same-Day Certified Doctor Consultations',
      'Encrypted HD Video & Low-Bandwidth Audio Calls',
      'Digital Prescriptions & Diagnostic Lab Requests',
      'Post-Consultation Continuity & Follow-Up Tracking',
      'Multi-Language Support (English, Pidgin, Hausa, Yoruba, Igbo)'
    ],
    stats: [
      { label: 'Mode', value: 'Video, Audio & Chat' },
      { label: 'Access', value: 'Licensed Doctors' },
      { label: 'Platform', value: 'Secure & Encrypted' }
    ],
    route: '/telehealth',
    actionLabel: 'Book Doctor Consultation'
  },
  {
    id: 'suredose',
    name: 'SureDose Medication Adherence',
    tagline: 'Your Smart Prescribed Treatment Companion',
    shortDesc: 'Understand prescribed regimens, receive smart reminders, and achieve continuous medication adherence.',
    description: 'Non-adherence is the leading cause of preventable chronic disease relapse. SureDose by AccessCare empowers patients with scheduled SMS/WhatsApp reminders, dosage education, refill alerts, and pharmacist advisory.',
    iconName: 'Pill',
    colorTheme: {
      primary: '#7c3aed',
      light: '#f5f3ff',
      border: '#ddd6fe',
      badge: 'bg-violet-50 text-violet-700 border-violet-200',
      text: 'text-violet-600',
      accent: 'border-l-violet-500',
      gradient: 'from-violet-600 to-indigo-600'
    },
    features: [
      'Smart Automated Reminders (SMS, WhatsApp, Push)',
      'Dosage & Food Interaction Guidance in Plain Language',
      'Pharmacy Refill Tracking & Delivery Sync',
      'Caregiver Alerts for Vulnerable / Elderly Patients',
      'Clinical Adherence Dashboards for Doctors'
    ],
    stats: [
      { label: 'Channels', value: 'WhatsApp & SMS' },
      { label: 'Service', value: 'Medication Reminders' },
      { label: 'Cost', value: 'Free to Patients' }
    ],
    route: '/suredose',
    actionLabel: 'Activate SureDose'
  }
];

export const EMERGENCY_HOTLINE = "07045905262";
export const EMERGENCY_DIRECT_NUMBER = "07045905262";
export const GENERAL_EMAIL = "Accescare.Healthfoundation@gmail.com";
export const PARTNERSHIPS_EMAIL = "Accescare.Healthfoundation@gmail.com";
export const VOLUNTEERS_EMAIL = "Accescare.Healthfoundation@gmail.com";

export const SOCIAL_MEDIA = {
  instagram: { handle: '@AccesscareHealth_Foundation', url: 'https://instagram.com/AccesscareHealth_Foundation' },
  tiktok: { handle: '@Accesscarehealth_', url: 'https://tiktok.com/@Accesscarehealth_' },
  twitter: { handle: '@AccescareHF', url: 'https://x.com/AccescareHF' },
};

