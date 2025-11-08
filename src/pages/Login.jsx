import React, { useContext,  useEffect, } from 'react'

import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'


const Login = () => {

    const {signInWithEmailAndPasswordFunc,user,setUser,googleSignInFunc}= useContext(AuthContext)
    const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();



   useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

    const handleSignin=(e)=>{
        e.preventDefault()
       
        const email = e.target.email?.value;
    const password = e.target.password?.value;
    
          signInWithEmailAndPasswordFunc(email,password)
          .then(res=>{
            console.log(res.user);
            
            setUser(res.user);
        toast.success("Signin successful");
         navigate(from);

            
          })
          .catch((e) => {
            console.log(e.code);
            
      if (e.code === "auth/user-not-found") {
        toast.error("No user found! Please register first.");
      } 
      else if(e.code==="auth/invalid-email"){
        toast.error("Enter a valid password")
      }
      else if (e.code === "auth/invalid-credential") {
       
      if (email && password) {
          toast.error("No user found! Please register first");
        } 
       
        else {
          toast.error("Invalid email or password!");
        }
      } 
      else if (e.code === "auth/wrong-password") {
        toast.error("Wrong password! Try again.");
      } 
      else {
        toast.error(e.message);
      }
    });
         

    }
   

    const handleGoogleSignin=()=>{
          googleSignInFunc()
          .then((res) => {
        setUser(res.user);
        navigate(from);
        toast.success("Signin successful");
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
        <h1 className="text-4xl text-blue-500 font-bold mx-auto">Login now!</h1>
         <form onSubmit={handleSignin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Sign In
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 rounded-full"
                />
              </div>

              <div className="">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 rounded-full"
                />
                
              </div>

              <button
                className="hover:underline cursor-pointer"
               
                type="button"
              >
                Forget password?
              </button>

              <button type="submit" className="bg-blue-500 w-full text-white btn rounded-full">
                Login
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

              
              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-300 hover:text-blue-800 underline"
                >
                  Register
                </Link>
              </p>
            </form>
      </div>
    </div>
        </div>
  )
}

export default Login