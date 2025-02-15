function Hello(name){
    return "Hello "+name+"!"
}


console.log(Hello("Beknur"))


let user={
    "name":"Beknur",
    "age":18,
    "id":"23b031469"
}

console.log(user.age)
console.log(user.id)
console.log(user.name)


function make_user(name,age){
    return {
        "name":name,
        "age":age,
    }
}

let example=make_user("Beknur",18)
console.log(example.age)
console.log(example.name)


let str="Beknur"
console.log(str.toUpperCase)


let number=1.2345
console.log(number.toFixed(2))


 let users =[1,2,3,4]
 console.log(sum(users)/length(users))
 