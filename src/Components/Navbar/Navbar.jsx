
import { useState } from 'react';
import Link from '../Link/Link';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false)/* by default ki hote pare- hote pare menu options gulo open thakbena  */
    const routes = [
        { id: 1, path: '/', exact: true, name: 'Home', description: 'The main page of the application' },
        { id: 2, path: '/about', exact: true, name: 'About', description: 'Information about the application' },
        { id: 3, path: '/products', exact: true, name: 'Products', description: 'List of products available' },
        { id: 4, path: '/contact', exact: true, name: 'Contact', description: 'Contact information' },
        { id: 5, path: '*', name: 'Not Found', description: 'Page not found' }
    ];

    //   export default routes;

    return (
        <nav className='bg-slate-400 p-6'>
            <div className='md:hidden text-xl'  onClick={() => setOpen(!open)} >
                {/* 1bar click korle open hobe abar click korle close hobe- using ! not operator- man take ultay dibe true thakle false hobe false thakle true hobe-mane click korle true hole false dekhabe false hole true dekhabe */}
                {/*onClick={() => setOpen(true)}*/}
                {/* {open === true ? 'open' : 'close'} */}
                {/*by default false thakay close dekhabe,click korle open true hobe then open dekhabe  */}
                {/* { open === true? 'open' : 'close' } */}
                {open === true? <CiMenuFries />  : <IoMdClose /> }
                
            </div>
            
            <ul className={`md:flex absolute md:static bg-slate-400 p-6 duration-1000 ${open === true? 'top-24' : "-top-44"}`}>
                {/*{`conditional css`}, ${open === true? '': 'hidden'} */}
                {
                    
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
