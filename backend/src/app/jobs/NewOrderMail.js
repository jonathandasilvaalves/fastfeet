import Mail from '../../lib/Mail';

class NewOrderMail {
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    const { deliveryman, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega na fila',
      template: 'entrega',
      context: {
        deliveryman: deliveryman.name,
        product,
      },
    });
  }
}

export default new NewOrderMail();
