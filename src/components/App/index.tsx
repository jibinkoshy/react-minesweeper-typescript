import React from 'react';
import NumberDisplay from '../NumberDisplay';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={1} />
        <div className="Face">
          <span role="img" aria-label="face" style={{ color: 'yellow' }}>
            ☺
          </span>
        </div>
        <NumberDisplay value={0} />
      </div>
      <div className="Body">Body</div>
    </div>
  );
};

export default App;
