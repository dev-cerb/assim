import Cargo from '../models/Cargo';
import Funcionario from '../models/Funcionario';

class FuncionarioController {
  async create(req, res, next) {
    const {
      nome,
      datanasc,
      endereco,
      cpf,
      email,
      telefone,
      cargo
    } = req.body;
    const novoFuncionario = await Funcionario.create({
      nome,
      datanasc,
      endereco,
      cpf,
      email,
      telefone,
      cargo,
    });

    res.json(novoFuncionario);
    next();
  }

  async readAll(req, res){
    const todosFuncionarios = await Funcionario.findAll({
      include:[{
        model: Cargo,
        as: 'cargoId'
      }]
    })
    res.json(todosFuncionarios);
  }
}

export default new FuncionarioController();
