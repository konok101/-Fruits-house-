import React, { useRef } from 'react';
import { Form } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import loginImg from '../../../images/login.png'
import './login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

 

    if (user) {
        navigate('/home')
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error?.message}</p>
        </div>
    }

 
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigateSignUp = event => {
        navigate('/register');

    }



    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');




    }


    if (loading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='row container'>
            <div className='w-50 mx-auto col-lg-7 shadow p-3 mb-5 bg-body rounded '>
                <h2 className='text-center text-primary mt-5 mb-3'>Please Login</h2>

                <Form onSubmit={handleSubmit}>



                    <input ref={emailRef} type="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="name@example.com" required />
                    <input ref={passRef} type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter  password" required />
                    <input className=' w-50 bg-primary mt-3 login-btn' type="submit" value="Login" />

                </Form>
                {errorElement}
                <div className='sign-up mt-5'>
                    <h5>Create New Account <Link to='/signup' onClick={navigateSignUp}>

                        Sign Up</Link> </h5>
                    <h5 className='  mt-3 forgot-btn'> <button onClick={resetPassword}>Forgotten password?</button> </h5>
                </div>
                <SocialLogin></SocialLogin>

            </div>

            <div className='col-lg-4 col-12'>
                <img src={loginImg} alt="" />
            </div>

            <div className="col-lg-7">

            </div>

        </div>
    );
};


export default Login;