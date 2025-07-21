import React from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {
    const onSubmit = () => {

    }
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Register</h1>
            <div>
                <div>Email</div>
                <div><input type='email' /></div>
            </div>
            <div>
                <div>Password</div>
                <div><input type='password' /></div>
            </div>
            <div>
                <Link to='/login'>Login</Link>
                &nbsp;
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Register



