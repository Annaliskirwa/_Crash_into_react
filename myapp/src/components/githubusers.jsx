import React,{useState, useEffect} from "react";
import axios from "axios";

const AllUsers = ()=>{
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        const fetchData=async()=>{
            let data =  await axios({
                method: "get",
                url: "https://api.github.com/users"
            });
            setUsers(data);
            console.log(data)
        };
        fetchData();
    },[]);
    return(
        <div>
            <p>This is a list of all github users</p>
        </div>
    )

}

export default AllUsers;