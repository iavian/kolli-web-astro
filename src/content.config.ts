import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * CONTENT COLLECTIONS
 * -------------------
 * Each folder below holds simple Markdown files (one per item). To add a new
 * attraction / stay / restaurant / advisory, copy an existing file in the
 * matching folder, rename it, and edit the fields at the top (the "frontmatter"
 * between the --- lines). To remove something, delete its file.
 *
 * See CONTENT-GUIDE.md in the project root for a plain-language walkthrough.
 */

const attractions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/attractions' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Waterfall', 'Viewpoint', 'Temple', 'Nature', 'Adventure', 'Culture']),
    summary: z.string(),
    location: z.string().optional(),
    bestTime: z.string().optional(),
    entryFee: z.string().optional(),
    timings: z.string().optional(),
    image: z.string().optional(),
    website: z.string().url().optional(),
    status: z.enum(['open', 'caution', 'closed']).default('open'),
    statusNote: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const stays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stays' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Resort', 'Hotel', 'Homestay', 'Cottage', 'Guest House', 'Camping', 'Eco-Hut']),
    summary: z.string(),
    location: z.string().optional(),
    priceRange: z.string().optional(),
    phone: z.string().optional(),
    amenities: z.array(z.string()).default([]),
    image: z.string().optional(),
    website: z.string().url().optional(),
    unverified: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const eat = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eat' }),
  schema: z.object({
    title: z.string(),
    cuisine: z.string(),
    summary: z.string(),
    location: z.string().optional(),
    priceRange: z.string().optional(),
    phone: z.string().optional(),
    vegOnly: z.boolean().default(false),
    image: z.string().optional(),
    website: z.string().url().optional(),
    status: z.enum(['open', 'closed']).default('open'),
    unverified: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const advisories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/advisories' }),
  schema: z.object({
    title: z.string(),
    severity: z.enum(['info', 'warning', 'critical']).default('info'),
    active: z.boolean().default(true),
    updated: z.coerce.date(),
    summary: z.string(),
  }),
});

const contacts = defineCollection({
  loader: file('./src/content/contacts.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum([
      'Emergency',
      'Police',
      'Hospital',
      'Car Mechanic',
      'Bike Mechanic',
      'Taxi',
      'Tourism',
      'Fuel',
    ]),
    phone: z.string(),
    altPhone: z.string().optional(),
    address: z.string().optional(),
    notes: z.string().optional(),
    available: z.string().optional(),
  }),
});

const facilities = defineCollection({
  loader: file('./src/content/facilities.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum([
      'Restroom',
      'ATM',
      'Fuel',
      'Drinking Water',
      'Parking',
      'Bus Stop',
      'Liquor (TASMAC)',
      'Checkpoint',
      'Wi-Fi',
      'Other',
    ]),
    location: z.string().optional(),
    mapUrl: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { attractions, stays, eat, advisories, contacts, facilities };
