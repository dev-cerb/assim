import Funcionario from '../models/Funcionario';

class FuncionarioController {
  async create(req, res) {
    try{
      const novoFuncionario = await Funcionario.create(req.body);
      return res.json(novoFuncionario);
    }catch(e){
      return res.status(400).json(e.errors.map(err => err.message));
    }
  }

  async index(req, res){
    try{
      const funcionario = await Funcionario.findAll();
      return res.json(funcionario);
    }catch(e){
      return res.json(null);
    }
  }

  async show(req, res){
    try{
      const funcionario = await Funcionario.findAll({
        where: {
            nome: req.params.nome
        }
      });
      return res.json(funcionario);
    }catch(e){
      return res.json(null)
    }
  }

  async update(req,res){
    try{
      if (!req.params.id){
        return res.status(400).json({
          errors: ['Id não enviado.'],
        })
      }
      const funcionario = Funcionario.findByPk(req.params.id);

      if (!funcionario){
        return res.status(400).json({
          errors: ['Funcionário não existe.'],
        });
      }

      await Funcionario.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      return res.json(req.body);
    }catch(e){
      return res.json(null);
    }
  }

  async delete(req, res){
    try{
      if (!req.params.id){
        return res.status(400).json({
          errors: ['Id não enviado.'],
        })
      }
      const funcionario = Funcionario.findByPk(req.params.id);

      if (!funcionario){
        return res.status(400).json({
          errors: ['Funcionário não existe.'],
        });
      }

      await Funcionario.destroy({
        where:{
          id: req.params.id,
        }
      });

      return;

    }catch(e){
      console.log(e);
      return res.json(null);
    }
  }
}

export default new FuncionarioController();
