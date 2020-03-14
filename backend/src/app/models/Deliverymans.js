import Sequelize, { Model } from 'sequelize';

class Deliverymans extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.DeliverymanFiles, {
      foreignKey: 'avatar_id',
    });
  }
}

export default Deliverymans;
