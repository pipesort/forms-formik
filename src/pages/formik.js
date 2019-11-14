import React from 'react';
import { Formik, Form, Field } from 'formik';


export default function () {
  return (
    <Formik
      initialValues={{
        fullName: '', email: '', password: '', gender: '', country: '', terms: false
      }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      {props => (
        <Form>
          <label>Name:</label>
          <Field name='fullName' placeholder='Full name' />
          <br />
          <label>Email:</label>
          <Field name='email' placeholder='Enter email' type='email' />
          <br />
          <label>Password:</label>
          <Field name='password' placeholder='Enter password' type='password' />
          <br />
          <label>Country:</label>
          <Field name="country" as="select" >
            <option value="india">India</option>
            <option value="USA">USA</option>
            <option value="Uk">Uk</option>
          </Field>
          <br />
          <Field name='gender' type="radio" value='male' />
          <label> Male</label>
          <Field name='gender' type="radio" value='female' />
          <label> Female</label>
          <br />
          <Field name='terms' type="checkbox" onChange={(e) => props.setFieldValue('terms', e.target.checked)} />
          <label> Terms & conditions</label>
          <br />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}