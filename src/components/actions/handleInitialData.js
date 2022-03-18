import { receiveData } from "./mainAction";

export default  function handleInitialData () {
    return(dispatch)=> {
       fetch('data.json', { headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    }})
    .then((res)=> res.json())
    .then((res)=> dispatch(receiveData(res)))  
    }
    
}

