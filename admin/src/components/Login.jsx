import React, { useState } from 'react';
import axios from 'axios';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';
import { assests } from '../assets/Assests';

const Login = ({ setToken }) => {
    // Prepopulate with the actual admin email and password for testing
    const [email, setEmail] = useState('admin@moon.com'); // actual admin email
    const [password, setPassword] = useState('moonadmin048'); // actual admin password

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BackendUrl}/api/user/admin`, { email, password });
            
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message || 'Login failed.');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className=''>
            <div className='py-4 mb-10 flex items-center justify-center'>
                <img src={assests.Logo} alt="" />
            </div>
            <div className='sm:w-96 mx-4 sm:mx-auto  bg-white p-10 shadow-lg rounded-2xl'>
                <h1 className='text-2xl font-serif font-semibold text-stone-700 text-center mb-5'>
                    ADMIN PANEL
                </h1>
                <form onSubmit={onSubmitHandler}>
                    <p className='text-xs font-medium my-1'>Email Address</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        className='w-full mb-5 placeholder:text-sm px-3 py-2 border border-stone-700'
                        autoComplete='email'
                        required
                    />
                    <p className='text-xs font-medium my-1'>Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        className='w-full placeholder:text-sm mb-5 px-3 py-2 border border-stone-700'
                        autoComplete='current-password'
                        required
                    />
                    <button
                        className='bg-gray-800 text-white w-full font-light py-2 rounded'
                        type='submit'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
