import React, {useState} from "react"

const StateButton = ()=>{
    const [age, setAge]=useState(0)

    function increment(){
        setAge(age+1);
    }

    function decrement(){
        setAge(age-1);
    }


    return(
        <div>
            <button onClick={()=>increment()} className = "w3-button w3-ripple w3-round w3-margin-left w3-margin-right w3-blue">
                Increment
            </button>
            <span className = "w3-xxlarge w3-margin-left w3-margin-right">{}</span>
            <button onClick={()=>decrement()} className = "w3-button w3-ripple w3-round w3-margin-left w3-margin-right w3-red">
                Decrement
            </button>
        </div>
    );
};

export default StateButton;