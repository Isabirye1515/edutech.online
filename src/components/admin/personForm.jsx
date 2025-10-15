import React from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import {
  TextInput,
  TextArea,
  Button,
  DatePicker,
  DatePickerInput
} from '@carbon/react';

// Yup validation
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  middleName: Yup.string(),
  lastName: Yup.string().required('Last name is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string().required('Username is required'),
  description: Yup.string(),
});

const PersonForm = ({ initialValues, onSubmit }) => {
  const defaultValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    username: '',
    description: '',
  };

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, isSubmitting, setFieldValue }) => (
        <Form style={{ maxWidth: '500px', margin: 'auto' }}>
          <TextInput
            id="firstName"
            name="firstName"
            labelText="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={!!values.firstName && !values.firstName.trim()}
            invalidText="First name is required"
            style={{ marginBottom: '1rem' }}
          />

          <TextInput
            id="middleName"
            name="middleName"
            labelText="Middle Name"
            value={values.middleName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginBottom: '1rem' }}
          />

          <TextInput
            id="lastName"
            name="lastName"
            labelText="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={!!values.lastName && !values.lastName.trim()}
            invalidText="Last name is required"
            style={{ marginBottom: '1rem' }}
          />

          <DatePicker
            dateFormat="m/d/Y"
            datePickerType="single"
            onChange={(dates) => setFieldValue('dateOfBirth', dates[0])}
            style={{ marginBottom: '1rem' }}
          >
            <DatePickerInput
              id="dateOfBirth"
              placeholder="mm/dd/yyyy"
              labelText="Date of Birth"
              type="text"
            />
          </DatePicker>

          <TextInput
            id="email"
            name="email"
            type="email"
            labelText="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginBottom: '1rem' }}
          />

          <TextInput
            id="username"
            name="username"
            labelText="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginBottom: '1rem' }}
          />

          <TextArea
            id="description"
            name="description"
            labelText="Description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginBottom: '1rem' }}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonForm;
