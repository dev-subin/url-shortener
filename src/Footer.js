import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0b1736] mt-16 rounded-lg'>
       <div className='flex place-content-evenly'>
       <div className='pt-16 p-10'>
        <h1 className="font-mono text-white text-5xl">
            Url <span className="text-orange-400 font-mono text-5xl">Shortener</span>
          </h1>
          <div className='mt-10'>
         <p className='text-white font-bold text-xl'>8590799730</p>
          </div>
          <div className='mb-44'>
              <p className='font-bold text-white text-xl'>subinsabu148@gmail.com</p>
          </div>
        </div>
        <div className='mt-36 text-white font-bold'>
            <div className='mt-10'>
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
        <div className='mt-36  text-white font-bold'>
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
       <div className='flex flex-row mt-44'>
       <div className='text-white ml-10 flex place-content-evenly'>
       <a href="#"><i className='' class="fa-brands fa-facebook"></i></a>
       </div>
       <div className='text-white ml-10 '>
       <a href="#"><i class="fa-brands fa-twitter"></i></a>
       </div>
       <div className='text-white ml-10'>
           <a href="#"><i class="fa-brands fa-instagram-square"></i></a>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Footer