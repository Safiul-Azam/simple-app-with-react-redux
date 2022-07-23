import { GET_COUNTRY_ERROR, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "./fetchConstants"

const initialCountry = {
    countries:[],
    isLoading:false,
    error:null
}
const countryReducer = (state=initialCountry, action)=>{
    switch(action.type){
        case GET_COUNTRY_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case GET_COUNTRY_SUCCESS:
            return{
                ...state,
                isLoading:false,
                countries:action.payload
            }
        case GET_COUNTRY_ERROR:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
     default:
     return state
    }
}
export default countryReducer