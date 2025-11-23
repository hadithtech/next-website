/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    experimental: {
        useDeploymentId: true,
        // Optionally, use with Server Actions
        useDeploymentIdServerActions: true,
    },
};

module.exports = nextConfig
