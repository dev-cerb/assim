/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cargos', {
      idCargo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_cargo',
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
      },
      salario: {
        type: Sequelize.FLOAT,
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
    },{
      id:false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cargos', {
      idCargo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_cargo',
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salario: {
        type: Sequelize.FLOAT,
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
    },{
      id:false,
    });
  },
};
