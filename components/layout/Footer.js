import Link from 'next/link';
import React from 'react';

const Footer = () => {
     return (
         <footer className={``}>
          <div className='absolute w-[90%] h-[1px] bottom-[40px] left-[5%] bg-neutral-400'></div>
          <p className={`font-DomaineDisplayNarrow font-[400] absolute left-[6%] bottom-[7px] `}> © 2022 <Link className={`font-DomaineDisplayNarrow font-[600] max-sm:hidden `} href="/">Mojtaba Moradli</Link><Link className={`font-DomaineDisplayNarrow font-[600] invisible max-sm:visible `} href="https://mojtabamoradli.ir">M. Moradli</Link></p>
        <div className='absolute bottom-[10px] right-[6%] flex gap-1 '>
          <Link href="" target="_blank" className={`font-SofiaSansExtraCondensed font-[500] bg-black text-sm  rounded-sm text-white pl-1 pr-1 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black `}>Résumé</Link>
          <Link href="https://ir.linkedin.com/in/mojtabamoradli" target="_blank"><svg className={`w-[20px] h-[20px] bg-white transition-all duration-300 rounded-sm cursor-pointer hover:invert `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg></Link>
          <Link href="https://github.com/mojtabamoradli" target="_blank"><svg className={`w-[20px] h-[20px] bg-white transition-all duration-300 rounded-sm cursor-pointer hover:invert `} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg></Link>
        </div>
            </footer>
     );
};

export default Footer;