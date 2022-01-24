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
            setUsers(data.data);
            console.log(data)
        };
        fetchData();
    },[]);
    return(
        <div>
            <h3>This is a list of all github users</h3>
            <p>The users are {users.length}</p>
            <div>
                {
                    users.map((users)=>{
                        return <div>
                            <p>Name: {users.login}</p>
                            <p>Id:{users.id}</p>
                            {/* <p>Image: {users.avatar_url}</p> */}
                        </div>
                    })
                }
            </div>
        </div>
    )

}

export default AllUsers;