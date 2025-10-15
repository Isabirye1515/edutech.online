import React from 'react';

import { Column } from '@carbon/react';
import PersonForm from './personForm';

const CreatePersonPage = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:5000/api/persons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      console.log('Person created:', data);
      resetForm();
    } catch (error) {
      console.error('Error creating person:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Column lg={6} sm={4} md={4} >
      <h2>Create Person</h2>
      <PersonForm onSubmit={handleSubmit} />
      </Column>
    </>
  );
};

export default CreatePersonPage;
