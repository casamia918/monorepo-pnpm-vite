import './App.css';

// 3.3.1) Importing from @gerp/ui root  => WORKING
import { Button, ButtonWrapper } from '@gerp/ui';

// 3.3.2) Importing from @gerp/ui/components => FAILED
// import { Button, ButtonWrapper } from '@gerp/ui/components';

// 3.3.3) Import from @gerp/core => FAILED
import { CoreButton, isBlankOrEmpty } from '@gerp/core';

// 3.3.4) Import from @gerp/core/components => FAILED
// import { CoreButton, CoreButtonProps } from '@gerp/core/components';

// 3.3.5) Import from @gerp/core/util => FAILED
// import { isBlankOrEmpty } from '@gerp/core/util';

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
