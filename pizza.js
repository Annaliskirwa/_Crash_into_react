var price, crustPrice
let total = 0

function getPizza(size, crust, total){
    this.size = size;
    this.crust = crust;
    this.total = total;
}

()=>{
    let pizzasize = $("#size option:selected").val()
    let pizzacrust = $("#crust option:selected").val()



    switch (pizzasize){
        case "0":
            price = 0;
            break;
        case "small":
            price = 600;
            break;
        case "medium":
            price = 800;
            break;
        case "large":
            price = 1000;
        default:
            console.log("error: choose your pizza size")
    }


    switch (pizzacrust){
        case "0":
            price = 0;
            break;
        case "crispy":
            price = 200;
            break;
        case "stuffed":
            price = 400;
            break;
        case "stufffffffed":
            price = 600;
        default:
            console.log("error: choose your pizza size")
    }
}

total = price + crustPrice


quantity = $("#quantity").val

finalTotal = total * quantity

alert(finalTotal);

()=>{
        $("#total").append(finalTotal)
}
