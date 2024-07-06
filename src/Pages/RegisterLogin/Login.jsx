/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './RegisterLogin.css';

const Login = () => {
  return (
    <>
      <section className='form-container'>
        <form action='' method='post'>
          <h3>welcome back!</h3>
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
          <p>
            don't have an account? <Link to='/register'>register new</Link>
          </p>
          <input
            type='submit'
            value='login now'
            name='submit'
            className='btn'
          />
        </form>
      </section>
    </>
  );
};

export default Login;
