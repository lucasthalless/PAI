export default function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={15} fill="none">
      <path
        fill="#fff"
        width={32}
        height={32}
        d="M3.333 8h9.334-9.334ZM3.333 8l4 4-4-4ZM3.333 8l4-4-4 4Z"
      />
      <path
        width={32}
        height={32}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.333 8h9.334M3.333 8l4 4m-4-4 4-4"
      />
    </svg>
  );
}
