import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignUp.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const naviGate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const naviGateLogin = event => {
        naviGate('/login')
    }

    const verifyEmail =()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            alert('sent email for verification');
        })
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const password = event.target.password.value;
        const email = event.target.email.value;

        createUserWithEmailAndPassword(email, password)
        .then(rsult=>{
            verifyEmail();
        })
        
        naviGate('/home')

    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='SignUp-form w-50 mx-auto '>
            <div className='shadow p-3 mb-5 bg-body rounded ms-5'>
                <h2 className='text-primary mt-5 mb-3 ' style={{ textAlign: 'center' }}>Please Sign Up <br />
                </h2>
                <form onSubmit={handleSignUp} >
                    <input type="text" name='name' class="form-control mb-2" placeholder="Enter your name" required />
                    <input type="email" name='email' class="form-control mb-2" placeholder="name@example.com" required />
                    <input type="password" name='password' class="form-control" placeholder="Enter the valid password" required />
                    <input className='w-50 bg-primary mt-3 login-btn' type="submit" value="Sign Up  " />
                </form>
                <p className='mt-3'>Are you have an account? <Link to='/login' className='text-danger' onClick={naviGateLogin}>Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};
export default SignUp;