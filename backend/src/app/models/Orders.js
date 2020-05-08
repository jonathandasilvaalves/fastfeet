import Sequelize, { Model } from 'sequelize';

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        status: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.canceled_at) return 'canceled';
            if (this.end_date) return 'done';
            if (this.start_date) return 'progress';
            return 'pedding';
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipients, { foreignKey: 'recipient_id' });
    this.belongsTo(models.Deliverymans, { foreignKey: 'deliveryman_id' });
    this.belongsTo(models.Signatures, { foreignKey: 'signature_id' });
    this.hasMany(models.DeliveryProblems, { foreignKey: 'delivery_id' });
  }
}

export default Orders;
