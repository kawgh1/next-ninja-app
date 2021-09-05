// 404.js is a Next specific file name for 404 pages
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound404 = () => {

    // Next Router
    const router = useRouter();

    // redirect user back to homepage automatically after 3 seconds on 404 page
    useEffect(() => {

        setTimeout(() => {
            // router.go(-1) // send user back one page
            // router.go(1) // send user forward one page
            router.push('/') // go to homepage

        }, 3000)
    }, [])

    
    return (
        <>
            <Head>
            <title>Ninja List | 404</title>
            <link rel="icon" href="/favicon.png" />
            </Head> 
            <div className="not-found">
                <h1>Oops!</h1>
                <h2>That page could not be found!</h2>
                <p>Let&apos;s go back to the <Link href='/'><a>Home Page</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound404;