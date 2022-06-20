import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGNAME,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT ?? 5432),
});

// eslint-disable-next-line max-len
const query = <T = any>(text: string, params: any[]): Promise<QueryResult<T>> => pool.query(text, params);

export default query;
