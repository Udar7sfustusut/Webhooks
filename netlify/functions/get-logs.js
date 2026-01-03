import { messages } from "./webhook.js";

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(messages),
    headers: { "Content-Type": "application/json" }
  };
}
