import { UAParser } from "ua-parser-js";

export async function GET(request: Request) {
  const ua = UAParser(Object.fromEntries(request.headers)).withClientHints();
  return new Response(JSON.stringify(ua, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
