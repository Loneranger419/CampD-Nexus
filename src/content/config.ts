import { defineCollection, z } from 'astro:content';

const wiki = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string().max(240),
		tags: z.array(z.string()).default([]),
		updated: z.coerce.date(),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string().max(240),
		author: z.string(),
		published: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		heroImage: z.string().optional(),
	}),
});

const guides = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		game: z.string(),
		summary: z.string().max(280),
		updated: z.coerce.date(),
		version: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

const modLists = defineCollection({
	type: 'data',
	schema: z.object({
		game: z.string(),
		version: z.string(),
		updated: z.coerce.date(),
		maintainer: z.string(),
		mods: z.array(
			z.object({
				name: z.string(),
				author: z.string().optional(),
				description: z.string(),
				link: z.string().url(),
				required: z.boolean().default(true),
				category: z.enum(['core', 'visual', 'quality-of-life', 'optional']).default('core'),
			}),
		),
		resources: z
			.array(
				z.object({
					title: z.string(),
					url: z.string().url(),
				}),
			)
			.default([]),
	}),
});

const tiles = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		href: z.string(),
		tag: z.string(),
		icon: z.string(),
		order: z.number().int(),
	}),
});

export const collections = {
	wiki,
	blog,
	guides,
	modLists,
	tiles,
};

