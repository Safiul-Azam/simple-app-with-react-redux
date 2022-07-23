import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllCountry from '../fetchServices/fetchActions';
import '../fetchComponent/restCounty.css'

const RestCountry = () => {

    const {isLoading, countries, error} = useSelector(state=> state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCountry())
    },[])
    return (
        <div>
            <h3>Country</h3>
            {isLoading && <h3>Loading....</h3>}
            {error && <h3>{error.message}</h3>}
            <div className='country-container'>
            {countries.map(country => <div key={country.alpha2Code} className='single-country'>
                <img src={country.flags.png} alt="" />
                <h2>Name : {country.name}</h2>
                <p>capital : {country.capital}</p>
                <span>Native Name : {country.nativeName}</span><br />
                <button>Details information</button>
            </div>)}
            </div>
        </div>
    );
};

export default RestCountry;