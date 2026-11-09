import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { fileURLToPath } from 'node:url';

const [posts, news, works] = await Promise.all([
  getCollection('posts'),
  getCollection('news'),
  getCollection('works'),
]);

const visible = <T extends { data: { draft?: boolean } }>(entries: T[]) =>
  entries.filter((entry) => !import.meta.env.PROD || !entry.data.draft);

const pages = Object.fromEntries([
  ['home', { title: 'Ryosuke', description: 'Portfolio and blog of Ryosuke.' }],
  ['about', { title: 'About', description: 'プロフィールとお気に入りを紹介します。' }],
  ['blog', { title: 'Blog', description: 'ブログ記事一覧。' }],
  ['news', { title: 'News', description: 'お知らせ一覧。' }],
  ['work', { title: 'Works', description: '制作物・研究成果の一覧。' }],
  ['tags', { title: 'タグインデックス', description: 'ブログ記事のタグ一覧。' }],
  ['404', { title: '404 Not Found', description: 'お探しのページは見つかりませんでした。' }],
  ...[...new Set(visible(posts).flatMap(({ data }) => data.tags ?? []))].map((tag) => [
    `tags/${tag}`,
    { title: tag, description: `${tag}のタグが付いた記事一覧。` },
  ]),
  ...visible(posts).map(({ slug, data }) => [
    `posts/${slug}`,
    { title: data.title, description: data.description ?? '' },
  ]),
  ...visible(news).map(({ slug, data }) => [
    `news/${slug}`,
    { title: data.title, description: data.description ?? '' },
  ]),
  ...visible(works).map(({ slug, data }) => [
    `works/${slug}`,
    { title: data.title, description: data.description ?? '' },
  ]),
]);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getSlug: (path) => `${path}.png`,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: fileURLToPath(new URL('../../../public/izuchi-logo2.svg', import.meta.url)),
      size: [250],
    },
    bgGradient: [[255, 255, 255]],
    border: { color: [232, 107, 121], width: 12, side: 'block-end' },
    padding: 64,
    fonts: [fileURLToPath(new URL('../../../public/fonts/noto-sans-jp-japanese-400-normal.woff2', import.meta.url))],
    font: {
      title: { families: ['Noto Sans JP'], color: [33, 33, 33], size: 64, weight: 'Bold' },
      description: { families: ['Noto Sans JP'], color: [80, 80, 80], size: 30 },
    },
  }),
});
