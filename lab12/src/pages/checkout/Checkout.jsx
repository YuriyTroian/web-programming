// // import {Form, Formik, useField} from 'formik';
// // import * as Yup from 'yup';
// // import FormError from "../../components/formError/formError";
// // import { useNavigate } from 'react-router-dom';

// // import './checkout.css';
// // import { useDispatch } from 'react-redux';

// // const CustomTextInput = ({label, ...props}) => {
// //     const [field, meta] = useField(props);
// //     return (
// //         <>
// //             <label htmlFor={props.id || props.name}>{label}</label>
// //             <input className="text-input" {...field} {...props} />
// //             <FormError touched={meta.touched} error={meta.error} />
// //         </>
// //     )
// // }

// // const goBack = () => {
// //     window.history.back();
// // };

// // function Checkout (){
// //     const navigate = useNavigate();
// //     // const dispatch = useDispatch();

// //     return(
// //         <section>
// //             <div className="ckeckout-box">
// //                 <div className="checkout-box__formik">
// //                     <Formik
// //                         initialValues={{
// //                             first_name: '',
// //                             last_name: '',
// //                             date_of_birth: '',
// //                             email: '',
// //                             phone: '',
// //                         }}
// //                         validationSchema={Yup.object({
// //                             first_name: Yup.string()
// //                                 .min(3, 'Must be at least 3 characters')
// //                                 .max(15, 'Must be 15 characters or less')
// //                                 .required('Required'),

// //                             last_name: Yup.string()
// //                                 .min(3, 'Must be at least 3 characters')
// //                                 .max(15, 'Must be 15 characters or less')
// //                                 .required('Required'),

// //                             date_of_birth: Yup.string()
// //                                 .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format')
// //                                 .required('Required')
// //                                 .test('is-adult', 'Must be at least 18 years old', function (value) {
// //                                     const currentDate = new Date();
// //                                     const selectedDate = value ? new Date(value) : null;

// //                                     if (!selectedDate || isNaN(selectedDate.getTime())) {
// //                                         return true;
// //                                     }

// //                                     const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
// //                                     const isAdult =
// //                                         ageDifference > 18 ||
// //                                         (ageDifference === 18 &&
// //                                             (currentDate.getMonth() > selectedDate.getMonth() ||
// //                                                 (currentDate.getMonth() === selectedDate.getMonth() &&
// //                                                     currentDate.getDate() >= selectedDate.getDate())));

// //                                     return isAdult;
// //                                 }),

// //                             email: Yup.string()
// //                                 .email('Invalid email address')
// //                                 .required('Required'),

// //                             phone: Yup.string()
// //                                 .matches(/^\+\d{12}$/, 'Invalid phone number')
// //                                 .required('Required'),
// //                         })}
// //                         onSubmit={(values, {setSubmitting, resetForm}) => {
// //                             setTimeout(() => {
// //                                 alert(JSON.stringify(values, null, 2));
// //                                 resetForm();
// //                                 // dispatch(removeFromCart(objectDataId));
// //                                 setSubmitting(false);

// //                                 navigate('/success');
// //                             }, 1000)
// //                         }}
// //                     >
// //                         {props => (
// //                             <Form>
// //                                 <div className='checkout-box__forms'>
// //                                     <h1 className='checkout-box__title'>Checkout</h1>
// //                                     <CustomTextInput label='First Name' name='first_name' type='text' placeholder='Frank' />
// //                                     <CustomTextInput label='Last Name' name='last_name' type='text' placeholder='Potapenko' />
// //                                     <CustomTextInput label='Date of birth' name='date_of_birth' type='text' placeholder='DD.MM.YYYY' />
// //                                     <CustomTextInput label='Email' name='email' type='text' placeholder='frank@thetank.com' />
// //                                     <CustomTextInput label='Phone number' name='phone' type='text' placeholder='+38...' />
// //                                 </div>

// //                                 <div className='btn-checkout'>
// //                                     <button className='btn-to-catalog' onClick={goBack}>
// //                                         Go back
// //                                     </button>
// //                                     <button type='submit'>
// //                                         {props.isSubmitting ? 'Loading...' : 'Submit'}
// //                                     </button>
// //                                 </div>

// //                             </Form>
// //                         )}
// //                     </Formik>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // export default Checkout;



// import {Form, Formik, useField} from 'formik';
// import * as Yup from 'yup';
// import FormError from "../../components/formError/formError";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import './checkout.css';

// const CustomTextInput = ({label, ...props}) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <input className="text-input" {...field} {...props} />
//             <FormError touched={meta.touched} error={meta.error} />
//         </>
//     )
// }

// function Checkout (){
//     const navigate = useNavigate();
//     const goBack = () => {
//         navigate(-1);
//     };

//     return(
//         <section>
//             <div className="ckeckout-box">
//                 <div className="checkout-box__formik">
//                     <Formik
//                         initialValues={{
//                             first_name: '',
//                             last_name: '',
//                             date_of_birth: '',
//                             email: '',
//                             phone: '',
//                         }}
//                         validationSchema={Yup.object({
//                             first_name: Yup.string()
//                                 .min(3, 'Must be at least 3 characters')
//                                 .max(15, 'Must be 15 characters or less')
//                                 .required('Required'),

//                             last_name: Yup.string()
//                                 .min(3, 'Must be at least 3 characters')
//                                 .max(15, 'Must be 15 characters or less')
//                                 .required('Required'),

//                             date_of_birth: Yup.string()
//                                 .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format')
//                                 .required('Required')
//                                 .test('is-adult', 'Must be at least 18 years old', function (value) {
//                                     const currentDate = new Date();
//                                     const selectedDate = value ? new Date(value.split('.').reverse().join('-')) : null; // Виправлено парсинг дати для JS (YYYY-MM-DD)

//                                     if (!selectedDate || isNaN(selectedDate.getTime())) {
//                                         return true;
//                                     }

//                                     const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
//                                     const isAdult =
//                                         ageDifference > 18 ||
//                                         (ageDifference === 18 &&
//                                             (currentDate.getMonth() > selectedDate.getMonth() ||
//                                                 (currentDate.getMonth() === selectedDate.getMonth() &&
//                                                     currentDate.getDate() >= selectedDate.getDate())));

//                                     return isAdult;
//                                 }),

//                             email: Yup.string()
//                                 .matches(
//                                     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     'Invalid email format (e.g. example@mail.com)'
//                                 )
//                                 .required('Required'),

//                             phone: Yup.string()
//                                 .matches(/^\+\d{12}$/, 'Invalid phone number')
//                                 .required('Required'),
//                         })}
//                         onSubmit={(values, {setSubmitting, resetForm}) => {
//                             setTimeout(() => {
//                                 alert(JSON.stringify(values, null, 2));
//                                 resetForm();
//                                 setSubmitting(false);
//                                 navigate('/success');
//                             }, 1000)
//                         }}
//                     >
//                         {props => (
//                             <Form>
//                                 <div className='checkout-box__forms'>
//                                     <h1 className='checkout-box__title'>Checkout</h1>
//                                     <CustomTextInput label='First Name' name='first_name' type='text' placeholder='Frank' />
//                                     <CustomTextInput label='Last Name' name='last_name' type='text' placeholder='Potapenko' />
//                                     <CustomTextInput label='Date of birth' name='date_of_birth' type='text' placeholder='DD.MM.YYYY' />
//                                     <CustomTextInput label='Email' name='email' type='text' placeholder='frank@thetank.com' />
//                                     <CustomTextInput label='Phone number' name='phone' type='text' placeholder='+38...' />
//                                 </div>

//                                 <div className='btn-checkout'>
//                                     {/* type="button" важливо, щоб кнопка не сабмітила форму */}
//                                     <button className='btn-to-catalog' type="button" onClick={goBack}>
//                                         Go back
//                                     </button>
//                                     <button type='submit' disabled={props.isSubmitting}>
//                                         {props.isSubmitting ? 'Loading...' : 'Submit'}
//                                     </button>
//                                 </div>

//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Checkout;



// import React from 'react';
// import { Form, Formik, useField } from 'formik';
// import * as Yup from 'yup';
// import FormError from "../../components/formError/formError";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { cleanCart } from '../../redux/actions';
// import './checkout.css';

// const CustomTextInput = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <input className="text-input" {...field} {...props} />
//             <FormError touched={meta.touched} error={meta.error} />
//         </>
//     )
// }

// function Checkout() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const goBack = () => {
//         navigate(-1);
//     };

//     return (
//         <section>
//             <div className="ckeckout-box">
//                 <div className="checkout-box__formik">
//                     <Formik
//                         initialValues={{
//                             first_name: '',
//                             last_name: '',
//                             date_of_birth: '',
//                             email: '',
//                             phone: '',
//                         }}
//                         validationSchema={Yup.object({
//                             first_name: Yup.string()
//                                 .min(3, 'Must be at least 3 characters')
//                                 .max(15, 'Must be 15 characters or less')
//                                 .required('Required'),

//                             last_name: Yup.string()
//                                 .min(3, 'Must be at least 3 characters')
//                                 .max(15, 'Must be 15 characters or less')
//                                 .required('Required'),

//                             date_of_birth: Yup.string()
//                                 .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format (DD.MM.YYYY)')
//                                 .required('Required')
//                                 .test('is-adult', 'Must be at least 18 years old', function (value) {
//                                     // Перетворюємо DD.MM.YYYY у формат, який розуміє JS (YYYY-MM-DD)
//                                     const selectedDate = value ? new Date(value.split('.').reverse().join('-')) : null;
//                                     const currentDate = new Date();

//                                     if (!selectedDate || isNaN(selectedDate.getTime())) {
//                                         return true; // Дозволяємо regex-у обробити помилку формату
//                                     }

//                                     const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
//                                     const isAdult =
//                                         ageDifference > 18 ||
//                                         (ageDifference === 18 &&
//                                             (currentDate.getMonth() > selectedDate.getMonth() ||
//                                                 (currentDate.getMonth() === selectedDate.getMonth() &&
//                                                     currentDate.getDate() >= selectedDate.getDate())));

//                                     return isAdult;
//                                 }),

//                             email: Yup.string()
//                                 .matches(
//                                     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     'Invalid email format (e.g. example@mail.com)'
//                                 )
//                                 .required('Required'),

//                             phone: Yup.string()
//                                 .matches(/^\+\d{12}$/, 'Invalid phone number (must start with + and have 12 digits)')
//                                 .required('Required'),
//                         })}
                        
//                         onSubmit={(values, { setSubmitting, resetForm }) => {
//                             setTimeout(() => {
//                                 // 1. Отримуємо ID поточного користувача
//                                 const ownerIndex = localStorage.getItem("loggedInUserIndex");
                                
//                                 // 2. Відправляємо екшн в Redux для очищення
//                                 dispatch(cleanCart(ownerIndex));

//                                 // 3. Скидаємо форму і переходимо на сторінку успіху
//                                 resetForm();
//                                 setSubmitting(false);
//                                 navigate('/success');
//                             }, 1000)
//                         }}
//                     >
//                         {props => (
//                             <Form>
//                                 <div className='checkout-box__forms'>
//                                     <h1 className='checkout-box__title'>Checkout</h1>
//                                     <CustomTextInput label='First Name' name='first_name' type='text' placeholder='Frank' />
//                                     <CustomTextInput label='Last Name' name='last_name' type='text' placeholder='Potapenko' />
//                                     <CustomTextInput label='Date of birth' name='date_of_birth' type='text' placeholder='DD.MM.YYYY' />
//                                     <CustomTextInput label='Email' name='email' type='text' placeholder='frank@thetank.com' />
//                                     <CustomTextInput label='Phone number' name='phone' type='text' placeholder='+38097...' />
//                                 </div>

//                                 <div className='btn-checkout'>
//                                     <button className='btn-to-catalog' type="button" onClick={goBack}>
//                                         Go back
//                                     </button>
//                                     <button type='submit' disabled={props.isSubmitting}>
//                                         {props.isSubmitting ? 'Loading...' : 'Submit'}
//                                     </button>
//                                 </div>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Checkout;






import React from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import FormError from "../../components/formError/formError";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanCart } from '../../redux/actions'; 
import './checkout.css';

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <FormError touched={meta.touched} error={meta.error} />
        </>
    )
}

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ownerIndex = localStorage.getItem("loggedInUserIndex");

    const savedCheckoutData = JSON.parse(localStorage.getItem(`checkout_data_${ownerIndex}`)) || {};

    const goBack = () => {
        navigate(-1);
    };

    return (
        <section>
            <div className="ckeckout-box">
                <div className="checkout-box__formik">
                    <Formik
                        initialValues={{
                            first_name: savedCheckoutData.first_name || '',
                            last_name:  savedCheckoutData.last_name || '',
                            date_of_birth: savedCheckoutData.date_of_birth || '',
                            email: savedCheckoutData.email || '',
                            phone: savedCheckoutData.phone || '',
                        }}
                        enableReinitialize={true} 
                        validationSchema={Yup.object({
                            first_name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),

                            last_name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),

                            date_of_birth: Yup.string()
                                .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format (DD.MM.YYYY)')
                                .required('Required')
                                .test('is-adult', 'Must be at least 18 years old', function (value) {
                                    const selectedDate = value ? new Date(value.split('.').reverse().join('-')) : null;
                                    const currentDate = new Date();

                                    if (!selectedDate || isNaN(selectedDate.getTime())) {
                                        return true;
                                    }

                                    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
                                    const isAdult =
                                        ageDifference > 18 ||
                                        (ageDifference === 18 &&
                                            (currentDate.getMonth() > selectedDate.getMonth() ||
                                                (currentDate.getMonth() === selectedDate.getMonth() &&
                                                    currentDate.getDate() >= selectedDate.getDate())));

                                    return isAdult;
                                }),

                            email: Yup.string()
                                .matches(
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    'Invalid email format (e.g. example@mail.com)'
                                )
                                .required('Required'),

                            phone: Yup.string()
                                .matches(/^\+\d{12}$/, 'Invalid phone number (must start with + and have 12 digits)')
                                .required('Required'),
                        })}
                        
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                
                                localStorage.setItem(`checkout_data_${ownerIndex}`, JSON.stringify(values));

                
                                dispatch(cleanCart(ownerIndex));

                                setSubmitting(false);
                                navigate('/success');
                            }, 1000)
                        }}
                    >
                        {props => (
                            <Form>
                                <div className='checkout-box__forms'>
                                    <h1 className='checkout-box__title'>Checkout</h1>
                                    <CustomTextInput label='First Name' name='first_name' type='text' placeholder='Frank' />
                                    <CustomTextInput label='Last Name' name='last_name' type='text' placeholder='Potapenko' />
                                    <CustomTextInput label='Date of birth' name='date_of_birth' type='text' placeholder='DD.MM.YYYY' />
                                    <CustomTextInput label='Email' name='email' type='text' placeholder='frank@thetank.com' />
                                    <CustomTextInput label='Phone number' name='phone' type='text' placeholder='+38097...' />
                                </div>

                                <div className='btn-checkout'>
                                    <button className='btn-to-catalog' type="button" onClick={goBack}>
                                        Go back
                                    </button>
                                    <button type='submit' disabled={props.isSubmitting}>
                                        {props.isSubmitting ? 'Loading...' : 'Submit'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default Checkout;