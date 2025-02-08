import * as Yup from 'yup';

export const subscriptionSchema = Yup.object().shape({
  email: Yup.string().email('Некоректний email').required("Email обов'язковий"),
});
