// 站点级常量，可在任意位置通过 import 复用。
export const SITE_TITLE = '远方';
export const SITE_TITLE_EN = 'FARAWAY';
export const SITE_DESCRIPTION =
	'WJ 与 GB 的二人记事。把一起走过的路、见过的光和住过的小城，存成一本可以慢慢翻的册子。';

/** 站点的两位主人，显示在页脚等处。以后要改名字，改这一行即可。 */
export const SITE_AUTHORS = 'WJ & GB';

/** 在一起的纪念日（YYYY-MM-DD）。首页据此显示「在一起第 N 天」，每天自动 +1。改成你们真实的日期即可。 */
export const TOGETHER_SINCE = '2025-11-16';

/** 一句你们的专属情话 / 标语，出现在首页甜蜂板块。随时可改成你们自己的话。 */
export const LOVE_QUOTE = '往后的每一段路，都想牽着你一起走。';

/** 顶部 / 页脚共用的主导航。 */
export const NAV_LINKS: { label: string; href: string }[] = [
	{ label: '首页', href: '/' },
	{ label: '旅程', href: '/journal/' },
	{ label: '关于', href: '/about/' },
];
