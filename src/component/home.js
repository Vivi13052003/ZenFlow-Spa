import logo from "../img/logo.png"
import bg1 from "../assets/img/bg5.png"
import bg2 from "../assets/img/saunaBG.jpg"
import bg3 from "../assets/img/massageBG.jpg"
import bg4 from "../assets/img/floatingBG.jpg"
import bg5 from "../assets/img/BG1.jpg"
import spa1 from "../assets/img/spa1.jpg"
import spa2 from "../assets/img/spa5.jpg"
import spa3 from "../assets/img/spa3.jpg"
import spa4 from "../assets/img/story.webp"
import massage from "../assets/img/massages.jpg"
import sauna from "../assets/img/sauna1.jpg"
import floating from "../assets/img/floating.jpg"
import img1 from "../assets/img/img1.jpg"
import bgf from "../assets/img/bg7.jpg"
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>


      <Slider {...settings}>
        <div>
          <img className="object-cover w-full h-[800px]" src={bg1}></img>
        </div>
        <div>
          <img className="object-cover w-full h-[800px]" src={bg2}></img>
        </div>
        <div>
          <img className="object-cover w-full h-[800px]" src={bg3}></img>
        </div>
        <div>
          <img className="object-cover w-full h-[800px]" src={bg4}></img>
        </div>
        <div>
          <img className="object-cover w-full h-[800px]" src={bg5}></img>
        </div>
      </Slider>

      {/* banner */}
      {/* <div className="relative flex justify-center items-center ">
   
   <img className=" object-cover w-full h-[800px]" src={bg1}></img>
      <i class="absolute text-white bottom-7  text-2xl left-[150px] cursor-pointer lni lni-facebook-filled pr-2"></i>
      <i class="absolute text-white bottom-7  text-2xl left-[200px] cursor-pointer lni lni-instagram pr-2"></i>
      <i class="absolute text-white bottom-7  text-2xl left-[250px] cursor-pointer lni lni-twitter pr-2"></i>
      <i class="absolute text-white bottom-7  text-2xl left-[300px] cursor-pointer lni lni-github-original pr-2"></i>

      <div className='absolute text-white right-10 bottom-7 text-2xl font-montserrat  '> next to my page <i class="fa-duotone fa-solid fa-chevrons-right"></i></div>
   </div> */}
      {/* Home */}

            
      <div className='text-center '>
        <h3 className='text-[#ddc691] font-dancing pt-20'>A visual journey through one of the wonders of the world</h3>
        <h1 className='text-5xl  font-cormorant-sc font-bold pt-10'>An experience beyond compare awaits</h1>

        <div className=''>
          <li className=' flex justify-center gap-14 pt-20 pb-40'>
            <ul className='relative'>
              <img className='object-cover w-[300px] h-[300px] border-solid border-2 border-black' src={bg1}></img>
              <i class="absolute left-0 top-80 fa-solid fa-heart "></i>
              <div className='absolute left-5 top-[316px] '>460</div>
              <i class="absolute left-20 top-80 fa-solid fa-message"></i>
              <div className='absolute left-[100px] top-[316px] '>20</div>
              <i class="absolute left-[280px] top-80  fa-light fa-share-nodes"></i>
            </ul>
            <ul className='relative'>
              <img className='object-cover w-[300px] h-[300px] border-solid border-2 border-black' src={bg1}></img>
              <i class="absolute left-0 top-80 fa-solid fa-heart "></i>
              <div className='absolute left-5 top-[316px] '>300</div>
              <i class="absolute left-20 top-80 fa-solid fa-message"></i>
              <div className='absolute left-[100px] top-[316px] '>22</div>
              <i class="absolute left-[280px] top-80  fa-light fa-share-nodes"></i>
            </ul>
            <ul className='relative'>
              <img className='object-cover w-[300px] h-[300px] border-solid border-2 border-black' src={bg1}></img>
              <i class="absolute left-0 top-80 fa-solid fa-heart "></i>
              <div className='absolute left-5 top-[316px] '>200</div>
              <i class="absolute left-20 top-80 fa-solid fa-message"></i>
              <div className='absolute left-[100px] top-[316px] '>5</div>
              <i class="absolute left-[280px] top-80  fa-light fa-share-nodes"></i>
            </ul>
            <ul className='relative'>
              <img className='object-cover w-[300px] h-[300px] border-solid border-2 border-black' src={bg1}></img>
              <i class="absolute left-0 top-80 fa-solid fa-heart "></i>
              <div className='absolute left-5 top-[316px] '>100</div>
              <i class="absolute left-20 top-80 fa-solid fa-message"></i>
              <div className='absolute left-[100px] top-[316px] '>6</div>
              <i class="absolute left-[280px] top-80  fa-light fa-share-nodes"></i>
            </ul>




          </li>
        </div>
      </div>


      <div className='bg-[#faf4e6] pb-60'>
        <h2 className=' text-center text-[19px] text-[#b68f82] pt-24 font-dancing '>This is home page</h2>
        <h1 className='text-5xl text-center pt-10 font-cormorant-sc'>Our Server</h1>
        <div className='flex justify-center gap-40 pt-40'>


          <div>

            <img className='rounded-t-[220px] object-cover w-[350px] h-[280px] border-solid border-black border-2 ' src={spa1}></img>
            <div className='bg-[#e3d9d0] h-[260px]  w-[350px] text-center '>
              <h2 className='text-3xl pt-5 font-cormorant-sc font-semibold' >Floating</h2>
              <p className='pt-4 pb-6 font-montserrat'>Floating is an effective method for physical and mental relaxation.</p>
              <div className="flex justify-center">
                <div className="py-2 w-40 rounded-2xl font-montserrat bg-[#b68f82] text-white text-center">
                  <a href="#">Book now</a>
                </div>
              </div>
            </div>
          </div>

          <div>

            <img className='rounded-t-[220px] object-cover w-[350px] h-[280px] border-solid border-black  border-2 ' src={spa3}></img>
            <div className='bg-[#e3d9d0]  h-[260px]  w-[350px] text-center '>
              <h2 className='text-3xl pt-5 font-cormorant-sc font-semibold' >Massage</h2>
              <p className='pt-4 pb-6 font-montserrat'>Bare Flyt offers a wide range of massage treatments for the whole body.</p>
              <div className="flex justify-center">
                <div className="py-2 w-40 rounded-2xl font-montserrat bg-[#b68f82] text-white text-center">
                  <a href="#">Book now</a>
                </div>
              </div>
            </div>
          </div>


          <div>

            <img className='rounded-t-[220px] object-cover w-[350px] h-[280px] border-solid border-black border-2 ' src={spa2}></img>
            <div className='bg-[#e3d9d0] h-[260px]  w-[350px] text-center '>
              <h2 className='text-3xl pt-5 font-cormorant-sc font-semibold' >IR-sauna</h2>
              <p className='pt-4 pb-6 font-montserrat'>IR-sauna is a dry sauna with comfortable temperatures.</p>
              <div className="flex justify-center">
                <div className="py-2 w-40 rounded-2xl font-montserrat bg-[#b68f82] text-white text-center">
                  <a href="#">Book now</a>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>

    

      {/* Information  */}
<div className="bg-[#faf4e6]">
      <div className='flex justify-center relative py-20'>
        <div className='text center '><img className=' object-cover h-screen' src={floating}></img>
          <div className=' text-white absolute text-center w-[600px]  ml-[220px] bottom-[320px]'>
            <h1 className='text-7xl text-left  font-cormorant-sc font-bold pt-10'>Floating</h1>
            <p className='font-montserrat leading-loose text-1xl text-left pt-8 pb-8'>Floating Spa offers a unique relaxation experience where you float effortlessly in warm water filled with Epsom salt. This weightless environment helps relieve stress, soothe muscles, and improve sleep, leaving you feeling refreshed and rejuvenated.</p>
            <div className="py-2 w-40 rounded-2xl font-montserrat bg-white text-black text-center">
              <a href="#">Book now</a>
            </div>

          </div>


        </div>

      </div>


      <div className='flex justify-center relative  '>
        <div className='text center '><img className=' object-cover w-[1450px]' src={massage}></img>
          <div className=' text-white absolute text-center w-[600px]  ml-[220px] bottom-[320px]'>
            <h1 className='text-7xl text-left  font-cormorant-sc font-bold pt-10'>Massage</h1>
            <p className='font-montserrat leading-loose text-1xl text-left pt-8 pb-8'>Massage therapy is designed to relieve muscle tension, reduce stress, and improve circulation. Whether for relaxation or therapeutic purposes, it promotes physical recovery and mental well-being.</p>
            <div className="py-2 w-40 rounded-2xl font-montserrat bg-white text-black text-center">
              <a href="#">Book now</a>
            </div>

          </div>


        </div>

      </div>



      <div className='flex justify-center relative py-20 '>
        <div className='text center '><img className=' object-cover  h-screen' src={sauna}></img>
          <div className=' text-white absolute text-center w-[600px]  ml-[220px] bottom-[320px]'>
            <h1 className='text-7xl text-left  font-cormorant-sc font-bold pt-10'>IR-Sauna</h1>
            <p className='font-montserrat leading-loose text-1xl text-left pt-8 pb-8'>IR-Sauna uses infrared light to gently warm your body from within, promoting deep relaxation, detoxification, and improved circulation. It's a soothing therapy that can help reduce muscle tension and boost overall well-being.

</p>
            <div className="py-2 w-40 rounded-2xl font-montserrat bg-white text-black text-center">
              <a href="#">Book now</a>
            </div>

          </div>


        </div>

      </div>

      </div>
      <div className='flex justify-center relative h-[1000px] py-80  gap-20 '>
      <div className='right-40 bottom-[180px] '><img className=' object-cover w-[700px]' src={spa4}></img></div>
        <div className='text-center w-[600px]'>

          <h1 className='text-7xl text-left  font-cormorant-sc font-bold pt-10'>Our Story</h1>
          <p className='font-montserrat leading-loose text-1xl text-left pt-8 pb-8'>At ZenFlow Spa, we believe in the power of holistic wellness. Our journey began with a passion for helping others achieve balance and tranquility in their lives. With a focus on natural therapies and modern relaxation techniques, we’ve created a serene space where you can escape the stresses of daily life.</p>
          <p className='font-montserrat leading-loose text-1xl text-left pt-8 pb-8'> Every treatment is crafted with care, using the finest ingredients and state-of-the-art technology to ensure you leave feeling refreshed, rejuvenated, and restored. We are dedicated to providing an exceptional spa experience that nurtures both body and mind.

</p>
          <div className='container mx-auto'>
          </div>

        </div>

      


      </div>




      {/* opening hours */}
      <div className='py-80'>
        <div className='relative flex justify-center gap-20'>
          <div className=''>
            <h1 className='text-6xl font-montserrat font-medium py-40'> ZenFlow Spa opening hours </h1>


            <div className='absolute text-2xl text-left leading-loose bg-white w-[1000px] font-thin z-10'>
              <h3 className=' pb-10  font-normal'>Opening hours</h3>
              <p>Standard opening hours:</p>
              <p>22 June - 20 August, 07:00-23:00</p>
              <p>21 August - 21 June, 08:00-22:00</p>
              <p>We kindly request that guests exit the water 30 minutes before closure.</p>
              <div className='flex text-[#3a7e8d] font-semibold gap-20 pt-20 cursor-pointer'>
                <a className=''> View all opening hours  <i class="fa-solid fa-arrow-right"></i> </a>
                <a> How to get here <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>

          </div>





          <div className='relative'> <img className='w-[900px] h-[1100px] object-cover z-0' src={img1}></img> </div>


        </div>



      </div>
      <div className='py-20'>
        <hr className='border-black border-1 '></hr>

      </div>

      <div className='text-center pt-20 pb-40 '>

        <h1 className='text-[#3a7e8d] py-10 text-5xl font-montserrat font-thin'>Treat yourself to a day at ZenFlow Spa</h1>
        <a className='font-montserrat text-[20px] cursor-pointer'><i class="fa-thin fa-arrow-right w-20 text-2xl"></i>Book Now</a>


      </div>




      {/* Footer */}


      <div className="relative">

        <img className='absolute w-full h-[650px] object-cover ' src={bgf}></img>
        <div className="absolute h-10 text-[#707781] font-montserrat leading-relaxed  left-80 top-20">
          <img className="w-[200px] object-cover pb-2" src={logo} />
          <p>Address: 123 Summer Avenue, Beach City, Vietnam</p>
          <p>Hotel Reception +39 0572 9077991</p>
          <p>Thermal Spa +39 0572 9077992</p>
          <p className="py-10" >contact@summerwebsite.com</p>

          <div className=" font-montserrat font-bold text-[#76452f] leading-relaxed ">
            <p>LOCATION</p>
            <p>CONTACT US</p>
            <p>DAY SPA</p>
          </div>
        </div>
      </div>


    
    </>

  )
}