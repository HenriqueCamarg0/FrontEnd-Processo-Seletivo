const { log } = require("@angular-devkit/build-angular/src/builders/ssr-dev-server");

const PROXY_CONFIG = [
    {
        context: ["/api/formulario"],
        target: "http://localhost:8080",
        secure: false,
        logLevel: "debug"
    }
];

module.exports = PROXY_CONFIG;