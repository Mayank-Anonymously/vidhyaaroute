// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['api.vidhyaroute.com'],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
