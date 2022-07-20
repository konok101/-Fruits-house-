import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import github from '../../../images/github.png'
import  google from '../../../images/google.png'
import './SocialLogin.css'

const SocialLogin = () => {
    const naviGate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, GithubUser, GithubLoading, githubError] = useSignInWithGithub(auth);

    let errorElement;

    if (error || githubError) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
        </div>

    }

    if (user || GithubUser) {
        naviGate('/home')
    }
    return (
        <div className='mb-5  '>
            <div>
                <h3 className='text-center'>Other Sign In method</h3>
            </div>
            {errorElement}
            <div  className='mt-3  ms-5 d-flex justify-content-center row me-5'>
                <div className='col-12 col-lg-6'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary col-12  d-flex justify-content-between mx-auto my-2 me-3 socialmethod  '>
                        <img width="50px"  src={google} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
                <div className='col-12 col-lg-6' >
                    <button onClick={() => signInWithGithub()} className='btn btn-primary col-12  d-flex justify-content-between mx-auto my-2 socialmethod  '>
                        <img width="55px" className='mt-2' src={github} alt="" />
                        <span className='px-2 '> Github sign In</span></button>
                </div>

            </div>
        </div>
    );
};

export default SocialLogin;