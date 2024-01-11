import React from 'react'

export default function Login() {
  return (
    <>
    <div className="mt-20 text-center">
      <div className='border-4 w-96 border-white rounded-full md:w-[41%] bg-white md:ml-[30%] shadow-lg shadow-blue-100 '>
        <input
          type="text"
          placeholder="Enter your email..."
          className="h-16 md:w-80 focus:bg-blue-100 outline-none rounded-full placeholder-blue-800 text-lg p-4"
        ></input>
        <button className="bg-customRed text-white hover:text-red-700 hover:bg-red-100 text-xl p-3 py-4 rounded-full">
          Use for free
        </button>
        </div>

        <div className="w-96 md:ml-[30%] h-16 md:w-[40%]  bg-white hover:bg-blue-100 outline-none rounded-full mt-4 shadow-lg shadow-blue-100 border-4 border-white">
          <div className="flex justify-center">
            <img src="/google.png" className="w-12 mt-1" />
            <p className="pt-3 text-xl text-center hover:cursor-pointer hover:text-blue-800">
              Or Sign up with Google
            </p>
          </div>
        </div>      
        </div>
    </>
  )
}
