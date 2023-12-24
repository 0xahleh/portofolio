import React, { useState } from 'react'
import '../style/login.css'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        if (
        username === 'gpahleh' && 
        password === '12345') {
            onLogin();
            alert('Selamat datang')
        } else {
            alert('Login gagal')
        }
    }
    return (
        <div className='wrap'>
            <div className="login-card">
                <div className="card-header">
                    <h1>Admin Login</h1>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="username">Email</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required=""
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
