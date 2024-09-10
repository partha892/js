const Myarr = [1,2,3,4,5,6]
console.log(Myarr.length)
Myarr.push(3,6,6,6,7)//add value at end
console.log(Myarr)

Myarr.pop()//remove end value
console.log(Myarr)


Myarr.shift()//remove 1st value
Myarr.unshift(44)//add 1st value
console.log(Myarr)

console.log(Myarr.includes(40))//is number include tthis arr true/false
console.log(Myarr.indexOf(6)) // the value which index present

const myn1= ["partha","pratim","bhukta","xyz","abc"]
const res = myn1.slice(0,2)//slice view index value to provide 
console.log(res)
console.log(myn1) // view origenal array

const myn2= ["xyz","abc","partha","pratim","bhukta"]
const res2 = myn2.splice(2,3) //splice view array,  remove from original array
console.log(res2)
console.log(myn2)


const newarray = ["hi","iam","partha","pratim","bhukta"]
const newarray2 = ["1","2",3,4,5,6,"unknown"]
const newarray3=[1,"3",3,3,6,"pappu"]

const finalarray=newarray.concat(newarray2)
console.log(finalarray)

const spred = [...newarray,...newarray2,...newarray3]
console.log(spred)

const all_new_array = [12,2,3,34,[1,4,4],[21,3,4,[222,[1,3,2,2]]]] 

const result = all_new_array.flat(Infinity);
console.log(result);
