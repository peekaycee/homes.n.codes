import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './RegisterLogin.css';

const Register = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <section className='form-container' id='top'>
      <form action='' method='post'>
        <h3>create an account!</h3>
        <input
          ref={inputRef}
          type='tel'
          name='name'
          required
          maxLength='50'
          placeholder='enter your name'
          className='box'
        />
        <input
          type='email'
          name='email'
          required
          maxLength='50'
          placeholder='enter your email'
          className='box'
        />
        <input
          type='password'
          name='pass'
          required
          maxLength='20'
          placeholder='enter your password'
          className='box'
        />
        <input
          type='password'
          name='c_pass'
          required
          maxLength='20'
          placeholder='confirm your password'
          className='box'
        />
        <p>
          already have an account? <Link to='/login'>login now</Link>
        </p>
        <input
          type='submit'
          value='register now'
          name='submit'
          className='btn'
        />
      </form>
    </section>
  );
};

export default Register;
