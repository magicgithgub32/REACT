import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'


export const Login = () => {
    const {Login} = useAuth();
    const [ user, setUser ] = useState('');

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setUser({...user, [name]: value })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        Login(user)
    }

    return (
        <div>
            <h2>This is Login Page</h2>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='email'></label>
                <input type='email' name='email' id='email' required  onChange={handleInput} />

                <label htmlFor='password'></label>
                <input type='password' name='password' id='password' required  onChange={handleInput} />

                <button type='submit'>Log in 🚀</button>
                </form>
                <Link to='/register'>
                {"Don't have an account yet? Sign up"}
                </Link> 
        </div>
    )
}

