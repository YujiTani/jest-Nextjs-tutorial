# Next.js + Jest + typescript

appの作成は下記コマンド

Next v12以降からは
with-jestの例で使用すると、JestとReact Testing Libraryをすぐに使い始めることができます。

```jsx
npx create-next-app@latest  --typescript --example with-jest with-jest-app
```

[Github](https://github.com/vercel/next.js/tree/canary/examples/with-jest) この構成を確認する

## Jestの設定 (Rustコンパイラを使用)

Next.js 12以降、Next.jsにはJestのための設定が組み込まれています。

Jestをセットアップするには、jest, jest-environment-jsdom, @testing-library/react, @testing-library/jest-dom をインストールしてください。

```jsx
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### package.jsonにtest scriptを追加

```jsx
"test": "jest --watch",
"test:ci": "jest --ci"
```

[jest ci の使い方](https://jestjs.io/ja/docs/cli)