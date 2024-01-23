import express from 'express';
import funcionarioController from '../controllers/FuncionarioController';
import cargoController from '../controllers/CargoController';

const router = new express.Router();

router.post('/', funcionarioController.create);
router.get('/', funcionarioController.readAll);
/*router.post('/', funcionarioController.index);
router.get('/', cargoController.index);
router.post('/', cargoController.index);*/

export default router;
