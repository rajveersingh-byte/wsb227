function cal() {

    let v1 = parseInt(document.getElementById("value1").value);
    let v2 = parseInt(document.getElementById("value2").value);
    let opr = document.getElementById("opr").value;
    

    let sum = 0;

    if (opr === "+") {
        sum = v1 + v2;
    }

    else if (opr === "-") {
        sum = v1 - v2;
    }

    else if (opr === "*") {
        sum = v1 * v2;
    }

    else if (opr === "/") {
        sum = v1 / v2;
    }

    else {
        console.log("No task perform")
    }


    document.getElementById("output").innerHTML = `Output:${sum}`


    console.log(sum);
}

cal()

