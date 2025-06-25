import { Sequelize, DataTypes } from "sequelize";
import { env as _env } from "process";
import dbConfig from "../../config/config.mjs";

const env = _env.NODE_ENV; /* || 'development'; */

const config = dbConfig[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;

export { sequelize, DataTypes };
export default db;
