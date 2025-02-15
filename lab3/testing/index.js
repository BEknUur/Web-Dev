let title=document.getElementById("title")
console.log(title.innerText)

let button=document.getElementById("btn")

button.addEventListener("click",function(){
    title.innerText="Changed"
    title.style.color="red"
});
button.addEventListener("dblclick",function(){
    alert("you clicked double")
    title.style.color="blue"
});