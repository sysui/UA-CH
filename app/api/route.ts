import { UAParser } from "ua-parser-js";

export async function GET(request: Request) {
  // @ts-ignore ua-parser-js@2.0のd.tsがないからエラーを無視
  const ua = UAParser(Object.fromEntries(request.headers)).withClientHints();
  return Response.json(ua);
}
