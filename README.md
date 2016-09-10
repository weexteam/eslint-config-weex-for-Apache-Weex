# Weex eslint configs

Eslint configs for weex file. Both `.we` and `.js` file can be linted.

## Usage

First, setup [ESLint](http://eslint.org/) in your project, and install weex specified configs.

```
npm install eslist-config-weex --save-dev
```

Then add `extends` property in your `.eslintrc` file.

```json
{
  "extends": [ "weex" ]
}
```

## Rules

  + **Weex specified**
    + **no-timer-module**: prevent the usage of `timer` module.
  + Limits
    + Danger language features
      + no-alert
      + no-debugger
      + no-caller
      + no-void
      + no-with
      + no-labels
      + no-new-func
      + no-implied-eval
      + no-multi-str
    + No global variable
      + no-global-assign
      + no-implicit-globals
      + no-restricted-globals
    + Don't change internal objects
      + no-extend-native
      + no-prototype-builtins
      + no-iterator
      + no-proto
      + no-new-wrappers
      + no-obj-calls
      + use-isnan
    + Unsave scope
      + no-shadow
      + no-use-before-define
      + block-scoped-var
      + no-redeclare
      + no-shadow-restricted-names
      + no-inner-declarations
      + no-loop-func
      + no-unsafe-negation
      + no-return-assign
      + no-cond-assign
  + Advice
    + no-console
    + no-empty
    + no-unused-vars
    + no-sparse-arrays
    + no-template-curly-in-string
    + no-unreachable
    + no-constant-condition
    + no-dupe-args
    + no-dupe-keys
    + no-ex-assign
    + no-func-assign
    + no-duplicate-case
    + no-self-compare
    + no-self-assign
    + no-extra-bind
    + no-useless-call
    + array-callback-return
