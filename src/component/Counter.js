import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/actions';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement = ()=>{
        dispatch(incrementCounter())
    }
    const handleDecrement = ()=>{
        if(count > 0){
            dispatch(decrementCounter())
        }
    }
    const handleReset = ()=>{
        dispatch(resetCounter())
    }
    return (
        <div>
            <h3>counter action</h3>
            <h3>count : {count} </h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;