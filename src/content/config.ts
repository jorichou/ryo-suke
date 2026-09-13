import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    type: z.string().optional(),
    year: z.string().optional(),
    role: z.string().optional(),
    // Updated source field supporting object with url (string or array) and optional label
    source: z.object({
      url: z.union([z.string(), z.array(z.string())]),
      label: z.union([z.string(), z.array(z.string())]).optional(),
    }).optional(),
    // Updated link field accepting either a string or an object with url (string or array) and optional label
    link: z.union([
      z.string(),
      z.object({
        url: z.union([z.string(), z.array(z.string())]),
        label: z.union([z.string(), z.array(z.string())]).optional(),
      })
    ]).optional(),
    // Legacy fields for backward compatibility
    source_name: z.string().optional(),
    source_url: z.string().optional(),
    link_name: z.string().optional(),
    draft: z.boolean().optional().default(false),
  })
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    janre: z.string(),
    draft: z.boolean().optional().default(false),
  })
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  })
});

export const collections = {
  'works': worksCollection,
  'posts': postsCollection,
  'news': newsCollection,
};
