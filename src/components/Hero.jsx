import React from "react"
import image02 from './assets/image02.png'
import image03 from './assets/image03.jpg'
import image07 from './assets/image07.jpg'
import image04 from './assets/image04.jpg'
import image08 from './assets/image08.jpg'
import image05 from './assets/image05.jpg'
import image09 from './assets/image09.jpg'
import image06 from './assets/image06.jpg'
import image10 from './assets/image10.jpg'


const Hero = () => {
 
  return(

  <div className="container absolute w-[1440px] h-[512px] top-[1231px]">

<div className="flex">
  <div className="bg-white-500 text-black p-4 flex-1 text-5xl font-bold">
  ............So you<br/> Dont  Have to
  </div>
  <div className="bg-white-500 text-black p-4 flex-1 text-2xl ">
  <p> Welcome to the home of outstanding, hassle free and affordable cleaning. Go ahead! Search for your home size and preferred frequency, then leave us a note at checkout with your preferred booking date and time</p>
  
  </div>
</div>


<div className="mt-20 text-black font-bold text-2xl p-2">

<div className="flex justify-between">
    <p>Our Products</p>
    <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="search for a product"></input>
  </div>
</div>





<div className="container grid-rows-2 grid-cols-4 gap-2 grid">
  <div className=" text-black p-2">
  <img src={image03} alt="first"
  className="" />
  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p>
  </div>




  <div className="text-black p-2">
  <img src={image07} alt="second"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
  </div>



  <div className=" text-black p-2">
  <img src={image04} alt="third"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
</div>


  <div className=" text-black p-2">
  <img src={image08} alt="fourth"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
  </div>


  <div className=" text-black p-2">
  <img src={image05} alt="fourth"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
  </div>


  <div className=" text-black p-2">
  
  <img src={image09} alt="fourth"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
  
  </div>
  <div className=" text-black p-2">
  <img src={image06} alt="fourth"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
  </div>

  
  <div className=" text-black p-2">
  <img src={image10} alt="fourth"
  className="" />

  <p>Standard Cleaning: 3 bedrooms <br/>
   and 3bathroom + Guest Toilet
   <br/>
  NGn7500- 5200
  <br/>
  <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600">Book now</button>
  </p> 
  </div>
</div>



<div className="container mt-20 text-center w-[1440px] h-[405px] top-[2770px]
bg-blue-300">
  <p className="font-bold p-4 mb-4 text-2xl"> What Our Customers Say</p>
</div>

<div className=" relative w-[900px] h-[384px] top-[-300px] bg-purple-500
left-[182px] items-center">


<div className="flex items-center justify-center w-[867px] h-[-50px] top-[81px] left-[105px] gap-[64px]">
  <div className="flex">
    <div className="p-6  w-1/2 mx-auto flex -mt-60">
      <div className=" h-24 mr-4 mt-72">
        <img src="path/to/passport.png" alt="Passport"/>
      </div>
      <div className="">
    
        <p class="text-white mt-72 mr-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit.
        </p>
      </div>
    </div>
  </div>
</div>
</div>



<div>

<div class="flex items-center -mt-48">
  <img src={image02} alt="last" className="b w-1/2 h-auto bg-slate-500"/>
  <p class="text-lg px-4">Book on-demand skilled and vetted cleaners so you dont have to click the link below to book 
  <br/>
  <br/>
   <button className="bg-slate-400 text-black px-4 py-2 rounded hover:bg-slate-600 "> Book A Sparkler </button></p>
</div>

</div>
    </div>


  )

 



}

export default Hero