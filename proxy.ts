import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const getHighEntropyValues =
    "Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Arch, Sec-CH-UA-Bitness";
  const res = NextResponse.next();
  res.headers.set("Accept-CH", getHighEntropyValues);
  res.headers.set("Critical-CH", getHighEntropyValues);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Accept-CH", getHighEntropyValues);
  requestHeaders.set("Critical-CH", getHighEntropyValues);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("Accept-CH", getHighEntropyValues);
  response.headers.set("Critical-CH", getHighEntropyValues);
  return response;
}

export const config = {
  matcher: ["/api/"],
};
