import './App.css';

// 1) Importing from @gerp/ui root  => WORKING
import { Button, ButtonWrapper } from '@gerp/ui';

// 2) Importing from @gerp/ui/components => FAILED
// import { Button, ButtonWrapper } from '@gerp/ui/components';

// 3) Import from @gerp/core => FAILED
import { CoreButton, isBlankOrEmpty } from '@gerp/core';

// 4) Import from @gerp/core/components => FAILED
// import { Button, ButtonWrapper } from '@gerp/core/components';

function App() {
  return (
    <div>
      <p></p>
      <Button>Test1: UI Button</Button>
      <ButtonWrapper>Test2: Wrapped UI Button</ButtonWrapper>
      <CoreButton>Test3: CoreButton</CoreButton>
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
