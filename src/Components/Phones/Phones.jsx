import { useState, useEffect } from "react";
import axios from "axios"

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio } from 'react-loader-spinner'



const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState([true]) 
    {/* by default ki hobe jokhon page ta load hobe tokhon true (active) thakbe,then data take load kore, process kore state e set kore dekhabo tokhon false(deactive) kore dibo */ }

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            //  .then(data => setPhones(data.data.data))
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {/*ei audio loading spinner ta dhori dekhabo jokhon data load hobe tokhon */}

            {loading && 
               <div className="flex  justify-center items-center">
                 <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
               </div>
             } 
           
            <h2 className="text-5xl">Phones:{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey={phones.price}></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;