import { config } from 'dotenv';
config();

export default () => ({
    serverConf: {
        port: process.env.SERVER_PORT
    },
    db:{
        hostname: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    session: {
        secret: process.env.SESSION_SECRET
    }
});