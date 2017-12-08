module.exports = {
  "parser": "babel-eslint",

  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },

  "plugins": [
    "babel",
    "react",
    "import",
    "filenames"
  ],

  "extends": [
    "plugin:import/errors"
  ],

  "env": {
    "amd": true,
    "es6": true
  },

  "globals": {
    "clearInterval": false,
    "clearTimeout": false,
    "setInterval": false,
    "setTimeout": false,
    "console": false,

    "global": false,
    "module": false,
    "__dirname": false,
    "__filename": false,

    "document": false,
    "window": false,

    "expect": false,
    "sinon": false,
    "beforeAll": false,
    "afterAll": false,
    "jestExpect": false
  },

  "settings": {
    "import/resolver": "webpack"
  },

  "rules": {
    "strict": 0,

    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "comma-dangle": [2, "never"],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "no-unexpected-multiline": 2,
    "no-multi-spaces": 2,

    "block-scoped-var": 2,
    "dot-notation": 2,
    "dot-location": 2,
    "eqeqeq": [2, "allow-null"],
    "no-alert": 2,
    "no-caller": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2, { "boolean": false }],
    "no-implied-eval": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-with": 2,
    "radix": 2,
    "wrap-iife": [2, "any"],
    "yoda": 2,

    "array-bracket-spacing": 2,
    "block-spacing": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "indent": [2, 2, { "SwitchCase": 1 }],
    "jsx-quotes": [2, "prefer-double"],
    "linebreak-style": 2,
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 0 }],
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": [2, "never"],
    "operator-linebreak": [2, "after", { "overrides": { "?": "after" } }],
    "quotes": [2, "single"],
    "semi-spacing": 2,
    "keyword-spacing": [2, { "before": true, "after": true }],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, { "named": "never" }],
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "curly": 2,

    "arrow-parens": 2,
    "arrow-spacing": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "prefer-const": 2,

    "babel/semi": 2,

    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-uses-vars": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-bind": [2, { "ignoreRefs": true }],
    "react/jsx-no-duplicate-props": [2, { "ignoreCase": true }],
    "react/jsx-max-props-per-line": [2, { "maximum": 2 }],
    "react/jsx-handler-names": [2, { "eventHandlerPrefix": "on", "eventHandlerPropPrefix": "on" }],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": [2, { "allowAllCaps": true }],
    "react/jsx-uses-react": 2,
    "react/jsx-wrap-multilines": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^on.+$/",
        "/^render.+$/",
        "render"
      ],
      "groups": {
        "lifecycle": [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ]
      }
    }],

    "import/no-named-as-default": 2,
    "import/no-duplicates": 2,
    "import/no-anonymous-default-export": [2, {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowLiteral": false,
      "allowObject": false
    }],

    "filenames/match-exported": 2
  }
};
