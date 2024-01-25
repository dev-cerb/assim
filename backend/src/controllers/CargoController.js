import Cargo from '../models/Cargo';

class CargoController {
  async create(req, res) {
    try{
      const novoFuncionario = await Cargo.create(req.body);
      return res.json(novoFuncionario);
    }catch(e){
      return res.status(400).json(e.errors.map(err => err.message));
    }
  }

  async index(req, res){
    try{
      const cargo = await Cargo.findAll();
      return res.json(cargo);
    }catch(e){
      return res.json(null);
    }
  }

  async show(req, res){
    try{
      const cargo = await Cargo.findAll({
        where: {
          cargo: req.params.cargo,
        }
      });
      return res.json(cargo);
    }catch(e){
      return res.json(null)
    }
  }

  async update(req,res){
    try{
      if (!req.params.idCargo){
        return res.status(400).json({
          errors: ['Id não enviado.'],
        })
      }
      const cargo = Cargo.findByPk(req.params.idCargo);

      if (!cargo){
        return res.status(400).json({
          errors: ['Cargo não existe.'],
        });
      }

      await Cargo.update(req.body, {
        where: {
          idCargo: req.params.idCargo
        }
      });

      return res.json(req.body);
    }catch(e){
      return res.json(null);
    }
  }

  async delete(req, res){
    try{
      if (!req.params.idCargo){
        return res.status(400).json({
          errors: ['Id não enviado.'],
        })
      }
      const cargo = Cargo.findByPk(req.params.idCargo);

      if (!cargo){
        return res.status(400).json({
          errors: ['Funcionário não existe.'],
        });
      }

      await Cargo.destroy({
        where:{
          idCargo: req.params.idCargo,
        }
      });

      return;

    }catch(e){
      console.log(e);
      return res.json(null);
    }
  }
}

export default new CargoController();
