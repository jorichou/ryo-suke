export interface Favorite {
    title: string;
    image: string;
    description: string;
    /** YouTube の動画ID（URLではなく11文字のID）。指定すると再生ボタンを表示します。 */
    youtubeId?: string;
}

// カードを追加するには、この配列に項目を追加してください。配列順に表示します。
export const favorites: Favorite[] = [
    {
        title: '史跡めぐり',
        image: '/images/galary/250213091942541.JPG',
        description: '日本史が好きで、城や寺社などの史跡めぐりを楽しんでいます。写真は2月の松本城です。',
    },
    {
        title: 'スパイスカレー',
        image: '/images/galary/250525131335388.JPG',
        description: '和歌山駅近くのスパイスカレー屋「SATYA - サティヤ」。',
    },
    {
        title: 'ラーメン',
        image: '/images/galary/260614194404856.JPG',
        description: '大阪・難波千日前にある「のスたOSAKA」。',
    },
];
