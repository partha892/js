const myarr = [1,2,3,4,5,6,7,8,9,0]

const  newone = myarr.filter((numbers)=>{
    return numbers > 3

})
console.log(newone)

const newnew = myarr.map((num)=>{
    return num + 100
})
console.log(newnew)