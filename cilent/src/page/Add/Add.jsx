import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Add.css'
import axios from 'axios'

function Add() {
    return (
        <div className='add'>
            <Formik
                initialValues={{ name: '', categort: '', price: '', imageUrl: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Daha qisa ad')
                        .min(4, 'Daha uzun ad')
                        .required('Melumati daxil edin'),
                    categort: Yup.string()
                        .max(15, 'Daha qisa ad')
                        .min(4, 'Daha uzun ad')
                        .required('Melumati daxil edin'),
                    price: Yup.number()
                        .required('Melumati daxil edin'),
                    imageUrl: Yup.string()
                        .min(4, 'Daha uzun ad')
                        .required('Melumati daxil edin'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://localhost:5000/users', {
                        name: values.name,
                        categort: values.categort,
                        price: values.price,
                        imageUrl: values.imageUrl,
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }}
            >
                <Form className='add_form'>

                    <Field name="name" type="text" placeholder='Product name' />
                    <ErrorMessage name="name" />


                    <Field name="categort" type="text" placeholder='Categort' />
                    <ErrorMessage name="categort" />


                    <Field name="price" type="number" placeholder='Price' />
                    <ErrorMessage name="price" />

                    <Field name="imageUrl" type="text" placeholder='Product img' />
                    <ErrorMessage name="imageUrl" />

                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Add