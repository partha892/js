const arr = [1,2,3,4,5,6,7,8,90]
for (const ar of arr) {
   // console.log(ar)
}

const name = "partha pratim bhukta"
for (const myname of name) {
   // console.log(myname)
}


const map = new Map()

map.set("in","india")
//console.log(map)
for (const [key,values] of map) {
    console.log(key,values)
}

const mtoj={
    "js":"partha",
    c:"c++",
    java:"java",
}
for (const [key] in mtoj) {
    console.log( key,mtoj[key])
    
}