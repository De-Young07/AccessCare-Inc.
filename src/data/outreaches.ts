export interface Outreach {
  id: string;
  title: string;
  year: number;
  beneficiaries: string;
  location: string;
  tag: string;
  description: string;
  photo: string;
}

export const PAST_OUTREACHES: Outreach[] = [
  {
    id: 'osogbo-2024',
    title: 'Osogbo Medical Outreach',
    year: 2024,
    beneficiaries: '350+',
    location: 'Nigeria',
    tag: 'Community',
    description: 'BP screening, blood sugar testing, malaria awareness and free consultations.',
    photo: './assets/outreach-osogbo-CrFzoCES.jpg'
  },
  {
    id: 'gambari-2024',
    title: 'Gambari Medical Outreach',
    year: 2024,
    beneficiaries: '280+',
    location: 'Nigeria',
    tag: 'On-Site Team',
    description: 'Health education, screenings and basic preventive care for the community.',
    photo: './assets/outreach-gambari-D2kJndY_.jpg'
  },
  {
    id: 'tanke-union-2025',
    title: 'Tanke Outreach × Union Bank',
    year: 2025,
    beneficiaries: '500+',
    location: 'Nigeria',
    tag: 'Tanke × Union Bank',
    description: 'Partnership outreach with Union Bank — screening, drugs and consultation.',
    photo: './assets/outreach-tanke-union-Bot_mbBb.jpg'
  },
  {
    id: 'unilorin-su-2025',
    title: 'University of Ilorin × Student Union',
    year: 2025,
    beneficiaries: '600+',
    location: 'Nigeria',
    tag: 'Faculty Engagement',
    description: 'Campus-wide medical outreach with the Student Union — screening and education.',
    photo: './assets/outreach-unilorin-su-PZ8sIFKO.jpg'
  },
  {
    id: 'unilorin-chs-2025',
    title: 'UNILORIN College of Health Science',
    year: 2025,
    beneficiaries: '400+',
    location: 'Nigeria',
    tag: 'Health Talks',
    description: 'Health talks, BP and blood sugar checks for students and staff.',
    photo: './assets/outreach-unilorin-chs-vwdh41Mh.jpg'
  },
  {
    id: 'unilorin-agric-2025',
    title: 'UNILORIN Faculty of Agriculture',
    year: 2025,
    beneficiaries: '300+',
    location: 'Nigeria',
    tag: 'UNILORIN — Agric',
    description: 'Free screening and consultations for students and faculty members.',
    photo: './assets/outreach-unilorin-agric-kWNNp8Z_.jpg'
  },
  {
    id: 'shao-2025',
    title: 'Shao Medical Outreach',
    year: 2025,
    beneficiaries: '450+',
    location: 'Nigeria',
    tag: 'Care Team',
    description: 'Care for the elderly, free drugs, screening and community health education.',
    photo: './assets/outreach-shao-BWy0HMKg.jpg'
  },
  {
    id: 'tanke-rotaract-2025',
    title: 'Tanke × Rotaract Club',
    year: 2025,
    beneficiaries: '380+',
    location: 'Nigeria',
    tag: 'Tanke Partners',
    description: 'Partnership outreach with the Rotaract Club — screenings and group health drive.',
    photo: './assets/outreach-tanke-rotaract-cU7zKZ2e.jpg'
  }
];

