---
layout: ../../layouts/MarkdownPostLayout.astro
title: '【AtCoder参加記】ABC474'
pubDate: 2026-09-06
description: 'ABC474に参加しました。'
author: 'Ryousuke'
image:
    url: '/images/posts/atcoder-joinlog-head.png'
    alt: 'AtCoder参加記タイトル画像'
tags: ["AtCoder", "ABC474", "ABC", "AtCoder Beginer Contest", "AtCoder参加記"]
draft: true
---

## はじめに
[ABC474](https://atcoder.jp/contests/abc474)に参加しました。

## 結果
| 順位 | レーティング変動 | 点数 | パフォーマンス |
| ---: | ---: | ---: | ---: |
| 2547位 | +59 | 1000点 | 948 |


|問題|タイム|言語|
|---|---:|:---|
|A|1:26|Python|
|B|13:30|Python|
|C|30:06|Python|
|D|58:55|Python|

## 問題
### A問題
1~3の数字を順番にチェックし、Xでなかったら出力して終了。すぐに解けた。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/A/01.py)

### B問題
客のグループ分けをするときのリストのインデックスを迷った。1~Nの数字の昇順配列を正解配列として用意する。与えられた客の配列Pと正解配列を同じようにグループ分けした後で、それぞれ昇順にソートして比較する。すべてのグループで正解配列と一致すればYes、一つでも違うものがあればNo。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/B/01.py)

### C問題
一つの数字に複数回の操作を行えることを考慮してアルゴリズムを組むのが難しかった。辞書を用意し、どの数字を何番目に操作したかを記録する。すでに辞書に登録されている場合は上書きする。この辞書のキーをバリューの小さい順に並べることで、操作を行った数字について、すべての操作が終わった後の順番で並べた配列ANSを作ることができる。あとは、与えられた配列Pから操作を行ったものを除いた配列NPを作り、`ANS = NP + ANS`とすることで、すべての操作が終わった後の配列Pを求めることができる。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/C/01.py)

### D問題
条件を満たす整数列があるかどうかをどう判定するかが難しかった。配列Aと配列Bのそれぞれの要素の差を`Ai - Bi`で求める。これがすべて0以下であれば、条件を満たす整数列Wは存在しない。１以上のものが一つでもあれば、`Ai - Bi`の値が最も大きいiについて`W[i]`をWの制約の中で最大の値である`10^18`にすることで条件を満たす配列Wが求まる。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/D/01.py)

### E問題
DPで解けるかと思ったが、各商品を何度でも購入することが可能であることから不可能。時間内に解くことはできなかった。