# React Navigation deeplink breaks Jest

This is a reproducible example of enabling react-navigation's deeplinks casuing jest to break when running a test.

This repo is setup using the expo react-navigation starter template, as detailed [here](https://reactnavigation.org/docs/getting-started#starter-template):

```bash
npx create-expo-app@latest --template https://github.com/react-navigation/template
```

To it, `jest` and `jest-expo` is installed, as per the instructions [here](https://github.com/expo/expo/tree/main/packages/jest-expo).

## Breaking

In `App.tsx`, on line 19, the linking config is enabled or disabled.

When disabled, running `yarn test` works fine, and the tests in `__tests__/App-test.tsx` passes as expected.

However, when setting `enabled` to `true`, the tests break. The reason behind the breakage is unclear - I would love some help here.