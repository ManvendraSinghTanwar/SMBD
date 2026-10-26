// Projects. The company has none launched yet, so these are SAMPLE entries that show the layout.
// Replace each with a real project (and set sample: false) once it is registered with RERA.
import type { Photo } from './services';

export type ProjectType = 'Residential' | 'Commercial' | 'Plots';
export type ProjectStatus = 'In planning' | 'Launching soon' | 'Under construction' | 'Ready to move';

export interface Project {
  slug: string;
  sample: boolean;
  name: string;
  type: ProjectType;
  city: string;
  status: ProjectStatus;
  summary: string;
  hero: Photo;
  gallery: Photo[];
  facts: { label: string; value: string }[];
  rera: string;
  reraUrl: string;
  overview: string;
  amenities: string[];
  progress: { date: string; note: string; photo: Photo }[];
  brochure: string | null;
  mapQuery: string;
  extra: { name: string; label: string; options: string[] };
}

const villa: Photo = { src: '/img/villa-1600.jpg', w: 1600, h: 1067, alt: 'Representative image: a modern villa with a pool at dusk' };
const interior: Photo = { src: '/img/interior-1024.jpg', w: 1024, h: 683, alt: 'Representative image: a bright living room' };
const office: Photo = { src: '/img/office-1024.jpg', w: 1024, h: 768, alt: 'Representative image: a glass office facade' };
const plot: Photo = { src: '/img/plot-1600.jpg', w: 1600, h: 1077, alt: 'Representative image: a staked plot of land' };
const formwork: Photo = { src: '/img/formwork-1600.jpg', w: 1600, h: 1200, alt: 'Representative image: walls rising in formwork on a building site' };

const progress = [
  { date: '[DATE]', note: 'Site cleared and boundary marked.', photo: plot },
  { date: '[DATE]', note: 'Foundations and first-floor walls.', photo: formwork },
];

export const projects: Project[] = [
  {
    slug: 'sample-residential',
    sample: true,
    name: '[PROJECT NAME]',
    type: 'Residential',
    city: '[City]',
    status: 'In planning',
    summary: 'Independent homes on a gated plot.',
    hero: villa,
    gallery: [interior, formwork],
    facts: [
      { label: 'Homes', value: '[Number] independent houses' },
      { label: 'Sizes', value: '[e.g. 3 and 4 bedrooms]' },
      { label: 'Plot area', value: '[Area in sq ft / gaj]' },
      { label: 'Possession', value: '[Expected date]' },
    ],
    rera: '[PLACEHOLDER: RERA no.]',
    reraUrl: '#',
    overview: '[PLACEHOLDER: two or three sentences on the project: where it is, who it is for and what makes the location worth it.]',
    amenities: ['Gated entry', 'Internal roads', 'Covered parking', 'Power backup for common areas', 'Rainwater harvesting', 'Landscaped open space'],
    progress,
    brochure: null,
    mapQuery: 'India',
    extra: { name: 'Budget', label: 'Budget', options: ['Not sure yet', 'Under ₹50 lakh', '₹50 lakh – ₹1 crore', '₹1 – 2 crore', 'Above ₹2 crore'] },
  },
  {
    slug: 'sample-commercial',
    sample: true,
    name: '[PROJECT NAME]',
    type: 'Commercial',
    city: '[City]',
    status: 'In planning',
    summary: 'Street-facing shops with offices above.',
    hero: office,
    gallery: [formwork, villa],
    facts: [
      { label: 'Units', value: '[Number] shops and offices' },
      { label: 'Unit sizes', value: '[Range in sq ft]' },
      { label: 'Sale or lease', value: '[Both / sale only]' },
      { label: 'Possession', value: '[Expected date]' },
    ],
    rera: '[PLACEHOLDER: RERA no.]',
    reraUrl: '#',
    overview: '[PLACEHOLDER: two or three sentences on the location, the road it faces, footfall and parking.]',
    amenities: ['Road frontage', 'Visitor parking', 'Lift', 'Power backup', 'Fire safety system', 'Washrooms on every floor'],
    progress,
    brochure: null,
    mapQuery: 'India',
    extra: { name: 'Buy or lease', label: 'Buy or lease?', options: ['Not sure yet', 'Buy', 'Lease'] },
  },
  {
    slug: 'sample-plots',
    sample: true,
    name: '[PROJECT NAME]',
    type: 'Plots',
    city: '[City]',
    status: 'In planning',
    summary: 'A plotted colony with roads and services planned in.',
    hero: plot,
    gallery: [villa, formwork],
    facts: [
      { label: 'Plots', value: '[Number] plots' },
      { label: 'Plot sizes', value: '[Range in gaj]' },
      { label: 'Approvals', value: '[Layout approval no.]' },
      { label: 'Registry', value: '[Ready / from date]' },
    ],
    rera: '[PLACEHOLDER: RERA no.]',
    reraUrl: '#',
    overview: '[PLACEHOLDER: two or three sentences on the land, its access road and what is nearby.]',
    amenities: ['Wide internal roads', 'Street lighting', 'Drainage', 'Water supply', 'Boundary wall', 'Park'],
    progress,
    brochure: null,
    mapQuery: 'India',
    extra: { name: 'Plot size', label: 'Plot size you want', options: ['Not sure yet', 'Under 100 gaj', '100 – 200 gaj', '200 – 500 gaj', 'Above 500 gaj'] },
  },
];
