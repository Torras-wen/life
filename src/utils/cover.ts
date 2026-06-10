// 确定性「程序化封面」生成器 —— 远方。
// 给定一个稳定的 seed（如条目标题），返回一组清新旅行色调的
// mesh 渐变背景与一个几何变体，让每篇记录都能拥有独一无二却统一
// 的封面，而不必依赖真实照片（后台/作者后续可用 cover 字段覆盖）。

export interface Cover {
	/** 可直接用于 `background` 的分层 mesh 渐变。 */
	background: string;
	/** 基础色相，用作 mesh 背后的纯色兜底。 */
	hue: number;
	/** 几何变体 0–3。 */
	variant: number;
	/** 稳定唯一 id，方便用作 SVG pattern id。 */
	uid: string;
}

// 旅行色板 —— 以海松绿 / 潟湖青 / 天空蓝为主，
// 辅以两组「黄金时刻」暖色，制造节奏与温度。
const RECIPES = [
	{ base: 172, spread: 16 }, // 海松绿 teal
	{ base: 190, spread: 18 }, // 潟湖青 lagoon
	{ base: 204, spread: 16 }, // 天空蓝 sky
	{ base: 158, spread: 14 }, // 松石 / 翡翠 jade
	{ base: 32, spread: 14 }, // 夕照金 sunset gold
	{ base: 18, spread: 14 }, // 暮色珊瑚 dusk coral
];

/** FNV-1a 哈希 —— 在 SSR / build 间保持一致。 */
export function hashString(str: string): number {
	let h = 2166136261;
	for (let i = 0; i < str.length; i++) {
		h ^= str.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

export function cover(seed: string): Cover {
	const h = hashString(seed);
	const recipe = RECIPES[h % RECIPES.length];
	const variant = Math.floor(h / 7) % 4;
	const { base, spread } = recipe;

	// 四个均衡锚点让 mesh 均匀铺满画面，
	// 再加入少量确定性抖动，使每张封面各有差异。
	const anchors = [
		[18, 22],
		[82, 16],
		[24, 82],
		[84, 74],
	];
	const hues = [base - spread, base - spread * 0.2, base + spread * 0.5, base + spread];
	const sats = [70, 78, 62, 56];
	const lums = [56, 50, 45, 38];

	const layers = anchors.map((a, i) => {
		const jx = ((h >> (i * 3)) % 13) - 6;
		const jy = ((h >> (i * 3 + 2)) % 13) - 6;
		const x = a[0] + jx;
		const y = a[1] + jy;
		const hue = (((hues[i] % 360) + 360) % 360).toFixed(0);
		return `radial-gradient(circle at ${x}% ${y}%, hsla(${hue}, ${sats[i]}%, ${lums[i]}%, 0.92) 0%, transparent 52%)`;
	});

	return {
		background: layers.join(', '),
		hue: ((base % 360) + 360) % 360,
		variant,
		uid: h.toString(36),
	};
}
