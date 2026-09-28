
export const revenue = {
  lede: 'We’ve sold naming rights, jersey fronts, suites, and season tickets from the team side. Now we bring that to your side of the table.',
  blocks: [
    { title: 'Naming rights + jersey partnerships', body: 'Stadium naming rights for the Philadelphia Union and Orlando City SC, and MLS’s two longest-running jersey partnerships.' },
    { title: 'Sponsorship strategy', body: 'Hundreds of millions in partnerships negotiated. We know what assets are worth and how to hit agreed KPIs.' },
    { title: 'Ticket sales', body: 'Pricing, group sales, and digital campaigns built to sell more seats at better prices.' },
    { title: 'Premium sales', body: 'Suites, clubs, and experiential spaces, sold and renewed.' },
  ],
  premium: [
    ['premium-suites', 'Private Suites'],
    ['premium-captains', 'Captain’s Club'],
    ['premium-loge', 'Loge Boxes'],
    ['premium-terraces', 'Studio Terraces'],
  ],
} as const;

export const sixthMan = {
  standfirst: 'The autonomous revenue teammate for sports.',
  lede: 'Built on your Fan 360 data and pointed at revenue.',
  description: 'Sixth Man reads your fan data, decides the next best action, and contacts the fan without waiting for a rep.',
  partner: 'Quantum brings Sixth Man to clubs, venues, and leagues in partnership with Purveyor Sports, the data and AI company that built it.',
  points: [
    { title: 'No setup required', body: 'Ships preloaded with sports-specific playbooks.' },
    { title: 'Native to your entire database', body: 'Constantly evaluating your database for signals related to revenue opportunities.' },
    { title: 'Automated outreach', body: 'It takes the action on the signals it identifies, without waiting for a rep.' },
    { title: 'Revenue outcomes, not meetings booked', body: 'Measured on revenue generated, the way your team is.' },
    { title: 'The software disappears', body: 'Vertically integrated into your current stack: Slack, email, and your CRM.' },
  ],
  purveyorUrl: 'https://www.purveyorsports.com/sixth-man',
} as const;

export const talent = {
  lede: 'Great people make great organizations. We find them, develop them, and stay with them after the start date.',
  blocks: [
    { title: 'C-suite + revenue leaders', body: 'Executive searches for presidents, CROs, and the revenue leaders under them.' },
    { title: 'Leadership development', body: 'Management training built from your own managers’ input, virtual or in person.' },
    { title: 'Sales + service training', body: 'Practical, repeatable tools for ticket sales and service teams.' },
  ],
  placements: 'Recent senior placements include FC Cincinnati, NJ/NY Gotham FC, Arnold Palmer Group, Fortress, and Houston Dynamo FC.',
} as const;

export const advisory = {
  lede: 'We build and monetize the next generation of sports properties: expansion teams, new stadiums, and the commercial plan that pays for them.',
  blocks: [
    { title: 'Expansion teams', body: 'Orlando City SC, Nashville SC, and Inter Miami CF all launched with Quantum principals on staff.' },
    { title: 'Stadium development', body: 'Preview centers, naming rights, access control, and concessions, planned alongside the building.' },
    { title: 'Commercial strategy', body: 'An outside read on the whole business, or an extension of your sales and marketing team.' },
  ],
} as const;

export const about = {
  intro: 'Quantum SEG helps teams, venues, universities, and brands maximize commercial growth through partnerships, strategy, and executive leadership.',
  body: [
    'We’ve lived the sports and entertainment business for over 25 years, running ticketing, partnerships, and people for clubs across MLS, the NFL, NWSL, USL, and beyond.',
    'Backed by an advisory board of industry all-stars, we bring the right blend of knowledge, insight, and action to the industry’s most pressing issues.',
  ],
} as const;
