"use server";

interface BotResponse {
  responseWA: string;
  options?: string[];
}

export const getBotResponse = async (
  userInput: string
): Promise<BotResponse> => {
  const apiUrl = process.env.CHATBOT_API_URL;

  if (!apiUrl) {
    throw new Error("CHATBOT_API_URL não está configurada.");
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    body: userInput,
  });

  if (!response.ok) {
    throw new Error(
      `Erro na API do chatbot: ${response.status} ${response.statusText}`
    );
  }

  const data: BotResponse = await response.json();
  return data;
};
