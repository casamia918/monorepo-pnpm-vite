# 1. Step to reproduce

```bash
  pnpm install
  pnpm webapp dev
```

# 2. Depdendency graph

![dependency_graph](https://github.com/casamia918/monorepo-pnpm-vite/blob/main/dependency%20graph.png)

# 3. Requirement for Absolute Path Import

All of below import statements should be working.

## 3.1) In shared/ui/src/components/ButtonWrapper

```typescript
// 3.1.1) Importing from @gerp/ui root => WORKING
import { Button, ButtonProps } from '@gerp/ui';

// 3.1.2) Importing from @gerp/ui/components => WORKING
import { Button, ButtonProps } from '@gerp/ui/components/Button';

export interface ButtonWrapperProps extends ButtonProps {
  title?: string;
}

function ButtonWrapper({ title, ...props }: ButtonWrapperProps) {
  return (
    <div>
      <div>Wrapped 23233 {title ?? 'default'}</div>
      <Button {...props}></Button>
    </div>
  );
}
```

## 3.2) In shared/core/components/CoreButton

```typescript
// 3.2.1) Importing from @gerp/ui root => WORKING
import { Button, ButtonProps } from '@gerp/ui';

// 3.2.2) Importing from @gerp/ui/components => WORKING
import { Button, ButtonProps } from '@gerp/ui/components/Button';

export interface CoreButtonWrapperProps extends ButtonProps {
  title?: string;
}

function CoreButtonWrapper({ title, ...props }: CoreButtonWrapperProps) {
  return (
    <div>
      <div>Core Wrapped ~! {title ?? 'default'}</div>
      <Button {...props}></Button>
    </div>
  );
}

```

## 3.3) In system/web-app/src/App.tsx

```typescript
// 3.3.1) Importing from @gerp/ui root  => WORKING
import { Button, ButtonWrapper } from '@gerp/ui';

// 3.3.2) Importing from @gerp/ui/components => FAILED !!!
import { Button, ButtonWrapper } from '@gerp/ui/components';

// 3.3.3) Import from @gerp/core => FAILED !!
import { CoreButton, isBlankOrEmpty } from '@gerp/core';

// 3.3.4) Import from @gerp/core/components => FAILED !!
import { CoreButton, CoreButtonProps } from '@gerp/core/components';

// 3.3.5) Import from @gerp/core/util => FAILED !!
import { isBlankOrEmpty } from '@gerp/core/util';

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

```
