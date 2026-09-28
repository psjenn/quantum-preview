export const site = {
  name: 'Quantum Sports + Entertainment Group',
  short: 'Quantum SEG',
  title: 'Quantum Sports + Entertainment Group | Operators, not advisors',
  description:
    'Quantum SEG helps teams, venues, universities, and brands maximize commercial growth through partnerships, strategy, and executive leadership.',
  url: 'https://quantumseg.com',
  founded: 'Founded in 2022 in Orlando, Florida.',
  motto: 'Take pride in your work, do the right thing and treat people with respect. That’s the Quantum way.',
  email: '', 
  formEndpoint: '',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/quantum-seg' },
    { label: 'Instagram', href: 'https://www.instagram.com/quantum_seg' },
    { label: 'X', href: 'https://x.com/quantum_seg' },
  ],
} as const;

export const nav = [
  { href: '/revenue-solutions', label: 'Revenue' },
  { href: '/sixth-man', label: 'Sixth Man' },
  { href: '/talent', label: 'Talent' },
  { href: '/advisory', label: 'Advisory' },
  { href: '/work', label: 'Our work' },
  { href: '/about', label: 'About' },
] as const;

export const intents = [
  { id: 'strategy', label: 'Schedule a strategy call', desc: 'Talk through a revenue, venue, or organizational challenge with a principal.' },
  { id: 'partnerships', label: 'Explore partnership opportunities', desc: 'Naming rights, jersey deals, and category partnerships.' },
  { id: 'sponsorship', label: 'Request a sponsorship consultation', desc: 'Brand-side strategy, deal evaluation, and negotiation.' },
  { id: 'talent', label: 'Hire executive talent', desc: 'C-suite and revenue leadership searches, start to finish.' },
  { id: 'insights', label: 'Download industry insights', desc: 'Our read on where sports revenue is heading.' },
] as const;

export type IntentId = (typeof intents)[number]['id'];

export const hero = {
  title: 'Operators, not advisors.',
  sub: 'Revenue strategy + talent solutions for modern sports organizations.',
  note: '25+ years inside teams, not just consultants.',
} as const;

export const facts = [
  { value: '25+', label: 'years inside teams and venues' },
  { value: '11', label: 'stadium and arena builds and redevelopments' },
  { value: '$1B+', label: 'in stadium and arena projects' },
] as const;

export const attendance = {
  title: 'Record crowds',
  sub: 'Club and inaugural-season attendance records set with Quantum principals leading the commercial team.',
  rows: [
    { club: 'Orlando City SC', note: '2015 MLS inaugural home opener', value: 62510 },
    { club: 'Nashville SC', note: '2020 MLS inaugural home opener', value: 59069 },
    { club: 'Orlando Pride', note: 'April 23, 2016 club record', value: 23403 },
    { club: 'Louisville City FC', note: 'August 13, 2022, Lynn Family Stadium record', value: 14673 },
    { club: 'Racing Louisville FC', note: 'April 20, 2024 club record', value: 11365 },
  ],
  footnote: 'Orlando City and Nashville SC drew two of the four largest inaugural home openers in MLS history.',
} as const;

export const results = [
  { value: '+777%', label: 'Group sales revenue', who: 'Las Vegas Lights FC, 2024' },
  { value: '+25%', label: 'Partnership revenue in six months', who: 'Hartford Athletic' },
  { value: '23,000', label: 'Season tickets sold for opening day', who: 'Nashville SC' },
  { value: '100%', label: 'Premium seating sold out', who: 'Geodis Park' },
] as const;

export interface Service {
  slug: string;
  name: string;
  line: string;
  items: readonly string[];
  photo?: string;
}

export const services: Service[] = [
  {
    slug: 'revenue-solutions',
    photo: 'fill-the-bowl',
    name: 'Revenue Solutions',
    line: 'Naming rights, jersey partnerships, sponsorship strategy, and ticket and premium sales, run by people who have closed them.',
    items: ['Naming rights + jersey partnerships', 'Sponsorship strategy', 'Ticket sales', 'Premium sales'],
  },
  {
    slug: 'sixth-man',
    name: 'Sixth Man',
    line: 'The autonomous revenue teammate for sports. It reads your fan data, decides the next best action, and reaches the fan without waiting for a rep.',
    items: ['Built on your Fan 360 data', 'Sports-specific playbooks', 'Measured on revenue, not meetings'],
  },
  {
    slug: 'talent',
    photo: 'training-usf',
    name: 'Talent',
    line: 'Great people make great organizations. We find them, develop them, and help them succeed in the seat.',
    items: ['C-suite + revenue leaders', 'Leadership development', 'Sales + service training'],
  },
  {
    slug: 'advisory',
    photo: 'geodis-park',
    name: 'Advisory Services',
    line: 'Expansion teams, new stadiums, and commercial strategy, from the people who have opened them.',
    items: ['Expansion teams', 'Stadium development', 'Commercial strategy'],
  },
];

export const stadiums = [
  { year: 2010, venue: 'Subaru Park', team: 'Philadelphia Union', photo: 'subaru-park' },
  { year: 2017, venue: 'Inter&Co Stadium', team: 'Orlando City SC + Orlando Pride', photo: 'interco-stadium' },
  { year: 2020, venue: 'Chase Stadium', team: 'Inter Miami CF', photo: 'chase-stadium' },
  { year: 2022, venue: 'Geodis Park', team: 'Nashville SC', photo: 'geodis-park' },
] as const;

export const quotes = {
  portland: {
    body: 'Quantum’s approach, led by Chris Gallagher, created a truly personalized leadership development experience that addressed our specific organizational needs. The content was compelling and engaging, leading to improved participation and retention than we experienced in previous trainings with different firms.',
    name: 'Joe Cote',
    role: 'Chief Revenue Officer, Portland Timbers',
  },
  louisville: {
    body: 'Working with Quantum Sports + Entertainment Group has been transformational for Louisville City FC and Racing Louisville FC. Quantum doesn’t just deliver a seminar; they are a genuine partner in our success.',
    name: 'James O’Connor',
    role: 'President, Louisville City FC + Racing Louisville FC',
  },
  usf: {
    body: 'Their training went beyond theory, offering proven techniques for prospecting and closing while reinforcing the high-performance habits necessary for success. I highly recommend Quantum to any organization looking to elevate their sales operation and culture.',
    name: 'Tom Veit',
    role: 'Chief Commercial Officer, University of South Florida Athletics',
  },
} as const;

export interface Principal {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  highlights: readonly string[];
}

export const principals: Principal[] = [
  {
    slug: 'chris-gallagher',
    name: 'Chris Gallagher',
    role: 'President',
    photo: 'chris-gallagher',
    bio: 'Chris started in ticket sales with the Panthers, Yankees, Browns, and Dolphins, then spent a decade opening MLS clubs. He sold out Orlando City’s first match and led Nashville SC into Geodis Park.',
    highlights: ['2015 MLS Ticket Sales Executive of the Year', '2022 VenuesNow All-Star', 'Executive in Residence, UCF DeVos Sport Business Management'],
  },
  {
    slug: 'rob-parker',
    name: 'Rob Parker',
    role: 'Chief Commercial Officer',
    photo: 'rob-parker',
    bio: 'Rob built the partnership businesses at the Philadelphia Union and Orlando City SC from scratch. He has also led corporate partnerships for MLS and revenue for Haslam Sports Group.',
    highlights: ['MLS’s two longest-running jersey partnerships', 'MLS Corporate Sales Executive of the Year', 'MLS Sponsorship Activation Award'],
  },
  {
    slug: 'dennis-sprenkle',
    name: 'Dennis Sprenkle',
    role: 'Chief Administrative Officer',
    photo: 'dennis-sprenkle',
    bio: 'Dennis brings two decades of human capital management to sports. He ran HR for Orlando City SC and built Inter Miami CF’s people functions before its first match.',
    highlights: ['Director of Workforce + HR, FIFA World Cup 2026'],
  },
];

export const advisors = [
  { name: 'Matt Bleakley', role: 'Division Vice President', org: 'Whiting-Turner Contracting Co.' },
  { name: 'Forrest Eber', role: 'Co-Managing Partner', org: 'Intersection Ventures' },
  { name: 'Jim Frevola', role: 'President, Business', org: 'AFC Bournemouth' },
  { name: 'Clay Luter', role: 'EVP + Co-Head of Sports', org: 'Ticketmaster' },
  { name: 'Jacklyne Ramos', role: 'Director, Public Relations', org: 'Visit Orlando' },
  { name: 'Jim Ross', role: 'VP, Business Development, Global Sponsorships', org: 'Fiserv' },
  { name: 'John Shumate', role: 'SVP, Client Consulting', org: 'GMR Marketing' },
  { name: 'Mark Simmons', role: 'Director, Data + Insights', org: 'Heirloom' },
  { name: 'Kimberly Sowers', role: 'Vice President', org: 'RBC Wealth Management' },
  { name: 'Teresa Tatlonghari', role: 'Chief Marketing + Communications Officer', org: 'San Diego Wave' },
] as const;

export interface ClientGroup {
  league: string;
  teams: readonly (readonly [slug: string, name: string])[];
}

export const clientGroups: ClientGroup[] = [
  {
    league: 'MLS',
    teams: [
      ['nashville-sc', 'Nashville SC'],
      ['orlando-city', 'Orlando City SC'],
      ['inter-miami', 'Inter Miami CF'],
      ['philadelphia-union', 'Philadelphia Union'],
      ['columbus-crew', 'Columbus Crew'],
      ['fc-cincinnati', 'FC Cincinnati'],
      ['portland-timbers', 'Portland Timbers'],
      ['houston-dynamo', 'Houston Dynamo FC'],
    ],
  },
  {
    league: 'USL',
    teams: [
      ['louisville-city', 'Louisville City FC'],
      ['las-vegas-lights', 'Las Vegas Lights FC'],
      ['hartford-athletic', 'Hartford Athletic'],
      ['rhode-island-fc', 'Rhode Island FC'],
      ['colorado-springs-switchbacks', 'Colorado Springs Switchbacks FC'],
      ['lexington-sc', 'Lexington SC'],
      ['miami-fc', 'Miami FC'],
      ['portland-hearts-of-pine', 'Portland Hearts of Pine'],
    ],
  },
  {
    league: 'NFL',
    teams: [
      ['jacksonville-jaguars', 'Jacksonville Jaguars'],
      ['miami-dolphins', 'Miami Dolphins'],
      ['cleveland-browns', 'Cleveland Browns'],
      ['new-orleans-saints', 'New Orleans Saints'],
      ['seattle-seahawks', 'Seattle Seahawks'],
    ],
  },
  {
    league: 'MLB, NBA, NHL + more',
    teams: [
      ['new-york-yankees', 'New York Yankees'],
      ['orlando-magic', 'Orlando Magic'],
      ['tampa-bay-lightning', 'Tampa Bay Lightning'],
      ['florida-panthers', 'Florida Panthers'],
      ['orlando-valkyries', 'Orlando Valkyries'],
      ['florida-everblades', 'Florida Everblades'],
      ['orlando-solar-bears', 'Orlando Solar Bears'],
    ],
  },
  {
    league: 'NWSL',
    teams: [
      ['orlando-pride', 'Orlando Pride'],
      ['racing-louisville', 'Racing Louisville FC'],
      ['houston-dash', 'Houston Dash'],
    ],
  },
  {
    league: 'College',
    teams: [
      ['ucf', 'UCF'],
      ['usf', 'University of South Florida'],
    ],
  },
  {
    league: 'Global',
    teams: [
      ['fifa-world-cup-26', 'FIFA World Cup 26'],
      ['afc-bournemouth', 'AFC Bournemouth'],
    ],
  },
];

export interface CaseStudy {
  slug: string;
  client: string;
  logo: string;
  kind: 'Revenue' | 'Talent' | 'Advisory' | 'Partnerships';
  title: string;
  summary: string;
  results: readonly string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'nashville-sc',
    client: 'Nashville SC + Geodis Park',
    logo: 'nashville-sc',
    kind: 'Advisory',
    title: 'Opening the largest soccer-specific stadium in North America',
    summary: 'Chris Gallagher led the commercial opening of Geodis Park, from preview center to naming rights.',
    results: [
      '23,000 season tickets sold',
      '100% of premium seating sold out, an MLS revenue record',
      '50%+ of season tickets sold digitally, 3x the industry average',
    ],
  },
  {
    slug: 'las-vegas-lights',
    client: 'Las Vegas Lights FC',
    logo: 'las-vegas-lights',
    kind: 'Revenue',
    title: 'Rebuilding a ticketing operation in one season',
    summary: 'Pricing, group sales, and comp policy, reworked for 2024.',
    results: ['Ticket revenue up 40%', 'Group sales revenue up 777%', 'Complimentary tickets down 52%'],
  },
  {
    slug: 'houston-dynamo',
    client: 'Houston Dynamo FC',
    logo: 'houston-dynamo',
    kind: 'Talent',
    title: 'Hiring a Chief Revenue Officer',
    summary: 'A nationwide search that brought Nicolò Zini to Houston as CRO in January 2025.',
    results: [],
  },
  {
    slug: 'jacksonville-jaguars',
    client: 'Jacksonville Jaguars',
    logo: 'jacksonville-jaguars',
    kind: 'Talent',
    // TODO: scope and results from Quantum
    title: 'Staffing the Stadium of the Future',
    summary: 'Building the ticket sales team for the Jaguars’ redeveloped stadium.',
    results: [],
  },
  {
    slug: 'hartford-athletic',
    client: 'Hartford Athletic',
    logo: 'hartford-athletic',
    kind: 'Partnerships',
    title: 'Partnership sales consulting',
    summary: 'A six-month engagement with the USL club’s partnership team.',
    results: ['Partnership revenue up 25%'],
  },
  {
    slug: 'mls-partnerships',
    client: 'Orlando City SC + Philadelphia Union',
    logo: 'philadelphia-union',
    kind: 'Partnerships',
    title: 'Jersey and naming rights partnerships',
    summary: 'Stadium naming rights for both clubs, and MLS’s two longest-running jersey partnerships.',
    results: [],
  },
];
