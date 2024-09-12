function Myname() {
    console.log("partha pratim bhukta")
}
Myname()
function sum1 (number1,number2) {
       console.log(number1+number2)
}
sum1(20,2)


function sum(number1,number2) {
  let sum2num = (number1+number2)
  return sum2num
}
const sum2num = sum(2,5)
console.log(sum2num)

function user (username) {
    return `${username} just loged in`
}
console.log(user("partha"))

function user2 (username="bhukta") {
    if (username===undefined) {
        console.log("plece enter your username")
        return
    }
    return `${username} just loged in`
}
console.log(user2("partha"))

function TotalCardValue(...num) {
    return (num)
}
console.log(TotalCardValue(300,20,2,4,5,4,4,4,42,1,2,55,42,45,4));
