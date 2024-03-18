import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    console.log(option)
    const {name, price, features}=option
    return (
        <div className='bg-blue-300 p-4 rounded-xl space-y-4 flex flex-col'>
            <h2 className='underline text-xl '><span className='text-5xl'>Price: {price}</span>
            <span>/mon</span>
            </h2>
            <h4 className='text-3xl text-left text-rose-500'>{name}</h4>
            <div className='flex-grow'>{/* list item gula jototuku jayga nite pare toto tuku jaygay grow hobe */}
            {
                features.map((feature,idx) => <Feature key={idx} feature={feature} ></Feature> )
            }
            </div>
            <button className='btn btn-accent w-full hover:bg-teal-950 hover:text-white'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;