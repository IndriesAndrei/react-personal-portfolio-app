import { useState } from 'react';
import Logo from '../assets/my-logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="logo" style={{width: '28%'}} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 px-4'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <ul>
                    <li className='py-6 text-2xl'>Home</li>
                    <li className='py-6 text-2xl'>About</li>
                    <li className='py-6 text-2xl'>Skills</li>
                    <li className='py-6 text-2xl'>Work</li>
                    <li className='py-6 text-2xl'>Contact</li>
                </ul>
            </div>

            {/* Social Icons */}
            <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">LinkedIn <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">GitHub <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Email <HiOutlineMail size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;