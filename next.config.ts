import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Send apex domain to www (Firebase App Hosting serves www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "aquariussolutions.com" }],
        destination: "https://www.aquariussolutions.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
