import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { Form, FormLabel, Field, SubmitButton } from './ContactForm.styled';

const initialValues = { name: '', number: '' };

export const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          <span>Name</span>
          <Field
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor="number">
          <span>Number</span>
          <Field
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
