import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Funcionario from '../models/Funcionario';
import Cargo from '../models/Cargo';

const models = [Funcionario, Cargo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
