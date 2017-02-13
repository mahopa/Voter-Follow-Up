/**
 * Created by alexandermiller on 2/12/17.
 */
import * as convict from 'convict';
import Config = convict.Config;

// Define a schema
const conf: Config = convict({
    env: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    email: {
        address: {
            doc: '',
            format: 'email',
            default: null,
            env: 'EMAIL_ADDRESS'
        },
        password: {
            doc: '',
            format: 'String',
            default: null,
            env: 'EMAIL_PASSWORD'
        }
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 1337,
        env: 'PORT'
    }
});

// // Load environment dependent configuration
// var env = conf.get('env');
// conf.loadFile('./config/' + env + '.json');

// Perform validation
conf.validate({strict: true});

export { conf }