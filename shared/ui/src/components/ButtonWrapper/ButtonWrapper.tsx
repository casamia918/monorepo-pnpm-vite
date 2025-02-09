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
