export interface FavoriteVideo {
    title: string;
    /** YouTube の動画ID（URLではなく11文字のID）。 */
    youtubeId: string;
}

// 動画を追加するときは、タイトルとYouTube動画IDをここに追加してください。
export const favorites: FavoriteVideo[] = [
    // { title: '動画タイトル', youtubeId: '動画ID11文字' },
    { title: 'ビッケブランカ - 完璧のペキ / VK Blanka - Kan Peki No Peki', youtubeId: '51DrN3ET6x8' },
    { title: 'YOASOBI「勇者」 Official Music Video／TVアニメ『葬送のフリーレン』オープニングテーマ', youtubeId: 'OIBODIPC_8Y' },
    { title: '月詠み『導火』Music Video', youtubeId: '2vkgqu3-_Pk' },
    { title: '【公式】槇原敬之「どんなときも。」(MV)【3rdシングル】 (1991年) Noriyuki Makihara/donnatokimo　【1位】', youtubeId: 'b88pxLpMZKk' },
    { title: 'アゲハ蝶', youtubeId: 'swxob0SJyHg' },
    { title: '秦 基博 - 「ひまわりの約束」 Music Video', youtubeId: 'rKsQ-3N-Bks'}
];
