import React from 'react'
import axios from 'axios'

interface AuthTypeProps{
    onAuth: (user: any) => void
}

const AuthPage = ({ onAuth }: AuthTypeProps) => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = (event.target as HTMLFormElement).getElementsByClassName("auth-input")
        const input = value[0].value
        axios.post('http://localhost:8000/authenticate', {
            username: input
        }).then((data) => {
            onAuth({ ...data.data, secret: input });
        }).catch((error) => {console.log(error)})
      };
    
      return (
        <div className="background">
          <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Welcome 👋🏾</div>
            <div className="form-subtitle">What's your username?</div>
            <div className="auth">
              <div className="auth-label">Username</div>
              <input className="auth-input" name="username" />
              <button className="auth-button" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      );    
}

export default AuthPage