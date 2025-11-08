import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';


const Register = () => {
    const [show,setShow]=useState(false)
    const [error,setError]=useState('')
   const location = useLocation();
    const from = location.state || "/";
      const navigate = useNavigate()
    const {creatUserWithEmailAndPasswordFunc,updateProfileFunc,googleSignInFunc,setUser}= useContext(AuthContext)
    
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSignup=(e)=>{
  e.preventDefault()
     const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
     
  if (!passwordRegex.test(password)) {
    setError("Password must be at least 6 characters, include 1 uppercase and 1 lowercase letter.");
    return;
  }
   creatUserWithEmailAndPasswordFunc(email,password)
   .then(res=>{
    console.log(res);
    
     updateProfileFunc(displayName, photoURL)
     .then(res=>{
        console.log(res);
        
     toast.success('Register succesful')  
    
     })
   
   navigate('/')
   
   }

   ) .catch(e=>{
    console.log("error found",e.message);
    toast.error(e.message)
    
   }

   )
   

  };
  
   const handleGoogleSignin=()=>{
          googleSignInFunc()
          .then((res) => {
        setUser(res.user);
        navigate(from);
        toast.success("Register successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });

    }



    return (
        <div className='mt-20'>
            <div className="card bg-base-100 mx-auto   w-full max-w-sm shrink-0 shadow-2xl">
                
      <div className="card-body ">
        <h1 className="text-4xl text-blue-500 font-bold mx-auto">Register now!</h1>
         <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full bg-white/20 rounded-full "
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 rounded-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 rounded-full"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder='........'
                  className="input input-bordered w-full bg-white/20 rounded-full"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button type="submit" className="bg-cyan-700 btn w-full text-white rounded-full">
                Register
              </button>
              <p className='text-center'>Or</p>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
              <p className='text-red-700'>{error}</p>
              <div className="text-center mt-3">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-300 hover:text-blue-800 font-medium underline "
                  >
                    Login
                  </Link>
                </p>

              </div>
            </form>
            
      </div>
    </div>
        </div>
    );
};

export default Register;