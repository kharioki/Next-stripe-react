import Stripe from 'stripe';
import { stripeKey } from '../../keys';

const stripe = new Stripe(stripeKey);

export default async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Delicious pita sandwiches',
      payment_method: id,
      confirm: true
    });

    console.log(payment);

    return res.status(200).json({
      confirm: 'kiki123'
    });
  } catch (error) {}
};
