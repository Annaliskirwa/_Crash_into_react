import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";

const Myform = ()=>{
    let int = {
        name: "Ann",
        age: "23"
    }
    const [inputs,setInputs] = useState(int);

    useEffect(()=>{
        console.log(inputs)
    });
    return (
        <div>
            <h1>My cool form</h1>
            <div style={{margin:"auto", width:"50%"}}>
            <div className = "w3-card-3 w3-padding">
                <p>
                    <label>Name</label>
                    <input value={inputs.name} onChange={(e)=>setInputs({...inputs,name:e.target.value})} type = "text" className="w3-input w3-border"></input>
                </p>
                <p>
                    <label>Age</label>
                    <input value={inputs.age} onChange={(e)=>setInputs({...inputs, age:e.target.value})} type = "text" className="w3-input w3-border"></input>
                </p>
            </div>
            <div className = "w3-margin-top w3-center">
                <button className="w3-button w3-round w3-green w3-ripple ">Submit</button>
            </div>
            </div>
        </div>
    )
}

export default Myform