import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main >
        <Banner/>
        <div style ={{margin:"20px", display:"flex", flexDirection:"row", 
        flexWrap:"wrap" , justifyContent:"space-around", alignContent:"space-around", backgroundColor:"white"} }>
          <ProductCard hosName='Chula' imgSrc='/img/chula.jpg'/>
          <ProductCard hosName='Rajavithi' imgSrc='/img/rajavithi.jpg'/>
          <ProductCard hosName='Thammasat' imgSrc='/img/thammasat.jpg'/>
        </div>
    </main>
  )
}
