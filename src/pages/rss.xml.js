import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const news = await getCollection('news');
  const works = await getCollection('works');

  // Filter drafts in production
  const activePosts = posts.filter(item => !import.meta.env.PROD || !item.data.draft);
  const activeNews = news.filter(item => !import.meta.env.PROD || !item.data.draft);
  const activeWorks = works.filter(item => !import.meta.env.PROD || !item.data.draft);

  // Map each collection to RSS items
  const postItems = activePosts.map(item => ({
    title: item.data.title,
    pubDate: item.data.pubDate,
    description: item.data.description || '',
    link: `/posts/${item.slug}/`,
  }));

  const newsItems = activeNews.map(item => ({
    title: item.data.title,
    pubDate: item.data.pubDate,
    description: item.data.description || '',
    link: `/news/${item.slug}/`,
  }));

  const workItems = activeWorks.map(item => ({
    title: item.data.title,
    pubDate: item.data.pubDate,
    description: item.data.description || '',
    link: `/works/${item.slug}/`,
  }));

  // Combine and sort by date descending
  const rssItems = [...postItems, ...newsItems, ...workItems].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
  );

  return rss({
    title: 'ryouske | ブログ',
    description: 'Astroを学ぶ旅',
    site: context.site,
    items: rssItems,
    customData: `<language>ja-jp</language>`,
  });
}