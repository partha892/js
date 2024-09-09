const id = Symbol ("partha")
console.log(typeof(id))
//stack++++++++++++++++++++++++++++++
let partha = "my name";
let bhukta = partha;
console.log(bhukta)

bhukta = "first name"
console.log(bhukta)
console.log(partha)
//Heap+++++++++++++++++++

let userpartha = {
   UserName:"partha pratim bhukta",
   email :"partha@gmail.com"
}
let userTwo = userpartha
console.log(userpartha)
console.log(userTwo)

userTwo.UserName ="user two"
console.log(userpartha)
console.log(userTwo)