'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';


export default function Banner () {
    const covers=['/img/hospitalBanner.jpg','/img/hospitalBanner2.jpg','/img/hospitalBanner3.jpg','/img/hospitalBanner4.jpg']
    const [index, setIndex] =useState(0)
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} 
            alt='cover'
            fill={true}
            // priority
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-xl font-san'>Welcome to </h1>
                <h1 className='text-3xl font-serif'>Phichet Hospital</h1>
            </div>
            <button
				className='relative top-[55vh] left-[85vw] z-20 bg-[#FFFFFF] hover:bg-[#474647] hover:text-white text-black rounded-lg px-[20px] py-[10px] mt-[20px]'
				onClick={(e)=>{e.stopPropagation(); window.location.href='/hospital'}}
			>
					Hospital List
			</button>
        </div>
    );
}