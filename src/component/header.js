import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
export default function Header(){
    return (
        <header className="bg-[#faf4e6]">
            <ul className="flex  leading-loose  ">
                <li><img className="w-[150px] h-full object-cover" src={logo}/></li>
               <div className=" text-[#767676] font-medium text-xl h-full p-6 flex justify-center gap-9 flex-1 font-montserrat">

               <li className="cursor-pointer
                    hover:text-white transition 
                    duration-300 ease-in"><Link to="/">Home</Link></li>
                <li className="cursor-pointer hover:text-white transition 
                    duration-300 ease-in"><Link to="/store"> Skincare Shop </Link></li>
                <li className="cursor-pointer hover:text-white transition 
                    duration-300 ease-in"><Link to="/contact">Contact Us </Link> </li>
                    <li className="cursor-pointer hover:text-white transition 
                    duration-300 ease-in"><a>Book Now</a></li>
               </div>
               <li>
               <div className="cursor-pointer  absolute top-6 right-10 text-xl text-white rounded-3xl border-2 border-[#b68f82] px-3 py-1 bg-[#b68f82]">Log in</div>
               <div className=" cursor-pointer absolute top-6  right-[145px] text-xl rounded-3xl border-2 border-black px-3 py-1">Sign up</div>
               </li>
               
            </ul> 
            
        </header>
    )
}