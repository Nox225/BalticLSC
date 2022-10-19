import React, { useState } from 'react'

import signinImage from '../assets/beach.jpg'
import interreg from '../assets/interreg.jpg'
import balticlogo from '../assets/baltic-logo-auth.png'

const Auth = ({ setAuthToken, form, setForm }) => {
    const [isSignup, setIsSignup] = useState(false)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(form.username === 'demo' && form.password === 'demo'){
            setAuthToken(true)
        }
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content sm:px-[100px] px-[30px] py-3'>
                <img src={balticlogo} alt='BalticLogo' className='sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] m-auto items-center'/>
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input
                                name='fullName'
                                type='text'
                                placeholder='Full Name'
                                onChange={handleChange}
                                required
                                autoFocus="autofocus"
                            />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor='username'>Username</label>
                        <input
                            name='username'
                            type='text'
                            placeholder='Username'
                            onChange={handleChange}
                            required
                            autoFocus="autofocus"
                        />
                    </div>
                    {/* {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input
                                name='phoneNumber'
                                type='text'
                                placeholder='Phone Number'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )} */}
                    {/* {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='avatarURL'>Avatar URL</label>
                            <input
                                name='avatarURL'
                                type='text'
                                placeholder='Avatar URL'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )} */}
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor='password'>Password</label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input
                                name='confirmPassword'
                                type='password'
                                placeholder='Confirm Password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_button'>
                        <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
                    </div>
                </form>
                <div className='auth__form-container_fields-account'>
                    <p>
                        {isSignup
                        ? 'Already have an account?'
                        : "Don't have an account?"
                        }
                        <span onClick={switchMode}>
                            {isSignup ? ' Sign In' : ' Sign Up'}
                        </span>
                    </p>
                </div>
                {!isSignup &&
                    <div className='mt-3'>
                        <hr className='sm:mx-20 mx-5'></hr>
                        <h6 className='text-sm flex justify-center p-2 text-gray-400'>Demo user: Username: demo, Password: demo</h6>
                        <hr className='sm:mx-20 mx-5'></hr>
                    </div>}
                <div className='auth__form-container_fields-account-logo'>
                    <img src={interreg} alt='interrego-logo' className='mt-3 max-w-md flex sm:w-auto w-[250px]'/>
                </div>
            </div>
        </div>
        <div className='auth__form-container_image'>
            <img src={signinImage} style={{objectFit: 'cover'}} alt='sign in' />
        </div>
    </div>
  )
}

export default Auth