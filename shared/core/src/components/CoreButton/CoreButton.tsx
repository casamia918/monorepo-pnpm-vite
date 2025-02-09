// 3.2.1) Importing from @gerp/ui root => WORKING
// import { Button, ButtonProps } from '@gerp/ui';

// 3.2.2) Importing from @gerp/ui/components => WORKING
import { Button, ButtonProps } from '@gerp/ui/components/Button';

export interface CoreButtonProps extends ButtonProps {
  title?: string;
}

function CoreButton({ title, ...props }: CoreButtonProps) {
  return (
    <div>
      <div>Core Wrapped ~! {title ?? 'default'}</div>
      <Button {...props}></Button>
    </div>
  );
}

export default CoreButton;
