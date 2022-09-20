import React from 'react';
import { useFormik } from 'formik';
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
    channel: Yup.string().required('Required!')
  });

  const formik = useFormik({
    initialValues: {
      name: '', //should be same as input name attribute
      email: '', //should be same as input name attribute
      channel: '' //should be same as input name attribute
    },
    onSubmit: values => {
      console.log(values)
    },
    //ON WAY TO VALIDATE THE FIELDS
    // validate: values => {
    //   //values.name values.email values.channel
    //   //error.name  errors.email errors.channel
    //   //error.name = 'This field is required'
    //   let errors = {}

    //   if (!values.name) {
    //     errors.name = 'Name is required!'
    //   }

    //   if (!values.email) {
    //     errors.email = 'Email is required!'
    //   }

    //   if (!values.channel) {
    //     errors.channel = 'Channel is required!'
    //   }
    //   return errors;
    // },
    //ANOTHER WAY TO VALIDATE SCHEMA
    validationSchema
  });
  console.log(formik)
  return (
    <div>
      <p>Basic Form Using Formik Library</p>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <label
          htmlFor='name'
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.name}
          {...formik.getFieldProps('name')}
        />
        {formik?.touched?.name && formik?.errors?.name ? <div className="error">{formik.errors.name}</div> : null}

        <label htmlFor='email'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps('email')}

        />
        {formik?.touched?.email && formik?.errors?.email ? <div className="error">{formik.errors.email}</div> : null}

        <label htmlFor='channel'>Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.channel}
          {...formik.getFieldProps('channel')}
        />
        {formik?.touched?.channel && formik?.errors?.channel ? <div className="error">{formik.errors.channel}</div> : null}

        <button type="submit">Sumbit</button>
      </form>
    </div>
  )
}

export default YoutubeForm;