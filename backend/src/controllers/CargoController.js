import Cargo from '../models/Cargo';

class CargoController {
  async index(_req, res) {
    const novoCargo = await Cargo.create({
      cargo: 'Gerente',
      salario: 52300.23,
    });

    res.json(novoCargo);
  }
}

export default new CargoController();
