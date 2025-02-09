import './App.css';

import { Button, ButtonWrapper } from '@gerp/ui';
import {} from '@gerp/core';

function App() {
  return (
    <div>
      <p></p>
      <Button>Test11</Button>
      <ButtonWrapper>Wrapped Button!</ButtonWrapper>
      <p style={{ whiteSpace: 'pre' }}>{printEnv()}</p>
    </div>
  );
}

function printEnv() {
  return Object.entries(import.meta.env).map(([k, v]) => {
    return `${k}: ${v}\n`;
  });
}

export default App;
