import nextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});


const nextConfig = {
    compiler: { removeConsole: process.env.NODE_ENV === "production" },
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
};

export default withBundleAnalyzer(nextConfig);