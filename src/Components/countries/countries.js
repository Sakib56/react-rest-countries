import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'



const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
    
        <div>
            
            {console.log(countries[0])}
            <p>Welcome to sakib website</p>
            <h1>Hello from world all countries :{countries.length}</h1>
            <div className='country-container'>
            {countries.map(country => 
                <Country country={country} key={country.cca3}></Country>)}
            </div>
        </div>
    );
};

export default Countries;