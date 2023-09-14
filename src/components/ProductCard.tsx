import InteractiveCard from './InteractiveCard';
import Image from 'next/image';
import { Rating } from '@mui/material';
import {useEffect, useState} from 'react'


export default function ProductCard({hosName, imgSrc, onRatingChange, passedRating}:{hosName:string, imgSrc:string, onRatingChange:Function, passedRating:number}){
    const [rating, setRating] =useState(passedRating)
    useEffect(()=>{
        setRating(passedRating)
    }, [passedRating])

    return (
        <InteractiveCard contentName={hosName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src ={imgSrc}
                alt='Product'
                fill ={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[20%] p-[10px] text-black'> 
                {hosName}
            </div>
            
            <Rating name="rating" value={rating} 
            onChange={(e, newValue)=>{e.stopPropagation(); setRating(newValue || 0); 
            onRatingChange(newValue||0)}}/>
        </InteractiveCard>
    );
}