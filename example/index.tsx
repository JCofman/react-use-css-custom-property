import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import useCSSCustomProperty from '../src/index';

const App = () => {
  const [{ propertyValue: firstColor }, setFirstColor] = useCSSCustomProperty(
    '--first-color'
  );
  const [secondColorState, setSecondColor] = useCSSCustomProperty(
    '--second-color'
  );
  const [customQueryStateColor, setCustomQueryColor] = useCSSCustomProperty(
    '--second-color',
    '#container'
  );
  return (
    <div>
      <button onClick={() => setFirstColor('red')}>
        Set first color to red
      </button>
      <button
        onClick={() => {
          setFirstColor('hotpink');
          setSecondColor('white');
          setCustomQueryColor('white');
        }}
      >
        reset
      </button>
      <p id="firstParagraph">
        This paragraph should have a {firstColor} background and{' '}
        {secondColorState.propertyValue}
        text.
      </p>
      <button onClick={() => setSecondColor('green')}>
        Set second color to green
      </button>
      <p id="secondParagraph">
        This paragraph should have a {secondColorState.propertyValue} background
        and {firstColor} text.
      </p>
      <div id="container">
        <button onClick={() => setCustomQueryColor('blue')}>
          Set nested css property of third paragraph
        </button>
        <p id="thirdParagraph">
          This paragraph should have a blue background and yellow text.
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
