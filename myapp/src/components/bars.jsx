const Bar1 = ()=>{
    return<h1>Bar One</h1>
};

const Bar2 = ()=>{
    return<h1>Bar Two</h1>
};

const MyCatsAge = (prop)=>{
    return (
        <span>Kelly's age: {prop.age}</span>
    )
}

export { Bar1, Bar2, MyCatsAge}