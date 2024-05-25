// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const nyheter = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    author: z.string(),
    description: z.string(),
    published: z.boolean(),
    summary: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
});

const videos = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    description: z.string(),
    published: z.boolean(),
    src: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"

export const collections = { 
  nyheter,
  videos,
};
