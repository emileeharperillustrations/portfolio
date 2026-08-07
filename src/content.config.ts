// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const portfolio = defineCollection({
    loader: glob({
        base: './src/content/artwork',
        pattern: "**/index.{md,mdx}",
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string().optional(),
            image: image(),
        }),
});

export const collections = {
    portfolio,
};