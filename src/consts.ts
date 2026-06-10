// 站点级常量，可在任意位置通过 import 复用。
export const SITE_TITLE = '远方';
export const SITE_TITLE_EN = 'FARAWAY';
export const SITE_DESCRIPTION =
	'WJ 与 GB 的二人记事。把一起走过的路、见过的光和住过的小城，存成一本可以慢慢翻的册子。';

/** 站点的两位主人，显示在页脚等处。以后要改名字，改这一行即可。 */
export const SITE_AUTHORS = 'WJ & GB';

/** 顶部 / 页脚共用的主导航。 */
export const NAV_LINKS: { label: string; href: string }[] = [
	{ label: '首页', href: '/' },
	{ label: '旅程', href: '/journal/' },
	{ label: '关于', href: '/about/' },
];
