/* global process */

import { getOpteryAffiliateDestination, opteryAffiliateUnavailableMessage } from "../../src/server/opteryAffiliateRedirect.js";

const redirectHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow"
};

function setHeaders(response, headers) {
  for (const [name, value] of Object.entries(headers)) response.setHeader(name, value);
}

export function createOpteryRedirectHandler(getEnvironment = () => process.env) {
  return function opteryRedirectHandler(request, response) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.statusCode = 405;
      response.setHeader("Allow", "GET, HEAD");
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      setHeaders(response, redirectHeaders);
      response.end("Method not allowed.");
      return;
    }

    const destination = getOpteryAffiliateDestination(getEnvironment());

    if (!destination) {
      response.statusCode = 503;
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      setHeaders(response, redirectHeaders);
      response.end(request.method === "HEAD" ? undefined : opteryAffiliateUnavailableMessage);
      return;
    }

    response.statusCode = 307;
    response.setHeader("Location", destination.toString());
    setHeaders(response, redirectHeaders);
    response.end();
  };
}

export default createOpteryRedirectHandler();
