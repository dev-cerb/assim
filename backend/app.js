import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import funcionarioRoutes from './src/routes/funcionarioRoutes';
import cargoRoutes from './src/routes/cargoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/funcionario/', funcionarioRoutes);
    this.app.use('/cargo/', cargoRoutes);
  }
}

export default new App().app;
