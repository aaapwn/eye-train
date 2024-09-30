/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    webpack: (config) => {
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.git', '**/public']
      }
      return config
    },
  };
  
  export default nextConfig;
  