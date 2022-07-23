import axios from "axios"
import { GET_COUNTRY_ERROR, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "./fetchConstants"

const getAllCountry = ()=> async(dispatch)=>{
   try {
    dispatch({type:GET_COUNTRY_REQUEST})
   const res = await axios.get('https://restcountries.com/v2/all')
   dispatch({type:GET_COUNTRY_SUCCESS, payload:res.data})
   } catch (error) {
    dispatch({type:GET_COUNTRY_ERROR, payload:error.message})
   }
   
}
export default getAllCountry