import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './SignInForm.css';

const SignInForm = () => {
    const initialValues = {
        email: '',
        password: '',
        checkbox: false
    };

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().min(8, 'Password must be longer than 8 characters').required('Required'),
        checkbox: yup.boolean().required('Required')
    });

    const onSubmit = values => {
        console.log('Form data', values);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                form => {
                    return <Form className="form">
                        <h2 className="formTitle">Sign in to your account</h2>
                        <Field
                            id="email"
                            name="email"
                            placeholder="johnythedesigner@gmail.com"
                            type="email"
                        />
                        <Field
                            id="password"
                            name="password"
                            placeholder="* * * * * * * *"
                            type="password"
                        />
                        <Field
                            id="checkbox"
                            name="checkbox"
                            type="checkbox"
                        />
                        <label htmlFor="checkbox">Keep me signed in</label>
                        <button type="submit" disabled={!form.isValid} className="signInBtn">Sign in</button>
                        <a href="#" className="forgotPassName">Forgot your password?</a>
                    </Form>
                }
            }
        </Formik>
    );
}

export default SignInForm;
