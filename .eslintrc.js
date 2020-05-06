module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  extends: [
    'airbnb-base',
    "eslint:recommended",
    //    "eslint:all",
    "prettier",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    // "airbnb",
    "prettier/react",
    "eslint-config-prettier",
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
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    "no-console": "warn",
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
  },
  "plugins": [
    "import",
    "react-hooks",
    "prettier",
    "react",
    "jsx-a11y",
  ],
  "settings":{
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".tsx"]
      }
    },
    "react": {
      "react": {
        "version": "detect"
      },
    }
  },
};
