
import PropTypes from 'prop-types';
const Link = ({route}) => {
    console.log(route)
    return (
       
            <li className="mr-4 hover:bg-white px-2  " key={route.id}>
                <a href={route.path}>{route.name}</a>
                </li>
        
    );
};

Link.propTypes ={
    route: PropTypes.object
}
export default Link;