# Astro Starter Kit: Minimal

## Favorites ギャラリーの編集

About ページの Favorites は `src/data/favorites.ts` の `favorites` 配列で管理します。
配列に以下の形式の項目を追加すると、カードが追加されます。

```ts
{
    title: 'カードのタイトル',
    image: '/images/favorites/example.jpg',
    description: 'カードの裏面に表示する紹介文。',
    // youtubeId: '動画の11文字のID', // 動画を紹介する場合のみ指定
},
```

画像は `public/images/` 配下に置き、`image` には `/images/` から始まるパスを指定します。
YouTube 動画を紹介する場合は、`youtubeId` に `watch?v=` の後にある11文字のIDを指定してください。
再生ボタンからモーダルが開き、閉じるボタン・Escキー・背景のクリックで閉じると再生を停止します。
自動再生がブラウザーに制限される場合は、プレーヤー内の再生ボタンで開始できます。

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
