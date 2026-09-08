---
layout: ../../layouts/MarkdownPostLayout.astro
title: '【AtCoder参加記】ABC474'
pubDate: 2026-09-06
description: 'ABC474に参加しました。'
author: 'Ryousuke'
image:
    url: '/images/posts/atcoder-joinlog-head.png'
    alt: 'AtCoder参加記タイトル画像'
tags: ["AtCoder", "ABC474", "ABC", "AtCoder Beginner Contest", "AtCoder参加記"]
draft: true
---

## はじめに
[ABC474](https://atcoder.jp/contests/abc474)に参加しました。今回はその振り返りと、各問題の解法についてまとめます。

## 結果
| 順位 | レーティング変動 | 点数 | パフォーマンス |
| :--- | :--- | :--- | :--- |
| 2547位 | +59 | 1000点 | 948 |


|問題|タイム|言語|
|:---|:---|:---|
|A|1:26|Python|
|B|13:30|Python|
|C|30:06|Python|
|D|58:55|Python|

## 問題
### A問題
1〜3の数字を順番に確認し、Xと一致しないものを出力して終了しました。こちらはすぐに解くことができました。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/A/01.py)

### B問題
客をグループ分けする際のリストのインデックス操作で少し迷いました。
1〜Nの数字を昇順に並べたものを正解用の配列として用意します。与えられた客の配列 `P` と正解配列を同様にグループ分けし、各グループ内をそれぞれ昇順ソートして比較しました。すべてのグループが正解配列と一致すれば `Yes`、1つでも一致しないものがあれば `No` を出力します。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/B/01.py)

### C問題
1つの数字に対して複数回の操作が行われるケースを考慮し、アルゴリズムを構築するのに苦戦しました。
方針としては、辞書を用意して「どの数字を何番目に操作したか」を記録していきます。すでに辞書に存在する数字が再度操作された場合は、最新の操作順で上書きします。この辞書のキーをバリュー（操作順）の小さい順にソートすることで、操作が行われた数字を操作終了後の順序で並べた配列 `ANS` を作成できます。あとは元の配列 `P` から操作対象となった数字を除いた配列 `NP` を作り、`ANS` の前に結合することで、最終的な配列 `P` を求めることができました。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/C/01.py)

### D問題
条件を満たす整数列が存在するかどうかを判定する方針立てが難しかったです。
配列 `A` と配列 `B` の各要素の差を `A[i] - B[i]` で求めます。これらがすべて0以下であれば、条件を満たす整数列 `W` は存在しません。一方、1以上のものが1つでもあれば、`A[i] - B[i]` の値が最も大きいインデックス `i` について、制約の最大値である `10^18` を `W[i]` に割り当てることで、条件を満たす配列 `W` を構成できます。

[解答](https://github.com/jorichou/atcoder/blob/main/solutions/ABC/ABC474/D/01.py)

### E問題
DP（動的計画法）で解けないかと考えましたが、各商品を何度でも購入できる条件があるため適用が難しく、考察を詰めきれませんでした。残念ながら時間内に解くことはできませんでした。