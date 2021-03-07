import {useState, useEffect} from 'react'

export default httpClient => {
    const [error, setError] = useState(null)
    
       
    const reqinterceptors = httpClient.interceptors.request.use(req => {
        setError(null)
        return req
    });
    const resinterceptors = httpClient.interceptors.response.use(res => res,err => {
        setError(err)
    })

    useEffect(() => {
        httpClient.interceptors.request.eject(reqinterceptors);
        httpClient.interceptors.response.eject(resinterceptors)
    },[reqinterceptors, resinterceptors])
        
    const clickErrorHandler = () => {
        setError(null)
    }

    return [error,clickErrorHandler]
}