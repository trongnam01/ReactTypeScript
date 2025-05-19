// config-overrides.js
const { override, useBabelRc, overrideDevServer } = require('customize-cra');

const customDevServer = () => (config) => {
    config.setupMiddlewares = (middlewares, devServer) => {
        // Đảm bảo không có middleware nào bị ghi đè
        console.log("Custom middlewares applied");
        return middlewares;
    };
    return config;
};

module.exports = {
    webpack: override(
        useBabelRc()
    ),
    devServer: overrideDevServer(customDevServer())
};
