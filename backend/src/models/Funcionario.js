import Sequelize, { Model } from 'sequelize';

export default class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      datanasc: Sequelize.DATE,
      endereco: Sequelize.STRING,
      cpf: Sequelize.INTEGER,
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido',
          }
        }
      },
      telefone: Sequelize.INTEGER,
      cargo: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }


}
