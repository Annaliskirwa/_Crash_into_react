import React, {useState} from "react";
import { Bar1, Bar2 } from "./bars";

const Nav = ()=>{
    const [page, setPage] = useState(0);

    function nav(n){
        console.log(n)
        setPage(n);
    }
    return(
        <div>
            <h1>Navbar component</h1>
            <div>
            <button className="w3-button w3-round w3-purple w3-ripple w3-margin-left w3-margin-right" onClick={()=>{nav(1)}}>Home</button>
            <button className="w3-button w3-round w3-green w3-ripple w3-margin-left w3-margin-right" onClick={()=>{nav(2)}}>About</button>
            </div>
            <div>
                <Switch n={page}/>
            </div>
        </div>
    )

};

const Switch=({n})=>{
    if (n==1){
        return (
            <div><Bar1/></div>
        );
    }
    if (n==2){
        return (
            <div><Bar2/></div>
        )
    }
    return null;
}

export default Nav;