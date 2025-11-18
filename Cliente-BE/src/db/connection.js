import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user: process.env.PGUSER || 'neondb_owner',
    host: process.env.PGHOST || 'ep-curly-sound-ahcrxe5b-pooler.c-3.us-east-1.aws.neon.tech',
    database: process.env.PGDATABASE || 'neondb',
    password: process.env.PGPASSWORD || 'npg_WUmQdXwNZ2f6',
    ssl: { rejectUnauthorized: false },
});

export default pool;