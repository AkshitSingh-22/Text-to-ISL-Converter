const API_URL = "http://localhost:8000";

export async function translateText(text) {
  const response = await fetch(`${API_URL}/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(err || "Translation request failed");
  }

  return response.json();
}

export async function fetchSignWords() {
  const response = await fetch(`${API_URL}/sign-words`);
  if (!response.ok) {
    const err = await response.text();
    throw new Error(err || "Failed to load sign words");
  }
  return response.json();
}
