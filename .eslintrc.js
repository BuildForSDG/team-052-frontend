module.exports = {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  env: {
    "browser": true,
    "jest": true,
    "es6": true
  },
  // extends: [
  //   'airbnb-base',
  //   "eslint:recommended",
  //   //    "eslint:all",
  //   "prettier",
  //   "plugin:react/recommended",
  //   // "plugin:import/errors",
  //   "plugin:jsx-a11y/recommended",
  //   // "airbnb",
  //   "prettier/react",
  //   "eslint-config-prettier",
  //   'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
  //   'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  //   'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  // ],
  extends:  [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    }
  },
  rules: {
    // 'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    "no-console": "warn",
    // "no-unused-vars": "off",
    "no-eval": "error",
    "import/first": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx", ".tsx"]
    }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    // "prettier/prettier": ["error"]
    "prettier/prettier": ["error", { "singleQuote": true }],


    // indent: ["error", 2],
    // "linebreak-style": ["error", "unix"],
    // quotes: ["error", "single"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "@typescript-eslint/explicit-function-return-type": "off", // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    "no-empty": "warn",
  },
  "plugins": [
    "import",
    "react-hooks",
    "prettier",
    "react",
    "jsx-a11y",
    "@typescript-eslint"
  ],
  "settings":{
    // "import/resolver": {
    //   "node": {
    //     "extensions": [".js", ".jsx", ".tsx"]
    //   }
    // },
    "react": {
      "react": {
        "version": "detect"
      },
    }
  },
};
