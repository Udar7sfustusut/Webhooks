export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405 };
  }

  // Optional simple auth (Discord-style token)
  const { token } = event.queryStringParameters || {};
  if (token !== "your-secret-token") {
    return { statusCode: 403, body: "Invalid webhook" };
  }

  // Parse but DO NOT modify
  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  // Optional: log for debugging
  console.log("Webhook received:", payload);

  // Discord webhooks return 204
  return {
    statusCode: 204
  };
}
