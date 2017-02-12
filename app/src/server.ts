/**
 * Created by alexandermiller on 2/11/17.
 */
import * as Hapi from 'hapi';

export const init = (port: number) => {

    const server = new Hapi.Server();

    server.connection({
        port: port
    });

    return server;
};
