'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { useSession } from 'next-auth/react'

export default function Banner () {
    const covers=['/img/hospitalBanner.jpg','/img/hospitalBanner2.jpg','/img/hospitalBanner3.jpg','/img/hospitalBanner4.jpg']
    const [index, setIndex] =useState(0)
    const {data: session} = useSession();
	console.log(session?.user.token);
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
                <h1 className='text-3xl font-serif'>Vaccine Reservaion Page</h1>
                {
					session?
					<div className='z-30 absolute top-0 right-10 font-semibold text-xl'>
						Hello {session.user?.name}
					</div>
					:null
				}
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