import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#0b1736]  bg-[url('https://url-shortner-app-react.netlify.app/assets/bg-boost-desktop.05593952.svg')] bg-cover bg-no-repeat mt-12">
       <div className='flex flex-col md:flex-row place-content-evenly'>
       <div className='pt-16 p-10 text-center md:text-left'>
        <h1 className="font-mono text-white text-3xl md:text-5xl">
            Url <span className="text-orange-400 font-mono text-3xl md:text-5xl">Shortener</span>
          </h1>
          <div className='mt-10'>
        <a href="https://www.linkedin.com/in/subin-sabu-b0b610224/"> <p className='text-white font-bold text-lg md:text-xl'> https://www.linkedin.com/in/subin-sabu-b0b610224/</p></a>
          </div>
          <div className='md:mb-44'>
             
             <a href="https://github.com/dev-subin"> <p className='font-bold text-white text-lg md:text-xl'> https://github.com/dev-subin</p></a>
          </div>
        </div>
        <div className='md:mt-36 text-white font-bold text-center md:text-left'>
            <div className='md:mt-10'>
                <p>About us</p>
            </div>
            <div className='mt-5'>
                <p>Jobs</p>
            </div>
            <div className='mt-5'>
                <p>Press</p>
            </div>
            <div className='mt-5'>
                <p>Blogs</p>
            </div>
        </div>
        <div className='md:mt-36 text-center md:text-left text-white font-bold'>
            <div className='mt-10'>
                <p>Contact us</p>
            </div>
            <div className='mt-5'>
                <p>Terms</p>
            </div>
            <div className='mt-5'>
                <p>Privacy</p>
            </div>
        </div>
       <div className='flex flex-row justify-center items-center mt-12 md:mt-44 mb-12'>
       <div className='text-white ml-10 flex place-content-evenly'>
           <i  className="fa-brands fa-facebook"></i>
       </div>
       <div className='text-white ml-10 '>
       <i className="fa-brands fa-twitter"></i>
       </div>
       <div className='text-white ml-10'>
           <i className="fa-brands fa-instagram-square"></i>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Footer