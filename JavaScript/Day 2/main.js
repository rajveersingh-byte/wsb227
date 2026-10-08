let Cal = () =>{
    let a = 20;

    let b = 30;

    let c = a + b + 2*(a*b) / 3 % 5;

    console.log(c)

    // console.log(c)
}


function name(name){
    return(
        `<h1>${name}</h1>`
    )
}

console.log(name("Rajveer"))

Cal();