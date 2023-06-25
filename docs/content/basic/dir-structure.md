# ファイルの階層構造

`jaoafa/jaoweb4` リポジトリでは、以下のフォルダ・ファイル構造になっています。

!!! note "大抵の人は…"
    「Web サイトにある文章を直したい！」など、サイトにある文章そのものについての変更を加えるときには `src/content/` フォルダ内で行います。

jaoweb4 では、[`Nuxt.js`](https://nuxt.com) というフレームワークを利用して Web サイトを作成しています。従って、フォルダ構造もフレームワークが定義する構造に沿ったものになっています。

- `.github`: GitHub 上で利用する設定ファイル群などを保存するフォルダ
- `.husky`: [husky](https://github.com/typicode/husky) というコードの確認処理を行うツールのためのフォルダ
- `.vscode`: Visual Studio Code で編集する場合の設定などを保存するフォルダ
- `docs`: このドキュメントサイトのためのフォルダ
- `node_modules`: Node.js の依存パッケージを保存するフォルダ
- `src`: Web サイトのソースコードフォルダ
- `nuxt.config.ts`: `Nuxt.js` の設定ファイルです。

---

`src` フォルダの中身は以下のとおりです。

- `assets`: スタイルシートやフォントなど、アセットファイル用のフォルダ
- `components`: 使いまわすことのできる「コンポーネント」群用のフォルダ。このうち、`components/content` にあるコンポーネントは Markdown 内で利用できます。
- `content`: サイトの文章などを保存するフォルダ
- `layouts`: サイトレイアウトを定義する用のフォルダ
- `modules`: `Nuxt.js` に機能を加えたりする「モジュール」用のフォルダ
- `public`: Web サイト上に直接配置する必要のあるファイルを保存するフォルダ
- `server`: サーバ用のモジュールフォルダ
- `types`: TypeScript の型定義を保存するフォルダ
