import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipients from '../app/models/Recipients';
import DeliverymanFiles from '../app/models/DeliverymanFiles';
import Deliverymans from '../app/models/Deliverymans';
import Orders from '../app/models/Orders';
import Signatures from '../app/models/Signatures';
import DeliveryProblems from '../app/models/DeliveryProblems';

import databaseConfig from '../config/database';

const models = [
  User,
  Recipients,
  Deliverymans,
  DeliverymanFiles,
  Orders,
  Signatures,
  DeliveryProblems,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
