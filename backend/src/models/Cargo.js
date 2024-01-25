import Sequelize, { Model } from 'sequelize';

export default class Cargo extends Model {
  static init(sequelize) {
    super.init({
      idCargo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        field: 'id_cargo',
      },
      cargo: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      salario: Sequelize.FLOAT,
    }, {
      sequelize,
      id: false,
    });
    return this;
  }

}
