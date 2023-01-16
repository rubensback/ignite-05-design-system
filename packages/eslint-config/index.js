module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  rules: {
    "react/self-closing-comp": [
      "warn",
      {
        "component": true,
        "html": false
      }
    ]
  }
}