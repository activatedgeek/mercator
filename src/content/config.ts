import { z, defineCollection } from "astro:content";

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

export const collections = { authors };
