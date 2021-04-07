import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './SignInForm.css';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  checkbox: yup
    .boolean()
    .required('Required')
});

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checkbox: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 3));
    },
  });

  return (
    <div>
    <h2 className="formTitle">Sign in to your account</h2>
      <form onSubmit={formik.handleSubmit} className="form">
        <TextField
          id="email"
          name="email"
          placeholder="johnnythedesigner@gmail.com"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="password"
          name="password"
          type="password"
          placeholder="* * * * * * * *"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant="filled"
          color="secondary"
        />
        <FormControlLabel
          control={<Checkbox color="primary" id="checkbox" name="checkbox" onChange={formik.handleChange} />}
          label="Keep me sign in"
        />
        <Button color="primary" variant="contained" type="submit" size="large" >
          Sign in
        </Button>
        <a href="#" className="forgotPass">Forgot your password?</a>
      </form>
    </div>
  );
};

export default SignInForm;
