import Sequelize, { Model } from 'sequelize';

export default class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      dataNasc: Sequelize.DATE,
      endereco: Sequelize.STRING,
      cpf: Sequelize.INTEGER(11),
      email: Sequelize.STRING,
      telefone: Sequelize.INTEGER(11),
      cargo: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
