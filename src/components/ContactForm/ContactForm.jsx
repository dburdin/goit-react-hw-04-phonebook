import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Form, FormLabel, Field, SubmitButton } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const initialValues = { name: '', number: '' };

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  number: Yup.string()
    .min(5, 'Too Short!')
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
});

export const ContactForm = ({ addContact, contacts }) => {
  const onSubmit = (values, { resetForm }) => {
    const normilizedName = values.name.toLowerCase();
    const similarName = contacts.filter(
      contact => contact.name.toLowerCase() === normilizedName
    );
    if (similarName.length > 0) {
      return alert(`${similarName[0].name} is already in contacts!`);
    }
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          <span>Name</span>
          <Field id="name" type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            style={{ color: 'red', fontSize: '11px' }}
          ></ErrorMessage>
        </FormLabel>
        <FormLabel htmlFor="number">
          <span>Number</span>
          <Field id="number" type="tel" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: 'red', fontSize: '11px' }}
          ></ErrorMessage>
        </FormLabel>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
