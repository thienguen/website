/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co',
      'avatars.githubusercontent.com',
      'uploadthing.com',
      'cdn.discordapp.com',
    ],
  },
}
export default config
