
import PriceOption from '../PriceOption/PriceOption';


const PriceOptions = () => {

  const priceOptions =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Limited group fitness classes",
            "Locker room access",
            "Online workout tracker",
            "Discounts on gym merchandise"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 50,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "Towel service",
            "Monthly fitness assessment",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 80,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "Personal training sessions (2 per month)",
            "Nutrition consultation",
            "Access to all gym locations nationwide"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 120,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Unlimited group fitness classes for the whole family",
            "Access to sauna and steam room",
            "Childcare services",
            "Discounts on family packages"
          ]
        },
        {
          "id": 5,
          "name": "Student Membership",
          "price": 25,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Limited group fitness classes",
            "Student discounts",
            "Locker room access",
            "Discounts on fitness gear"
          ]
        }
      ]
      

    return (
        <div>
               <h2 className="text-7xl underline">Best Prices in the Town</h2> 
        <div className='grid md:grid-cols-3 gap-4 mt-10 '>
           {
            priceOptions.map(priceOption => <PriceOption key={priceOption.id} option={priceOption}></PriceOption>)
           }
        </div>
        </div>
    );
};

export default PriceOptions;