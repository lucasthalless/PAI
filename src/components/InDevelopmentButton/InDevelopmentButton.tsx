"use client";

import { ButtonHTMLAttributes } from "react";

interface InDevelopmentButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function InDevelopmentButton({
  children,
  onClick,
  ...props
}: InDevelopmentButtonProps) {
  return (
    <button
      onClick={(e) => {
        alert("Ação em desenvolvimento indisponível no momento!");
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
