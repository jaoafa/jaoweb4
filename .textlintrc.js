// https://textlint.github.io/docs/configuring.html
module.exports = {
  rules: {
    // い抜き言葉を検出する
    // https://github.com/textlint-ja/textlint-rule-no-dropping-i
    '@textlint-ja/textlint-rule-no-dropping-i': true,
    // 「ええと」「あの」「まあ」などのフィラー（つなぎ表現）を禁止する
    // https://github.com/textlint-ja/textlint-rule-no-filler
    '@textlint-ja/no-filler': true,
    // サ抜き、サ入れ表現の誤用をチェックする
    // https://github.com/textlint-ja/textlint-rule-no-insert-dropping-sa
    '@textlint-ja/textlint-rule-no-insert-dropping-sa': true,
    // れ足す言葉をチェックする
    // https://github.com/textlint-ja/textlint-rule-no-insert-re
    '@textlint-ja/textlint-rule-no-insert-re': true,
    // 対になっていないかっこをエラーとする
    // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
    '@textlint-rule/textlint-rule-no-unmatched-pair': true,
    // RegExpでチェックする
    // https://github.com/textlint-rule/textlint-rule-pattern
    '@textlint-rule/pattern': {
      patterns: [
        {
          message: 'ウェブサイト to Web サイト',
          pattern: '/ウェブサイト/',
          replace: 'Web サイト',
        },
      ],
    },
    // 脚注をソートする
    // https://github.com/textlint-rule/textlint-rule-footnote-order
    'footnote-order': true,
    // 漢字よりもひらがなで表記したほうが読みやすい代名詞・形式名詞を指摘する
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-daimeishi
    'textlint-rule-ja-hiragana-daimeishi': true,
    // 漢字よりもひらがなで表記したほうが読みやすい副詞を指摘する
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi
    'textlint-rule-ja-hiragana-fukushi': true,
    // 漢字よりもひらがなで表記したほうが読みやすい補助動詞を指摘する
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-hojodoushi
    'textlint-rule-ja-hiragana-hojodoushi': true,
    // 全角と半角アルファベットの混在をチェックする
    // https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    // スペース周りのスタイルプリセット
    // https://github.com/textlint-ja/textlint-rule-preset-ja-spacing
    'preset-ja-spacing': {
      // 半角文字と全角文字の間にかならずスペースを入れる
      'ja-space-between-half-and-full-width': {
        space: 'always',
      },
      // インラインコードの前後にはスペースを入れる
      'ja-space-around-code': {
        before: true,
        after: true,
      },
    },
    // リンクの前後にはスペースを入れる
    'ja-space-around-link': {
      before: true,
      after: true,
    },
    // JTF日本語標準スタイルガイド
    // https://github.com/textlint-ja/textlint-rule-preset-JTF-style
    'preset-jtf-style': {
      '1.1.1.本文': false,
      '1.1.3.箇条書き': false,
      '1.2.1.句点(。)と読点(、)': false,
      '3.1.1.全角文字と半角文字の間': false,
      '3.3.かっこ類と隣接する文字の間のスペースの有無': false,
      '4.1.3.ピリオド(.)、カンマ(,)': false,
      '4.2.7.コロン(：)': false,
      '4.3.1.丸かっこ（）': true,
      '4.3.7.山かっこ<>': false,
    },
  },
  filters: {
    // 任意の単語を許可する
    // https://github.com/textlint/textlint-filter-rule-allowlist
    allowlist: {
      allow: [
        // コンポーネントの配列閉じタグは前スペースを許容する
        ' ]',
        // 単一行コンポーネントはすべて許容する
        '/^:.+?\\{.+\\}$/m',
      ],
    },
  },
}
