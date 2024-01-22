import Sequelize, { Model } from 'sequelize';

export default class Cargo extends Model {
  static init(sequelize) {
    super.init({
      cargo: Sequelize.STRING,
      salario: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
