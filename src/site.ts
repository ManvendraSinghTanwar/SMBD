// One place for the company's contact facts. Values in [brackets] are placeholders the client must confirm.
export const site = {
  name: 'Sankat Mochan Builders & Developers',
  tagline: 'From Land to Legacy',
  partners: [
    { name: 'D. S. Tanwar', role: 'Director and partner' },
    { name: '[PLACEHOLDER: partner name]', role: 'Partner' },
  ],
  phoneDisplay: '+91 77376 33333',
  phoneHref: 'tel:+917737633333',
  email: 'smbd2026@gmail.com',
  address: '[PLACEHOLDER: office address]',
  city: '[PLACEHOLDER: city, state]',
  hours: 'Mon–Sat, 10 am – 7 pm',
  rera: '[PLACEHOLDER: RERA registration no.]',
  url: 'https://www.example.com', // [PLACEHOLDER: final domain]
};

export const whatsapp = (text = 'Namaste, I would like to know more about Sankat Mochan Builders & Developers.') =>
  `https://wa.me/917737633333?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/projects', label: 'Projects' },
  { href: '/services/residential', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  { href: '/services/residential', label: 'Residential' },
  { href: '/services/commercial', label: 'Commercial' },
  { href: '/services/plots', label: 'Plots' },
  { href: '/services/construction', label: 'Construction' },
];

// Representative photographs, used until the company's own projects are photographed
export const credits = [
  '"3D Rendering of Modern Luxury Villa Exterior with Pool" by Tuantranseo, CC BY 4.0',
  '"Modern apartment interior", rawpixel, CC0',
  '"Modern office building exterior", rawpixel, CC0',
  '"Empty plot, Ilsham Marine Drive" by Derek Harper, CC BY-SA 2.0',
  '"Brazil Formwork" by WTF Formwork (wallties.com), CC BY-SA 3.0',
];
