// export function middleware(request: Request) {
//   const origin = request.headers.get('origin');
//   console.log(origin);

//   const response = NextResponse.next();
//   response.headers.set("Access-Control-Allow-Origin", "*");
//   response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   response.headers.set("Access-Control-Max-Age", "86400");

//   console.log('Middleware!');
//   console.log(request.method);
//   console.log(request.url);

//   return response;
// }

// export const config = {
//   matcher: '/api/:path*',
// };

import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const origin = request.headers.get('origin');
  console.log('originality COLA', origin);

  const response = NextResponse.next();

  // Allow only specified origins to make requests
  const allowedOrigins = ['https://thien-portfolio.vercel.app', 'http://localhost:3000'];
  if (allowedOrigins.includes(origin ?? '')) {
    response.headers.set("Access-Control-Allow-Origin", origin ?? '*');
  }

  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Max-Age", "86400");

  console.log('Middleware!');
  console.log(request.method);
  console.log(request.url);

  return response;
}

export const config = {
  matcher: '/api/:path*',
};