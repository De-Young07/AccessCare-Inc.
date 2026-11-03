export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  label: string;
  sublabel: string;
  icon: string;
}

export const PLATFORM_STATS: StatItem[] = [
  {
    id: 'people-reached',
    value: '10,000+',
    numericValue: 10000,
    label: 'People Reached',
    sublabel: 'Across rural and underserved communities in Nigeria',
    icon: 'Users'
  },
  {
    id: 'outreaches-conducted',
    value: '25+',
    numericValue: 25,
    label: 'Outreaches',
    sublabel: 'Community medical outreaches organized and executed',
    icon: 'MapPin'
  },
  {
    id: 'communities-served',
    value: '20+',
    numericValue: 20,
    label: 'Communities',
    sublabel: 'Distinct communities served across multiple states',
    icon: 'Activity'
  },
  {
    id: 'volunteers',
    value: '200+',
    numericValue: 200,
    label: 'Volunteers',
    sublabel: 'Doctors, nurses, and health workers who have volunteered',
    icon: 'Award'
  }
];

export const CORE_PRINCIPLES = [
  {
    title: "Healthcare As A Fundamental Right",
    description: "No human being should suffer or succumb to a preventable illness simply because of where they reside or what they earn.",
    icon: "ShieldCheck"
  },
  {
    title: "Rapid Emergency Interconnectivity",
    description: "Bridging the critical gap between patients, emergency responders, and accredited trauma facilities when every second determines survival.",
    icon: "Zap"
  },
  {
    title: "Care Beyond Hospital Walls",
    description: "Extending medical excellence directly into homes, schools, markets, and rural clinics via mobile outreaches and secure telehealth.",
    icon: "HeartHandshake"
  },
  {
    title: "Continuous Treatment Adherence",
    description: "Diagnostics alone do not cure; sustained guidance, medication adherence through SureDose, and regular follow-ups prevent chronic relapse.",
    icon: "Sparkles"
  }
];
