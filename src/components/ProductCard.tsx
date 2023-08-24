import  styles from './productcard.module.css';
import Image from 'next/image';

export default function productCard(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src ={'/img/astra.jpg'}
                alt='Product'
                fill ={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.headtext}> 
                AstraZeneca 
                <div className={styles.contenttext}> 
                    AstraZeneca is a COVID-19 vaccine by Oxford University. 
                </div>
            </div>
        </div>
    );
}