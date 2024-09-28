import { InputHTMLAttributes } from "react";


export function Input(props: InputHTMLAttributes<null>)  {
  return (
    <div className="input">
      <input type={props.type} placeholder={props.placeholder} disabled={props.disabled} />
    </div>
  );
};
