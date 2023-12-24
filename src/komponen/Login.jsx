import React, { useState } from 'react'
import '../style/login.css'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        if (
        email === 'kazuma.madao@gmail.com' && 
        password === '12345') {
            onLogin();
            alert('Selamat datang')
        } else {
            alert('Login gagal silahkan')
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
                                name="email"
                                required=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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