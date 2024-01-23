import Sequelize, { Model } from 'sequelize';
import Cargo from './Cargo';

export default class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      datanasc: Sequelize.DATE,
      endereco: Sequelize.STRING,
      cpf: Sequelize.INTEGER,
      email: Sequelize.STRING,
      telefone: Sequelize.INTEGER,
      cargo: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }

  static associations(models){
    this.hasOne(models.Cargo, {foreignKey: 'cargo', as: 'cargos'});
  }
}
