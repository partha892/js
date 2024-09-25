const images = document.querySelector("#images")
images.addEventListener("click",()=>{
    console.log("all img")
   // alert("hi this is river")
}, false)

const river = document.querySelector("#river")
river.addEventListener("click",()=>{
   console.log("hi this is river")
    
}, true)

const google = document.querySelector("#google")
google.addEventListener("click",(e)=>{
   console.log("hi this is google clicked")
e.preventDefault();
e.stopPropagation()
}, false)


images.addEventListener("click",(e)=>{
if (e.target.tagName === "IMG") {
    const remove = e.target.parentNode;
    remove.remove()  
}
})



