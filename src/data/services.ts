// Content for the four service pages. Items marked for confirmation are listed in the build report.
export interface Photo { src: string; w: number; h: number; alt: string; pos?: string }
export interface Service {
  slug: string;
  name: string;
  short: string;
  promise: string;
  intro: string;
  hero: Photo;
  side: Photo;
  what: { name: string; say: string }[];
  steps: { name: string; say: string }[];
  faqs: { q: string; a: string }[];
  formTitle: string;
  extra: { name: string; label: string; options: string[] };
  waText: string;
  metaTitle: string;
  metaDescription: string;
}

const villa: Photo = { src: '/img/villa-1600.jpg', w: 1600, h: 1067, alt: 'Representative image: a modern villa with a pool at dusk' };
const interior: Photo = { src: '/img/interior-1024.jpg', w: 1024, h: 683, alt: 'Representative image: a bright living room' };
const office: Photo = { src: '/img/office-1024.jpg', w: 1024, h: 768, alt: 'Representative image: a glass office facade' };
const plot: Photo = { src: '/img/plot-1600.jpg', w: 1600, h: 1077, alt: 'Representative image: a staked plot of land' };
const formwork: Photo = { src: '/img/formwork-1600.jpg', w: 1600, h: 1200, alt: 'Representative image: walls rising in formwork on a building site' };

const rera = {
  q: 'Is the project RERA registered?',
  a: 'We advertise a project only after it is registered. Its RERA number is shown on the project page and links to the state RERA website, so you can check it yourself.',
};

export const services: Service[] = [
  {
    slug: 'residential',
    name: 'Residential homes',
    short: 'Residential',
    promise: 'Homes planned around how you will live.',
    intro: 'Independent houses and apartments, designed and built by us from the land to the day you get the keys.',
    hero: { ...villa, pos: '34% 50%' },
    side: interior,
    what: [
      { name: 'Independent houses and villas', say: 'On our own plots or in planned colonies, with the plot and the house sold together.' },
      { name: 'Apartments', say: 'Low-rise buildings with the carpet area of each home stated plainly.' },
      { name: 'Changes before we build', say: 'Rooms, finishes and fittings can be changed before that stage begins, agreed in writing.' },
      { name: 'Papers handed over together', say: 'Sale deed, approvals and possession documents, complete on the day of handover.' },
    ],
    steps: [
      { name: 'Choose the home', say: 'Visit the site, see the plans and ask every question you have.' },
      { name: 'Agree it in writing', say: 'Price, payment stages and specification, written down before you pay.' },
      { name: 'Follow the build', say: 'Dated site photographs at each stage, wherever you live.' },
      { name: 'Take possession', say: 'A walkthrough, the keys and every document in one go.' },
    ],
    faqs: [
      rera,
      { q: 'Can I change the layout or finishes?', a: 'Yes, before construction of that part begins. Every change and its cost is agreed in writing first, so the final price never surprises you.' },
      { q: 'Will you help with my home loan?', a: 'We share every project document your bank asks for and answer the bank\'s questions directly if you want us to.' },
      { q: 'I live abroad. How do I follow progress?', a: 'You get dated site photographs at every stage, and a call with one of the partners whenever you need one.' },
    ],
    formTitle: 'Tell us about the home you want',
    extra: { name: 'Budget', label: 'Budget', options: ['Not sure yet', 'Under ₹50 lakh', '₹50 lakh – ₹1 crore', '₹1 – 2 crore', 'Above ₹2 crore'] },
    waText: 'Namaste, I am interested in a home from Sankat Mochan Builders & Developers.',
    metaTitle: 'Residential homes | Sankat Mochan Builders & Developers',
    metaDescription: 'Independent houses and apartments built from land to handover, with prices and payment stages agreed in writing. Call or WhatsApp +91 77376 33333.',
  },
  {
    slug: 'commercial',
    name: 'Commercial spaces',
    short: 'Commercial',
    promise: 'Space that works as hard as you do.',
    intro: 'Shops and offices to buy or lease, planned for footfall, parking and the people who work in them.',
    hero: { ...office, pos: '35% 50%' },
    side: formwork,
    what: [
      { name: 'Shops and showrooms', say: 'Street-facing units with frontage and visibility for your business.' },
      { name: 'Offices', say: 'Floor plates you can divide as your team grows.' },
      { name: 'Buy or lease', say: 'Own the space or lease it, with every term set out in writing.' },
      { name: 'Handover as agreed', say: 'A bare shell or ready-to-use space, decided before you sign.' },
    ],
    steps: [
      { name: 'Tell us what you need', say: 'Size, location, footfall, parking and budget.' },
      { name: 'Shortlist units', say: 'See the options that fit, with clear prices or rents.' },
      { name: 'Agree the terms', say: 'Sale or lease terms written down before any payment.' },
      { name: 'Move in', say: 'Handover with documents and the fit-out you agreed.' },
    ],
    faqs: [
      rera,
      { q: 'Can I lease instead of buying?', a: 'Yes, where a unit is offered for lease. The rent, deposit, lock-in and maintenance are written into the lease before you sign.' },
      { q: 'What do I get at handover?', a: 'That is agreed before you sign: a bare shell you fit out yourself, or a ready-to-use space with the finishes listed in your agreement.' },
      { q: 'Is parking included?', a: 'It depends on the project. Parking allocation is stated on each project page and in your agreement.' },
    ],
    formTitle: 'Tell us about the space you need',
    extra: { name: 'Buy or lease', label: 'Buy or lease?', options: ['Not sure yet', 'Buy', 'Lease'] },
    waText: 'Namaste, I am looking for commercial space from Sankat Mochan Builders & Developers.',
    metaTitle: 'Commercial spaces | Sankat Mochan Builders & Developers',
    metaDescription: 'Shops and offices to buy or lease, with terms and handover agreed in writing before you sign. Call or WhatsApp +91 77376 33333.',
  },
  {
    slug: 'plots',
    name: 'Plotted land',
    short: 'Plots',
    promise: 'Land you can build a future on.',
    intro: 'Residential plots with the title checked and approvals in place before we offer them to you.',
    hero: { ...plot, pos: '88% 60%' },
    side: villa,
    what: [
      { name: 'Title checked first', say: 'The ownership chain is checked before a plot is ever offered.' },
      { name: 'Planned layouts', say: 'Roads, drainage and power planned into the layout from the start.' },
      { name: 'Measured and marked', say: 'Boundaries pegged on site, and the size stated in gaj, square feet and square metres.' },
      { name: 'Help with registry', say: 'We guide you through registering the sale deed in your name.' },
    ],
    steps: [
      { name: 'Visit the site', say: 'Walk the plot, the roads and the neighbourhood with us.' },
      { name: 'Check the papers', say: 'See copies of the title and approvals before you pay anything.' },
      { name: 'Book in writing', say: 'Price, payment stages and plot number written into the agreement.' },
      { name: 'Register the plot', say: 'Sale deed registered in your name, with our help.' },
    ],
    faqs: [
      { q: 'What documents can I see before booking?', a: 'Copies of the title documents, the layout approval and, where it applies, the RERA registration. You get them before you pay.' },
      { q: 'Are your plotted projects RERA registered?', a: 'Every plotted project that needs RERA registration is registered before we advertise it, and the number is shown on its page.' },
      { q: 'Can you build a house on the plot later?', a: 'Yes. We build on plots bought from us, with a separate written estimate and schedule.' },
      { q: 'How is the plot size measured?', a: 'Plots are measured on site and stated in gaj, square feet and square metres. Bigha and biswa vary by state, so we confirm them for each plot.' },
    ],
    formTitle: 'Tell us about the plot you want',
    extra: { name: 'Plot size', label: 'Plot size you want', options: ['Not sure yet', 'Under 100 gaj', '100 – 200 gaj', '200 – 500 gaj', 'Above 500 gaj'] },
    waText: 'Namaste, I am interested in a plot from Sankat Mochan Builders & Developers.',
    metaTitle: 'Residential plots | Sankat Mochan Builders & Developers',
    metaDescription: 'Residential plots with title checked and approvals in place before we offer them. See the papers before you pay. Call or WhatsApp +91 77376 33333.',
  },
  {
    slug: 'construction',
    name: 'Construction on your land',
    short: 'Construction',
    promise: 'We build on your plot, to your plan.',
    intro: 'Own a plot? We draw the plans, follow up the approvals and build, with the cost and schedule agreed in writing.',
    hero: { ...formwork, pos: '35% 50%' },
    side: plot,
    what: [
      { name: 'Design and drawings', say: 'Plans drawn with you and made ready for approval.' },
      { name: 'Building approvals', say: 'We prepare the building plan application and follow it up.' },
      { name: 'Turnkey construction', say: 'Foundation to finishes, with one team responsible for all of it.' },
      { name: 'Handover', say: 'Completion paperwork and a walkthrough before you get the keys.' },
    ],
    steps: [
      { name: 'Visit the plot', say: 'We check access, soil and what can legally be built.' },
      { name: 'Drawings and estimate', say: 'Plans and an itemised estimate, stage by stage.' },
      { name: 'Approval and agreement', say: 'Plan approval, then a written agreement on cost and schedule.' },
      { name: 'Build and hand over', say: 'Dated progress photographs, then keys and paperwork.' },
    ],
    faqs: [
      { q: 'Do I need approved drawings before I contact you?', a: 'No. We can draw the plans and handle the approval, or build to drawings you already have.' },
      { q: 'How is the cost worked out?', a: 'An itemised estimate for the specification you choose, split into stages. Payments are linked to stages that are finished on site.' },
      { q: 'How long will it take?', a: 'It depends on the size of the building and how long approvals take. The schedule is written into your agreement before work starts.' },
      { q: 'Can I use my own architect or materials?', a: 'Yes, if we agree it in writing at the start, so responsibility for each part is clear.' },
    ],
    formTitle: 'Tell us about your plot',
    extra: { name: 'Drawings', label: 'Do you have approved drawings?', options: ['Not sure', 'Yes', 'No'] },
    waText: 'Namaste, I would like Sankat Mochan Builders & Developers to build on my plot.',
    metaTitle: 'Construction on your land | Sankat Mochan Builders & Developers',
    metaDescription: 'Own a plot? We design, follow up approvals and build, with cost and schedule agreed in writing. Call or WhatsApp +91 77376 33333.',
  },
];
