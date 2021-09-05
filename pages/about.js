import Head from 'next/head'
import Link from 'next/link'

const About = () => {
    return (

        <>
                {/* Head Meta Data for SEO and style */}
                <Head>
                <title>Ninja List | About</title>
                <meta name='keywords' content='about ninjas Sonny ninja ninja list ninjas list egg woah' />
                <link rel="icon" href="/favicon.png" />
                </Head>
                <div>
                    <h1>About</h1>
                    <h3>Egg Woah</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error modi quas accusamus, labore, eos aliquid illo quis unde voluptates quasi animi fugiat. Expedita eum rerum perferendis veniam vero error.</p>
                    
                    <h3>Egg Woah</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus voluptas illum vero. Aliquam, libero unde optio pariatur perspiciatis porro, illo nulla sunt quibusdam nobis veritatis officia ipsam sapiente ducimus!</p>
                </div>

                <br />
                <br />
                <Link href='/'>
                <a className='btn'>Home</a>
                </Link>
        </>
    );
}

export default About;