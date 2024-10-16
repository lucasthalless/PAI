interface CheckProps {
  position?: 1 | 2 | 3;
}

export function Check({ position }: CheckProps) {
  const color =
    position === 3 ? "#00FF85" : position === 2 ? "#00E0FF" : "#0055C3";
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" fill={color} />
      <path
        d="M5 8.94545L7.84444 12L13 6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
