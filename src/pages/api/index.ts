import type { NextApiRequest, NextApiResponse } from "next";
import { UAParser } from "ua-parser-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // get user-agent header
  let ua = UAParser(req.headers["user-agent"]);

  // BEGIN since@2.0 - you can also pass client-hints data to UAParser

  // note: only works in secure context (https:// or localhost or file://)

  const getHighEntropyValues =
    "Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Arch, Sec-CH-UA-Bitness";
  res.setHeader("Accept-CH", getHighEntropyValues);
  res.setHeader("Critical-CH", getHighEntropyValues);

  ua = UAParser(req.headers).withClientHints(); // eslint-disable-next-line

  // END since@2.0

  // write the result as response
  res.end(JSON.stringify(ua, null, "  "));
}
