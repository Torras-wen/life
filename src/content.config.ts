import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	// 旅程日志：记录每一段旅行 / 生活片段。
	journal: defineCollection({
		loader: glob({ base: './src/content/journal', pattern: '**/*.md' }),
		schema: z.object({
			/** 标题，如「在大理，把日子过慢」。 */
			title: z.string(),
			/** 地点，如「云南 · 大理」。 */
			location: z.string(),
			/** 记录日期。 */
			date: z.coerce.date(),
			/** 一句话摘要 / 导语。 */
			summary: z.string(),
			/** 标签，如 徒步、海岛、城市漫步。 */
			tags: z.array(z.string()).default([]),
			/** 可选：真实封面照片路径（后台上传后填入）。 */
			cover: z.string().optional(),
			/** 封面替代文本。 */
			coverAlt: z.string().optional(),
			/** 可选：天气 / 心情一行字。 */
			mood: z.string().optional(),
			/** 是否在首页作为「最新一程」精选。 */
			featured: z.boolean().default(false),
		}),
	}),
};
