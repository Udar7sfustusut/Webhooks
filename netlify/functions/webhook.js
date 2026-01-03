export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  const { token } = event.queryStringParameters || {};
  if (token !== "securetoken123") return { statusCode: 403 }; // must match macro

  try {
    JSON.parse(event.body);
  } catch {
    return { statusCode: 400 };
  }

  return { statusCode: 204 }; // everything ok
}
