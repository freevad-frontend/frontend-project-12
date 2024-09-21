import React from 'react';
import { Formik, Form, Field } from 'formik';

const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log('Form data', values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <Field id="username" name="username" placeholder="Enter your username" />
            {errors.username && touched.username ? <div>{errors.username}</div> : null}
          </div>

          <div>
            <Field type="password" id="password" name="password" placeholder="Enter your password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
