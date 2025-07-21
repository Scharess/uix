import { Link } from "react-router-dom"


function Login() {

  return (
   <div className="flex flex-row ">
   <div className="w-[50%] h-screen p-24  ">
     <p className="flex flex-row gap-2 font-bold text-black ali"> <div className="w-5 h-5 bg-purple-500 rounded-full"></div>Finnger</p>
   <div className="mt-20">
     <h1 className="mt-5 text-5xl font-bold">Holla,</h1>
    <h1 className="mt-3 text-5xl font-bold ">Welcome Back</h1>
    <p className="mt-5 text-gray-500">Hey , welcome back to your special place</p>
    <form action="" method="post" className="flex flex-col mt-10 w-[500px] gap-5">
      <input type="text"  className="p-2 border border-gray-400 rounded-md h-15" placeholder="starley@gmail.com"/>
      <input type="password"  className="h-10 p-2 border border-gray-400 rounded-md"/>
    <div className="flex flex-row justify-between">
       <div className="flex flex-row gap-2">
         <input type="checkbox" name="" id="" className="accent-purple-600 checked:bg-purple-500"  />
        <p className="text-gray-500">remember me</p>
       </div>
       <p className="text-gray-500">forget Password</p>
    </div>
      <button
        className="font-bold text-center bg-purple-600 w-[130px] h-[50px] rounded-md text-white mt-10 flex items-center justify-center"
      >
        Sign in
      </button>
    </form>
   </div>
   <p className="mt-20 text-gray-500">Don't have an account? <Link  to="/signup" className="font-bold text-purple-600">Sign up</Link></p>
   </div>
   <div className="w-[50%] h-screen  flex items-center justify-center">
     <img
       src=""
       alt="login illustration"
       className="object-cover w-full h-full rounded-lg"
     />
   </div>
   </div>
  )
}

export default Login
