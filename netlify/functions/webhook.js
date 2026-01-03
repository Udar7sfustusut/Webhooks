let messages = []; // store last 50 embeds

export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const { token } = event.queryStringParameters || {};
  if (token !== "securetoken123") return { statusCode: 403 };

  let payload;
  try { payload = JSON.parse(event.body); } catch { return { statusCode: 400 }; }

  messages.unshift(payload);
  if (messages.length > 50) messages.pop();

  return { statusCode: 204 };
}

export { messages };
