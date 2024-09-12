let a = "3000";

if (true) {
    console.log("30", a)
}
console.log(a)

function One(){
  const Myname="partha pratim bhukta"
    function Two(){
console.log(Myname)
    }
   Two()

}
One()



function Mylogiuc(){
if (a===3000) {
    const userpartha = " partha"

    if (true) {
        const lastname=" bhukta"
        console.log(userpartha + lastname)
    }
}
else{
    const midmane = "pratim"
    console.log(midmane)
}
}
Mylogiuc()

//////////////////////hoisting//////

console.log(onee(5))
function onee(num) {
    return num+5
}

//console.log(twoo(10))// hosting not
const twoo = function (num3) {
    return num3+10
}
console.log(twoo(10))
