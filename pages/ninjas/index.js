import Head from 'next/head'
import Link from 'next/link'
import styles from '../..//styles/Ninjas.module.css'
// API call, runs at build time before component render, never in the browser
export const getStaticProps = async () => {

    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();

    return {
        props: { 
            ninjas: data
        }

        
    }

    // JSON data is called above and fed into props ('ninjas') - we can then call those props directly in Ninjas below

}

const Ninjas = ( {ninjas} ) => {
    return (

        <>
            {/* Head Meta Data for SEO and style */}
            <Head>
                    <title>Ninja List | List</title>
                    <meta name='keywords' content='ninjas Sonny ninja ninja list ninjas list egg woah' />
                    <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <h1>All My Ninjas </h1>
                <h3 style={{textAlign: 'center'}}>Click a Ninja below for more details!</h3>
                {/* <div className="list">
                    <ul>
                        <li>Monica</li>
                        <li>Jason</li>
                        <li>Rosa</li>
                        <li>Sonny</li>
                        <li>Alfredo</li>
                        <li>Michael</li>
                    </ul>
                </div> */}

                    <div style={{textAlign: 'center'}}>

                            {ninjas.map((ninja) => (
                            <Link href={'/ninjas/' + ninja.id} key={ninja.id} className="list" >
                                <a>
                                    <h3 className={styles.single}>{ ninja.name }</h3>
                                </a>
                            </Link>
                        ))}
                    </div>
                    
                  

                {/* In React you would call JSON in a useEffect hook, it would then make the API call on Component Render on the Client-side browser
                    In Next, we can have that data fetched before the Component ever loads from the Server-side, clean, fast
                 */}
                
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem repellat eos similique iusto soluta nihil vel eaque recusandae sapiente error quod, asperiores exercitationem quidem nesciunt alias ratione cumque excepturi.</p>
                <h1 style={{marginTop: '50px'}}>Woah</h1>
            </div>
            <br />
                <br />
                <Link href='/'>
                <a className='btn'>Home</a>
                </Link>
        </>
      );
}
 
export default Ninjas;
