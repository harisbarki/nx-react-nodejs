export enum ButtonType {
  submit = 'submit',
  button = 'button',
}

export interface ButtonProps {
  type: ButtonType;
  text: string;
  onClick: (e: any) => void;
}

export function CustomButton(props: ButtonProps) {
  return <button onClick={props.onClick} type={props.type}>{props.text}</button>;
}
