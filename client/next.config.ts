import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Cambiar la carpeta de salida del build
  distDir:'build',

  // Configurar alias opcionalmente
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
};

export default nextConfig;