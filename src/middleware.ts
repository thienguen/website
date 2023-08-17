import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const origin = request.headers.get('origin');
  // Beautified logs using ANSI escape codes
  const green = '\x1b[32m';
  const blue  = '\x1b[34m';
  const red   = '\x1b[31m';
  const reset = '\x1b[0m';

  console.log('-'.repeat(80))
  console.log(`${green}\n\nOriginality Cola!${reset}`, origin);
  
  const response = NextResponse.next();
  // Allow only specified origins to make requests
  const allowedOrigins = ['https://thien-portfolio.vercel.app', 'http://localhost:3000'];
  if (allowedOrigins.includes(origin ?? '')) {
    response.headers.set("Access-Control-Allow-Origin", origin ?? '*');
  }
  
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Max-Age", "86400");
  
  console.log(`${green}Middleware!${reset}`);
  console.log(`${blue}Method:${reset} ${request.method}`);
  console.log(`${red}URL:${reset} ${request.url}\n\n`);
  console.log('-'.repeat(80) + '\n')

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
