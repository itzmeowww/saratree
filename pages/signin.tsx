import React, { useEffect, useState } from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import GoogleLogin from 'react-google-login';
import MicrosoftLoginButton from '../components/MicrosoftLoginButton';
import SigninForm from '../components/SigninForm';
import DottedBackground from '../components/DottedBackground';
import Nav from '../components/Nav';
import Head from 'next/head'
import StyledDarkButton from '../components/StyledDarkButton';
const Register = () => {
    return (
        <div>
            <Head>
                <title>Sign In, SaraTree</title>
                <meta name="description" content="SaraTree is a visualization and interactive learning platform.
SaraTree is a platform for students to track the progress of their concepts with the core of game-based learning through achievement-like progress and interactive courses." />
                <link rel="icon" href="/tree_logo.png" />
                <link rel="apple-touch-icon" href="/tree_logo.jpg"></link>
            </Head>
            <Nav />
            <DottedBackground />
            <div className="w-full min-h-screen  flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto pt-12">
                    <h2 className="mb-12 text-center text-4xl font">Sign In</h2>
                    <div className="p-8 rounded-md bg-white border border-black divide-y divide-black divide-solid">

                        <div>
                            <SigninForm />
                            <div className='flex items-center justify-end mb-4'>
                                <a href="/signup">
                                    <StyledDarkButton label='Sign Up' />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6 flex items-center justify-center">
                                <GoogleLogin disabled={true} className='px-2 border rounded-xl text-base w-auto justify-center items-center border-' clientId='#your_id'
                                />
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <MicrosoftLoginButton buttonTheme='light' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;