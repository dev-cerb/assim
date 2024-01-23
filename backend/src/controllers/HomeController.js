import Funcionario from '../models/Funcionario';

class HomeController {
  async index(req, res) {
    const novoFuncionario = await Funcionario.create({
      id: 1,
      nome: 'Carlos',
      datanasc: '1998-8-20',
      endereco: 'Rua ficticia',
      cpf: 90123495421,
      email: 'email@email.com',
      telefone: 21999999999,
      cargo: 'Chefe',
    });

    res.json(novoFuncionario);
  }
}

export default new HomeController();
