// 站点级常量，可在任意位置通过 import 复用。
export const SITE_TITLE = '远方';
export const SITE_TITLE_EN = 'FARAWAY';
export const SITE_DESCRIPTION =
	'记录生活与旅行的地方。把走过的路、见过的光和住过的小城，存成一本可以慢慢翻的册子。';

/** 顶部 / 页脚共用的主导航。 */
export const NAV_LINKS: { label: string; href: string }[] = [
	{ label: '首页', href: '/' },
	{ label: '旅程', href: '/journal/' },
	{ label: '关于', href: '/about/' },
];
