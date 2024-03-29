import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='p-3 mt-5 max-w-lg mx-auto rounded-2xl border shadow-2xl shadow-slate-900'>
      <h1 className='text-3xl text-center font-semibold my-7 font-mono'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <label><i class="fa fa-envelope" aria-hidden="true"> Email </i></label>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <label><i class="fa fa-unlock-alt" aria-hidden="true"></i> Password</label>
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-[#645bff] text-white p-3 rounded-lg uppercase hover:opacity-95 hover:bg-black duration-500 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        
      </form>
      <div className='flex gap-2 mt-5'>
        <p className=' text-sm'>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700 font-semibold text-sm'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
