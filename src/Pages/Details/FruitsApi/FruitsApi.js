import { useEffect, useState } from "react"


const FruitsApi = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fruitsInfo')
            .then(res => res.json())
            .then(data => setServices(data))
    },[]);
    return[services, setServices]
}

export default FruitsApi;