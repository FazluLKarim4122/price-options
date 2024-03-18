
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, path: '/', exact: true, name: 'Home', description: 'The main page of the application' },
        { id: 2, path: '/about', exact: true, name: 'About', description: 'Information about the application' },
        { id: 3, path: '/products', exact: true, name: 'Products', description: 'List of products available' },
        { id: 4, path: '/contact', exact: true, name: 'Contact', description: 'Contact information' },
        { id: 5, path: '*', name: 'Not Found', description: 'Page not found' }
      ];
      
    //   export default routes;
      
    return (
        <nav>
            <ul className='md:flex'>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;
