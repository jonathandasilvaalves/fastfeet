import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipients from '../app/models/Recipients';
import DeliverymanFiles from '../app/models/DeliverymanFiles';
import Deliverymans from '../app/models/Deliverymans';

import databaseConfig from '../config/database';

const models = [User, Recipients, Deliverymans, DeliverymanFiles];

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
