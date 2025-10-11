# プログラミング学習記録　２０２５/10/11（土）

## 昨日やったこと
- エラーの解消（slickというjQueryのプラグインを利用してカルーセルを作成する準備）

## 今日やること
- Google アナリティクスのレッスン
- jQueryの学習(カルーセルに画像を追加)

## 明日やること
-　jQuryの学習（お問い合わせフォームの入力チェック）
- ChatGPTsのYoutube動画を見て学習

## メモ
- slickをCDNで読み込む準備として...
実際にSlickを動かすには、次のコードの読み込みが必要です
〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
HTMLの <head> に次の2つを入れる
<!-- slickのCSS（デザイン） -->
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

 <body> の下部に次の3つを入れる
<!-- jQuery（Slickが使う） -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- slick本体のJavaScript -->
<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<!-- 自作のjsフォルダ -->
<script src="script.js"></script>
〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

- カルーセルの幅や余白はCSSで調整できる

