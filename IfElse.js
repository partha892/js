a=110;
if (a===10){
    console.log("now this is 10")
}else{
    console.log("condition not satisfied")
}


const score = "partha"
if (score.length >4) {
    const newone = "partha pratim bhukta"
    console.log('partha')
    console.log(`${newone}`)
}else{
    console.log('bhukta')
}

const balance = 1000;
if (balance >15000 ) {
    console.log("not small 15000")
}else if (balance >1500 ) {
    console.log("not small 1500 ")
}else if (balance >150 ) {
    console.log("not small amount 150")
}
else{
    console.log("small amount")
}

const accounuser = false;
const useremail=false
if (accounuser && useremail ) {
    console.log("loged in")
}else{
    console.log("pleace loged in")
}
if (accounuser || useremail) {
    console.log("its innaf to loged in")
}else{
    console.log("its not innaf to loged in")
}