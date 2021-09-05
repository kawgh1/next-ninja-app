import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                {/* <img src="/logo.png" alt="" /> */}
                {/* Next Image is automatically responsive */}
                {/* <Image src="/logo.png" height={60} width={100} alt="Ninja!" href='/'/>  */}
                {/* Clickable Image Link to Homepage */}
                <Link href='/'>
                    <a>
                        <Image src="/logo.png" height={60} width={100} alt="Ninja!" href='/'/>
                    </a>
                </Link>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninjas'><a>List</a></Link>
        </nav>
      );
}
 
export default Navbar;