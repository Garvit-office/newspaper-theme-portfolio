/**
 * All portfolio content lives here.
 *
 * Placeholders: any text inside [square brackets] is rendered with a dashed
 * highlight so it's easy to spot. Replace it with real content and the
 * highlight disappears automatically. Visit any page with ?clean to preview
 * without highlights.
 *
 * Images: drop files into /public/images and set the `image` field
 * (e.g. "/images/portrait.jpg"). Until then a labelled placeholder is shown.
 */

/** tone "halftone" renders a photo in black & white with a printed-dot texture, collage style. */
export type Img = { image?: string; label: string; alt?: string; tone?: "halftone" };

export type CaseStudy = {
  slug: string;
  no: string;
  title: string;
  client: string;
  year: string;
  duration: string;
  channels: string;
  summary: string;
  challenge: string;
  approach: string;
  execution: string[];
  results: { value: string; label: string }[];
  learnings: string;
  cover: Img;
  gallery: Img[];
};

export const site = {
  name: "Sushama Ghosh",
  role: "Digital Marketing & Content Strategist",
  established: "2009",
  description:
    "Sushama Ghosh is a Digital Marketing & Content Strategist with 10+ years across marketing analytics, Meta Ads, lead generation, social media and project delivery.",

  /** Résumé summary, shown on the front page. */
  summary: [
    "Marketing and Project Management professional with 10+ years of experience spanning marketing analytics, project execution, visual communication and stakeholder management.",
    "Skilled in translating customer and campaign insights into effective marketing initiatives, with hands-on experience in Meta Ads, lead generation and social media campaigns. Currently building deeper expertise in digital and performance marketing through professional certifications.",
  ],
  portrait: { image: "/images/portrait.png", label: "Portrait", alt: "Portrait of Sushama Ghosh", tone: "halftone" } as Img,
  caption: "The strategist behind the campaigns, and the creator behind @sush_journal.",

  contact: {
    email: "sushama.ghosh0929@gmail.com",
    phone: "+91 97391 37264",
    phoneHref: "+919739137264",
    linkedin: { label: "linkedin.com/in/sushama-ghosh", href: "https://www.linkedin.com/in/sushama-ghosh-6322545b" },
    instagram: { label: "@sush_journal", href: "https://www.instagram.com/sush_journal" },
    availability: "freelance digital marketing projects, collaborations and full-time roles",
  },

  /** Put the PDF in /public with this exact name to enable the download buttons. */
  resumeFile: "Sushama-Ghosh-Resume.pdf",

  /** Rolling "latest news" ticker under the masthead. */
  headlines: [
    "Now booking freelance digital marketing projects",
    "120+ leads in one week for an event campaign",
    "Meta Ads campaigns for coaching, events, artist meetups & exhibitions",
    "36k+ community on Instagram at @sush_journal",
    "Top Performer Awards at Tesco, Target & EXL",
    "Director’s Appreciation for excellence in project delivery",
  ],

  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "120+", label: "Leads in one week" },
    { value: "36k+", label: "Instagram community" },
    { value: "3", label: "Top Performer Awards" },
  ],

  freelance: {
    title: "Freelance Digital Marketing",
    dates: "Sep 2025 – Present",
    points: [
      "Planned and managed Meta Ads campaigns for coaching, events, artist meetups and exhibitions.",
      "Generated 120+ leads within one week through targeted Meta advertising for an event campaign.",
      "Developed campaign creatives, audience targeting and messaging based on campaign objectives.",
      "Monitored ad performance and optimized targeting, creatives and campaign strategy.",
      "Managed ongoing lead-generation campaigns for 1:1 coaching, supporting weekly campaign planning and execution.",
      "Handled digital promotion for live events, artist meetups and art exhibitions through social media campaigns.",
    ],
  },

  competencies: [
    { title: "Digital Marketing & Paid Campaigns", text: "Planning and managing campaigns for reach, engagement and lead generation." },
    { title: "Social Media & Content Strategy", text: "Creating audience-focused content strategies for organic growth and engagement." },
    { title: "Creative & Brand Communication", text: "Developing campaign concepts, visual creatives and brand messaging." },
    { title: "Performance Marketing & Analytics", text: "Monitoring campaign data and optimizing targeting, creatives and performance." },
    { title: "Project & Stakeholder Management", text: "Managing timelines, cross-functional coordination and end-to-end execution." },
  ],

  experience: [
    { dates: "Sep 2025 – Present", role: "Freelance Digital Marketing", org: "Independent" },
    { dates: "Apr 2025 – Apr 2026", role: "Senior Specialist", org: "Lowe’s" },
    { dates: "Jul 2023 – Feb 2024", role: "PMO Manager", org: "EXL" },
    { dates: "Feb 2020 – May 2023", role: "Freelance Designer", org: "Independent" },
    { dates: "May 2018 – Nov 2019", role: "PMO Manager", org: "EXL" },
    { dates: "Jan 2017 – Dec 2017", role: "PMO Lead", org: "Capgemini" },
    { dates: "Jun 2016 – Nov 2016", role: "Senior Marketing Analyst", org: "Target" },
    { dates: "Feb 2013 – Mar 2016", role: "Marketing Analyst", org: "Tesco" },
    { dates: "Dec 2009 – Oct 2012", role: "Sales Analyst", org: "HP" },
  ],

  education: [
    { year: "2021", title: "Fashion Design Illustration", org: "FAD Academy" },
    { year: "2013", title: "MBA, Human Resources", org: "Sikkim Manipal University" },
    { year: "2008", title: "Bachelor of Computer Applications", org: "BHS First Grade College, Bangalore University" },
  ],

  achievements: [
    { title: "Top Performer Awards", detail: "Tesco, Target & EXL" },
    { title: "Director’s Appreciation", detail: "Excellence in project delivery" },
    { title: "Instagram Content Creator", detail: "36k+ followers" },
  ],

  interests: ["Photography", "Reading", "Art", "Travel", "Music"],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "event-lead-generation",
    no: "01",
    title: "Event lead generation",
    client: "[Client / Event name]",
    year: "[Year]",
    duration: "1 week",
    channels: "Meta Ads",
    summary: "120+ leads in a single week for a live event, through one tightly targeted Meta Ads campaign.",
    challenge: "Fill a live event quickly, with only a week to generate interest and sign-ups.",
    approach:
      "A targeted Meta Ads campaign with creatives, audience targeting and messaging built around the event’s goal. Targeting and creatives were tuned daily as results came in.",
    execution: [
      "Defined the campaign objective and lead form around the event’s sign-up goal.",
      "Built audience segments based on [interests / location / lookalikes].",
      "Designed [number] ad creatives and tested messaging variations.",
      "Monitored daily and shifted budget toward the best-performing ad sets.",
    ],
    results: [
      { value: "120+", label: "Leads generated" },
      { value: "7", label: "Days" },
      { value: "[₹00]", label: "[Cost per lead]" },
    ],
    learnings: "[What worked best, and what you’d carry into the next campaign.]",
    cover: { label: "Event campaign creative · 16:10" },
    gallery: [{ label: "Ad creative 1" }, { label: "Ad creative 2" }, { label: "Results screenshot" }],
  },
  {
    slug: "coaching-lead-generation",
    no: "02",
    title: "1:1 coaching, always on",
    client: "[Client]",
    year: "[Year]",
    duration: "Ongoing · weekly cycles",
    channels: "Meta Ads, lead generation",
    summary: "An always-on lead-generation engine for a 1:1 coaching practice, planned and refined every week.",
    challenge: "Keep a steady flow of qualified leads coming in for a 1:1 coaching practice.",
    approach:
      "Ongoing lead-generation campaigns with weekly planning and execution. Performance was monitored continuously, and targeting, creatives and strategy were refined each cycle.",
    execution: [
      "Set up a weekly planning rhythm for campaigns and creatives.",
      "Developed messaging around [the coaching offer and audience pain points].",
      "Refined targeting and creatives using weekly performance data.",
    ],
    results: [
      { value: "[000]", label: "[Leads / month]" },
      { value: "Weekly", label: "Optimisation cycle" },
      { value: "[00%]", label: "[Conversion rate]" },
    ],
    learnings: "[What worked best, and what you’d carry into the next campaign.]",
    cover: { label: "Coaching ad creative · 16:10" },
    gallery: [{ label: "Ad creative 1" }, { label: "Ad creative 2" }, { label: "Results screenshot" }],
  },
  {
    slug: "artist-meetups-exhibitions",
    no: "03",
    title: "Artist meetups & exhibitions",
    client: "[Client / Venue]",
    year: "[Year]",
    duration: "[Duration]",
    channels: "Social media, Meta Ads",
    summary: "Digital promotion that built excitement and footfall for live events, artist meetups and art exhibitions.",
    challenge: "Build excitement and footfall for live events, artist meetups and art exhibitions.",
    approach:
      "Digital promotion across social media, pairing organic content with paid campaigns, with visuals and messaging shaped for an art-loving audience.",
    execution: [
      "Planned a content calendar leading up to each event.",
      "Created event visuals and promotional posts.",
      "Ran paid campaigns to extend reach to [audience].",
    ],
    results: [
      { value: "[00]", label: "[Events promoted]" },
      { value: "[00K]", label: "[Reach]" },
      { value: "[000]", label: "[Attendees / RSVPs]" },
    ],
    learnings: "[What worked best, and what you’d carry into the next campaign.]",
    cover: { label: "Exhibition / meetup promo · 16:10" },
    gallery: [{ label: "Event poster" }, { label: "Social post" }, { label: "Event photo" }],
  },
];
