import { InputHTMLAttributes } from "react";


export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`input ${className ?? ""}`}>
      <input {...props} />
    </div>
  );
}
