"use server";

export const getBotResponse = async (
  userInput: string
): Promise<{ responseWA: string; options?: string[] }> => {
  const response = await fetch(process.env.CHATBOT_API_URL as string, {
    method: "POST",
    body: userInput,
  }).then((res) => res.json());

  console.log(response);
  return response;
};
