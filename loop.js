
for (let index = 0; index < 10; index++) {
    console.log(index)
    //console.log(element)
}


for (let i = 0; i < 2; i++) {
    console.log(`${i}value of i`);
    for (let j = 0; j < 2; j++) {
        console.log(`${j}value of j`);
        
    }
    
}
const myArray=["w","e","t"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

for (let index = 1; index < 9; index++) {
    const element = index
    if (index == 5) {
        console.log("now end")
        //continue
       //break
    }
    console.log(element)
    
}