import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextInputForm } from '../../components/TextInputForm';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineKey, AiOutlineLogin, AiOutlineMail } from 'react-icons/ai';
import { showToast } from '../../helper/toast';

import back_form from "../../assets/back_form_register.jpg";

import './styles.css'
import './register.css'


export const RegisterPage = () => {
    return (
        <div className='container_body body_form'>
            <div className="container_form register_form">
                <div className='register_form_img'>
                    <img src={back_form} alt="Background for Form" draggable={false} />
                </div>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        email:''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        showToast({ type: 'success', toastId: '0', message: 'Correct Register' })
                    }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string().required('Este campo es requerido'),
                            email: Yup.string().required('Este campo es requerido').email('Correo electronico no valido'),
                            password: Yup.string().min(6, 'Debe tener minimo 6 letras').required('Este campo es requerido'),
                        })
                    }
                >
                    {
                        ({ }) => (
                            <Form className='form' noValidate>
                                <div className='container_titles titles_register'>
                                    <h2 className='title_page_auth'>¡Crea tu cuenta!</h2>
                                    <span className='instructions'>Totalmente gratis</span>
                                </div>

                                <TextInputForm
                                    label='Nombre de usuario:'
                                    type='text'
                                    id='user'
                                    name='username'
                                    placeholder='username'
                                >
                                    <AiOutlineUser className='icon' />
                                </TextInputForm>

                                <TextInputForm
                                    label='Correo electronico:'
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='example@example.com'
                                >
                                    <AiOutlineMail className='icon' />
                                </TextInputForm>

                                <TextInputForm
                                    name='password'
                                    label='Contraseña:'
                                    type='password'
                                    id='password'
                                    placeholder=' ****** '
                                >
                                    <AiOutlineKey className='icon' />
                                </TextInputForm>

                                <button type="submit" className='btn_login btn_register'>
                                    Crear cuenta
                                    <AiOutlineLogin className='icon' />
                                </button>

                                <span className='sign_up_link'>¿Ya tienes una cuenta 🤨? <Link to="/login">
                                    Inicia sesión ahora</Link></span>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
}

export default RegisterPage