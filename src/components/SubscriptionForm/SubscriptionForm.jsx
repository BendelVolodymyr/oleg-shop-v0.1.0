import { Formik, Field, ErrorMessage } from 'formik';
import { subscriptionSchema } from '../../schemas/subscriptionSchema';
import {
  SubscriptionFormButton,
  SubscriptionFormError,
  SubscriptionFormInput,
  WrapperSubscriptionForm,
} from './SubscriptionForm.styled';

export const SubscriptionForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={subscriptionSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Підписка:', values.email);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <WrapperSubscriptionForm>
          <SubscriptionFormInput
            type="email"
            name="email"
            placeholder="Ваш Email"
          />
          <SubscriptionFormError name="email" component="span" />
          <SubscriptionFormButton type="submit" disabled={isSubmitting}>
            Підписатися
          </SubscriptionFormButton>
        </WrapperSubscriptionForm>
      )}
    </Formik>
  );
};
