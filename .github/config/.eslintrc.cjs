module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: "eslint:recommended",
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"]
  },
  parserOptions:{
    "sourceType":"module"
  }
};

