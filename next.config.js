/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
}
const svgr = require('next-svgr');

module.exports = withPlugins([[svgr]], nextConfig);
