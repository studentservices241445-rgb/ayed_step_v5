// Netlify Function (Backend Proxy) — أكاديمية عايد الرسمية
// مهم: لا تضع مفتاح API داخل الواجهة.
// ضع OPENAI_API_KEY في Environment Variables داخل Netlify.

export async function handler(event) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Use provided API key from environment or fallback to a default for testing
    const apiKey = process.env.OPENAI_API_KEY || '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';
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Missing OPENAI_API_KEY' }) };
    }

    const body = JSON.parse(event.body || '{}');
    // body example:
    // {
    //   "task": "assistant" | "generate_quiz" | "generate_plan" | "share_text",
    //   "payload": {...}
    // }

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: body.model || 'gpt-4o-mini',
        temperature: body.temperature ?? 0.4,
        messages: body.messages || [
          { role: 'system', content: 'You are a helpful assistant for a STEP placement program in Saudi Arabic.' },
          { role: 'user', content: JSON.stringify(body) }
        ]
      })
    });

    const data = await res.json();
    return {
      statusCode: res.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (e) {
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: String(e) }) };
  }
}
