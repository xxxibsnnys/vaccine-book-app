import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link';

export default async function TopMenu(){

	const session = await getServerSession(authOptions)

    return(
        <div className={styles.menucontainer}>
			{/* <div className='flex justify-start w-[50%]'> */}
				<Image src={'/img/corona.png'} className={styles.logoimg} alt='logo' 
				width={0} height={0} sizes='100vh' />  
				<TopMenuItem title='Booking' pageref='/booking'/>
				<Link href='/mybooking' className='flex items-center h-full px-2'>
					My Booking
				</Link>
				{
					session?
					<Link href="api/auth/signout">
						<div className='flex items-center absolute left-0 h-full px-2'>
							Sign-out of {session.user?.name}</div>
					</Link>
					:
					<Link href="api/auth/signin">
						<div className='flex items-center absolute left-0 h-full px-2'>
							Sign-in</div>
					</Link>
				}
			{/* </div> */}
        </div>
		
    )
}
