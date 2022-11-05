import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {

const handleLogin = event => {
  event.preventDefault();

}


 return (
  <div className="hero mb-10">
   <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center md:ml-40 lg:text-left">
     <img className='w-80' src={img} alt="" srcSet="" />
    </div>
       <div className="card py-6 flex-shrink-0 w-full max-w-sm border-orange-600 border-2 shadow-2xl bg-base-100">
     <form onSubmit={handleLogin} className="card-body p-4">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Email</span>
       </label>
       <input type="text" name='email' placeholder="email" className="input input-bordered" />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Password</span>
       </label>
       <input type="text" name='password' placeholder="password" className="input input-bordered" />
       <label className="label">
        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
       </label>
      </div>
      <div className="form-control">
       <input className="btn bg-orange-600 border-0" type="submit" value="Login" />
      </div>
     </form>
     <p className='text-center'>New to Genius Car? <Link className='text-orange-600 font-semibold' to='/signup'>Sign Up</Link></p>
    </div>
   </div>
  </div>
 );
};

export default Login;