---
title: ブログ記事サンプル
created: 2023-03-01
updated: 2023-03-01
author:
 - name: Hiratake
   icon: https://res.cloudinary.com/hiratake/image/upload/v1677884273/icon_ax9nte.webp
layout: article
---

これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。

## 見出し

上の見出しは「H2」の見出しです。これは、記事内で使用することができる見出しの中で最上位のものとなります。Markdownで記述する場合は、文頭に `##` を付けてください。 `##` のすぐ後には半角スペースが必要です。

```markdown
## Heading
```

「H1」は `#` を付けることで使用することができますが、こちらは記事のタイトル部分に使用しているため使わないようにしてください。「H1」はページ内に1つだけという決まりがあるためです。タイトルの指定はメタ情報の設定から行います。

### H3

「H3」は、記事内で使用することができる見出しの中で2番目にレベルの高い見出しです。Markdownで記述する場合は、文頭に `###` を付けてください。 `###` のすぐ後には半角スペースが必要です。

```markdown
### Heading
```

目次に表示されるのは「H3」までとなります。

#### H4

「H4」は、記事内で使用することができる見出しの中で3番目にレベルの高い見出しです。Markdownで記述する場合は、文頭に `####` を付けてください。 `####` のすぐ後には半角スペースが必要です。

```markdown
#### Heading
```

「H4」は、目次には表示されませんのでご注意ください。

## テキスト装飾

文章中の一部の文字を太字にするなど、装飾をすることができます。

### 太字

太字にする場合は、太字にしたい **単語** や __文章__ を `**` もしくは `__` で囲みます。

```markdown
Strong emphasis, aka bold, with **asterisks** or __underscores__.
```

### イタリック体

イタリック体にする場合は、イタリック体にしたい *単語* や _文章_ を `*` もしくは `_` で囲みます。

```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.
```

**太字と _組み合わせる_** こともできます。

```markdown
Combined emphasis with **asterisks and _underscores_**.
```

### 取り消し線

取り消し線を付ける場合は、取り消し線を付けたい ~~単語や文章~~ を `~~` で囲みます。

```markdown
Strikethrough uses two tildes. ~~Scratch this.~~
```

## リンク

これは [外部リンク](https://jaoafa.com/) です。記述方法は以下の通りです。

```markdown
[External Link](https://jaoafa.com/)
```

これは [内部リンク](/) です。同じドメインのページへのリンクは、ドメイン部分を省略することができます。ドメイン部分を省略して記述すると、クリックして移動した際の読み込みが少し速くなるようになっています（事前に移動先の情報を取得しているため）。記述方法は以下の通りです。

```markdown
[Internal Link](/)
```

[リンク](https://jaoafa.com/ "jao Minecraft Server ウェブサイト")にカーソルを合わせた際に表示されるテキストを設定することもできます。

```markdown
[Link](https://jaoafa.com/ "jao Minecraft Server Website")
```

## リスト

リストには「順序なしリスト」と「順序付きリスト」が存在します。

### 順序なしリスト

文頭に `-` を付けることで順序なしリストを使用することができます。

- 順序なしリスト1
- 順序なしリスト2
  - 順序なしリスト2-1
- 順序なしリスト3

```markdown
- List1
- List2
  - List2-1
- List3
```

`*` や `+` を文頭に付けることでもリストを使用することができます。

* 順序なしリスト1（*）
  * 順序なしリスト1-1（*）

+ 順序なしリスト1（+）
  + 順序なしリスト1-1（+）

### 順序付きリスト

文頭に `1.` や `2.` のように番号を付けることで順序付きリストを使用することができます。

1. 順序付きリスト1
2. 順序付きリスト2
   1. 順序付きリスト2-1
3. 順序付きリスト3

```markdown
1. List1
2. List2
   1. List2-1
3. List3
```

## 画像

画像を表示するには、以下のように記述します。 `[]` の中には、画像が読み込めなかった場合（リンクが間違っている、削除された、など）の代替テキストを記述します。

```markdown
![Image](/default.jpg)
```

以下のように表示されます。

![画像](/default.jpg)

## コードブロック

コードを記述するには、コードを ` ``` ` で囲みます。

```typescript
const foo: string = 'foo'
const bar: number = 0
console.log({ foo, bar })
```

```
jao Minecraft Server is a creative server for Java Edition.
```

文章中に `短いコード` を入れることもできます。

```markdown
Inline `code` has `back-ticks around` it.
```

## 表

表を表示するには、以下のように記述します。

```markdown
| align left | align center | align right |
|:-----------|:------------:|------------:|
| This       | This         | This        |
| column     | column       | column      |
| will       | will         | will        |
| be         | be           | be          |
| left       | center       | right       |
| aligned    | aligned      | aligned     |
```

以下のように表示されます。

| align left | align center | align right |
|:-----------|:------------:|------------:|
| This       | This         | This        |
| column     | column       | column      |
| will       | will         | will        |
| be         | be           | be          |
| left       | center       | right       |
| aligned    | aligned      | aligned     |

1行目は表の見出しとなります。 `|` で区切ることで列を増やすことができます。

2行目でテキストの位置を指定します。 `:` を左側に付けると左寄せ、右側に付けると右寄せ、両側に付けると中央寄せとなります。 `-` の数は1つ以上であれば指定はありません。

```markdown
|heading|heading|heading|
|:-|:-|:-|
|item|item|item|
|item|item|item|
```

これは以下のように表示されます。

|heading|heading|heading|
|:-|:-|:-|
|item|item|item|
|item|item|item|

表の各項目は、太字などの装飾をすることができます。

## 引用

文頭に `>` を付けることで引用になります。複数行ある場合は、それぞれの行の始めに `>` を付ける必要があります。

```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
```

以下のように表示されます。

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

## 水平線

水平線は `---` もしくは `***` もしくは `___` で表示することができます。

---

`---` を使用した場合

***

`***` を使用した場合

___

`___` を使用した場合

## アラート

文章を `::content-alert` と `::` で囲むとアラート表示ができます。


```markdown
::content-alert
アラートのコンテンツ
::
```

以下のように表示されます。

::content-alert
アラートのコンテンツ
::

種類を指定することで、色とアイコンを変更することができます。

```markdown
::content-alert{type="danger"}
危なそうなアラート
::

::content-alert{type="warning"}
注意が必要そうなアラート
::

::content-alert{type="success"}
安全そうなアラート
::
```

::content-alert{type="danger"}
危なそうなアラート
::

::content-alert{type="warning"}
注意が必要そうなアラート
::

::content-alert{type="success"}
安全そうなアラート
::

## メタ情報の設定

Markdownファイルの最初に、ページの情報を指定するためのブロック（ **YAMLフロントマターブロック** ）を追加することができます。

```markdown
---
title: 記事のタイトル
---
```

種類の後に `:` と半角スペースを入れ、その後に設定したい内容を記述します。

### title

記事のタイトルです。

### description

ページの概要です。Googleなどで検索した際に、タイトルの下に表示される文章などに使われます。

### created

ページの公開日（作成日）です。 `2021-01-01` のように記述してください。

### updated

ページの更新日です。 `2021-01-01` のように記述してください。

---

いかがでしたか？
