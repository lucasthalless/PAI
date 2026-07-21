"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <h1>Chatbot PAI</h1>
      <div className="separator"></div>
      <p>Ocorreu um erro ao carregar o chatbot.</p>
      <p>{error.message}</p>
      <button onClick={reset}>Tentar novamente</button>
    </>
  );
}
