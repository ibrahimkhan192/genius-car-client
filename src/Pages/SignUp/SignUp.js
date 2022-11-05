import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/Auth/AuthProvider';

const SignUp = () => {

 const { createUser } = useContext(AuthContext)

 const handleSignUp = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  createUser(email, password)
   .then(result => {
    const user = result.user;
    console.log(user)
   })
   .catch(err => console.error(err))
 }

 return (
  <div className="hero mb-10">
   <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center md:ml-40 lg:text-left">
     <img className='w-80'  src={img} alt="" srcSet="" />
    </div>
    <div className="card py-6 flex-shrink-0 w-full max-w-sm border-2 shadow-2xl border-orange-600 bg-base-100">
     <form onSubmit={handleSignUp} className="card-body p-4">
      <h1 className="text-3xl text-center font-bold">Sign Up now!</h1>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Name</span>
       </label>
       <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Email</span>
       </label>
       <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Confirm Password</span>
       </label>
       <input type="text" name='password' placeholder="Your password" className="input input-bordered" />
       <label className="label">
        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
       </label>
      </div>
      <div className="form-control">
       <input className="btn bg-orange-600 border-0" type="submit" value="Sign Up" />
      </div>
     </form>
     <p className='text-center'>Already Have an Account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link></p>
    </div>
   </div>
  </div>
 );
};

export default SignUp;