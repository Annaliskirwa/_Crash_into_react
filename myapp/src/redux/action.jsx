function page(n){
    let action = {
        type:"CHANGE_VALUE",
        value:n,
    };
    return action;
}

export {page};