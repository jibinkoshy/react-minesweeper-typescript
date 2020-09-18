import React, { useState } from 'react';
import NumberDisplay from '../NumberDisplay';
import './App.scss';
import { generateCells } from '../../utils';

const App: React.FC = () => {
  const [cells, useCells] = useState(generateCells());
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
