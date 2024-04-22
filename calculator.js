 let onTop = document.getElementById("screen")
 let show = document.getElementById("show")
firstVal = ""
secondVal = ""
symbol = ""
result = ""

show.innerHTML = 0

function display(value){
    onTop.innerHTML += value
    show.innerHTML = value
    firstVal += value
}


function operator(sign){
    onTop.innerHTML += sign
    secondVal = firstVal
    firstVal = ""
    symbol = sign
}

function showResult(symbol){
    if (symbol === '+'){
        result = Number(secondVal) + Number(firstVal)
        show.innerHTML = result
    }
    else if (symbol === '-'){
        result = Number(secondVal) - Number(firstVal)
        show.innerHTML = result
    }
    else if (symbol === '*'){
        result = Number(secondVal) * Number(firstVal)
        show.innerHTML = result
    }
    else if (symbol === '/'){
        result = Number(secondVal) / Number(firstVal)
        show.innerHTML = result
    }
}

function clr(){
    onTop.innerHTML = ""
    show.innerHTML = 0
}