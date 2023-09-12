import InteractiveCard from './InteractiveCard';
import Image from 'next/image';

export default function productCard({hosName, imgSrc}:{hosName:string, imgSrc:string}){
    return (
        <InteractiveCard contentName={hosName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src ={imgSrc}
                alt='Product'
                fill ={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px] text-black'> 
                {hosName}
            </div>
        </InteractiveCard>
    );
}