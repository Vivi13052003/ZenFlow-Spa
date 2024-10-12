
import product from "../assets/img/shoes.jpg"
import product1 from "../assets/img/shoes1.jpg"
import product2 from "../assets/img/shoes2.jpg"
import product3 from "../assets/img/shoes3.jpg"
import product4 from "../assets/img/shoes4.jpg"
import product5 from "../assets/img/shoes5.jpg"
import product6 from "../assets/img/shoes6.jpg"
import product8 from "../assets/img/shoes8.jpg"

export default function Store(){
    return(
        <>

       <div className="relative flex justify-center items-center  ">
   
       <img className=" object-cover w-full h-[800px]" ></img>
       
          <div className="absolute text-center left-0 right-0 bottom-0 font-extrabold  text-2xl text-[#32a4a7] font-josefin pt-3 pb-20 ">  "Embrace the vibrant energy of summer – where sunshine, adventure, and endless joy come together for unforgettable moments!" </div>
       </div>
           
          
       


       <div className="bg-[#faf4e6] pt-40 ">
       
       <h2 className="text-5xl font-bold pl-[220px] pb-4">NEW ARRIVALS</h2>
       <div className="flex relative justify-center ">

        <div className=" absolute  cursor-pointer  flex px-10 font-playpen top-6 left-[180px] text-xl hover:underline hover:text-red-400 transition duration-300 ease-in">Women</div>         
         <div className="absolute cursor-pointer  flex px-10 font-playpen top-6 left-[320px] text-xl hover:underline hover:text-red-400 transition duration-300 ease-in">Man</div>
        <div className="absolute cursor-pointer  flex px-10 font-playpen top-6 left-[420px] text-xl hover:underline hover:text-red-400 transition duration-300 ease-in">Accessories</div>
        <div className="absolute cursor-pointer  flex px-10 font-playpen top-6 left-[580px] text-xl hover:underline hover:text-red-400 transition duration-300 ease-in">Souvenirs</div>
           
        <div className=" absolute p-6 flex item-center space-x-2 right-[200px]">
                <input type="text" placeholder="search user" className="border-b-2 bg-[#faf4e6] w-[200px] h-8 p-3 mb-4 border-[#094142]"/>
               <div className="text-[#094142] text-xl"><i class="fa-solid fa-magnifying-glass"></i> </div>                </div>
       

        </div> 
        
        
        <div class="flex justify-center items-center min-h-screen">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 pt-40">
        <div className="">
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes</h2>
        <p className="">30$</p>
        </div>


        
        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product1} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes purple flower</h2>
        <p className="">30$</p>

        </div>


        
        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product2} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes blue butterly </h2>
        <p className="">30$</p>

        </div>


    
        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product3} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes garden rose</h2>
        <p className="">30$</p>

        </div>

        
        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product4} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes</h2>
        <p className="">30$</p>

        </div>

        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product5} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes rose</h2>
        <p className="">30$</p>

        </div>


        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product6} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes green butterfly</h2>
        <p className="">30$</p>

        </div>

        <div>
            <div className="">
            <i class="fa-light fa-heart text-[20px] absolute ml-[260px] mt-2"></i>
            <img src={product8} className=" rounded-xl h-[380px] w-[300px] object-cover "></img>
            </div>
       
        <h2 className="py-2 text-2xl font-semibold">Shoes</h2>
        <p className="">30$</p>

        </div>

        </div>
        </div>
       </div>

        </>
    )
}