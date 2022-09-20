import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//FORMIK IS FOR FORM FIELD VALIDATIONS
//IT WILL TAKE INITIAL VALUES
//IT WILL HAVE ONSUBMIT FUNCTION FOR THE SUBMIT BUTTON CLICK
//FOR THE VALIDATIONS IT HAS THE VALIDATE WHICH SHOULD RETURN ERROR OBJECT
//ON IT HAS ONBLUR FOR VALIDATIONS FORMIK.TOUCHED.FIELDNAME ONLY TRU WHEN USER VISITS THAT FIELD AND CLICK OUTSIDE

function YoutubeForm() {

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email('Invalid email format!').required('Required!'),
    channel: Yup.string().required('Required!'),
    comments: Yup.string().required('Required!')
  });

  const onSubmit = values => {
    console.log(values)
  }

  const intialValues = {
    name: '',
    email: '',
    channel: '',
    comments: ''
  }

  return (
    <div style={{ marginLeft: '20px' }}>
      <p>Basic Form Using Formik As open and close tag</p>
      <Formik
        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label
            htmlFor='name'
          >
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage name="name" />
          <label htmlFor='email'>Email</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" />

          <label htmlFor='channel'>Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
          />
          <ErrorMessage name="channel" />

          <label htmlFor='comments'>Comments</label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
          />
          <ErrorMessage name="comments" />

          <button type="submit" style={{ display: 'block', marginTop: '20px' }}>Sumbit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default YoutubeForm;