export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const { token } = event.queryStringParameters || {};
  if (token !== "YOUR_SECRET_TOKEN") return { statusCode: 403 };

  // Accept payload, do not modify
  try { JSON.parse(event.body); } catch { return { statusCode: 400 }; }

  return { statusCode: 204 };
}
