import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <div>
            <li className='text-left'>{feature}</li>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;