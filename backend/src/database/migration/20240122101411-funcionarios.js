/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcionarios', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      datanasc: {
        type: Sequelize.DATE,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.INTEGER(11),
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('funcionarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      dataNasc: {
        type: Sequelize.DATE(3),
      },
      endereco: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.INTEGER(11),
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
};
