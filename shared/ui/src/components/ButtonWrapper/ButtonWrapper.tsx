// 3.1.1) Importing from @gerp/ui root => WORKING
// import { Button, ButtonProps } from '@gerp/ui';

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

export default ButtonWrapper;
