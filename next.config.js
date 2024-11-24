const tsconfigPath = process.env.NEXTJS_TSCONFIG_PATH
    ? process.env.NEXTJS_TSCONFIG_PATH
    : './tsconfig.json'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // basePath: '/local-path',
    typescript: {
        tsconfigPath,
    },
};

module.exports = nextConfig;
