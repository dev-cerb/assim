import Sequelize, { Model } from 'sequelize';
import Funcionario from './Funcionario';

export default class Cargo extends Model {
  static init(sequelize) {
    super.init({
      idCargo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_cargo',
      },
      cargo: {
        type: Sequelize.STRING,
        foreignKey: true,
        field: 'cargo',
      },
      salario: Sequelize.FLOAT,
    }, {
      sequelize,
      id: false,
    });
    return this;
  }

  static associations(models){
    this.belongsToMany(models.Funcionario, {foreignKey: 'cargo', as: 'funcionarios'});
  }
}
