import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

function latestItems<T extends CollectionEntry<'posts' | 'news' | 'works'>>(items: T[]): T[] {
  return items
    .filter(item => !import.meta.env.PROD || !item.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, 4);
}

export async function getHomeContent() {
  const [posts, news, works] = await Promise.all([
    getCollection('posts'),
    getCollection('news'),
    getCollection('works'),
  ]);

  return {
    posts: latestItems(posts),
    news: latestItems(news),
    works: latestItems(works),
  };
}
