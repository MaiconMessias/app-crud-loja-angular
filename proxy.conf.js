  const PROXY_CONFIG = {
    "/api": {
      target: "https://scaling-space-dollop-vgvgjrqvr7qcw5vj-8080.app.github.dev",
      secure: true,
      changeOrigin: true,
      logLevel: "debug"  
    }
};

module.exports = PROXY_CONFIG;