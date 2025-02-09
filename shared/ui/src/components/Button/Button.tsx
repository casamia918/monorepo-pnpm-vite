export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button({ children }: React.PropsWithChildren) {
  return <button>{children ?? 'button!'}</button>;
}

export default Button;
