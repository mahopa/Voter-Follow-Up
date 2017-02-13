"use strict";
/**
 * Created by alexandermiller on 2/11/17.
 */
const Hapi = require("hapi");
exports.init = (port) => {
    const server = new Hapi.Server();
    server.connection({
        port: port
    });
    return server;
};
//# sourceMappingURL=server.js.map