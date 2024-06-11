// app/api/protected-route/route.js
import { authenticateToken } from '@/lib/auth';


export function GET(req) {
  const authResult = authenticateToken(req);
  if (authResult.status !== 200) {
    return new Response(JSON.stringify({ error: authResult.message }), { status: authResult.status });
  }

  return new Response(JSON.stringify({ message: 'This is Artitmos' }), { status: 200 });
}
