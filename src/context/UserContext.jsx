import { useEffect, useState } from "react";
import { createContext } from "vm";


const userContext = createContext(
    {
        id: ''
    } 
)

function UserContext() {
    const [user, SetUser] = useState()

    useEffect(() => {

    },[])
    return ( 
        
     );
}

export default UserContext;