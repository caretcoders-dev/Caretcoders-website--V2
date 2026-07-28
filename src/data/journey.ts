import { Milestone } from '../types';

export interface StoryLevel {
  level: string;
  badge: string;
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  achievement?: string;
  xp?: string;
  bossEncounter?: string;
  type: 'start' | 'side-quest' | 'party' | 'boss' | 'new-quest';
}

export interface PartyMember {
  name: string;
  designation: string;
  education: string[];
  interests: string[];
  funFact: string;
  email: string;
}

export const storyLevelsData: StoryLevel[] = [
  {
    level: 'LEVEL 01',
    badge: 'PRESS START',
    title: 'Caretcoders Initialized',
    date: '23 July 2025',
    description: 'What began as client work soon became something bigger. Amisha and Rahil realized they didn’t want to build software on their own. Instead, they wanted to create a community of young, curious innovators who could work together to solve real-world problems through creativity, critical thinking, and collaboration.',
    achievement: 'Caretcoders Initialized',
    type: 'start'
  },
  {
    level: 'LEVEL 02',
    badge: 'SIDE QUEST',
    title: 'Finding the First Mission',
    subtitle: 'DetailMint Discovery',
    description: 'Before Caretcoders, Rahil worked as an accountant in a car detailing company. Conversations with owners and technicians exposed everyday operational struggles that software could solve. That observation became the first mission: DetailMint. Not an idea born in a meeting room—but from listening to people doing real work.',
    achievement: 'Problem Discovered',
    xp: '+250 XP',
    type: 'side-quest'
  },
  {
    level: 'LEVEL 03',
    badge: 'PARTY ASSEMBLED',
    title: 'The Party Grows',
    subtitle: 'Great adventures aren’t played solo. As the vision grew, so did the team.',
    description: 'Different paths. One mission.',
    achievement: 'The Party Grows',
    type: 'party'
  },
  {
    level: 'LEVEL 04',
    badge: 'BOSS BATTLE',
    title: 'Reality Encounter',
    subtitle: '12 Pilots & Startup India Recognition vs. Market Reality',
    description: 'DetailMint reached MVP stage. Twelve businesses agreed to pilot the platform, and the product earned appreciation through Startup India interactions. Then came the reality check. Funding applications were declined because the market was considered too narrow. At the same time, changes in the automotive industry and market conditions made expansion significantly harder. Instead of forcing a launch, the team chose to pause. Not every battle is won by charging forward. Sometimes the smartest move is to regroup.',
    bossEncounter: 'Reality',
    type: 'boss'
  },
  {
    level: 'LEVEL 05',
    badge: 'NEW QUEST ACCEPTED',
    title: 'Chemical-Reduced Precision Farming',
    subtitle: 'Expanding Vision Beyond Software',
    description: 'Every setback unlocked a new direction. Rather than giving up, Caretcoders expanded its vision beyond software. Today, the team is researching and developing a Chemical-Reduced Precision Farming Initiative, combining technology, research, and innovation to help address one of humanity’s oldest challenges—how to grow more while using fewer chemicals.',
    achievement: 'New Mission Accepted',
    type: 'new-quest'
  }
];

export const partyMembersData: PartyMember[] = [
  {
    name: 'Rahil Shrivas',
    designation: 'Founder & Managing Partner',
    education: [
      'Bachelor of Commerce (B.Com) with Computer Applications',
      'Master of Computer Applications (MCA)'
    ],
    interests: [
      'Motorcycling',
      'Computer Hardware Enthusiast',
      'Coffee Lover'
    ],
    funFact: "Known for being the team’s chatterbox—there’s always a story, idea, or conversation brewing.",
    email: 'rahilshrivas@gmail.com'
  },
  {
    name: 'Amisha Bairagi',
    designation: 'Co-Founder & Partner',
    education: [
      'Bachelor of Technology (B.Tech) – National Institute of Technology (NIT), Jamshedpur'
    ],
    interests: [
      'Vocalist',
      'Qualified Sound Engineer',
      'Chess Player',
      'Avid Reader'
    ],
    funFact: 'Brilliant with ideas, but occasionally a little clumsy—expect the unexpected!',
    email: 'bairagiamisha@gmail.com'
  },
  {
    name: 'Yagyesh Kumar',
    designation: 'Manager',
    education: [
      'Master of Arts (M.A.) in Performing Arts'
    ],
    interests: [
      'Musician',
      'Vocalist',
      'Car Enthusiast'
    ],
    funFact: "The team’s music enthusiast who is always reminding everyone to take care of their back.",
    email: 'yagyeshsahu8989@gmail.com'
  },
  {
    name: 'Nilufer Khatoon',
    designation: 'Full Stack Developer (Backend-Focused)',
    education: [
      'Bachelor of Commerce (B.Com) – Delhi University'
    ],
    interests: [
      'Video Editing',
      'Reading Comics & Manga',
      'Streaming on Twitch',
      'Exploring New Technologies'
    ],
    funFact: 'Can go from laughing to crying in record time.',
    email: 'niluferkatoon44@gmail.com'
  },
  {
    name: 'Arin Mudgal',
    designation: 'AI & ML Engineer (Backend-Focused)',
    education: [
      'Bachelor of Technology (B.Tech) – Lovely Professional University'
    ],
    interests: [
      'Tea & Caffeine',
      'Dancer',
      'loves Camping',
      'Exploring New Technologies'
    ],
    funFact: 'A tea enthusiast with a sharp hairstyle, he starts each day with style and caffeine',
    email: 'arinmudgal.05@gmail.com'
  }
];

export const finalMissionData = {
  quoteQuestion: '"How are these young people solving problems like this?"',
  quoteAnswer: 'Because they never stopped learning.',
  declaration: `Caretcoders isn't trying to become the biggest software company. We're building a generation of engineers, designers, researchers, and creators who refuse to accept "that's how it's always been."`
};

export const milestonesData: Milestone[] = [
  {
    year: '2025',
    quarter: '23 July',
    title: 'Level 01: Caretcoders Initialized',
    description: 'Founded by Amisha Bairagi & Rahil Shrivas as a collaborative community of young innovators to solve real-world problems.',
    type: 'Company',
    completed: true
  },
  {
    year: '2026',
    quarter: 'Side Quest',
    title: 'Level 02: DetailMint Discovered',
    description: 'Born from real floor operational struggles observed while Rahil worked in automotive detailing.',
    type: 'Product',
    completed: true
  },
  {
    year: '2026',
    quarter: 'Party Assembled',
    title: 'Level 03: Team Guild Assembled',
    description: 'Rahil Shrivas, Amisha Bairagi, Yagyesh Kumar, Nilufer Khatoon, and Arin Mudgal form the core team.',
    type: 'Achievement',
    completed: true
  },
  {
    year: '2027',
    quarter: 'Boss Encounter',
    title: 'Level 04: Market Reality Pause',
    description: '12 pilot partners & Startup India appreciation met funding decline. Team chose to regroup strategically.',
    type: 'Company',
    completed: true
  },
  {
    year: '2027-2028',
    quarter: 'New Quest',
    title: 'Level 05: Chemical-Reduced Farming',
    description: 'Pivoted to IoT precision agritech to solve humanity’s challenge: high crop yield with reduced chemicals.',
    type: 'Future',
    completed: false
  }
];

export const visionMission = {
  about: `Caretcoders is a community of young, curious innovators who work together to solve real-world problems through creativity, critical thinking, and collaboration.`,
  vision: `Building a generation of engineers, designers, researchers, and creators who refuse to accept "that's how it's always been."`,
  mission: `To solve real-world challenges—from automotive management to chemical-reduced precision farming—by never stopping learning.`
};

export const roadmapItems = [
  {
    id: 'road-1',
    title: 'Chemical-Reduced Precision Farming IoT Nodes',
    status: 'Active R&D',
    eta: '2027-2028',
    votes: 524,
    desc: 'Combining soil sensors with AI models to deliver the same crop yield with significantly fewer chemical inputs.'
  },
  {
    id: 'road-2',
    title: 'InkSquirel Creator Protection Vault',
    status: 'In Development',
    eta: '2028-2029',
    votes: 418,
    desc: 'Affordable web platform enabling independent creators to validate and pitch original ideas with proof of creation.'
  },
  {
    id: 'road-3',
    title: 'DetailMint Multi-Location Operational Engine',
    status: 'On Strategic Pause',
    eta: '2027 Planned',
    votes: 382,
    desc: 'Streamlining fleet scheduling, material usage, and revenue tracking across automotive care branches.'
  },
  {
    id: 'road-4',
    title: 'Gen Z Open Innovation & Learning Guild',
    status: 'Active',
    eta: 'Ongoing',
    votes: 610,
    desc: 'Mentorship and open project incubation for young creators bridging commerce, music, AI, and code.'
  }
];
