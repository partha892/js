const user ={
    name:"partha pratim bhukta",
    price:"free",


    welcomemassage :function () {
       console.log(`${this.name}welcome to my web site`)
    }
    
}
user.welcomemassage()
user.name="amardavish"
user.welcomemassage()

const Arrow = ()=> {
    username:"hi pappu"

    console.log(Arrow.username)
}
Arrow()

const sum2num = (num1,num2)=>{
return (num1+num2)
}
console.log(sum2num(2,2))