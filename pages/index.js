import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
        {/* Head Meta Data for SEO and style */}
        <Head>
          <title>Ninja List | Home</title>
          <meta name='keywords' content='ninjas Sonny ninja ninja list ninjas list egg woah' />
          <link rel="icon" href="/favicon2.png" />
        </Head>

        <div>
          <h1 className={styles.title} >Homepage</h1>

              
          
          <h3>Egg Woah</h3>
          {/* <Navbar/> */}
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, possimus accusamus consequuntur iure tenetur quae ipsa omnis aspernatur eos odit earum dolores perferendis distinctio ratione ab temporibus? Laboriosam, dolorem debitis.</p>
          
          
          <div   className='image' style={{textAlign: 'center', layout: 'responsive', height: '35vh', width: '80%', boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'}}>
              <Image className='image' src="/brucelee.jpeg" layout='fill' alt="dark street" />
                                
                                
                                <style jsx global>{`
                                  .image {
                                    
                                    z-index: -1;
                                    position: relative;
                                    display: block;
                                    margin: 15px auto;
                                    margin-bottom: 25px;
                                    display: block;
                                    border-radius: 5px;
                                    layout: fill;

                                  }
                                `}</style>
           </div>
                  
                  
                  

                  <h3 >Egg Woah</h3>
                  
         
                  <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, possimus accusamus consequuntur iure tenetur quae ipsa omnis aspernatur eos odit earum dolores perferendis distinctio ratione ab temporibus? Laboriosam, dolorem debitis.</p>
              
         
             
          <Link href='/ninjas'>
            <a className={styles.btn}>See Ninja List</a>
          </Link>


          {/* <Footer/> */}
        </div>
    </>
  )
}
