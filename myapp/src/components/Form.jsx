import React,{useState} from "react";

const Myform = ()=>{
    let int = {
        name: "",
        age: ""
    }
    const [inputs,setInputs] = useState(int);
    return (
        <div>
            <h1>My cool form</h1>
        </div>
    )
}

export default Myform