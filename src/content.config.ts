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
			/** 记录日期（出发日 / 主日期，用于排序与归档）。 */
			date: z.coerce.date(),
			/** 可选：结束日期。填了会显示成「日期范围」（多日旅行）。 */
			dateEnd: z.coerce.date().optional(),
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
			/** 这篇主要是谁写的：WJ / GB / 一起。 */
			author: z.enum(['WJ', 'GB', '一起']).optional(),
			/** 按天行程 —— 每天干了什么，渲染成时间线。 */
			itinerary: z
				.array(
					z.object({
						/** 第几天 / 日期，如「Day 1」或「1.18」。 */
						day: z.string(),
						/** 这一天的标题。 */
						title: z.string(),
						/** 这一天的详细记录（可选）。 */
						note: z.string().optional(),
					}),
				)
				.default([]),
			/** 多图画廊 —— 一篇可放很多张照片。 */
			gallery: z
				.array(
					z.object({
						/** 图片路径（后台上传后填入）。 */
						image: z.string(),
						/** 图说（可选）。 */
						caption: z.string().optional(),
					}),
				)
				.default([]),
			/** 是否在首页作为「最新一程」精选。 */
			featured: z.boolean().default(false),
		}),
	}),
};
