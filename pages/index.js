import Head from 'next/head';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51HO9RkC1aJwwpXUQPTyh95N9JttTnGALXQDe72ZH6Hg40uqMIKTiEMdI8GYFD2yIBRUYOcx5noiZzrW0gqNr3JhG00rmyDDcIw'
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <h2>Price: $10.99 USD</h2>
      <img
        src="https://images.ricardocuisine.com/services/recipes/277x375_7769.jpg"
        alt="pita sandwiches"
        style={{ maxWidth: '50px' }}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default function Index() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
