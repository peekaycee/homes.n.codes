import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './Dashboard.css';

const AccessDashboard = () => {
  const [inputValue, setInputValue] = useState('');
  const adminPassword = 'admin01';
  const userPassword = 'user123';
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === adminPassword) {
      navigate('/admin-dashboard');
    } else if (inputValue === userPassword) {
      navigate('/user-dashboard');
    } else if (inputValue === '') {
      alert('Please enter your password');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className='access-dashboard-container'>
      <form>
        <input
          type='text'
          ref={inputRef}
          placeholder='Enter the 7 digit password'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type='submit' onClick={handleSubmit}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default AccessDashboard;
