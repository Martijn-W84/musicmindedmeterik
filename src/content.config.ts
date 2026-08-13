import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artists = defineCollection({
	// Load Markdown and MDX files in the `src/content/artists/` directory.
	loader: glob({ base: './src/content/artists', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
      category: z.string(),
      members: z.string().optional(),
			aliases: z.string().optional(),
      heroImage: z.optional(image()),
			homepage: z.string().optional(),
		}),
});

export const collections = { artists };
