
import { readdirSync } from 'fs';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import { basename as _basename,} from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import { env as _env } from 'process';
import dbConfig from "../config/config.mjs";

const basename = _basename(fileURLToPath(import.meta.url));
const env = _env.NODE_ENV || 'development';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const config = dbConfig[env]
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(async (file) => {
    const modelPath = path.join(__dirname, file)
    const { default: modelFactory } = await import(modelPath);
    const model = modelFactory(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
