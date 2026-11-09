import rss from '@astrojs/rss';
import { getHomeContent } from '../utils/homeContent';

export async function GET(context) {
  const { posts, news, works } = await getHomeContent();

  // Map each collection to RSS items
  const postItems = posts.map(item => ({
    title: item.data.title,
    pubDate: item.data.pubDate,
    description: item.data.description || '',
    link: `/posts/${item.slug}/`,
  }));

  const newsItems = news.map(item => ({
    title: item.data.title,
    pubDate: item.data.pubDate,
    description: item.data.description || '',
    link: `/news/${item.slug}/`,
  }));

  const workItems = works.map(item => ({
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
    title: 'Ryousuke',
    description: 'Portfolio for Ryousuke',
    site: context.site,
    items: rssItems,
    customData: `<language>ja-jp</language>`,
  });
}