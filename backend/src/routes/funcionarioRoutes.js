import express from 'express';
import funcionarioController from '../controllers/FuncionarioController';


const router = new express.Router();

router.post('/', funcionarioController.create);
router.get('/', funcionarioController.index);
router.get('/:nome', funcionarioController.show);
router.put('/:id', funcionarioController.update);
router.delete('/:id', funcionarioController.delete);


export default router;
