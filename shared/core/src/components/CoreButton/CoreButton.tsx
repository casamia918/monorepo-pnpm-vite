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

export default CoreButtonWrapper;
