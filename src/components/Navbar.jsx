import React from "react";




const Navbar = () => {

return( 
  <div className= "container">

  <div className=" items-center ">

  <div className="container flex flex-row items-center space-x-12 justify-between"><h1 className="text-4xl font-bold text-white p-4 ">Shaare </h1>
   
   <div className="flex flex-row items-center space-x-4 mr-5  text-right font-bold text-white ">
   <div className> What we do</div>
    <div> Offers</div>
    <div>  About</div>
   </div>
    </div>
   <br/>
   <br/>

    <div className=" h-99 mt-146px left-[9.125rem] gap-8 p-6">
       <div className="w- h-96"><p className="text-6xl font-bold text-white "> 
        Get the Sparkle <br/>without  the <br/> Sweat
      </p>
      <br/>
      
      <div className="h-96">
      <p className="h-96 text-white text-xl"> Book on demand skilled and vetted <br/>cleaners to do the cleaning so <br/> you dont have to click the link below to book
      <br/>
      <br/>
      <button className=" bg-slate-100 rounded-md text-black "> Book a Sparkler</button> </p>
      
      </div> 
       </div>
      </div>
   </div>

      <div className="relative w-[700px] h-[350px] bg-white
      top-[225px] rounded-lg-[8px] ">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 bg-transparent "> 

      <br/>
      <div className="grid grid-cols-2 gap-4">

      <p className="font-bold text-xl text-slate-700"> Move-in cleaning </p> <br/>
      <p> Dorem ipsum dolor sit amet consecteur adipiscing elit</p>
      
       <p className="font-bold text-xl text-slate-700"> Standard Cleaning </p> <br/> 
      <p>Dorem ipsum dolor sit amet consecteur adipiscing elit </p>
       
        </div>
       <br/>
       <br/>
      <div>
        <p className="font-bold text-xl text-slate-700">Deep cleaning </p> <br/> 
        <p>  Dorem ipsum dolor sit amet consecteur adipiscing elit</p>
      </div>    
        </div> 
      </div>
  </div>
)



}
 

export default Navbar