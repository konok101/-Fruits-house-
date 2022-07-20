import { useEffect, useState } from "react"


const FruitsApi = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mighty-mountain-44501.herokuapp.com/fruitsInfo')
            .then(res => res.json())
            .then(data => setServices(data))
    },[]);
    return[services, setServices]
}

export default FruitsApi;