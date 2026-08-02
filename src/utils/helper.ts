export function formatPayload(payload: string): any {
  try {
    return JSON.parse(payload);
  } catch {
    // If it's not valid JSON (e.g., an HTML error page), return the raw text
    return payload;
  }
}
