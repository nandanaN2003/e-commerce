import React from 'react';

function Login() {
  return (
    <>
      <div className="card shadow-lg p-4 rounded" style={{ width: '350px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter password" 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>

    </>
  )
}
   export default Login;



