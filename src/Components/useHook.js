import { useEffect, useState } from "react"

const useUser = url => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
        
    }, [url])
    // console.log(user);
    return user;
    // , {
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
  
    //   }
    
}
export default useUser;