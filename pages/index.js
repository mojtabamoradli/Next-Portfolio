import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react';

import GoMobile from "../public/GoMobile.png"
import CFM from "../public/images/portfolio/cfm.png"
import Zimak from "../public/images/portfolio/zimak.png"
import Footer from '../components/layout/Footer';



const articles = [
  {title: "Futuristic Worldview", src: [ "/images/writings/FW/FW1.jpg", "/images/writings/FW/FW2.jpg", "/images/writings/FW/FW3.jpg", "/images/writings/FW/FW4.jpg", "/images/writings/FW/FW5.jpg", "/images/writings/FW/FW6.jpg", "/images/writings/FW/FW7.jpg"]},
  {title: "Meaning of Life", src: ["/images/writings/MOL/MOL1.jpg", "/images/writings/MOL/MOL2.jpg", "/images/writings/MOL/MOL3.jpg", "/images/writings/MOL/MOL4.jpg", "/images/writings/MOL/MOL5.jpg", "/images/writings/MOL/MOL6.jpg", "/images/writings/MOL/MOL7.jpg", "/images/writings/MOL/MOL8.jpg", "/images/writings/MOL/MOL9.jpg", "/images/writings/MOL/MOL10.jpg"]},
  {title: "Hedonism, Eudaimonia and the Meaning of Life", src: ["/images/writings/HEM/HEM1.jpg", "/images/writings/HEM/HEM2.jpg", "/images/writings/HEM/HEM3.jpg", "/images/writings/HEM/HEM4.jpg", "/images/writings/HEM/HEM5.jpg", "/images/writings/HEM/HEM6.jpg", "/images/writings/HEM/HEM7.jpg", "/images/writings/HEM/HEM8.jpg", "/images/writings/HEM/HEM9.jpg", "/images/writings/HEM/HEM10.jpg"]},
  {title: "Why We Do What We Do?", src: ["/images/writings/WWD/WWD1.jpg", "/images/writings/WWD/WWD2.jpg", "/images/writings/WWD/WWD3.jpg", "/images/writings/WWD/WWD4.jpg", "/images/writings/WWD/WWD5.jpg", "/images/writings/WWD/WWD6.jpg", "/images/writings/WWD/WWD7.jpg", "/images/writings/WWD/WWD8.jpg", "/images/writings/WWD/WWD9.jpg", "/images/writings/WWD/WWD10.jpg"]},
  {title: "Values-based Goal-setting", src: ["/images/writings/VBGS/VBGS1.jpg", "/images/writings/VBGS/VBGS2.jpg", "/images/writings/VBGS/VBGS3.jpg", "/images/writings/VBGS/VBGS4.jpg", "/images/writings/VBGS/VBGS5.jpg", "/images/writings/VBGS/VBGS6.jpg", "/images/writings/VBGS/VBGS7.jpg", "/images/writings/VBGS/VBGS8.jpg", "/images/writings/VBGS/VBGS9.jpg"]},
  {title: "Things You Didn't Learn in School", src: ["/images/writings/TYD/TYD1.jpg","/images/writings/TYD/TYD2.jpg", "/images/writings/TYD/TYD3.jpg", "/images/writings/TYD/TYD4.jpg", "/images/writings/TYD/TYD5.jpg", "/images/writings/TYD/TYD6.jpg", "/images/writings/TYD/TYD7.jpg", "/images/writings/TYD/TYD8.jpg", "/images/writings/TYD/TYD9.jpg", "/images/writings/TYD/TYD10.jpg"]},
  {title: "It is All about the Money", src: ["/images/writings/MON/MON1.jpg", "/images/writings/MON/MON2.jpg", "/images/writings/MON/MON3.jpg", "/images/writings/MON/MON4.jpg", "/images/writings/MON/MON5.jpg", "/images/writings/MON/MON6.jpg", "/images/writings/MON/MON7.jpg", "/images/writings/MON/MON8.jpg", "/images/writings/MON/MON9.jpg", "/images/writings/MON/MON10.jpg"]},
  {title: "Let's Get Rich Together", src: ["/images/writings/LGR/LGR1.jpg", "/images/writings/LGR/LGR2.jpg", "/images/writings/LGR/LGR3.jpg", "/images/writings/LGR/LGR4.jpg", "/images/writings/LGR/LGR5.jpg", "/images/writings/LGR/LGR6.jpg", "/images/writings/LGR/LGR7.jpg", "/images/writings/LGR/LGR8.jpg", "/images/writings/LGR/LGR9.jpg", "/images/writings/LGR/LGR10.jpg"]},
  {title: "Conspicuous Consumption", src: ["/images/writings/CCN/CCN1.jpg", "/images/writings/CCN/CCN2.jpg", "/images/writings/CCN/CCN3.jpg", "/images/writings/CCN/CCN4.jpg", "/images/writings/CCN/CCN5.jpg"]},
]



export default function Home() {


  const [open, setOpen] = useState(false)

  const [home, setHome] = useState(true)
  const [portfolio, setPortfolio] = useState(false)
  const [writings, setWritings] = useState(false)
  const [contact, setContact] = useState(false)

  const [read, setRead] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArticle, setCurrentArticle] = useState(0);

  const [engineeringSkills, setEngineeringSkills] = useState(false);
  const [webSkills, setWebSkills] = useState(false);


  
  const previous = (prop) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? prop - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const next = (prop) => {
    const isLastSlide = currentIndex === prop - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const nextOnClick = (prop) => {
    if (currentIndex != articles[currentArticle].src.length - 1) {
      const isLastSlide = currentIndex === prop - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    }
  }


 
  if (typeof window === "object") {

    document.onkeydown = function (event) {
      switch (event.key) {
          case 'ArrowLeft':
            if (currentIndex != 0) previous()
              break;
          case 'ArrowRight':
            if (currentIndex != articles[currentArticle].src.length - 1) next()
            break
          case 'Escape': setRead(false); setCurrentIndex(0)
          break
          case ' ':
            if (currentIndex != articles[currentArticle].src.length - 1) next()
            break
  
      }
  };
  
}



  return (

    <div className={` ${home && "bg-neutral-800"} ${portfolio && "bg-Doodle"} ${writings && "bg-Black bg-cover"} ${contact && "bg-People bg-no-repeat bg-cover bg-blue-50 "}  w-full h-[100vh] cursor-default `}>

      <div onClick={() => {read && setRead(false); setCurrentIndex(0)}} className={`absolute transition-all duration-300 ${home && "bg-neutral-300"} ${portfolio && "backdrop-blur-lg"} ${writings && "bg-White bg-no-repeat bg-cover"} ${read && "opacity-50"}  ${contact && "backdrop-blur-[4px]"} w-[96%] h-[96%] left-[2%] top-[2%] max-sm:w-[92%] max-sm:h-[92%] max-sm:left-[4%] max-sm:top-[4%] transition-all duration-200 rounded-lg overflow-clip`}>

        {/* Header */}
        <header>

        {!read && 
        
        <div className={`flex flex-col gap-3 whitespace-nowrap `}>
          <h1  className={`text-neutral-800 text-[30px] max-md:text-[25px] cursor-pointer ml-[50px] mt-[41px] w-fit z-10 max-md:mt-[35px] max-md:ml-[30px] font-DomaineDisplayNarrow font-[800]`} onClick={() => {setOpen(false); setHome(true); setPortfolio(false); setWritings(false); setContact(false)}}>Mojtaba Moradli</h1>
          <div className={` ml-[50px] mt-[-15px] max-md:ml-[32px]`}>
          {portfolio && <p className={`font-SofiaSansExtraCondensed font-[500] w-fit text-center bg-neutral-800 text-sm rounded-sm text-white pl-1 pr-1`}>/Portfolio</p>}
          {writings && <p className={`font-SofiaSansExtraCondensed font-[500] w-fit text-center bg-neutral-800 text-sm rounded-sm text-white pl-1 pr-1`}>/Writings</p>}
          {contact && <p className={`font-SofiaSansExtraCondensed font-[500] w-fit text-center bg-neutral-800 text-sm rounded-sm text-white pl-1 pr-1`}>/Contact</p>}
          </div>
        </div>
        }

        {!read && 
<div className='' onMouseLeave={() => setOpen(false)}>

        {/* Hambergur */}

        <div  className={`absolute right-[50px] top-[50px] max-md:top-[38px] max-md:right-[30px] z-50 ${open && "hover:scale-[110%]  transition-all duration-300"} `}>
        <div className={`flex flex-col cursor-pointer  gap-1 p-1 ${!open && "transition-all duration-500 hover:bg-neutral-400 rounded-sm"} `} onClick={() => setOpen(current => !current)}>
            <div className={`w-[40px] h-[4px] max-md:w-[30px] transition-all duration-500 rounded-full max-md:origin-[3.7px] origin-[8.7px] ${open ? "rotate-[45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
            <div className={`w-[40px] h-[4px] max-md:w-[30px] rounded-full duration-500 max-md:origin-[3.7px] origin-[8.7px] ${open ? "" : "opacity-1 bg-neutral-800"}`}></div>
            <div className={`w-[40px] h-[4px] max-md:w-[30px] transition-all duration-500 rounded-full max-md:origin-[3.7px] origin-[8.7px] ${open ? "rotate-[-45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
          </div>

          </div>


          {/* Menu */}

          <div className={`absolute flex flex-col justify-center h-[96%] w-[30%] md:min-w-[500px] right-[2%] top-[2%] max-md:w-[98%] max-md:h-[98%] max-md:left-[1%] max-md:top-[1%] transition-all duration-300 opacity-100  ${portfolio ? "bg-neutral-100 backdrop-blur-lg" : "bg-zinc-800"}  rounded-lg ${open ? `z-40` : "z-0"} font-DomaineDisplayNarrow font-[800] ${!open && " transition-all duration-300 opacity-0"}`}>
          
          <div className={`flex flex-col gap-3 ${portfolio ? "text-neutral-800" : "text-neutral-200"}  font-DomaineDisplayNarrow font-[800] text-center  items-center overflow-y-scroll text-[40px]`}>
          <p className={`cursor-pointer hover:scale-[110%] transition-all duration-500`} onClick={() => {setOpen(false); setHome(true); setPortfolio(false); setWritings(false); setContact(false)}}>Home</p>
          <p className={`cursor-pointer hover:scale-[110%] transition-all duration-500`} onClick={() => {setOpen(false); setPortfolio(true); setHome(false); setWritings(false); setContact(false)}}>Portfolio</p>
          <p className={`cursor-pointer hover:scale-[110%] transition-all duration-500`} onClick={() => {setOpen(false); setWritings(true); setHome(false); setPortfolio(false); setContact(false)}}>Writings</p>
          <p className={`cursor-pointer hover:scale-[110%] transition-all duration-500`} onClick={() => {setOpen(false); setContact(true); setHome(false); setPortfolio(false); setWritings(false)}}>Contact</p> 

          <Image className={`w-[150px] h-[150px] mt-[5%] rounded-sm max-sm:hidden ${portfolio && "brightness-0"}`} src={GoMobile} width={400} height={400} alt=""/>



          </div>
      </div>

</div>
}
        </header>

          {/* Home */}

          <div className={` ${home ? "transition-all duration-300 opacity-100" : "transition-all duration-300 opacity-0"} `}>
{home && 

          
          <div className={`flex flex-col ml-auto mr-auto items-center mt-[40px] max-sm:mt-[40px] transition-all duration-1000 `}>
          
          

             <p className={`text-neutral-800 text-[80px] max-sm:text-[60px] drop-shadow-lg font-DomaineDisplayNarrow font-[800] z-10`}>Design</p>
             <p className={`text-neutral-100 text-[60px]  max-sm:text-[50px] drop-shadow-sm font-DomaineDisplayNarrow font-[400] italic z-10 animate-spinner`}>Develop</p>
             <p className={`text-neutral-800 text-[80px] max-sm:text-[60px] drop-shadow-lg font-DomaineDisplayNarrow font-[800] z-10`}>Engineer</p>
             
             <div className={`flex gap-[20px]  mt-6  ${!open && "z-40"}`}>
            <p className={`font-SofiaSansExtraCondensed font-[500] text-[25px] w-fit text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-red-500`} onClick={() => {setOpen(false); setPortfolio(true); setHome(false); setWritings(false); setContact(false)}}>Portfolio <span className='animate-pulse'>↗︎</span></p>
            <p className={`font-SofiaSansExtraCondensed font-[500] text-[25px] w-fit text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-blue-500`} onClick={() => {setOpen(false); setContact(true); setHome(false); setPortfolio(false); setWritings(false)}}>Contact <span className='animate-pulse'>↗︎</span></p>

              </div>
          </div>

}           
          </div>

          {/* Portfolio */}

          <div className={` ${portfolio ? "transition-all duration-300 opacity-100" : "transition-all duration-300 opacity-0"} `}>
          {portfolio && 

                    <div className={`flex flex-col ml-auto mr-auto  items-center mt-[40px] max-sm:mt-[20px] transition-all duration-1000 `}>


              <p className={`font-SofiaSansExtraCondensed font-[100] text-neutral-800 text-center text-[60px] max-sm:text-[30px] leading-[57px] max-sm:leading-[30px]`}> Generalist <span className={`text-neutral-800 drop-shadow-lg font-DomaineDisplayNarrow font-[800] z-10 cursor-pointer`} onMouseEnter={() => setEngineeringSkills(true)}  onMouseLeave={() => setEngineeringSkills(false)}> Engineer</span>,<br/> and<span className={`text-neutral-800 drop-shadow-lg whitespace-nowrap font-DomaineDisplayNarrow font-[800] z-10 cursor-pointer`} onMouseEnter={() => setWebSkills(true)}  onMouseLeave={() => setWebSkills(false)}> Web Developer </span></p>
              
              <p className={`font-SofiaSansExtraCondensed font-[100] text-black text-center max-sm:max-w-[250px] max-w-[550px] leading-[35px] text-[30px] max-sm:text-[22px] max-sm:leading-[30px] z-10`}>    I studied aerospace engineering for six years and started working as a web developer along the way; what I love to do that is common between these two fields is trying to solve engineering problems.</p>




          <p className={`font-SofiaSansExtraCondensed font-[100]  mt-[10px]  max-sm:mt-[15px] text-center  text-[40px] max-sm:text-[25px] leading-[57px] max-sm:leading-[30px]`}>Recent<span className={`text-neutral-800 drop-shadow-lg font-DomaineDisplayNarrow font-[800] z-10`}> Works</span> & <span className={`text-neutral-800 drop-shadow-lg whitespace-nowrap font-DomaineDisplayNarrow font-[800] z-10`}>Projects</span></p>
              <div className={`flex gap-3  justify-center max-sm:mt-[15px] mt-[10px] z-10`}>
                <Link href="https://mojtabamoradli.ir/projects/cfm" target="_blank"><Image className={`w-[50px] h-[38px]`} src={CFM} width={400} height={800} alt=""/></Link>
                <Link href="https://zimakfactory.com" target="_blank"><Image className={`w-[40px] h-[45px] `} src={Zimak} width={400} height={800} alt=""/></Link>

          </div>

          <div className={`font-SofiaSansExtraCondensed font-[100] flex  max-sm:mt-[15px] items-center text-center justify-center gap-[10px] max-sm:gap-[5px] text-[25px] max-sm:text-[15px] mt-[10px] z-10`}> 

                  <div className={`flex gap-[10px] max-sm:gap-[5px]`}>
                      <Link href="https://github.com/mojtabamoradli" target="_blank"><p className={`font-SofiaSansExtraCondensed font-[500] ${engineeringSkills && "opacity-50"} w-fit text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#171515]`}>GitHub <span className='animate-pulse max-sm:hidden'>↗</span></p></Link>
                      <Link href="https://medium.com/@mojtabamoradli" target="_blank"><p className={`font-SofiaSansExtraCondensed font-[500] ${engineeringSkills && "opacity-50"} w-fit text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#ffc017]`}>Medium <span className='animate-pulse max-sm:hidden'>↗︎</span></p></Link>
                          </div>

                          <div className={`flex gap-[10px] max-sm:gap-[5px]`}>

                      <Link href="https://researchgate.net/profile/Mojtaba-Moradli" target="_blank"><p className={`font-SofiaSansExtraCondensed font-[500] ${webSkills && "opacity-50"} w-fit text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#40ba9b]`}>ResearchGate <span className='animate-pulse max-sm:hidden'>↗</span></p></Link>
                      <Link href="https://tehran.academia.edu/MojtabaMoradli" target="_blank"><p className={`font-SofiaSansExtraCondensed font-[500] ${webSkills && "opacity-50"} w-fit text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#797c7f]`}>Academia <span className='animate-pulse max-sm:hidden'>↗︎</span></p></Link>
                      </div>


          </div>





          </div>}
          </div>

          {/* Writings */}

          <div className={` ${writings ? "transition-all duration-300 opacity-100" : "transition-all duration-300 opacity-0"} `}>

          {writings && 

                !read &&

                <div className={`mt-[40px] max-sm:mt-[20px]`}>

          <p className={`font-SofiaSansExtraCondensed font-[100] text-black drop-shadow-2xl text-[30px]  ml-auto mr-auto mb-[20px] text-justify w-[70%] max-w-[640px] max-sm:text-[22px] leading-[35px] max-sm:leading-[30px] mt-[20px]`}>I do not consider myself a writer, I just think through writing my thoughts down; although it{"'"}s not a hobby for me, I enjoy letting my fingers sing on the keyboard.</p>
                
                <div className={` grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-x-2 gap-y-2 max-sm:gap-x-1 max-sm:gap-y-1 ml-auto mr-auto  max-sm:mt-[-10px] w-fit max-w-[70%]  items-center `}>

          {articles && articles.map((item, index) => <Image key={index} className={`w-[120px]  rounded-sm  drop-shadow-xl cursor-pointer transition-all duration-300 hover:scale-105`} onMouseEnter={() => setCurrentArticle(index)} onClick={() => {setRead(true); setCurrentArticle(index)}} src={item.src[0]} width={400} height={400} alt={articles && articles[currentArticle].title} title={articles && articles[currentArticle].title + ", " + articles[currentArticle].src.length + " Slides"}/>)

          }
                  </div>

                </div>

          }




            </div>


          {/* Contact */}

            <div className={` ${contact ? "transition-all duration-300 opacity-100" : "transition-all duration-300 opacity-0"}`}>
          {contact &&

            <div className={`mt-[40px] max-sm:mt-[20px] justify-center ml-auto mr-auto  max-w-[650px] max-sm:max-w-[80%] text-center`}>
                  <p className={`font-SofiaSansExtraCondensed font-[100] text-[60px] max-sm:text-[28px] leading-[57px] max-sm:leading-[30px]`}> Build killer web applications with <span className={`text-neutral-800 drop-shadow-lg font-DomaineDisplayNarrow font-[800] z-10 `}>WordPress</span>, <span className={`text-neutral-800 drop-shadow-lg whitespace-nowrap font-DomaineDisplayNarrow font-[800] z-10`}> Next </span> & <span className={`text-neutral-800 drop-shadow-lg whitespace-nowrap font-DomaineDisplayNarrow font-[800] z-10`}> Node </span></p>

                  <p className={`font-SofiaSansExtraCondensed font-[100] text-black drop-shadow-2xl  text-[30px]  max-sm:text-[22px] `}>Also working as a freelancer so you{"'"}re welcome to contact to hire  </p>
                  
                  <div className={`flex  items-center text-center justify-center text-[25px] mt-[30px]`}> 
                  <Link href="mailto:mojtabamoradli.work@gmail.com" target="_blank"><p className={`font-SofiaSansExtraCondensed font-[500] w-fit  text-center z-10 bg-neutral-800 rounded-md text-white pl-2 pr-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#171515]`}><span>Email</span> <span className='animate-pulse'>✐</span></p></Link>

                  </div>




            </div>







          }

            </div>







            {!read && <Footer />}



        </div>



        {/* Slides */}

        {read &&<div className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  w-[70%] max-w-[600px]   max-h-[95%] rounded-sm drop-shadow-lg`}>
        <Image onClick={() => nextOnClick(articles && articles[currentArticle].src.length)} src={articles && articles[currentArticle].src[currentIndex]} width={600} height={600} alt="" title={articles && (currentIndex*100/articles[currentArticle].src.length).toFixed() + "% read"}/>

        {/* * */}

        <div className={`absolute top-[3.5%] right-[1px]  max-sm:top-[3%]  z-50 ${read && "hover:scale-[110%]  transition-all duration-300"} `} title="Exit Slides">
        <div className={`flex flex-col cursor-pointer  gap-1 p-1 ${!read && "transition-all duration-500 hover:bg-neutral-400 rounded-sm"} `} onClick={() => {setRead(current => !current); setCurrentIndex(0)}}>
            <div className={`w-[40px] h-[4px] max-md:w-[20px] max-md:h-[2px] transition-all duration-500 rounded-full max-md:origin-[5.8px] origin-[14.2px] ${read ? "rotate-[45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
            <div className={`w-[40px] h-[4px] max-md:w-[20px] max-md:h-[2px] transition-all duration-500 rounded-full max-md:origin-[5.8px] origin-[14.2px] ${read ? "rotate-[-45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
          </div>
          </div>

        {/* < */}

          { !currentIndex == 0 &&
        <div  className={`absolute top-[50%] left-[1.3%] z-50 ${read && "hover:scale-[110%]  transition-all duration-300"} `} title="Previous Slide">
        <div className={`flex flex-col cursor-pointer  gap-1 p-1 ${!read && "transition-all duration-500 hover:bg-neutral-400 rounded-sm"} `} onClick={() => previous(articles && articles[currentArticle].src.length)}>
            <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px] transition-all duration-500 rounded-full origin-[-4.3px] max-md:origin-[-3.5px] ${read ? "rotate-[45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
            <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px] transition-all duration-500 rounded-full origin-[-4.3px] max-md:origin-[-3.5px] ${read ? "rotate-[-45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
          </div>
          </div>
          }

        {/* > */}

          { currentIndex != articles[currentArticle].src.length - 1  && 
          <div  className={`absolute top-[50%] right-[1%] z-50 ${read && "hover:scale-[110%]  transition-all duration-300"} `} title="Next Slide">
        <div className={`flex flex-col cursor-pointer  gap-1 p-1 ${!read && "transition-all duration-500 hover:bg-neutral-400 rounded-sm"} `}  onClick={() => next(articles && articles[currentArticle].src.length)}>
            <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px] transition-all duration-500 rounded-full origin-[13px] max-md:origin-[10px] ${read ? "rotate-[45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
            <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px] transition-all duration-500 rounded-full origin-[13px] max-md:origin-[10px] ${read ? "rotate-[-45deg] bg-neutral-400" : "rotate-0 bg-neutral-800"}`}></div>
          </div>
          </div> 
          }

      <div className={`text-neutral-300 absolute mt-1  gap-1 max-w-[600px] flex flex-wrap ml-auto mr-auto w-[100%] justify-center`}>{articles && articles[currentArticle].src.map((item, index) => 
      <Image key={index}  onClick={() => setCurrentIndex(index)} className={`flex rounded-sm cursor-pointer ${(index == currentIndex) && "scale-125"}`} src={item} width={15} height={15} alt="" title={"Slide " + Number(index + 1)}/>
      
      )}</div>
      



                </div>}

    </div>
  )}