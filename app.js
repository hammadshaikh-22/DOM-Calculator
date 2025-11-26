var seven = document.getElementById("seven")
var output = document.getElementById("display")
output.value = ""
// function clickSeven(){
//     output.value += "7"
// }
// function clickEight(){
//     output.value += "8"
// }
// function clickNine(){
//     output.value += "9"
// }
// function clickSix(){
//     output.value += "6"
// }
// function clickFive(){
//     output.value += "5"
// }
// function clickFour(){
//     output.value += "4"
// }
// function clickThree(){
//     output.value += "3"
// }
// function clickTwo(){
//     output.value += "2"
// }
// function clickOne(){
//     output.value += "1"
// }
// function clickZero(){
//     output.value += "0"
// }
// function add(){
//     output.value += "+"
// }
// function sub(){
//     output.value += "-"
// }
// function prod(){
//     output.value += "X"
// }
function div(){
    output.value += "/"
}
function clear(){
    output.value = "0"
}
function result(){
    output.value = ans
}
if(!output.value.includes("+","-","/","X")){
    var n1 = +(output.value)
    var ans = n1 +1
    console.log(n1)
}


