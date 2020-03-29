# React use CSS custom properties &amp; Utilities &middot;

> Get or set a css custom property value with a react hook

This is a [React Hook](https://reactjs.org/docs/hooks-overview.html) which can get or set a CSS variable aka (Custom property).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [React use CSS custom properties &amp; Utilities &middot;](#react-use-css-custom-properties-amp-utilities-middot)
  - [Affiliate](#affiliate)
  - [🎯 Objective](#-objective)
  - [🚀 Installation](#-installation)
  - [Usage](#usage)
    - [API](#api)
      - [Parameters](#parameters)
      - [Return Values](#return-values)
  - [Contribute and Commands](#contribute-and-commands)
    - [Jest](#jest)
    - [TypeScript](#typescript)
  - [Continuous Integration](#continuous-integration)
  - [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Affiliate

If you like to support my OSS work you could "buy me a coffee" or want to take a look on tools I recommend you could checkout.

<table><tr><td align="center"><a href="https://www.buymeacoffee.com/jcofman" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-yellow.png" alt="Buy Me A Coffee" width="201" height="51" ><br /><sub><b>Buy me a coffee</b></sub></a><br /> My personal patreon</a></td><td align="center"><a href="https://a.paddle.com/v2/click/49831/106566?link=1947" target="_blank"><img src="https://img.stackshare.io/service/6882/687474703a2f2f692e696d6775722e636f6d2f446d6d4a56335a2e706e67.png" alt="Buy Me A Coffee" width="50" height="50" ><br /><sub><b>Sizzy</b></sub></a><br /> A super useful App when developing for different screens</a></td></tr></table>

## 🎯 Objective

Sometimes you want to change or get a CSS custom property value inside you react application to use the value inside your js code. You may also want to set and overwrite a CSS custom property.

## 🚀 Installation

`npm i react-use-css-custom-property --save` or `yarn add react-use-css-custom-property`

## Usage

You can import and use the hook like the following example

```js
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import useCSSCustomProperty from 'react-use-css-custom-property';

const App = () => {
  const [firstColor, setFirstColor] = useCSSCustomProperty('--first-color');
  const [secondColor, setSecondColor] = useCSSCustomProperty('--first-color');
  return (
    <div>
      <button onClick={() => setFirstColor('red')}>
        Set first color to red
      </button>
      <p id="firstParagraph">
        This paragraph should have a {firstColor.propertyValue} background and
        {secondColor.propertyValue}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

and your `index.css` file

```css
:root {
  --first-color: hotpink;
  --second-color: white;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### API

```js
const [
  { propertyValue, propertyName, selectedElement, error, status },
  setCustomCSSProperty,
] = useCSSCustomProperty(propertyName, query);
```

#### Parameters

propertyName: string, query?: string

- `propertyName`: a string for the property name you want to get
- `query`: (_optional_) a query to get properties from specific HTMLElements default is `:root`

#### Return Values

- `propertyValue`: the current custom prop value
- `propertyName`: the current custom prop name
- `selectedElement`: if there's a request or revalidation loading
- `error`: A string which tells you what went wrong e.g. the CSS custom property does not exist
- `status`: can have the following three states 'INIT | 'OK' | 'ERROR'

- setCustomCSSProperty: function to mutate the custom property value

## Contribute and Commands

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, [we use Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://jcofman.de"><img src="https://avatars2.githubusercontent.com/u/2118956?v=4" width="100px;" alt="Jacob Cofman"/><br /><sub><b>Jacob Cofman</b></sub></a><br /><a href="https://github.com/JCofman/jc-website/commits?author=JCofman" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
