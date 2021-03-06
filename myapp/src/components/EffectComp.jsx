import React,{useEffect, useState} from "react";

const EffectComp = ()=>{
    const [age, setAge]=useState(0);
    const [cat, setCat]=useState({age:23, name: "Kelly"});
    const [bColor, setbColor] = useState("w3-blue");
    const [wSize, setWSize] = useState(1080)

    function increment(){
        setCat({...cat, age: cat.age + 1});
        setAge(age+1);
    }

    function decrement(){
        setCat({...cat,age:cat.age - 1});
        setAge(age-1);}

    useEffect(()=>{
        // console.log("I have rendered")
        if (age > 5){
            setbColor("w3-green");
            console.log("I am to change the color to green")
        }
    }, []);
    useEffect(()=>{
        function handleResize(){
            setWSize(window.innerWidth);
        }
        window.addEventListener("resize",handleResize);
    },[]);

    return (
        <div>
        <p>The window size is {wSize}</p>
        <button onClick={() => increment()} className={'w3-button w3-ripple w3-round w3-margin-left w3-margin-right w3-blue ${bColor}'}>
            Increment
        </button>
        <span className="w3-xxlarge w3-margin-left w3-margin-right">{age}</span>
        <button onClick={() => decrement()} className="w3-button w3-ripple w3-round w3-margin-left w3-margin-right w3-red">
                Decrement
            </button><StateButton age={age} cat={cat} />
        </div>
    )
}

const StateButton = ({cat, wSize})=>{


    return(
        <div>
            <div>
                <h1>Cat Name:{cat.name}</h1>
                <h2>Cats Age:{cat.age}</h2>
            </div>
        </div>
    );
};

export default EffectComp;