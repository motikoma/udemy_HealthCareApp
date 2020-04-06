module.exports = {
  env: {
      browser: true,
      node: true,
  },
  extends: [
      "airbnb",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/typescript",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint"
  ],
  plugins: [
      "@typescript-eslint",
      "promise"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
          jsx: true
      },
      project: "./tsconfig.json"
  },
  rules: {
      "@typescript-eslint/indent": "off",
      // 空インターフェースを許可する
      "@typescript-eslint/no-empty-interface": "off",
      // インターフェース名をIから始めない
      "@typescript-eslint/interface-name-prefix": "off",
      // camelcaseを強制する
      "@typescript-eslint/camelcase":"off",
      "prettier/prettier": [
          2,
          {
              arrowParens: "avoid",
              bracketSpacing: false,
              jsxBracketSameLine: true,
              printWidth: 120,
              singleQuote: true,
              trailingComma: "es5",
              tabWidth: 4,
          },
      ],
      "@typescript-eslint/adjacent-overload-signatures": "error",
      // if制御で最終的に何も返さなくてもOK
      "consistent-return": 0,
      // .jsファイル内でDependenciesのパッケージをimportしてもOK
      "import/no-extraneous-dependencies": 0,
      "no-unused-expressions": 0,
      // 変数に _ 使ってもOK
      "no-underscore-dangle": 0,
      // dynamic-requireを許可 静的ページ 言語判定後にrequireパスを分岐しているため
      "global-require": 0,
      // ver6.1.0以降非推奨になっているため対象から削除
      "jsx-a11y/label-has-for": 0,
      // クラスメソッドがthisを使わなくてもよい
      "class-methods-use-this": 0,
      "func-names":"off",
      "@typescript-eslint/explicit-function-return-type":[
          "error",
          {
              "allowTypedFunctionExpressions":true,
              "allowExpressions":true,
              "allowHigherOrderFunctions":false
          }
      ],
      // 使用していない変数及びモジュールは許可しない
      "@typescript-eslint/no-unused-vars": ["error"],
      "promise/catch-or-return": "error",
      "import/prefer-default-export": "off",
      // コールバックエラー処理を強制する
      "handle-callback-err": "error",
      // 空のブロックステートメントを許可しない
      "no-empty": "error",
      // 不要なcatchを許可しない
      "no-useless-catch": "error",
      // catch文内で例外変数に再代入を行わないこと
      "no-ex-assign": "error",
      // finallyブロック内の制御フローステートメントを許可しません
      "no-unsafe-finally": "error",
      // 意図的なconsole以外は警告
      "no-console": ["warn", {
          allow: ["warn", "error", "info"],
      }],
      // 動画のキャプションファイル（WebVTT）は毎回用意できないので必須化しない
      "jsx-a11y/media-has-caption": "off",
      // importする際に相対パスの使用を許可しない
      "import/no-unresolved": "off",
  },
  overrides: [
      {
          "files": ["*.js"],
          "rules": {
              "@typescript-eslint/no-var-requires": "off"
          }
      }
  ],
  globals: {
      document: true,
      window: true,
      CustomEvent: true,
  },
}