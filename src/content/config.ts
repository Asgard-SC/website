// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const nyheter = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    published: z.boolean().optional(),
  }),
});

const videos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    published: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"

export const collections = {
  nyheter,
  videos,
};
