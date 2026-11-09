import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const [allPosts, allNews, allWorks] = await Promise.all([
    getCollection('posts'),
    getCollection('news'),
    getCollection('works'),
  ]);
  const isPublished = item => !import.meta.env.PROD || !item.data.draft;
  const posts = allPosts.filter(isPublished);
  const news = allNews.filter(isPublished);
  const works = allWorks.filter(isPublished);

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
    title: 'Ryosuke',
    description: 'Portfolio for Ryosuke',
    site: context.site,
    items: rssItems,
    customData: `<language>ja-jp</language>`,
  });
}