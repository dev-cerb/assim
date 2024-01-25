import express from 'express';
import cargoController from '../controllers/CargoController';


const router = new express.Router();

router.post('/', cargoController.create);
router.get('/', cargoController.index);
router.get('/:cargo', cargoController.show);
router.put('/:idCargo', cargoController.update);
router.delete('/:idCargo', cargoController.delete);



export default router;
