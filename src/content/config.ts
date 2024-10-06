import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    author: z.string(),
    description: z.string(),
    published: z.boolean(),
    summary: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
    image: z.string(),
  }),
});

const videos = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    description: z.string(),
    published: z.boolean(),
    video_id: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
});

export const collections = { 
  news,
  videos,
};
