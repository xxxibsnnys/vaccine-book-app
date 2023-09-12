import styles from './banner.module.css'
import Image from 'next/image';


export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/hospitalBanner.jpg'} 
            alt='car1'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-xl font-san'>Welcome to </h1>
                <h1 className='text-3xl font-serif'>Phichet Hospital</h1>
            </div>
        </div>
        
    );
}