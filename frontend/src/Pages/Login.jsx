import React, { useContext, useEffect, useState } from 'react';
import { Assests } from '../Assests/Assests';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [CurrentState, setCurrentState] = useState('login');
  const { token, setToken, navigate, BackendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (CurrentState === 'SignUp') {
        if (!email || !name || !password) {
          console.log("Email, name, or password is missing");
          return;
        }
        const response = await axios.post(BackendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message || 'Registration failed')
        }

      } else {
        const response = await axios.post(BackendUrl + '/api/user/login', {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token, token)
        } else {
          toast.error(response.data.message || 'Login failed')
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'SignIn failed')
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/')
    } else {

    }

  }, [token])


  return (
    <div className='flex min-h-[85vh] border-t'>
      <div className='w-6/12 min-h-[90vh] lg:flex hidden relative z-50 items-center justify-center'>
        <img
          src={Assests.LoginImg}
          alt=""
          className='absolute max-h-[90vh] object-cover w-full z-10 top-0 left-0'
        />
        <div className='flex flex-col items-center justify-center gap-6 relative z-30'>
          <img src={Assests.Heroicon} alt="logoicon" />
          <p className='text-white font-extralight'>
            Handcrafted in Viet Nam since 1650
          </p>
          <div>
            <p className='text-white text-3xl font-serif text-center'>BAT TRANG <br /> DINNER SET</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-stone-800'
      >
        <div className='mt-10'>
          <p className='text-3xl font-serif'>{CurrentState}</p>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          {CurrentState === 'SignUp' && (
            <input
              type="text"
              className='w-full px-3 py-2 border border-stone-700'
              placeholder='Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            className='w-full px-3 py-2 border border-stone-700'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className='w-full px-3 py-2 border border-stone-700'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='w-full flex justify-between text-xs font-medium'>
          <p className='cursor-pointer font-medium'>Forgot your password?</p>
          {CurrentState === 'login' ? (
            <p onClick={() => setCurrentState('SignUp')} className='cursor-pointer'>
              Create Account
            </p>
          ) : (
            <p onClick={() => setCurrentState('login')} className='cursor-pointer'>
              Login
            </p>
          )}
        </div>


        <button className='bg-gray-800 text-white w-full font-light py-2' type='submit'>
          {CurrentState === 'Login' ? 'SignIn' : 'SignUp'}
        </button>
      </form>
    </div>
  );
};

export default Login;