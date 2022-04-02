import databaseConfig from '../config';
import {Pool} from 'pg';

const client: Pool = new Pool({
	host: databaseConfig.host,
	user: databaseConfig.user,
	port: databaseConfig.port,
	password: databaseConfig.password,
	database: databaseConfig.database,
})